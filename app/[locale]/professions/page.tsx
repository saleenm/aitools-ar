import Link from 'next/link'
import { Metadata } from 'next'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'أدوات AI للمهن | محامون، أطباء، مهندسون معماريون والمزيد', description: 'اكتشف أفضل أدوات الذكاء الاصطناعي لكل مهنة: محامون، أطباء، معلمون، محاسبون، مهندسون معماريون والمزيد.' },
  en: { title: 'AI Tools by Profession | Lawyers, Doctors, Architects & More', description: 'Discover the best AI tools for every profession: lawyers, doctors, teachers, accountants, architects, engineers and more.' },
  fr: { title: 'Outils IA par Profession | Avocats, Médecins, Architectes', description: 'Découvrez les meilleurs outils IA pour chaque profession: avocats, médecins, enseignants, comptables, architectes et ingénieurs.' },
  es: { title: 'Herramientas IA por Profesión | Abogados, Médicos, Arquitectos', description: 'Descubre las mejores herramientas IA para cada profesión: abogados, médicos, maestros, contables, arquitectos e ingenieros.' },
  tr: { title: 'Mesleğe Göre AI Araçları | Avukatlar, Doktorlar, Mimarlar', description: 'Her meslek için en iyi AI araçlarını keşfedin: avukatlar, doktorlar, öğretmenler, muhasebeciler, mimarlar ve mühendisler.' },
  de: { title: 'KI-Tools nach Beruf | Anwälte, Ärzte, Architekten', description: 'Entdecken Sie die besten KI-Tools für jeden Beruf: Anwälte, Ärzte, Lehrer, Buchhalter, Architekten und Ingenieure.' },
}

const HEADINGS: Record<string, { title: string; subtitle: string }> = {
  ar: { title: 'أدوات AI لكل مهنة', subtitle: 'اختر مجالك واكتشف الأدوات التي تحتاجها' },
  en: { title: 'AI Tools for Every Profession', subtitle: 'Choose your field and discover the tools you need' },
  fr: { title: 'Outils IA pour Chaque Profession', subtitle: 'Choisissez votre domaine et découvrez les outils dont vous avez besoin' },
  es: { title: 'Herramientas IA para Cada Profesión', subtitle: 'Elige tu campo y descubre las herramientas que necesitas' },
  tr: { title: 'Her Meslek İçin AI Araçları', subtitle: 'Alanınızı seçin ve ihtiyacınız olan araçları keşfedin' },
  de: { title: 'KI-Tools für Jeden Beruf', subtitle: 'Wählen Sie Ihr Fachgebiet und entdecken Sie die Tools, die Sie benötigen' },
}

const PROFESSIONS: {
  slug: string
  emoji: string
  label: Record<string, string>
  desc: Record<string, string>
  blogSlug: string
}[] = [
  {
    slug: 'lawyers',
    emoji: '⚖️',
    blogSlug: 'ai-tools-for-lawyers-2026',
    label: { ar: 'المحامون', en: 'Lawyers', fr: 'Avocats', es: 'Abogados', tr: 'Avukatlar', de: 'Anwälte' },
    desc: { ar: 'بحث قانوني، صياغة عقود، تحليل قضايا', en: 'Legal research, contract drafting, case analysis', fr: 'Recherche juridique, rédaction de contrats, analyse de cas', es: 'Investigación legal, redacción de contratos, análisis de casos', tr: 'Hukuki araştırma, sözleşme taslakları, dava analizi', de: 'Rechtsrecherche, Vertragsentwürfe, Fallanalyse' },
  },
  {
    slug: 'architects',
    emoji: '🏗️',
    blogSlug: 'ai-tools-for-architects-2026',
    label: { ar: 'المهندسون المعماريون', en: 'Architects', fr: 'Architectes', es: 'Arquitectos', tr: 'Mimarlar', de: 'Architekten' },
    desc: { ar: 'تصميم معماري، نمذجة ثلاثية الأبعاد، العروض التقديمية', en: '3D modeling, design, client presentations', fr: 'Modélisation 3D, conception, présentations clients', es: 'Modelado 3D, diseño, presentaciones a clientes', tr: '3D modelleme, tasarım, müşteri sunumları', de: '3D-Modellierung, Design, Kundenpräsentationen' },
  },
  {
    slug: 'doctors',
    emoji: '🏥',
    blogSlug: 'ai-tools-for-doctors-2026',
    label: { ar: 'الأطباء', en: 'Doctors', fr: 'Médecins', es: 'Médicos', tr: 'Doktorlar', de: 'Ärzte' },
    desc: { ar: 'تشخيص، أبحاث طبية، سجلات المرضى', en: 'Diagnostics, medical research, patient records', fr: 'Diagnostic, recherche médicale, dossiers patients', es: 'Diagnóstico, investigación médica, historial de pacientes', tr: 'Teşhis, tıbbi araştırma, hasta kayıtları', de: 'Diagnose, medizinische Forschung, Patientenakten' },
  },
  {
    slug: 'teachers',
    emoji: '📚',
    blogSlug: 'ai-tools-for-teachers-2026',
    label: { ar: 'المعلمون', en: 'Teachers', fr: 'Enseignants', es: 'Maestros', tr: 'Öğretmenler', de: 'Lehrer' },
    desc: { ar: 'إنشاء محتوى تعليمي، تقييم الطلاب، تخطيط الدروس', en: 'Lesson planning, student assessment, educational content', fr: 'Planification de cours, évaluation des élèves, contenu éducatif', es: 'Planificación de lecciones, evaluación de estudiantes, contenido educativo', tr: 'Ders planlaması, öğrenci değerlendirmesi, eğitim içeriği', de: 'Unterrichtsplanung, Schülerbewertung, Lernmaterialien' },
  },
  {
    slug: 'accountants',
    emoji: '💰',
    blogSlug: 'ai-tools-for-accountants-2026',
    label: { ar: 'المحاسبون', en: 'Accountants', fr: 'Comptables', es: 'Contables', tr: 'Muhasebeciler', de: 'Buchhalter' },
    desc: { ar: 'تحليل مالي، تقارير ضريبية، توقع الميزانية', en: 'Financial analysis, tax reports, budget forecasting', fr: 'Analyse financière, rapports fiscaux, prévision budgétaire', es: 'Análisis financiero, informes fiscales, previsión de presupuesto', tr: 'Finansal analiz, vergi raporları, bütçe tahmini', de: 'Finanzanalyse, Steuerberichte, Budgetprognose' },
  },
  {
    slug: 'marketers',
    emoji: '📊',
    blogSlug: 'ai-tools-for-marketers-2026',
    label: { ar: 'المسوقون', en: 'Marketers', fr: 'Marketeurs', es: 'Marketeros', tr: 'Pazarlamacılar', de: 'Marketer' },
    desc: { ar: 'إنشاء محتوى، تحليل بيانات، إدارة الحملات', en: 'Content creation, data analytics, campaign management', fr: 'Création de contenu, analyse de données, gestion de campagnes', es: 'Creación de contenido, análisis de datos, gestión de campañas', tr: 'İçerik oluşturma, veri analizi, kampanya yönetimi', de: 'Content-Erstellung, Datenanalyse, Kampagnenmanagement' },
  },
  {
    slug: 'real-estate',
    emoji: '🏠',
    blogSlug: 'ai-tools-for-real-estate-2026',
    label: { ar: 'العقارات', en: 'Real Estate', fr: 'Immobilier', es: 'Bienes Raíces', tr: 'Gayrimenkul', de: 'Immobilien' },
    desc: { ar: 'قوائم العقارات، توقع الأسعار، تواصل مع العملاء', en: 'Property listings, price prediction, client outreach', fr: 'Annonces immobilières, prédiction de prix, contact clients', es: 'Listados de propiedades, predicción de precios, contacto con clientes', tr: 'Mülk ilanları, fiyat tahmini, müşteri iletişimi', de: 'Immobilienangebote, Preisvorhersage, Kundenkontakt' },
  },
  {
    slug: 'hr',
    emoji: '👔',
    blogSlug: 'ai-tools-for-hr-2026',
    label: { ar: 'الموارد البشرية', en: 'HR Professionals', fr: 'RH', es: 'Recursos Humanos', tr: 'İK Uzmanları', de: 'HR-Fachleute' },
    desc: { ar: 'توظيف، تقييم المرشحين، إدارة الفرق', en: 'Recruiting, candidate screening, team management', fr: 'Recrutement, sélection de candidats, gestion d\'équipe', es: 'Reclutamiento, cribado de candidatos, gestión de equipos', tr: 'İşe alım, aday seçimi, ekip yönetimi', de: 'Recruiting, Kandidatenauswahl, Teammanagement' },
  },
  {
    slug: 'engineers',
    emoji: '⚙️',
    blogSlug: 'ai-tools-for-engineers-2026',
    label: { ar: 'المهندسون', en: 'Engineers', fr: 'Ingénieurs', es: 'Ingenieros', tr: 'Mühendisler', de: 'Ingenieure' },
    desc: { ar: 'تصميم تقني، محاكاة، توثيق مشاريع', en: 'Technical design, simulation, project documentation', fr: 'Conception technique, simulation, documentation de projet', es: 'Diseño técnico, simulación, documentación de proyectos', tr: 'Teknik tasarım, simülasyon, proje dokümantasyonu', de: 'Technisches Design, Simulation, Projektdokumentation' },
  },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = META[params.locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates('/professions', params.locale),
    openGraph: { title: m.title, description: m.description, type: 'website' },
  }
}

export default function ProfessionsPage({ params }: Props) {
  const { locale } = params
  const h = HEADINGS[locale] || HEADINGS.en
  const base = `/${locale}`
  const isRTL = locale === 'ar'

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">
            {h.title}
          </span>
        </h1>
        <p className="text-gray-400">{h.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROFESSIONS.map((prof) => {
          const label = prof.label[locale] || prof.label.en
          const desc = prof.desc[locale] || prof.desc.en
          return (
            <Link
              key={prof.slug}
              href={`${base}/blog/${prof.blogSlug}`}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 hover:bg-gray-900/80 transition-all duration-200 hover:-translate-y-0.5"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="text-4xl mb-4">{prof.emoji}</div>
              <h2 className="font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
                {label}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-violet-400 text-sm font-medium">
                <span>{isRTL ? 'اكتشف الأدوات' : 'Explore tools'}</span>
                <span className={`transition-transform group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'}`}>
                  {isRTL ? '←' : '→'}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href={`${base}/blog`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
        >
          {isRTL ? '← جميع المقالات' : 'All Articles →'}
        </Link>
      </div>
    </main>
  )
}
