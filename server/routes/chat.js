import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { SLATE_TOOLS } from '../slate/tools.js';
import {
  searchApplicants,
  getApplicantDetails,
  runSlateQuery,
  updateApplicant,
  addNote,
} from '../slate/client.js';

const router = express.Router();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a helpful AI assistant integrated with Slate, the higher education CRM and admissions system. You assist admissions staff, enrollment counselors, and administrators in working with applicant data, reports, and records.

You have access to the following Slate tools:
- search_applicants: find applicants and prospects by name, email, program, or status
- get_applicant_details: retrieve a full record including checklist, test scores, and decisions
- run_slate_query: execute a saved Slate report and return structured data
- update_applicant: modify fields on an applicant record
- add_note: attach a note to an applicant's timeline

Guidelines:
- Present applicant data clearly, leading with name, program, status, and any pending action items.
- For query results with multiple rows, summarize key patterns and present data in a readable structure.
- Before calling update_applicant, always tell the user exactly what you are about to change and ask for confirmation.
- When you are unsure which Slate query ID to use, ask the user to provide it.
- If credentials are not configured, explain clearly what environment variables are needed.`;

router.post('/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    let currentMessages = messages;
    let finalResponse = null;
    const MAX_ITERATIONS = 10;
    let iterations = 0;

    while (iterations < MAX_ITERATIONS) {
      iterations++;
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        tools: SLATE_TOOLS,
        messages: currentMessages,
      });

      if (response.stop_reason === 'end_turn') {
        finalResponse = response;
        break;
      }

      if (response.stop_reason === 'tool_use') {
        const toolUseBlocks = response.content.filter((b) => b.type === 'tool_use');
        const toolResults = [];

        for (const toolUse of toolUseBlocks) {
          let result;
          try {
            result = await executeTool(toolUse.name, toolUse.input);
          } catch (err) {
            result = { error: err.message };
          }
          toolResults.push({
            type: 'tool_result',
            tool_use_id: toolUse.id,
            content: JSON.stringify(result),
          });
        }

        currentMessages = [
          ...currentMessages,
          { role: 'assistant', content: response.content },
          { role: 'user', content: toolResults },
        ];
      } else {
        finalResponse = response;
        break;
      }
    }

    if (!finalResponse) {
      finalResponse = {
        content: [{ type: 'text', text: 'Maximum tool iterations reached.' }],
        stop_reason: 'max_iterations',
      };
    }

    res.json({
      content: finalResponse.content,
      stop_reason: finalResponse.stop_reason,
    });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: err.message });
  }
});

async function executeTool(name, input) {
  switch (name) {
    case 'search_applicants':
      return searchApplicants({
        query: input.query,
        program: input.program,
        status: input.status,
        limit: input.limit,
      });
    case 'get_applicant_details':
      return getApplicantDetails(input.person_id);
    case 'run_slate_query':
      return runSlateQuery(input.query_id, input.params || {});
    case 'update_applicant':
      return updateApplicant(input.person_id, input.fields);
    case 'add_note':
      return addNote(input.person_id, input.note_text, input.note_type);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

export default router;
