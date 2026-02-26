const BASE_URL = process.env.SLATE_BASE_URL;
const USERNAME = process.env.SLATE_USERNAME;
const PASSWORD = process.env.SLATE_PASSWORD;

function getAuthHeader() {
  const token = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');
  return `Basic ${token}`;
}

async function slateGet(path, params = {}) {
  if (!BASE_URL || !USERNAME || !PASSWORD) {
    throw new Error('Slate credentials not configured. Set SLATE_BASE_URL, SLATE_USERNAME, SLATE_PASSWORD in .env');
  }
  const url = new URL(path, BASE_URL);
  for (const [key, val] of Object.entries(params)) {
    if (val !== undefined && val !== null) url.searchParams.set(key, String(val));
  }
  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getAuthHeader(),
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Slate API error ${response.status}: ${text}`);
  }
  return response.json();
}

async function slatePost(path, body) {
  if (!BASE_URL || !USERNAME || !PASSWORD) {
    throw new Error('Slate credentials not configured. Set SLATE_BASE_URL, SLATE_USERNAME, SLATE_PASSWORD in .env');
  }
  const url = new URL(path, BASE_URL);
  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Slate API error ${response.status}: ${text}`);
  }
  return response.json();
}

export async function searchApplicants({ query, program, status, limit = 25 }) {
  return slateGet('/api/person', {
    cmd: 'search',
    q: query,
    ...(program && { prog: program }),
    ...(status && { status }),
    limit,
  });
}

export async function getApplicantDetails(personId) {
  return slateGet(`/api/person/${encodeURIComponent(personId)}`);
}

export async function runSlateQuery(queryId, params = {}) {
  return slateGet('/manage/service/datasets/export', {
    cmd: 'service',
    id: queryId,
    fmt: 'json',
    ...params,
  });
}

export async function updateApplicant(personId, fields) {
  return slatePost(`/api/person/${encodeURIComponent(personId)}`, fields);
}

export async function addNote(personId, noteText, noteType = 'general') {
  return slatePost(`/api/person/${encodeURIComponent(personId)}/note`, {
    body: noteText,
    type: noteType,
  });
}
