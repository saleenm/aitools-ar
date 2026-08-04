import { Metadata } from 'next'
import Link from 'next/link'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

export async function generateStaticParams() {
  return ['ar', 'en', 'fr', 'es', 'tr', 'de'].map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const titles: Record<string, string> = {
    ar: 'الأسئلة الشائعة عن أدوات الذكاء الاصطناعي | AI Tools',
    en: 'Frequently Asked Questions About AI Tools | AI Tools',
    fr: 'Questions fréquentes sur les outils IA | AI Tools',
    es: 'Preguntas frecuentes sobre herramientas de IA | AI Tools',
    tr: 'Yapay Zeka Araçları Hakkında Sık Sorulan Sorular | AI Tools',
    de: 'Häufig gestellte Fragen zu KI-Tools | AI Tools',
  }
  const descriptions: Record<string, string> = {
    ar: 'إجابات شاملة على أكثر الأسئلة شيوعاً حول أدوات الذكاء الاصطناعي — ChatGPT وGemini وMidjourney وغيرها.',
    en: 'Comprehensive answers to the most common questions about AI tools — ChatGPT, Gemini, Midjourney, and more.',
    fr: "Réponses complètes aux questions les plus fréquentes sur les outils d'IA.",
    es: 'Respuestas completas a las preguntas más frecuentes sobre herramientas de IA.',
    tr: 'Yapay zeka araçları hakkında en sık sorulan soruların kapsamlı yanıtları.',
    de: 'Umfassende Antworten auf die häufigsten Fragen zu KI-Tools.',
  }
  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: buildAlternates('/faq', locale),
  }
}

const FAQ: Record<string, Array<{ q: string; a: string }>> = {
  ar: [
    {
      q: 'ما هو الذكاء الاصطناعي التوليدي؟',
      a: 'الذكاء الاصطناعي التوليدي هو نوع من أنواع الذكاء الاصطناعي القادر على إنشاء محتوى جديد — نصوص أو صور أو صوت أو فيديو — بناءً على تدريبه على كميات هائلة من البيانات. أشهر أمثلته ChatGPT لتوليد النصوص وMidjourney لتوليد الصور وSuno لتوليد الموسيقى.',
    },
    {
      q: 'ما الفرق بين ChatGPT وGemini وClaude؟',
      a: 'ChatGPT من OpenAI هو الأكثر شهرة ويتميز بتنوع استخداماته. Gemini من Google يتفوق في التكامل مع خدمات Google والتحليل متعدد الوسائط. Claude من Anthropic يتميز بأمانه وقدرته على معالجة المستندات الطويلة جداً. الأفضل لك يعتمد على احتياجاتك.',
    },
    {
      q: 'هل أدوات الذكاء الاصطناعي مجانية؟',
      a: 'معظم أدوات الذكاء الاصطناعي تقدم نسخة مجانية مع قيود، ونسخة مدفوعة بإمكانيات أوسع. ChatGPT وGemini وClaude تتيح الاستخدام المجاني بحدود يومية. Midjourney يتطلب اشتراكاً مدفوعاً. يمكنك تصفية الأدوات المجانية في موقعنا باختيار "مجاني" من القائمة.',
    },
    {
      q: 'ما أفضل أداة ذكاء اصطناعي للكتابة باللغة العربية؟',
      a: 'ChatGPT وGemini وClaude جميعها تدعم العربية بجودة عالية. ChatGPT يتميز بسياق محادثة طويل وجودة إنشائية ممتازة. Gemini يتفوق في البحث والمعلومات الحديثة. لمحتوى التسويق، تُعد Jasper وCopy.ai خيارات متخصصة رغم محدودية دعمها للعربية.',
    },
    {
      q: 'كيف أختار الأداة المناسبة لاحتياجاتي؟',
      a: 'حدد أولاً مجال الاستخدام: كتابة، برمجة، تصميم، فيديو، أو صوت. ثم قرر ميزانيتك: مجاني أم مدفوع. استخدم صفحة المقارنة لدينا لمقارنة الأدوات المتنافسة جنباً إلى جنب. ننصح دائماً بتجربة النسخة المجانية قبل الاشتراك المدفوع.',
    },
    {
      q: 'هل يمكن استخدام أدوات الذكاء الاصطناعي في العمل المهني؟',
      a: 'نعم، وقد أثبتت فعالية كبيرة في قطاعات متعددة. المحامون يستخدمون Harvey وCaseText لتحليل العقود. الأطباء يستخدمون أدوات مثل Glass AI للمساعدة التشخيصية. المصممون يستخدمون Midjourney وFirefly. المعلمون يستخدمون Khanmigo. زر صفحة المهن لدينا للاطلاع على أدوات كل مهنة.',
    },
    {
      q: 'هل أدوات الذكاء الاصطناعي آمنة للاستخدام؟',
      a: 'الأدوات الموثوقة من شركات كبرى (OpenAI، Google، Anthropic) تلتزم بمعايير الخصوصية والأمان. تجنب إدخال بيانات شخصية حساسة أو معلومات سرية في أي أداة ذكاء اصطناعي. اقرأ سياسة الخصوصية قبل الاستخدام المهني.',
    },
    {
      q: 'ما أفضل أداة لتوليد الصور بالذكاء الاصطناعي؟',
      a: 'Midjourney يُعد الأفضل في جودة الصور الفنية، لكنه مدفوع. DALL·E 3 متكامل مع ChatGPT ومجاني نسبياً. Stable Diffusion مجاني ومفتوح المصدر. Adobe Firefly الأفضل للاستخدام التجاري بدون قيود حقوق الملكية.',
    },
    {
      q: 'هل يمكن لأدوات الذكاء الاصطناعي أن تحل محل وظيفتي؟',
      a: 'الذكاء الاصطناعي يُكمّل عمل الإنسان ولا يحل محله في أغلب الحالات. من يستخدم الذكاء الاصطناعي باحترافية سيكون أكثر إنتاجية ممن لا يستخدمه. المهارات الإبداعية والتفكير النقدي وبناء العلاقات لا يمكن أتمتتها بالكامل.',
    },
    {
      q: 'كيف أبدأ مع الذكاء الاصطناعي إذا كنت مبتدئاً؟',
      a: 'ابدأ بـ ChatGPT — أنشئ حساباً مجانياً في chat.openai.com وجرب طرح أسئلة عادية. ثم انتقل لتجربة Gemini إذا كنت تستخدم Google. اقرأ مقالاتنا التعليمية في قسم Blog لتتعلم كيفية كتابة الأوامر (Prompts) بفعالية.',
    },
    {
      q: 'ما أفضل أداة ذكاء اصطناعي للبرمجة؟',
      a: 'GitHub Copilot الأفضل للمطورين داخل بيئة VSCode — يكمّل الأكواد تلقائياً. Cursor IDE مبني على الذكاء الاصطناعي بالكامل. ChatGPT وClaude ممتازان لشرح الأكواد وإصلاح الأخطاء. Tabnine وCodeium بدائل جيدة ومجانية.',
    },
    {
      q: 'هل يمكن استخدام الذكاء الاصطناعي لتعلم لغة جديدة؟',
      a: 'نعم، ChatGPT وClaude وGemini جميعها ممتازة لتعلم اللغات — تترجم، تصحح النحو، تشرح القواعد، وتتحدث معك بأي لغة. تطبيقات مثل Duolingo أضافت الذكاء الاصطناعي لتجربة تعلم أكثر شخصية.',
    },
    {
      q: 'هل هناك أدوات ذكاء اصطناعي مجانية تماماً؟',
      a: 'نعم، عديدة: ChatGPT (الإصدار المجاني بحدود)، Gemini (مجاني بسخاء)، Microsoft Copilot (مجاني تماماً)، Perplexity AI (مجاني للبحث)، DALL·E عبر Bing Image Creator (مجاني)، Stable Diffusion (مفتوح المصدر ومجاني). استخدم فلتر "مجاني" في صفحتنا الرئيسية.',
    },
    {
      q: 'كيف تختلف أدوات SEO المبنية على الذكاء الاصطناعي؟',
      a: 'Semrush وAhrefs يستخدمان الذكاء الاصطناعي لتحليل الكلمات المفتاحية والمنافسين. Surfer SEO وFrase يساعدان على تحسين المحتوى للترتيب في محركات البحث. ChatGPT يمكن استخدامه مجاناً لتوليد أفكار المحتوى وتحسين العناوين.',
    },
    {
      q: 'ما مستقبل أدوات الذكاء الاصطناعي في 2026؟',
      a: 'يشهد 2026 تسارعاً كبيراً: نماذج متعددة الوسائط أقوى، وكلاء ذكاء اصطناعي قادرون على تنفيذ مهام كاملة باستقلالية، وتكاملات أعمق في بيئات العمل اليومية. تكاليف الاستخدام تنخفض باستمرار مما يجعل الأدوات المتقدمة في متناول الجميع.',
    },
  ],
  en: [
    {
      q: 'What is generative AI?',
      a: 'Generative AI is a type of artificial intelligence capable of creating new content — text, images, audio, or video — based on training on vast amounts of data. The most famous examples are ChatGPT for text, Midjourney for images, and Suno for music generation.',
    },
    {
      q: 'What is the difference between ChatGPT, Gemini, and Claude?',
      a: 'ChatGPT from OpenAI is the most popular and versatile. Gemini from Google excels at Google ecosystem integration and multimodal analysis. Claude from Anthropic stands out for safety and handling very long documents. The best choice depends on your specific needs.',
    },
    {
      q: 'Are AI tools free to use?',
      a: 'Most AI tools offer a free tier with limitations and a paid plan with expanded capabilities. ChatGPT, Gemini, and Claude offer free usage with daily limits. Midjourney requires a paid subscription. You can filter free tools on our homepage.',
    },
    {
      q: 'What is the best AI tool for writing?',
      a: 'ChatGPT, Gemini, and Claude all produce high-quality text. ChatGPT excels at long-form creative content. Gemini is best for research-backed writing with current information. For marketing copy, Jasper and Copy.ai are specialized options.',
    },
    {
      q: 'How do I choose the right AI tool for my needs?',
      a: 'First identify your use case: writing, coding, design, video, or audio. Then determine your budget: free or paid. Use our Compare page to evaluate competing tools side by side. Always try the free tier before committing to a paid plan.',
    },
    {
      q: 'Can AI tools be used for professional work?',
      a: 'Yes, and they have proven highly effective across many industries. Lawyers use Harvey and CaseText for contract analysis. Doctors use tools like Glass AI for diagnostic support. Designers use Midjourney and Firefly. Teachers use Khanmigo. Visit our Professions page for profession-specific tool guides.',
    },
    {
      q: 'Are AI tools safe to use?',
      a: 'Reputable tools from major companies (OpenAI, Google, Anthropic) adhere to strict privacy and security standards. Avoid entering sensitive personal data or confidential information into any AI tool. Always read the privacy policy before professional use.',
    },
    {
      q: 'What is the best AI image generator?',
      a: 'Midjourney produces the highest quality artistic images but requires a paid plan. DALL·E 3 is integrated with ChatGPT and relatively free. Stable Diffusion is free and open-source. Adobe Firefly is best for commercial use without intellectual property restrictions.',
    },
    {
      q: 'Will AI tools replace my job?',
      a: 'AI complements human work rather than replacing it in most cases. Those who master AI tools will be far more productive than those who don\'t. Creative thinking, critical judgment, and relationship building cannot be fully automated.',
    },
    {
      q: 'How do I get started with AI if I\'m a beginner?',
      a: 'Start with ChatGPT — create a free account at chat.openai.com and try asking everyday questions. Then explore Gemini if you\'re a Google user. Read our Blog articles to learn how to write effective prompts that get better results.',
    },
    {
      q: 'What is the best AI tool for coding?',
      a: 'GitHub Copilot is the top choice for developers inside VSCode, autocompleting code in real time. Cursor IDE is built entirely around AI assistance. ChatGPT and Claude are excellent for explaining code and fixing bugs. Tabnine and Codeium are solid free alternatives.',
    },
    {
      q: 'Can AI tools help me learn a new language?',
      a: 'Absolutely. ChatGPT, Claude, and Gemini are excellent for language learning — they translate, correct grammar, explain rules, and converse with you in any language. Apps like Duolingo have also integrated AI for a more personalized learning experience.',
    },
    {
      q: 'Are there completely free AI tools?',
      a: 'Yes, many: ChatGPT free tier, Gemini (generous free plan), Microsoft Copilot (completely free), Perplexity AI (free for research), DALL·E via Bing Image Creator (free), and Stable Diffusion (open-source). Use the "Free" filter on our homepage.',
    },
    {
      q: 'How do AI-powered SEO tools differ from traditional ones?',
      a: 'Semrush and Ahrefs use AI for keyword and competitor analysis. Surfer SEO and Frase help optimize content for search rankings. ChatGPT can be used freely to generate content ideas and optimize headlines — making AI SEO accessible at any budget.',
    },
    {
      q: 'What is the future of AI tools in 2026?',
      a: '2026 is seeing rapid acceleration: more powerful multimodal models, autonomous AI agents capable of completing full tasks independently, and deeper integrations into daily workflows. Usage costs continue to fall, making advanced tools accessible to everyone.',
    },
  ],
}

// Fallback locales map to English
const getContent = (locale: string) => FAQ[locale] ?? FAQ.en

const PAGE_LABELS: Record<string, { title: string; subtitle: string; back: string }> = {
  ar: { title: 'الأسئلة الشائعة', subtitle: 'كل ما تريد معرفته عن أدوات الذكاء الاصطناعي', back: 'العودة للرئيسية' },
  en: { title: 'Frequently Asked Questions', subtitle: 'Everything you need to know about AI tools', back: 'Back to Home' },
  fr: { title: 'Questions fréquentes', subtitle: "Tout ce que vous devez savoir sur les outils d'IA", back: "Retour à l'accueil" },
  es: { title: 'Preguntas frecuentes', subtitle: 'Todo lo que necesitas saber sobre las herramientas de IA', back: 'Volver al inicio' },
  tr: { title: 'Sık Sorulan Sorular', subtitle: 'Yapay zeka araçları hakkında bilmeniz gereken her şey', back: 'Ana sayfaya dön' },
  de: { title: 'Häufige Fragen', subtitle: 'Alles, was Sie über KI-Tools wissen müssen', back: 'Zurück zur Startseite' },
}

export default function FAQPage({ params }: Props) {
  const { locale } = params
  const isRTL = locale === 'ar'
  const faqs = getContent(locale)
  const labels = PAGE_LABELS[locale] ?? PAGE_LABELS.en

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(109,40,217,0.1))', border: '1.5px solid rgba(139,92,246,0.3)' }}>
            <svg width="24" height="24" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>
            </svg>
          </div>
          <h1 className="text-3xl font-black text-white mb-2">{labels.title}</h1>
          <p className="text-gray-400 text-sm">{labels.subtitle}</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <details key={i} className="group bg-gray-900/80 border border-gray-800/60 rounded-2xl overflow-hidden">
              <summary className={`flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-gray-800/40 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-white font-semibold text-sm leading-snug">{q}</span>
                <span className="text-violet-400 flex-shrink-0 transition-transform group-open:rotate-45">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-6 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(109,40,217,0.06))', border: '1px solid rgba(139,92,246,0.25)' }}>
          <p className="text-gray-300 text-sm mb-4">
            {isRTL ? 'لم تجد إجابة على سؤالك؟ تصفح مئات الأدوات في دليلنا الشامل.' : "Didn't find your answer? Browse hundreds of tools in our comprehensive directory."}
          </p>
          <Link href={`/${locale}`}
            className="inline-block px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-colors">
            {labels.back} →
          </Link>
        </div>
      </main>
    </>
  )
}
