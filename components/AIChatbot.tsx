'use client'
import { useState, useRef, useEffect } from 'react'

interface Message { role: 'user' | 'assistant'; text: string }

const COPY: Record<string, {
  title: string; subtitle: string; placeholder: string;
  welcome: string; error: string; thinking: string
}> = {
  ar: {
    title: 'مساعد AI',
    subtitle: 'اسألني عن أفضل أداة لك',
    placeholder: 'ما أفضل أداة لـ...؟',
    welcome: '👋 مرحباً! أنا مساعدك لاختيار أدوات AI. اسألني مثلاً:\n"ما أفضل أداة للكتابة؟" أو "ما بديل ChatGPT المجاني؟"',
    error: '⚠️ حدث خطأ، حاول مجدداً',
    thinking: 'يفكر...',
  },
  en: {
    title: 'AI Assistant',
    subtitle: 'Ask me which AI tool is best for you',
    placeholder: 'What\'s the best tool for...?',
    welcome: '👋 Hi! I help you choose AI tools. Ask me:\n"Best tool for writing?" or "Free ChatGPT alternative?"',
    error: '⚠️ Something went wrong, try again',
    thinking: 'Thinking...',
  },
  fr: {
    title: 'Assistant IA',
    subtitle: 'Demandez-moi quel outil IA vous convient',
    placeholder: 'Quel est le meilleur outil pour...?',
    welcome: '👋 Bonjour! Je vous aide à choisir des outils IA.',
    error: '⚠️ Erreur, réessayez',
    thinking: 'Réflexion...',
  },
  es: {
    title: 'Asistente IA',
    subtitle: 'Pregúntame qué herramienta IA es mejor para ti',
    placeholder: '¿Cuál es la mejor herramienta para...?',
    welcome: '👋 ¡Hola! Te ayudo a elegir herramientas IA.',
    error: '⚠️ Error, inténtalo de nuevo',
    thinking: 'Pensando...',
  },
  tr: {
    title: 'AI Asistan',
    subtitle: 'Hangi AI aracının sizin için en iyi olduğunu sorun',
    placeholder: 'En iyi araç nedir...?',
    welcome: '👋 Merhaba! AI araçları seçmenize yardımcı oluyorum.',
    error: '⚠️ Hata, tekrar deneyin',
    thinking: 'Düşünüyor...',
  },
  de: {
    title: 'KI-Assistent',
    subtitle: 'Fragen Sie mich, welches KI-Tool für Sie am besten ist',
    placeholder: 'Was ist das beste Tool für...?',
    welcome: '👋 Hallo! Ich helfe Ihnen bei der Auswahl von KI-Tools.',
    error: '⚠️ Fehler, bitte erneut versuchen',
    thinking: 'Denkt nach...',
  },
}

export default function AIChatbot({ locale = 'en' }: { locale?: string }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const c = COPY[locale] || COPY.en
  const isRTL = locale === 'ar'

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', text: c.welcome }])
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: data.reply || c.error,
      }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: c.error }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={c.title}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
          boxShadow: '0 0 24px rgba(124,58,237,0.5)',
        }}
      >
        {open ? (
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.958 7.958 0 01-3.95-1.05l-.283-.168-2.95.875.875-2.95-.168-.283A7.958 7.958 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            <circle cx="8.5" cy="12" r="1.2" fill="white"/>
            <circle cx="12" cy="12" r="1.2" fill="white"/>
            <circle cx="15.5" cy="12" r="1.2" fill="white"/>
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }} />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{
            maxHeight: '480px',
            border: '1px solid rgba(124,58,237,0.3)',
            background: '#0f0f1a',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              🤖
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-none">{c.title}</p>
              <p className="text-white/70 text-xs mt-0.5 truncate">{c.subtitle}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}>
                <div
                  className="max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                  style={msg.role === 'user' ? {
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    color: '#fff',
                    borderRadius: isRTL ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                  } : {
                    background: '#1a1a2e',
                    color: '#e2e8f0',
                    border: '1px solid #2d2d4e',
                    borderRadius: isRTL ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <div className="px-4 py-2.5 rounded-2xl text-sm"
                  style={{ background: '#1a1a2e', border: '1px solid #2d2d4e', color: '#7c3aed' }}>
                  <span className="inline-flex gap-1 items-center">
                    <span className="animate-bounce [animation-delay:-0.3s]">●</span>
                    <span className="animate-bounce [animation-delay:-0.15s]">●</span>
                    <span className="animate-bounce">●</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t" style={{ borderColor: '#1f1f2e', background: '#0d0d14' }}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder={c.placeholder}
                disabled={loading}
                className="flex-1 px-3 py-2 rounded-xl text-sm text-white placeholder-gray-500 outline-none disabled:opacity-50"
                style={{ background: '#1a1a2e', border: '1px solid #2d2d4e' }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
              >
                <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d={isRTL ? 'M19 12H5M12 5l-7 7 7 7' : 'M5 12h14M12 5l7 7-7 7'}/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
