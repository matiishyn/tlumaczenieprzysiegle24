'use client';

import { BUSINESS_INFO } from '@/lib/constants';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppWidgetProps {
  locale: string;
}

export function WhatsAppWidget({ locale }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const messages = {
    pl: {
      greeting: 'Potrzebujesz pomocy?',
      description: 'Wyślij nam wiadomość na WhatsApp',
      cta: 'Rozpocznij czat',
      defaultMessage: 'Witam! Chciałbym uzyskać informacje o tłumaczeniu przysięgłym.',
    },
    en: {
      greeting: 'Need help?',
      description: 'Send us a message on WhatsApp',
      cta: 'Start chat',
      defaultMessage: 'Hello! I would like to get information about sworn translation.',
    },
    uk: {
      greeting: 'Потрібна допомога?',
      description: 'Надішліть нам повідомлення в WhatsApp',
      cta: 'Почати чат',
      defaultMessage: 'Вітаю! Хотів би отримати інформацію про присяжний переклад.',
    },
  };

  const msg = messages[locale as keyof typeof messages] || messages.pl;

  const handleChat = () => {
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace('+', '')}?text=${encodeURIComponent(msg.defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-4 w-80 animate-in slide-in-from-bottom-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#606C38] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{BUSINESS_INFO.name}</div>
                  <div className="text-xs text-[#606C38] flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#606C38] rounded-full animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mb-3">
              <p className="text-sm font-medium mb-1">{msg.greeting}</p>
              <p className="text-xs text-gray-600">{msg.description}</p>
            </div>
            <button
              onClick={handleChat}
              className="w-full bg-[#606C38] hover:bg-[#4F5A2E] text-white py-2 px-4 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              {msg.cta}
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#606C38] hover:bg-[#4F5A2E] rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#BC6C25] rounded-full animate-pulse"></span>
            </>
          )}
        </button>
      </div>
    </>
  );
}

