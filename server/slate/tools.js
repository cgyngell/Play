export const SLATE_TOOLS = [
  {
    name: 'search_applicants',
    description:
      'Search for applicants or prospects in Slate by name, email, program, status, or other criteria. Returns a list of matching records with key fields.',
    input_schema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query — name, email address, or keyword',
        },
        program: {
          type: 'string',
          description: 'Filter by program code or name (optional)',
        },
        status: {
          type: 'string',
          description:
            'Filter by application status (e.g., "applied", "admitted", "enrolled", "prospect", "denied")',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of results to return (default 25, max 100)',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_applicant_details',
    description:
      'Retrieve the full record for a specific person in Slate, including application details, checklist status, test scores, GPA, and demographic information.',
    input_schema: {
      type: 'object',
      properties: {
        person_id: {
          type: 'string',
          description: 'The Slate person/applicant ID (GUID or numeric ID)',
        },
      },
      required: ['person_id'],
    },
  },
  {
    name: 'run_slate_query',
    description:
      'Execute a saved Slate query (report) by its ID and return the structured results. Use this to pull reports such as enrollment pipelines, application counts, yield analysis, or any custom dataset configured in Slate.',
    input_schema: {
      type: 'object',
      properties: {
        query_id: {
          type: 'string',
          description: 'The Slate query/export ID (GUID)',
        },
        params: {
          type: 'object',
          description:
            'Optional key-value filter parameters to pass to the query (e.g., { "prog": "MBA", "round": "R1" })',
          additionalProperties: { type: 'string' },
        },
      },
      required: ['query_id'],
    },
  },
  {
    name: 'update_applicant',
    description:
      'Update one or more fields on an applicant or person record in Slate (e.g., change status, assign a reader, update a decision, or set a custom field). Always confirm changes with the user before calling this tool.',
    input_schema: {
      type: 'object',
      properties: {
        person_id: {
          type: 'string',
          description: 'The Slate person ID of the record to update',
        },
        fields: {
          type: 'object',
          description:
            'Key-value pairs of Slate field names and their new values to apply to the record',
          additionalProperties: true,
        },
      },
      required: ['person_id', 'fields'],
    },
  },
  {
    name: 'add_note',
    description:
      'Add a note or comment to an applicant record in Slate. Notes are visible in the applicant timeline.',
    input_schema: {
      type: 'object',
      properties: {
        person_id: {
          type: 'string',
          description: 'The Slate person ID to add the note to',
        },
        note_text: {
          type: 'string',
          description: 'The text content of the note',
        },
        note_type: {
          type: 'string',
          description:
            'Category of the note (e.g., "general", "admissions", "financial", "counselor"). Defaults to "general".',
        },
      },
      required: ['person_id', 'note_text'],
    },
  },
];
