import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

const CONTENT: Record<string, {
  title: string; subtitle: string; mission: string; missionText: string;
  what: string; whatText: string; why: string; whyText: string;
  team: string; teamText: string; contact: string; contactText: string;
  values: Array<{ icon: string; title: string; text: string }>;
}> = {
  ar: {
    title: 'من نحن', subtitle: 'دليل أدوات الذكاء الاصطناعي المتكامل',
    mission: 'مهمتنا',
    missionText: 'نسعى في AI Tools إلى تقديم الدليل الأشمل والأكثر موثوقية لأدوات الذكاء الاصطناعي باللغة العربية وستة لغات أخرى. هدفنا مساعدة الأفراد والشركات على اكتشاف الأدوات المناسبة لاحتياجاتهم من بين مئات الحلول المتاحة في السوق.',
    what: 'ماذا نقدم',
    whatText: 'نقدم مراجعات شاملة وموضوعية لأدوات الذكاء الاصطناعي في مجالات متعددة: الكتابة، البرمجة، توليد الصور، الفيديو، الصوت، الإنتاجية، وتحسين محركات البحث. كل مراجعة تشمل المزايا والعيوب والأسعار ومقارنات معمّقة.',
    why: 'لماذا AI Tools',
    whyText: 'نحن نختبر كل أداة بأنفسنا قبل نشر أي مراجعة. نحرص على التحديث المستمر لمواكبة التطورات المتسارعة في مجال الذكاء الاصطناعي. محتوانا متاح بست لغات لضمان وصول أوسع لمستخدمين حول العالم.',
    team: 'فريقنا',
    teamText: 'نحن فريق من المتخصصين في التقنية والذكاء الاصطناعي، نعمل بشغف على رصد وتقييم أحدث الأدوات والحلول التقنية. نؤمن بأن الذكاء الاصطناعي يجب أن يكون في متناول الجميع.',
    contact: 'تواصل معنا',
    contactText: 'يسعدنا تلقي استفساراتك ومقترحاتك. يمكنك إرسال أداة جديدة أو التواصل معنا عبر صفحة التواصل.',
    values: [
      { icon: '🎯', title: 'الدقة', text: 'نتحقق من كل معلومة قبل نشرها' },
      { icon: '🔄', title: 'التحديث', text: 'نواكب آخر التطورات يومياً' },
      { icon: '🌍', title: 'الشمولية', text: 'محتوى بست لغات للوصول للجميع' },
      { icon: '🆓', title: 'المجانية', text: 'دليلنا مجاني بالكامل للمستخدمين' },
    ],
  },
  en: {
    title: 'About Us', subtitle: 'The Complete AI Tools Directory',
    mission: 'Our Mission',
    missionText: 'At AI Tools, we strive to provide the most comprehensive and reliable directory of artificial intelligence tools in Arabic and six other languages. Our goal is to help individuals and businesses discover the right tools for their needs among hundreds of available solutions.',
    what: 'What We Offer',
    whatText: 'We provide in-depth, objective reviews of AI tools across multiple domains: writing, coding, image generation, video, audio, productivity, and SEO. Every review includes pros, cons, pricing, and detailed comparisons.',
    why: 'Why AI Tools',
    whyText: 'We personally test every tool before publishing any review. We continuously update our content to keep pace with the rapidly evolving AI landscape. Our content is available in six languages to ensure broader reach for users worldwide.',
    team: 'Our Team',
    teamText: 'We are a team of technology and AI specialists, passionately monitoring and evaluating the latest tools and tech solutions. We believe AI should be accessible to everyone.',
    contact: 'Contact Us',
    contactText: 'We welcome your inquiries and suggestions. You can submit a new tool or reach us through our contact page.',
    values: [
      { icon: '🎯', title: 'Accuracy', text: 'We verify every piece of information before publishing' },
      { icon: '🔄', title: 'Up-to-date', text: 'We track the latest developments daily' },
      { icon: '🌍', title: 'Inclusive', text: 'Content in 6 languages to reach everyone' },
      { icon: '🆓', title: 'Free', text: 'Our directory is completely free for users' },
    ],
  },
  fr: {
    title: 'À propos', subtitle: 'Le répertoire complet des outils IA',
    mission: 'Notre Mission',
    missionText: "Chez AI Tools, nous nous efforçons de fournir le répertoire le plus complet et fiable d'outils d'intelligence artificielle en arabe et dans six autres langues.",
    what: 'Ce que nous proposons',
    whatText: "Nous proposons des avis approfondis et objectifs sur des outils IA dans de nombreux domaines : écriture, programmation, génération d'images, vidéo, audio, productivité et SEO.",
    why: 'Pourquoi AI Tools',
    whyText: "Nous testons personnellement chaque outil avant de publier un avis. Nous mettons à jour continuellement notre contenu pour suivre l'évolution rapide de l'IA.",
    team: 'Notre équipe',
    teamText: "Nous sommes une équipe de spécialistes en technologie et en IA, passionnément engagés à surveiller et évaluer les derniers outils et solutions technologiques.",
    contact: 'Contactez-nous',
    contactText: "Nous accueillons vos questions et suggestions. Vous pouvez soumettre un nouvel outil ou nous contacter via notre page de contact.",
    values: [
      { icon: '🎯', title: 'Précision', text: 'Nous vérifions chaque information avant publication' },
      { icon: '🔄', title: 'À jour', text: 'Nous suivons les derniers développements quotidiennement' },
      { icon: '🌍', title: 'Inclusif', text: 'Contenu en 6 langues pour atteindre tout le monde' },
      { icon: '🆓', title: 'Gratuit', text: 'Notre répertoire est entièrement gratuit' },
    ],
  },
  es: {
    title: 'Sobre nosotros', subtitle: 'El directorio completo de herramientas IA',
    mission: 'Nuestra Misión',
    missionText: 'En AI Tools, nos esforzamos por proporcionar el directorio más completo y confiable de herramientas de inteligencia artificial en árabe y seis idiomas más.',
    what: 'Qué ofrecemos',
    whatText: 'Ofrecemos reseñas detalladas y objetivas de herramientas de IA en múltiples áreas: escritura, programación, generación de imágenes, vídeo, audio, productividad y SEO.',
    why: 'Por qué AI Tools',
    whyText: 'Probamos personalmente cada herramienta antes de publicar cualquier reseña. Actualizamos continuamente nuestro contenido para seguir el ritmo de la evolución de la IA.',
    team: 'Nuestro equipo',
    teamText: 'Somos un equipo de especialistas en tecnología e IA, apasionadamente comprometidos en monitorear y evaluar las últimas herramientas.',
    contact: 'Contáctenos',
    contactText: 'Bienvenidas sus consultas y sugerencias. Puede enviarnos una nueva herramienta o contactarnos a través de nuestra página de contacto.',
    values: [
      { icon: '🎯', title: 'Precisión', text: 'Verificamos cada dato antes de publicar' },
      { icon: '🔄', title: 'Actualizado', text: 'Seguimos los últimos desarrollos diariamente' },
      { icon: '🌍', title: 'Inclusivo', text: 'Contenido en 6 idiomas' },
      { icon: '🆓', title: 'Gratis', text: 'Nuestro directorio es completamente gratuito' },
    ],
  },
  tr: {
    title: 'Hakkımızda', subtitle: 'Kapsamlı Yapay Zeka Araçları Rehberi',
    mission: 'Misyonumuz',
    missionText: "AI Tools olarak, Arapça ve altı dilde yapay zeka araçlarının en kapsamlı ve güvenilir rehberini sunmaya çalışıyoruz.",
    what: 'Ne Sunuyoruz',
    whatText: 'Yazma, kodlama, görüntü oluşturma, video, ses, üretkenlik ve SEO gibi birçok alanda kapsamlı ve objektif yapay zeka aracı incelemeleri sunuyoruz.',
    why: 'Neden AI Tools',
    whyText: "Herhangi bir inceleme yayınlamadan önce her aracı kendimiz test ediyoruz. Hızla gelişen yapay zeka ortamıyla ayak uydurmak için içeriğimizi sürekli güncelliyoruz.",
    team: 'Ekibimiz',
    teamText: "En son araçları ve teknolojik çözümleri tutkuyla izleyip değerlendiren bir teknoloji ve yapay zeka uzmanları ekibiyiz.",
    contact: 'Bize Ulaşın',
    contactText: "Soru ve önerilerinizi memnuniyetle karşılıyoruz. İletişim sayfamız aracılığıyla bize ulaşabilirsiniz.",
    values: [
      { icon: '🎯', title: 'Doğruluk', text: 'Yayınlamadan önce her bilgiyi doğruluyoruz' },
      { icon: '🔄', title: 'Güncel', text: 'En son gelişmeleri günlük takip ediyoruz' },
      { icon: '🌍', title: 'Kapsayıcı', text: '6 dilde içerik' },
      { icon: '🆓', title: 'Ücretsiz', text: 'Rehberimiz tamamen ücretsizdir' },
    ],
  },
  de: {
    title: 'Über uns', subtitle: 'Das umfassende KI-Tools-Verzeichnis',
    mission: 'Unsere Mission',
    missionText: 'Bei AI Tools streben wir danach, das umfassendste und zuverlässigste Verzeichnis von KI-Tools auf Arabisch und in sechs weiteren Sprachen bereitzustellen.',
    what: 'Was wir anbieten',
    whatText: 'Wir bieten ausführliche, objektive Bewertungen von KI-Tools in vielen Bereichen: Schreiben, Programmierung, Bildgenerierung, Video, Audio, Produktivität und SEO.',
    why: 'Warum AI Tools',
    whyText: 'Wir testen jedes Tool persönlich, bevor wir eine Bewertung veröffentlichen. Wir aktualisieren unsere Inhalte kontinuierlich.',
    team: 'Unser Team',
    teamText: 'Wir sind ein Team von Technologie- und KI-Spezialisten, die leidenschaftlich die neuesten Tools überwachen und bewerten.',
    contact: 'Kontakt',
    contactText: 'Wir freuen uns über Ihre Anfragen und Vorschläge. Sie können uns über unsere Kontaktseite erreichen.',
    values: [
      { icon: '🎯', title: 'Genauigkeit', text: 'Wir prüfen alle Informationen vor der Veröffentlichung' },
      { icon: '🔄', title: 'Aktuell', text: 'Wir verfolgen die neuesten Entwicklungen täglich' },
      { icon: '🌍', title: 'Inklusiv', text: 'Inhalte in 6 Sprachen' },
      { icon: '🆓', title: 'Kostenlos', text: 'Unser Verzeichnis ist völlig kostenlos' },
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const c = CONTENT[locale] || CONTENT.en
  return {
    title: `${c.title} — AI Tools`,
    description: c.missionText.slice(0, 160),
    alternates: buildAlternates('/about', locale),
  }
}

export default function AboutPage({ params }: Props) {
  const { locale } = params
  const c = CONTENT[locale] || CONTENT.en
  const isRTL = locale === 'ar'
  const base = `/${locale}`

  return (
    <>
      <Header />
      <main style={{ background: '#030712' }}>
        {/* Hero */}
        <section className="border-b border-gray-800/50"
          style={{ background: 'radial-gradient(ellipse 100% 200% at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 60%), #0a0e17' }}>
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-6">
              🤖 AI Tools
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">{c.title}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{c.subtitle}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

          {/* Values grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.values.map((v) => (
              <div key={v.title} className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-400 to-violet-600 inline-block" />
              {c.mission}
            </h2>
            <p className="text-gray-300 leading-relaxed">{c.missionText}</p>
          </section>

          {/* What we offer */}
          <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-400 to-violet-600 inline-block" />
              {c.what}
            </h2>
            <p className="text-gray-300 leading-relaxed">{c.whatText}</p>
          </section>

          {/* Why us */}
          <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-400 to-violet-600 inline-block" />
              {c.why}
            </h2>
            <p className="text-gray-300 leading-relaxed">{c.whyText}</p>
          </section>

          {/* Team */}
          <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-8">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-400 to-violet-600 inline-block" />
              {c.team}
            </h2>
            <p className="text-gray-300 leading-relaxed">{c.teamText}</p>
          </section>

          {/* Contact CTA */}
          <div className="rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.12) 0%, rgba(139,92,246,0.06) 100%)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <h2 className="text-xl font-black text-white mb-2">{c.contact}</h2>
            <p className="text-gray-400 mb-6">{c.contactText}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={`${base}/contact`}
                className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-colors"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Link>
              <Link href={`${base}/submit`}
                className="px-6 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium text-sm transition-colors border border-gray-700">
                {isRTL ? 'أضف أداة' : 'Submit a Tool'}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
