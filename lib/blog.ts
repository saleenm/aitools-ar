export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: number
  image: string
  content: string
}

type Locale = 'ar' | 'en' | 'fr' | 'es' | 'tr' | 'de'

interface PostMeta {
  slug: string
  date: string
  readTime: number
  image: string
  content: string
  i18n: Record<Locale, { title: string; description: string; category: string }>
}

const POSTS_META: PostMeta[] = [
  {
    slug: 'best-ai-tools-2025',
    date: '2026-04-01',
    readTime: 8,
    image: '🤖',
    i18n: {
      ar: { title: 'أفضل 10 أدوات ذكاء اصطناعي في 2026', description: 'قائمة شاملة بأفضل أدوات AI التي غيّرت طريقة عملنا في 2026 — مع مقارنة تفصيلية للمميزات والأسعار.', category: 'مراجعات' },
      en: { title: 'Top 10 AI Tools in 2026', description: 'A comprehensive list of the best AI tools that changed how we work in 2026 — with detailed comparisons of features and pricing.', category: 'Reviews' },
      fr: { title: 'Top 10 outils IA en 2026', description: 'Une liste complète des meilleurs outils IA qui ont changé notre façon de travailler en 2026 — avec comparaisons détaillées.', category: 'Avis' },
      es: { title: 'Las 10 mejores herramientas de IA en 2026', description: 'Una lista completa de las mejores herramientas de IA que cambiaron nuestra forma de trabajar en 2026.', category: 'Reseñas' },
      tr: { title: "2026'nın En İyi 10 Yapay Zeka Aracı", description: "2026'da çalışma şeklimizi değiştiren en iyi yapay zeka araçlarının kapsamlı bir listesi.", category: 'İncelemeler' },
      de: { title: 'Die 10 besten KI-Tools 2026', description: 'Eine umfassende Liste der besten KI-Tools, die unsere Arbeitsweise 2026 verändert haben.', category: 'Bewertungen' },
    },
    content: `
## أفضل 10 أدوات ذكاء اصطناعي في 2026

شهدت السنوات الأخيرة ثورة حقيقية في أدوات الذكاء الاصطناعي. إليك أبرز 10 أدوات تستحق الاهتمام:

### 1. ChatGPT — الأكثر شهرةً وشيوعاً
ChatGPT من OpenAI لا يحتاج إلى تعريف. بفضل GPT-4o، أصبح الأداة الأولى للكتابة والبرمجة والمحادثة الذكية.

**الأفضل لـ:** الكتابة الإبداعية، البرمجة، الإجابة على الأسئلة المعقدة
**السعر:** مجاني + Plus بـ 20$/شهر

### 2. Claude — الأذكى في تحليل المستندات
Claude من Anthropic يتميز بسياق 200,000 توكن — مما يجعله الأفضل لقراءة وتحليل المستندات الطويلة.

### 3. Gemini — تكامل مثالي مع Google
Gemini من Google يتكامل مباشرة مع Gmail وDocs وDrive.

### 4. Midjourney — ملك توليد الصور
لا يزال Midjourney يحتل القمة في جودة الصور الفنية.

### 5. GitHub Copilot — المبرمج الثاني
وفّر Copilot على المبرمجين آلاف الساعات.

### 6. Perplexity AI — محرك البحث الذكي
Perplexity يجيب بمصادر موثّقة ومحدّثة.

### 7. ElevenLabs — أصوات مذهلة
ElevenLabs أنتجت ثورة في توليد الأصوات.

### 8. Runway — توليد الفيديو
Runway ML يقود موجة توليد الفيديو بالذكاء الاصطناعي.

### 9. Stable Diffusion — مجاني ومفتوح المصدر
لمن يريد تحكماً كاملاً بدون قيود.

### 10. Notion AI — الإنتاجية المدمجة
Notion AI يُدمج قوة الذكاء الاصطناعي مباشرة في بيئة عملك.
    `,
  },
  {
    slug: 'chatgpt-vs-claude-comparison',
    date: '2026-03-20',
    readTime: 10,
    image: '⚖️',
    i18n: {
      ar: { title: 'ChatGPT مقابل Claude: أيهما أفضل في 2026؟', description: 'مقارنة تفصيلية بين ChatGPT وClaude في الكتابة والبرمجة وتحليل المستندات — أيهما يستحق اشتراكك؟', category: 'مقارنات' },
      en: { title: 'ChatGPT vs Claude: Which is Better in 2026?', description: 'A detailed comparison of ChatGPT and Claude for writing, coding, and document analysis — which one deserves your subscription?', category: 'Comparisons' },
      fr: { title: 'ChatGPT vs Claude : lequel est le meilleur en 2026 ?', description: 'Comparaison détaillée entre ChatGPT et Claude pour la rédaction, le codage et l\'analyse de documents.', category: 'Comparaisons' },
      es: { title: 'ChatGPT vs Claude: ¿Cuál es mejor en 2026?', description: 'Comparación detallada entre ChatGPT y Claude para escritura, programación y análisis de documentos.', category: 'Comparaciones' },
      tr: { title: "ChatGPT ve Claude: 2026'da Hangisi Daha İyi?", description: "Yazma, kodlama ve belge analizi için ChatGPT ve Claude'un ayrıntılı karşılaştırması.", category: 'Karşılaştırmalar' },
      de: { title: 'ChatGPT vs Claude: Was ist besser in 2026?', description: 'Ein detaillierter Vergleich von ChatGPT und Claude für Schreiben, Coding und Dokumentenanalyse.', category: 'Vergleiche' },
    },
    content: `
## ChatGPT مقابل Claude: مقارنة شاملة

سؤال يكثر في مجتمعات الذكاء الاصطناعي: ChatGPT أم Claude؟ الجواب يعتمد على احتياجاتك تماماً.

### الكتابة الإبداعية
**ChatGPT:** ممتاز في كتابة المحتوى التسويقي والمقالات العامة.
**Claude:** أكثر دقةً وعمقاً. يفهم الفروق الدقيقة في اللغة.
**الفائز:** Claude في الكتابة الإبداعية

### البرمجة
**ChatGPT:** ممتاز مع GPT-4o. يدعم مئات اللغات.
**Claude:** دقيق جداً ويشرح الكود بتفصيل.
**الفائز:** تعادل — كلاهما ممتاز

### تحليل المستندات
**Claude:** 200,000 توكن! يمكنه قراءة كتاب كامل دفعة واحدة.
**الفائز:** Claude بفارق كبير

### الحكم النهائي
- **إذا كنت تعمل مع وثائق طويلة → Claude**
- **إذا كنت تريد أداة يومية شاملة → ChatGPT**
    `,
  },
  {
    slug: 'free-ai-tools-2025',
    date: '2026-03-10',
    readTime: 6,
    image: '🆓',
    i18n: {
      ar: { title: 'أفضل أدوات AI المجانية في 2026 — لا حاجة لبطاقة ائتمان', description: 'قائمة بأفضل أدوات الذكاء الاصطناعي المجانية بالكامل أو التي تقدم خطة مجانية سخية.', category: 'أدلة' },
      en: { title: 'Best Free AI Tools in 2026 — No Credit Card Needed', description: 'A list of the best completely free AI tools or those that offer a generous free plan.', category: 'Guides' },
      fr: { title: 'Meilleurs outils IA gratuits en 2026 — Sans carte bancaire', description: 'Une liste des meilleurs outils IA entièrement gratuits ou proposant un plan gratuit généreux.', category: 'Guides' },
      es: { title: 'Mejores herramientas de IA gratuitas en 2026', description: 'Una lista de las mejores herramientas de IA completamente gratuitas o con un plan gratuito generoso.', category: 'Guías' },
      tr: { title: "2026'nın En İyi Ücretsiz Yapay Zeka Araçları", description: "Tamamen ücretsiz olan veya cömert bir ücretsiz plan sunan en iyi yapay zeka araçlarının listesi.", category: 'Kılavuzlar' },
      de: { title: 'Beste kostenlose KI-Tools 2026 — Keine Kreditkarte nötig', description: 'Eine Liste der besten völlig kostenlosen KI-Tools oder solcher mit einem großzügigen kostenlosen Plan.', category: 'Ratgeber' },
    },
    content: `
## أفضل أدوات AI المجانية في 2026

لست بحاجة لإنفاق المال للاستفادة من الذكاء الاصطناعي. هذه أفضل الأدوات المجانية:

### 1. ChatGPT المجاني (GPT-4o mini)
النسخة المجانية من ChatGPT قوية جداً. GPT-4o mini أسرع وكافٍ لمعظم المهام اليومية.

### 2. Claude المجاني
النسخة المجانية من Claude تعطيك Sonnet كامل مع بعض القيود اليومية.

### 3. Gemini المجاني
Gemini 1.5 Flash مجاني تماماً وسريع للغاية.

### 4. Perplexity المجاني
5 بحثات مجانية يومياً مع مصادر موثّقة.

### 5. Stable Diffusion — مجاني للأبد
مفتوح المصدر، يعمل على جهازك، لا حدود، لا قيود.

### نصيحة للتوفير
استخدم أكثر من أداة بالتناوب للاستفادة من جميع الحدود المجانية!
    `,
  },
  {
    slug: 'ai-image-generators-guide',
    date: '2026-02-28',
    readTime: 12,
    image: '🎨',
    i18n: {
      ar: { title: 'دليل أدوات توليد الصور بالذكاء الاصطناعي — مقارنة شاملة', description: 'Midjourney، DALL·E 3، Stable Diffusion، Adobe Firefly — أيها يناسبك؟ مقارنة دقيقة بالأمثلة.', category: 'أدلة' },
      en: { title: 'AI Image Generator Guide — Full Comparison', description: 'Midjourney, DALL·E 3, Stable Diffusion, Adobe Firefly — which one suits you? A detailed comparison with examples.', category: 'Guides' },
      fr: { title: 'Guide des générateurs d\'images IA — Comparaison complète', description: 'Midjourney, DALL·E 3, Stable Diffusion, Adobe Firefly — lequel vous convient ? Comparaison détaillée.', category: 'Guides' },
      es: { title: 'Guía de generadores de imágenes IA — Comparación completa', description: 'Midjourney, DALL·E 3, Stable Diffusion, Adobe Firefly — ¿cuál te conviene? Comparación detallada con ejemplos.', category: 'Guías' },
      tr: { title: 'Yapay Zeka Görsel Üretici Rehberi — Tam Karşılaştırma', description: "Midjourney, DALL·E 3, Stable Diffusion, Adobe Firefly — hangisi size uygun? Örneklerle ayrıntılı karşılaştırma.", category: 'Kılavuzlar' },
      de: { title: 'KI-Bildgenerator-Guide — Vollständiger Vergleich', description: 'Midjourney, DALL·E 3, Stable Diffusion, Adobe Firefly — welches passt zu Ihnen? Detaillierter Vergleich.', category: 'Ratgeber' },
    },
    content: `
## دليل أدوات توليد الصور بالذكاء الاصطناعي

وصلت أدوات توليد الصور لمستوى لا يمكن تمييزه من التصوير الحقيقي في بعض الحالات. إليك مقارنة شاملة:

### Midjourney v6 — الأفضل جمالياً
**الجودة:** ⭐⭐⭐⭐⭐ | **السعر:** من 10$/شهر

### DALL·E 3 — الأفضل في فهم التعليمات
**الجودة:** ⭐⭐⭐⭐ | **السعر:** مجاني مع ChatGPT Plus

### Stable Diffusion — الأقوى للمتقدمين
**الجودة:** ⭐⭐⭐⭐⭐ | **السعر:** مجاني تماماً

### Adobe Firefly — الأكثر أماناً تجارياً
**الجودة:** ⭐⭐⭐⭐ | **السعر:** مجاني + Creative Cloud
    `,
  },
  {
    slug: 'ai-writing-tools-arabic',
    date: '2026-02-15',
    readTime: 7,
    image: '✍️',
    i18n: {
      ar: { title: 'أفضل أدوات AI لكتابة المحتوى العربي في 2025', description: 'هل تكتب محتوى عربياً؟ هذه أفضل أدوات الذكاء الاصطناعي التي تدعم العربية بشكل ممتاز.', category: 'أدلة' },
      en: { title: 'Best AI Tools for Arabic Content Writing in 2025', description: 'Writing Arabic content? These are the best AI tools that support Arabic excellently.', category: 'Guides' },
      fr: { title: 'Meilleurs outils IA pour l\'écriture en arabe en 2025', description: 'Vous écrivez du contenu en arabe ? Voici les meilleurs outils IA qui supportent excellemment l\'arabe.', category: 'Guides' },
      es: { title: 'Mejores herramientas IA para contenido en árabe en 2025', description: '¿Escribes contenido en árabe? Estas son las mejores herramientas de IA que soportan el árabe excelentemente.', category: 'Guías' },
      tr: { title: "2025'te Arapça İçerik Yazımı İçin En İyi Yapay Zeka Araçları", description: "Arapça içerik mi yazıyorsunuz? İşte Arapçayı mükemmel destekleyen en iyi yapay zeka araçları.", category: 'Kılavuzlar' },
      de: { title: 'Beste KI-Tools für arabische Inhalte 2025', description: 'Schreiben Sie arabische Inhalte? Das sind die besten KI-Tools mit hervorragender Arabisch-Unterstützung.', category: 'Ratgeber' },
    },
    content: `
## أفضل أدوات AI لكتابة المحتوى العربي

دعم اللغة العربية في أدوات AI تطور بشكل كبير. إليك الأفضل:

### 1. ChatGPT — الأفضل للعربية
GPT-4o يفهم العربية الفصحى والعامية بشكل ممتاز.

### 2. Claude — دقيق في العربية الفصحى
Claude يكتب بعربية أكاديمية دقيقة.

### 3. Gemini — للمحتوى العربي السريع
Gemini 1.5 يفهم العربية جيداً ويستجيب بسرعة.
    `,
  },
  {
    slug: 'ai-productivity-guide',
    date: '2026-01-30',
    readTime: 9,
    image: '⚡',
    i18n: {
      ar: { title: 'كيف توظّف الذكاء الاصطناعي لمضاعفة إنتاجيتك', description: 'دليل عملي لاستخدام أدوات AI في عملك اليومي — وفّر ساعات من وقتك كل أسبوع.', category: 'أدلة' },
      en: { title: 'How to Use AI to Double Your Productivity', description: 'A practical guide to using AI tools in your daily work — save hours every week.', category: 'Guides' },
      fr: { title: 'Comment utiliser l\'IA pour doubler votre productivité', description: 'Un guide pratique pour utiliser les outils IA dans votre travail quotidien — économisez des heures chaque semaine.', category: 'Guides' },
      es: { title: 'Cómo usar la IA para duplicar tu productividad', description: 'Una guía práctica para usar herramientas de IA en tu trabajo diario — ahorra horas cada semana.', category: 'Guías' },
      tr: { title: 'Yapay Zekayı Verimliliğinizi İkiye Katlamak İçin Nasıl Kullanırsınız', description: "Günlük çalışmanızda yapay zeka araçlarını kullanmak için pratik bir kılavuz — haftada saatler kazanın.", category: 'Kılavuzlar' },
      de: { title: 'Wie Sie KI nutzen, um Ihre Produktivität zu verdoppeln', description: 'Ein praktischer Leitfaden zur Nutzung von KI-Tools in Ihrer täglichen Arbeit — sparen Sie jede Woche Stunden.', category: 'Ratgeber' },
    },
    content: `
## كيف توظّف الذكاء الاصطناعي لمضاعفة إنتاجيتك

الذكاء الاصطناعي ليس مجرد أداة تجربها — هو مساعد حقيقي يمكنه مضاعفة إنتاجيتك.

### الكتابة والمحتوى (وفّر 5 ساعات/أسبوع)
- كتابة مسودات أولى للمقالات
- إعادة صياغة النصوص
- تلخيص الاجتماعات والوثائق

**الأداة:** ChatGPT أو Claude

### البرمجة (وفّر 10 ساعات/أسبوع)
- إكمال الكود تلقائياً
- شرح الكود المعقد
- كتابة الاختبارات

**الأداة:** GitHub Copilot + ChatGPT

### البحث والتحليل (وفّر 3 ساعات/أسبوع)
- تلخيص المقالات والأبحاث الطويلة
- ترجمة المحتوى الأجنبي

**الأداة:** Perplexity AI + Claude
    `,
  },
]

export function getBlogPost(slug: string, locale: string = 'ar'): BlogPost | undefined {
  const post = POSTS_META.find((p) => p.slug === slug)
  if (!post) return undefined
  const lang = (locale as Locale) in post.i18n ? (locale as Locale) : 'ar'
  return {
    slug: post.slug,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    content: post.content,
    ...post.i18n[lang],
  }
}

export function getRecentPosts(limit = 6, locale: string = 'ar'): BlogPost[] {
  return [...POSTS_META]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
    .map((post) => {
      const lang = (locale as Locale) in post.i18n ? (locale as Locale) : 'ar'
      return {
        slug: post.slug,
        date: post.date,
        readTime: post.readTime,
        image: post.image,
        content: post.content,
        ...post.i18n[lang],
      }
    })
}
