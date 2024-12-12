import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content: '¡Hola! Soy el asistente virtual de Emplify. ¿En qué puedo ayudarte hoy?',
  },
];

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    // Simulated AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: `Gracias por tu pregunta sobre "${input}". En este momento estamos en una versión de demostración, pero en la versión final, proporcionaré respuestas detalladas sobre la plataforma y el proceso de búsqueda de empleo.`,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[600px]">
          <div className="bg-emerald-600 p-4 text-white flex items-center">
            <MessageSquare className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-semibold">Asistente Virtual Emplify</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta aquí..."
                className="flex-1 rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}