import { FormEvent, KeyboardEvent, useMemo, useState } from 'react';
import { Bot, Loader2, Send, User } from 'lucide-react';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type ChatApiSuccess = {
  answer: string;
  // sources: SourceItem[];
};

type ChatApiError = {
  detail?: string;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'https://myportfolio-x716.onrender.com').replace(/\/$/, '');

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: "Hi! Ask me anything about Thuy Nguyen's portfolio, experience, projects, or skills.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint = useMemo(() => `${API_BASE_URL}/api/chat`, []);

  async function sendMessage(event?: FormEvent) {
    event?.preventDefault();

    const message = input.trim();
    if (!message || isLoading) {
      return;
    }

    setError(null);
    setInput('');

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as ChatApiError;
        throw new Error(payload.detail ?? `Request failed with status ${response.status}`);
      }

      const payload = (await response.json()) as ChatApiSuccess;

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: payload.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (requestError) {
      const fallbackError =
        'I could not reach the backend. Make sure the API is available at https://myportfolio-x716.onrender.com.';
      const message = requestError instanceof Error ? requestError.message : fallbackError;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Portfolio Chat</h1>
        <p className="text-lg text-muted-foreground">
          Ask questions and get answers grounded in Thuy&apos;s portfolio knowledge base.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-primary/20 bg-card overflow-hidden shadow-sm">
        <div className="h-[56vh] min-h-[420px] overflow-y-auto p-4 sm:p-6 space-y-4 bg-gradient-to-b from-primary/5 via-background to-secondary/5">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.role === 'assistant' && (
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1">
                  <Bot size={18} />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 border ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground border-primary/30'
                    : 'bg-white text-foreground border-primary/20'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>

              {message.role === 'user' && (
                <div className="h-9 w-9 flex-shrink-0 rounded-full bg-secondary/30 text-foreground flex items-center justify-center mt-1">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="animate-spin" size={16} />
              <span>Thinking...</span>
            </div>
          )}
        </div>

        <form onSubmit={sendMessage} className="p-4 sm:p-6 border-t border-primary/20 bg-white">
          {error && (
            <div className="mb-3 p-3 rounded-lg border border-destructive/30 bg-destructive/10 text-destructive">
              {error}
            </div>
          )}

          <div className="flex items-end gap-3">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Ask about projects, experience, education, or skills..."
              rows={3}
              className="flex-1 resize-none rounded-xl border border-primary/30 bg-input-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              maxLength={2000}
            />
            <button
              type="submit"
              disabled={isLoading || input.trim().length === 0}
              className="h-12 px-4 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/85 transition-colors flex items-center gap-2"
            >
              <Send size={16} />
              Send
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Press Enter to send. Use Shift+Enter for a new line.</p>
        </form>
      </div>
    </div>
  );
}