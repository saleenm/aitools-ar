import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

const TITLES: Record<string, string> = {
  ar: 'سياسة الخصوصية', en: 'Privacy Policy', fr: 'Politique de confidentialité',
  es: 'Política de Privacidad', tr: 'Gizlilik Politikası', de: 'Datenschutzerklärung',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  return {
    title: `${TITLES[locale] || TITLES.en} — AI Tools`,
    description: 'Privacy Policy for AI Tools - How we collect, use, and protect your data.',
    alternates: buildAlternates('/privacy', locale),
    robots: { index: true, follow: true },
  }
}

export default function PrivacyPage({ params }: Props) {
  const { locale } = params
  const isRTL = locale === 'ar'
  const title = TITLES[locale] || TITLES.en
  const updated = '2026-01-01'

  return (
    <>
      <Header />
      <main style={{ background: '#030712' }}>
        <section className="border-b border-gray-800/50"
          style={{ background: 'radial-gradient(ellipse 100% 200% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 60%), #0a0e17' }}>
          <div className="max-w-3xl mx-auto px-4 py-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-5">
              🔒 {isRTL ? 'قانوني' : 'Legal'}
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{title}</h1>
            <p className="text-gray-500 text-sm">{isRTL ? `آخر تحديث: ${updated}` : `Last updated: ${updated}`}</p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
          {isRTL ? (
            <>
              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">1. مقدمة</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  مرحباً بك في AI Tools (aitools-ar.vercel.app). نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام موقعنا.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">2. البيانات التي نجمعها</h2>
                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                  <li>• <strong className="text-white">بيانات الاستخدام:</strong> الصفحات التي تزورها، مدة الزيارة، مصدر الزيارة.</li>
                  <li>• <strong className="text-white">بيانات الجهاز:</strong> نوع المتصفح، نظام التشغيل، عنوان IP (بشكل مجهول).</li>
                  <li>• <strong className="text-white">ملفات تعريف الارتباط (Cookies):</strong> لتحسين تجربة المستخدم وأغراض الإحصاء.</li>
                  <li>• <strong className="text-white">المراجعات:</strong> إذا أرسلت مراجعة لأداة، نحتفظ بها لعرضها على الموقع.</li>
                </ul>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">3. Google AdSense</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  يستخدم موقعنا Google AdSense لعرض الإعلانات. قد يستخدم Google ملفات تعريف الارتباط لعرض إعلانات مخصصة بناءً على زياراتك السابقة. يمكنك إلغاء الاشتراك عبر <a href="https://www.google.com/settings/ads" className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">إعدادات إعلانات Google</a>. نحن نتلقى عمولة مقابل النقرات على الإعلانات المعروضة على الموقع.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">4. روابط الشركاء (Affiliate Links)</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  يحتوي موقعنا على روابط شركاء لبعض الأدوات. عند النقر على هذه الروابط وإتمام عملية شراء، قد نتلقى عمولة دون أي تكلفة إضافية عليك. هذا يساعدنا في الحفاظ على الموقع مجانياً للمستخدمين. نحن نوصي فقط بالأدوات التي نؤمن بجودتها.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">5. حماية البيانات</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  نتخذ إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح. لا نبيع بياناتك الشخصية لأطراف ثالثة.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">6. حقوقك</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  يحق لك طلب الاطلاع على بياناتك الشخصية أو تصحيحها أو حذفها. للتواصل معنا بخصوص أي استفسارات تتعلق بالخصوصية، يرجى زيارة صفحة التواصل.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">7. التعديلات</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  نحتفظ بحق تعديل سياسة الخصوصية هذه في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر الموقع.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Welcome to AI Tools (aitools-ar.vercel.app). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">2. Data We Collect</h2>
                <ul className="text-gray-300 text-sm space-y-2 leading-relaxed">
                  <li>• <strong className="text-white">Usage Data:</strong> Pages visited, visit duration, traffic source.</li>
                  <li>• <strong className="text-white">Device Data:</strong> Browser type, OS, IP address (anonymized).</li>
                  <li>• <strong className="text-white">Cookies:</strong> For user experience improvement and analytics.</li>
                  <li>• <strong className="text-white">Reviews:</strong> If you submit a tool review, we retain it to display on the site.</li>
                </ul>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">3. Google AdSense</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our website uses Google AdSense to display advertisements. Google may use cookies to show personalized ads based on your prior visits. You can opt out via <a href="https://www.google.com/settings/ads" className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ad Settings</a>. We receive compensation for clicks on ads displayed on our site.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">4. Affiliate Links</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our site contains affiliate links for some tools. When you click these links and make a purchase, we may receive a commission at no additional cost to you. This helps us keep the site free for users. We only recommend tools we believe in.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">5. Data Protection</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure. We do not sell your personal data to third parties.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">6. Your Rights</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You have the right to request access to, correction of, or deletion of your personal data. To contact us regarding privacy inquiries, please visit our contact page.
                </p>
              </section>

              <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-7">
                <h2 className="text-lg font-black text-white mb-4">7. Changes</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We reserve the right to modify this Privacy Policy at any time. You will be notified of any material changes via the website.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
