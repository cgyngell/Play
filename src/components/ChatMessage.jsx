import ApplicantCard from './ApplicantCard';

function ToolUseBlock({ name, input }) {
  const labels = {
    search_applicants: 'Searching applicants',
    get_applicant_details: 'Fetching applicant record',
    run_slate_query: 'Running Slate query',
    update_applicant: 'Updating applicant record',
    add_note: 'Adding note',
  };
  const label = labels[name] || name;

  const summary = (() => {
    if (name === 'search_applicants') return `"${input.query}"${input.program ? ` · ${input.program}` : ''}${input.status ? ` · ${input.status}` : ''}`;
    if (name === 'get_applicant_details') return `ID: ${input.person_id}`;
    if (name === 'run_slate_query') return `Query: ${input.query_id}`;
    if (name === 'update_applicant') return `ID: ${input.person_id} · ${Object.keys(input.fields).join(', ')}`;
    if (name === 'add_note') return `ID: ${input.person_id}`;
    return '';
  })();

  return (
    <div className="tool-use-block">
      <span className="tool-use-icon">⚙</span>
      <span className="tool-use-label">{label}</span>
      {summary && <span className="tool-use-summary">{summary}</span>}
    </div>
  );
}

function renderTextContent(text) {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <span key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

function tryParseApplicants(text) {
  try {
    const data = JSON.parse(text);
    if (Array.isArray(data?.results) && data.results.length > 0) {
      return data.results;
    }
    if (Array.isArray(data) && data.length > 0 && data[0]?.id) {
      return data;
    }
  } catch {
    // not JSON
  }
  return null;
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  if (isUser) {
    const text = typeof message.content === 'string'
      ? message.content
      : message.content?.find((b) => b.type === 'text')?.text || '';
    return (
      <div className="chat-message user-message">
        <div className="message-bubble user-bubble">
          {renderTextContent(text)}
        </div>
      </div>
    );
  }

  // Assistant message — content is an array of blocks
  const blocks = Array.isArray(message.content) ? message.content : [];

  return (
    <div className="chat-message assistant-message">
      <div className="assistant-avatar">S</div>
      <div className="message-blocks">
        {blocks.map((block, i) => {
          if (block.type === 'tool_use') {
            return <ToolUseBlock key={i} name={block.name} input={block.input} />;
          }
          if (block.type === 'text' && block.text) {
            const applicants = tryParseApplicants(block.text);
            if (applicants) {
              return (
                <div key={i} className="applicant-results">
                  {applicants.map((a, j) => (
                    <ApplicantCard key={j} applicant={a} />
                  ))}
                </div>
              );
            }
            return (
              <div key={i} className="message-bubble assistant-bubble">
                {renderTextContent(block.text)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
