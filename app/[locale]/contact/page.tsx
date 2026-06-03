import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

const CONTENT: Record<string, {
  title: string; subtitle: string; nameLabel: string; emailLabel: string;
  subjectLabel: string; messageLabel: string; sendBtn: string;
  subjects: string[]; note: string; responseTime: string;
  infoTitle: string; emailInfo: string; workHours: string; workHoursVal: string;
  response: string; responseVal: string;
}> = {
  ar: {
    title: 'تواصل معنا', subtitle: 'يسعدنا سماع آرائك واستفساراتك',
    nameLabel: 'الاسم', emailLabel: 'البريد الإلكتروني',
    subjectLabel: 'الموضوع', messageLabel: 'رسالتك',
    sendBtn: 'إرسال الرسالة',
    subjects: ['استفسار عام', 'اقتراح أداة جديدة', 'الإبلاغ عن خطأ', 'التعاون والشراكة', 'أخرى'],
    note: 'يمكنك أيضاً إرسال أداة جديدة مباشرةً عبر صفحة الإرسال.',
    responseTime: 'نرد عادةً خلال 24-48 ساعة.',
    infoTitle: 'معلومات التواصل',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'ساعات العمل', workHoursVal: 'الأحد — الخميس، 9ص — 6م',
    response: 'وقت الاستجابة', responseVal: 'خلال 24-48 ساعة',
  },
  en: {
    title: 'Contact Us', subtitle: 'We\'d love to hear from you',
    nameLabel: 'Name', emailLabel: 'Email',
    subjectLabel: 'Subject', messageLabel: 'Your Message',
    sendBtn: 'Send Message',
    subjects: ['General Inquiry', 'Suggest a Tool', 'Report an Error', 'Partnership', 'Other'],
    note: 'You can also submit a new tool directly via the Submit page.',
    responseTime: 'We typically respond within 24-48 hours.',
    infoTitle: 'Contact Information',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'Working Hours', workHoursVal: 'Sun — Thu, 9AM — 6PM',
    response: 'Response Time', responseVal: 'Within 24-48 hours',
  },
  fr: {
    title: 'Contactez-nous', subtitle: 'Nous serions ravis de vous entendre',
    nameLabel: 'Nom', emailLabel: 'E-mail',
    subjectLabel: 'Sujet', messageLabel: 'Votre message',
    sendBtn: 'Envoyer',
    subjects: ['Demande générale', 'Suggérer un outil', 'Signaler une erreur', 'Partenariat', 'Autre'],
    note: 'Vous pouvez également soumettre un nouvel outil via la page de soumission.',
    responseTime: 'Nous répondons généralement sous 24 à 48 heures.',
    infoTitle: 'Informations de contact',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'Heures de travail', workHoursVal: 'Dim — Jeu, 9h — 18h',
    response: 'Délai de réponse', responseVal: 'Sous 24-48 heures',
  },
  es: {
    title: 'Contáctenos', subtitle: 'Nos encantaría saber de usted',
    nameLabel: 'Nombre', emailLabel: 'Correo electrónico',
    subjectLabel: 'Asunto', messageLabel: 'Su mensaje',
    sendBtn: 'Enviar mensaje',
    subjects: ['Consulta general', 'Sugerir herramienta', 'Reportar error', 'Asociación', 'Otro'],
    note: 'También puede enviar una nueva herramienta a través de la página de envío.',
    responseTime: 'Normalmente respondemos en 24-48 horas.',
    infoTitle: 'Información de contacto',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'Horario', workHoursVal: 'Dom — Jue, 9AM — 6PM',
    response: 'Tiempo de respuesta', responseVal: 'En 24-48 horas',
  },
  tr: {
    title: 'Bize Ulaşın', subtitle: 'Sizden haber almaktan memnuniyet duyarız',
    nameLabel: 'Ad', emailLabel: 'E-posta',
    subjectLabel: 'Konu', messageLabel: 'Mesajınız',
    sendBtn: 'Mesaj Gönder',
    subjects: ['Genel Soru', 'Araç Öner', 'Hata Bildir', 'Ortaklık', 'Diğer'],
    note: 'Yeni bir aracı doğrudan Gönder sayfası üzerinden de ekleyebilirsiniz.',
    responseTime: 'Genellikle 24-48 saat içinde yanıt veririz.',
    infoTitle: 'İletişim Bilgileri',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'Çalışma Saatleri', workHoursVal: 'Paz — Per, 09:00 — 18:00',
    response: 'Yanıt Süresi', responseVal: '24-48 saat içinde',
  },
  de: {
    title: 'Kontakt', subtitle: 'Wir freuen uns von Ihnen zu hören',
    nameLabel: 'Name', emailLabel: 'E-Mail',
    subjectLabel: 'Betreff', messageLabel: 'Ihre Nachricht',
    sendBtn: 'Nachricht senden',
    subjects: ['Allgemeine Anfrage', 'Tool vorschlagen', 'Fehler melden', 'Partnerschaft', 'Sonstiges'],
    note: 'Sie können auch direkt über die Einreichungsseite ein neues Tool einreichen.',
    responseTime: 'Wir antworten in der Regel innerhalb von 24-48 Stunden.',
    infoTitle: 'Kontaktinformationen',
    emailInfo: 'contact@aitools-ar.com',
    workHours: 'Arbeitszeiten', workHoursVal: 'So — Do, 9:00 — 18:00',
    response: 'Antwortzeit', responseVal: 'Innerhalb von 24-48 Stunden',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const c = CONTENT[locale] || CONTENT.en
  return {
    title: `${c.title} — AI Tools`,
    description: c.subtitle,
    alternates: buildAlternates('/contact', locale),
  }
}

export default function ContactPage({ params }: Props) {
  const { locale } = params
  const c = CONTENT[locale] || CONTENT.en
  const base = `/${locale}`

  return (
    <>
      <Header />
      <main style={{ background: '#030712' }}>
        {/* Hero */}
        <section className="border-b border-gray-800/50"
          style={{ background: 'radial-gradient(ellipse 100% 200% at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 60%), #0a0e17' }}>
          <div className="max-w-3xl mx-auto px-4 py-14 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              {c.title}
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{c.title}</h1>
            <p className="text-gray-400">{c.subtitle}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form action={`mailto:contact@aitools-ar.com`} method="get" encType="text/plain"
                className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7 space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2">{c.nameLabel}</label>
                    <input type="text" name="name" required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700/60 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder={c.nameLabel} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2">{c.emailLabel}</label>
                    <input type="email" name="email" required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700/60 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="example@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2">{c.subjectLabel}</label>
                  <select name="subject"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700/60 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors">
                    {c.subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2">{c.messageLabel}</label>
                  <textarea name="body" rows={6} required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700/60 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    placeholder={c.messageLabel} />
                </div>

                <button type="submit"
                  className="w-full py-3 rounded-xl text-white font-black text-sm transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
                  {c.sendBtn} →
                </button>

                <p className="text-gray-600 text-xs text-center">{c.responseTime}</p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-6">
                <h3 className="text-white font-black text-sm mb-5">{c.infoTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium">{c.emailInfo}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{c.workHours}</p>
                      <p className="text-white text-sm font-medium">{c.workHoursVal}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{c.response}</p>
                      <p className="text-white text-sm font-medium">{c.responseVal}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-5">
                <p className="text-gray-300 text-xs leading-relaxed">{c.note}</p>
                <a href={`${base}/submit`}
                  className="mt-3 block text-center py-2 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 text-xs font-bold transition-colors border border-violet-500/20">
                  {locale === 'ar' ? 'صفحة الإرسال ←' : 'Submit Page →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
