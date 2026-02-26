import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const SUGGESTED_PROMPTS = [
  'Search for applicants named Smith applying to the MBA program',
  'Show me all admitted students who have not enrolled yet',
  'Run my application pipeline report (provide your query ID)',
  'Find prospects in California interested in Computer Science',
  'How many applications are in review status this cycle?',
];

export default function SlateChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [health, setHealth] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ status: 'error', slate_configured: false }));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const apiMessages = messages.map((m) => ({
    role: m.role,
    content: m.role === 'user' ? m.content : m.rawContent,
  }));

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const apiMsgs = newMessages.map((m) => ({
      role: m.role,
      content: m.role === 'user' ? m.content : m.rawContent,
    }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMsgs }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(err.error || 'Request failed');
      }

      const data = await res.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.content,
        rawContent: data.content,
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: [{ type: 'text', text: `Error: ${err.message}` }],
          rawContent: [{ type: 'text', text: `Error: ${err.message}` }],
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div className="slate-chat">
      <div className="slate-chat-sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-heading">Connection</h3>
          <div className={`connection-status ${health?.slate_configured ? 'connected' : 'disconnected'}`}>
            <span className="status-dot" />
            {health === null
              ? 'Checking…'
              : health.slate_configured
              ? `Connected to ${health.slate_url || 'Slate'}`
              : 'Not configured — set env vars'}
          </div>
          {health && !health.slate_configured && (
            <div className="config-hint">
              <p>Set in your <code>.env</code> file:</p>
              <ul>
                <li><code>SLATE_BASE_URL</code></li>
                <li><code>SLATE_USERNAME</code></li>
                <li><code>SLATE_PASSWORD</code></li>
                <li><code>ANTHROPIC_API_KEY</code></li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-heading">Try asking</h3>
          <div className="suggested-prompts">
            {SUGGESTED_PROMPTS.map((p, i) => (
              <button
                key={i}
                className="suggested-prompt"
                onClick={() => sendMessage(p)}
                disabled={isLoading}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {messages.length > 0 && (
          <div className="sidebar-section">
            <button
              className="clear-chat-btn"
              onClick={() => setMessages([])}
            >
              Clear conversation
            </button>
          </div>
        )}
      </div>

      <div className="slate-chat-main">
        <div className="messages-area">
          {messages.length === 0 ? (
            <div className="chat-empty">
              <div className="chat-empty-icon">S</div>
              <h3>Slate CRM Assistant</h3>
              <p>
                Ask me to search applicants, pull reports, read application
                details, or update records in Slate.
              </p>
            </div>
          ) : (
            messages.map((msg, i) => <ChatMessage key={i} message={msg} />)
          )}
          {isLoading && (
            <div className="chat-message assistant-message">
              <div className="assistant-avatar">S</div>
              <div className="message-bubble assistant-bubble loading-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <textarea
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about applicants, reports, or records… (Enter to send)"
            rows={2}
            disabled={isLoading}
          />
          <button
            className="send-btn"
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? <span className="spinner" /> : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
