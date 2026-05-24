/**
 * Static English translations for tool pros/cons/features
 * Used when the database only has Arabic content
 */

type ToolI18n = {
  description?: { en: string; fr?: string; es?: string; tr?: string; de?: string }
  pros?: { en: string[]; fr?: string[]; es?: string[]; tr?: string[]; de?: string[] }
  cons?: { en: string[]; fr?: string[]; es?: string[]; tr?: string[]; de?: string[] }
  features?: { en: string[] }
}

const DESCRIPTIONS: Record<string, { en: string; fr?: string; es?: string; tr?: string; de?: string }> = {
  chatgpt: {
    en: 'ChatGPT is a large language model by OpenAI capable of natural conversation, content writing, coding, translation, and much more. It supports Arabic well and is available in both free and paid versions.',
    fr: 'ChatGPT est un grand modèle de langage d\'OpenAI capable de conversation naturelle, rédaction de contenu, programmation et traduction. Il prend bien en charge l\'arabe et est disponible en versions gratuite et payante.',
    es: 'ChatGPT es un gran modelo de lenguaje de OpenAI capaz de conversación natural, escritura de contenido, programación y traducción. Admite el árabe correctamente y está disponible en versiones gratuita y de pago.',
    tr: 'ChatGPT, OpenAI\'nin doğal konuşma, içerik yazma, kodlama ve çeviri yapabilen büyük bir dil modelidir. Arapçayı iyi destekler ve hem ücretsiz hem de ücretli sürümlerde mevcuttur.',
    de: 'ChatGPT ist ein großes Sprachmodell von OpenAI, das natürliche Konversation, Inhaltserstellung, Programmierung und Übersetzung beherrscht. Es unterstützt Arabisch gut und ist in einer kostenlosen und einer kostenpflichtigen Version verfügbar.',
  },
  gemini: {
    en: 'Gemini is Google\'s AI model that stands out for its integration with Google services and its ability to understand text, images, and audio simultaneously. It offers a generous free tier and advanced multimodal capabilities.',
    fr: 'Gemini est le modèle IA de Google, remarquable pour son intégration aux services Google et sa capacité à comprendre textes, images et audio simultanément.',
    es: 'Gemini es el modelo de IA de Google, destacado por su integración con los servicios de Google y su capacidad para comprender texto, imágenes y audio simultáneamente.',
    tr: 'Gemini, Google\'ın yapay zeka modelidir. Google hizmetleriyle entegrasyonu ve metin, görsel ile sesi aynı anda anlayabilme kapasitesiyle öne çıkar.',
    de: 'Gemini ist Googles KI-Modell, das durch die Integration in Google-Dienste und die Fähigkeit, Texte, Bilder und Audio gleichzeitig zu verstehen, hervorsticht.',
  },
  midjourney: {
    en: 'Midjourney is an AI image generation tool that creates stunning, high-quality artistic images. It operates through Discord and is renowned for its unique artistic style and exceptional image quality.',
    fr: 'Midjourney est un outil de génération d\'images IA qui crée des images artistiques de haute qualité. Il fonctionne via Discord et est reconnu pour son style artistique unique.',
    es: 'Midjourney es una herramienta de generación de imágenes IA que crea imágenes artísticas de alta calidad. Funciona a través de Discord y es reconocida por su estilo artístico único.',
    tr: 'Midjourney, yüksek kaliteli sanatsal görüntüler üreten bir yapay zeka görüntü oluşturma aracıdır. Discord üzerinden çalışır ve kendine özgü sanatsal tarzıyla tanınır.',
    de: 'Midjourney ist ein KI-Bildgenerierungstool, das beeindruckende, hochwertige künstlerische Bilder erstellt. Es arbeitet über Discord und ist für seinen einzigartigen künstlerischen Stil bekannt.',
  },
  claude: {
    en: 'Claude by Anthropic features an exceptionally long context window (200K tokens), making it ideal for analyzing lengthy documents, creative writing, and coding. It is considered one of the safest and most reliable AI models.',
    fr: 'Claude d\'Anthropic dispose d\'une fenêtre de contexte très longue (200K tokens), idéale pour analyser de longs documents, l\'écriture créative et la programmation.',
    es: 'Claude de Anthropic cuenta con una ventana de contexto muy larga (200K tokens), ideal para analizar documentos extensos, escritura creativa y programación.',
    tr: 'Anthropic\'in Claude\'u, uzun belge analizi, yaratıcı yazarlık ve kodlama için ideal olan çok uzun bir bağlam penceresine (200K token) sahiptir.',
    de: 'Claude von Anthropic verfügt über ein sehr langes Kontextfenster (200K Token), ideal für die Analyse langer Dokumente, kreatives Schreiben und Programmierung.',
  },
  'dall-e-3': {
    en: 'DALL·E 3 by OpenAI excels at deep understanding of text instructions, producing accurate images that closely match descriptions. It is available directly within ChatGPT Plus for seamless creative workflows.',
    fr: 'DALL·E 3 d\'OpenAI excelle dans la compréhension approfondie des instructions textuelles, produisant des images précises. Disponible dans ChatGPT Plus.',
    es: 'DALL·E 3 de OpenAI destaca por su comprensión profunda de las instrucciones de texto, produciendo imágenes precisas. Disponible dentro de ChatGPT Plus.',
    tr: 'OpenAI\'nin DALL·E 3\'ü, metin talimatlarını derinlemesine anlayarak açıklamalara yakın görseller üretir. ChatGPT Plus içinde mevcuttur.',
    de: 'DALL·E 3 von OpenAI zeichnet sich durch tiefes Verständnis von Textanweisungen aus und produziert genaue Bilder. In ChatGPT Plus verfügbar.',
  },
  perplexity: {
    en: 'Perplexity AI is an intelligent search engine powered by AI that searches the internet and delivers comprehensive answers with cited sources. Perfect for academic research, fact-checking, and staying up-to-date with news.',
    fr: 'Perplexity AI est un moteur de recherche intelligent propulsé par l\'IA qui fournit des réponses complètes avec des sources citées. Parfait pour la recherche académique.',
    es: 'Perplexity AI es un motor de búsqueda inteligente impulsado por IA que proporciona respuestas completas con fuentes citadas. Perfecto para la investigación académica.',
    tr: 'Perplexity AI, kaynak belirterek kapsamlı yanıtlar sunan yapay zeka destekli akıllı bir arama motorudur. Akademik araştırma için mükemmeldir.',
    de: 'Perplexity AI ist eine KI-gestützte intelligente Suchmaschine, die umfassende Antworten mit Quellenangaben liefert. Ideal für akademische Recherche.',
  },
  'github-copilot': {
    en: 'GitHub Copilot suggests complete code as you type, understanding context to write functions and unit tests. It integrates seamlessly with VS Code, JetBrains, and other major editors, dramatically boosting developer productivity.',
    fr: 'GitHub Copilot suggère du code complet pendant la frappe, comprend le contexte et écrit des fonctions et des tests. S\'intègre avec VS Code, JetBrains et d\'autres.',
    es: 'GitHub Copilot sugiere código completo mientras escribes, comprende el contexto y escribe funciones y pruebas. Se integra con VS Code, JetBrains y otros.',
    tr: 'GitHub Copilot, yazarken bağlamı anlayarak işlevler ve testler yazan eksiksiz kod önerileri sunar. VS Code, JetBrains ve diğerleriyle entegre olur.',
    de: 'GitHub Copilot schlägt beim Schreiben vollständigen Code vor, versteht den Kontext und schreibt Funktionen und Tests. Integriert sich in VS Code, JetBrains und andere.',
  },
  'stable-diffusion': {
    en: 'Stable Diffusion is an open-source image generation model that runs locally on your own hardware with no subscription required. It offers full customization through fine-tuning and LoRA models with thousands of community variations.',
    fr: 'Stable Diffusion est un modèle de génération d\'images open source qui fonctionne localement sans abonnement. Il offre une personnalisation complète via le fine-tuning et les modèles LoRA.',
    es: 'Stable Diffusion es un modelo de generación de imágenes de código abierto que se ejecuta localmente sin suscripción. Ofrece personalización completa mediante fine-tuning y modelos LoRA.',
    tr: 'Stable Diffusion, abonelik gerektirmeden yerel olarak çalışan açık kaynaklı bir görüntü oluşturma modelidir. Fine-tuning ve LoRA modelleriyle tam özelleştirme sunar.',
    de: 'Stable Diffusion ist ein Open-Source-Bildgenerierungsmodell, das lokal ohne Abonnement läuft. Es bietet vollständige Anpassung durch Fine-Tuning und LoRA-Modelle.',
  },
  'notion-ai': {
    en: 'Notion AI adds powerful artificial intelligence capabilities directly inside Notion. It helps with document writing, summarization, translation, and generating new ideas — all within your existing Notion workspace.',
    fr: 'Notion AI ajoute des capacités d\'intelligence artificielle directement dans Notion. Il aide à la rédaction, la synthèse, la traduction et la génération d\'idées au sein de votre espace de travail.',
    es: 'Notion AI añade capacidades de inteligencia artificial directamente dentro de Notion. Ayuda con redacción, resumen, traducción y generación de ideas en tu espacio de trabajo.',
    tr: 'Notion AI, güçlü yapay zeka özelliklerini doğrudan Notion\'a ekler. Belge yazma, özetleme, çeviri ve yeni fikirler üretme konusunda yardımcı olur.',
    de: 'Notion AI fügt leistungsstarke KI-Fähigkeiten direkt in Notion ein. Es hilft beim Schreiben von Dokumenten, Zusammenfassen, Übersetzen und Generieren neuer Ideen.',
  },
  grok: { en: 'Grok is xAI\'s AI model by Elon Musk with real-time access to X (Twitter) posts. It features a direct, witty conversation style and can answer questions other AI models may decline.' },
  'meta-ai': { en: 'Meta AI is the AI assistant by Meta, built directly into WhatsApp, Instagram, Facebook, and Messenger. It\'s completely free and powered by Llama 3, capable of generating images and answering questions.' },
  'microsoft-copilot': { en: 'Microsoft Copilot is the AI assistant integrated into Windows 11, Microsoft 365, and Edge browser. It uses GPT-4 and DALL·E 3 to assist with documents, emails, spreadsheets, and image generation.' },
  llama: { en: 'Llama is Meta\'s open-source large language model that can be installed locally on your computer. It\'s free for researchers and developers, offering full privacy with no internet connection required.' },
  mistral: { en: 'Mistral AI is a French company building highly efficient open-source AI models. Mistral and Mixtral models offer excellent performance-to-cost ratio and are available via API or self-hosted.' },
  cohere: { en: 'Cohere provides enterprise-grade AI models focused on search, retrieval, and generation. Command R+ is their flagship model excelling at RAG (retrieval-augmented generation) for business applications.' },
  'adobe-firefly': { en: 'Adobe Firefly is Adobe\'s generative AI tool built into Creative Cloud apps like Photoshop and Illustrator. It generates commercially safe images trained on licensed content.' },
  'canva-ai': { en: 'Canva AI brings artificial intelligence into the world\'s most popular design tool. Features like Magic Design, text-to-image, and AI presentations make professional design accessible to everyone.' },
  ideogram: { en: 'Ideogram is an AI image generator that excels at rendering accurate text within images — a major challenge for other tools. It produces high-quality typographic designs and illustrations.' },
  'leonardo-ai': { en: 'Leonardo AI is a creative AI platform for generating high-quality images, motion assets, and 3D textures. Its fine-tuned models and canvas editor make it a favorite among game developers and artists.' },
  'flux-ai': { en: 'Flux AI by Black Forest Labs delivers state-of-the-art image generation with exceptional detail and photorealism. Available in Pro, Dev, and Schnell variants with open weights.' },
  sora: { en: 'Sora by OpenAI is a groundbreaking text-to-video model capable of generating realistic, high-definition videos up to 60 seconds. It understands physics and maintains scene consistency throughout.' },
  'kling-ai': { en: 'Kling AI by Kuaishou Technology generates high-quality video from text or images with excellent face consistency. It\'s become one of the top text-to-video tools with free credits available.' },
  'pika-labs': { en: 'Pika Labs is an easy-to-use AI video generator that animates images and generates short video clips from text prompts. It features motion controls and a lip sync feature for character animation.' },
  'hailuo-ai': { en: 'Hailuo AI (MiniMax) generates realistic video clips with natural human motion. It excels at portrait and scene generation with a free trial tier available for new users.' },
  'suno-ai': { en: 'Suno AI generates complete songs — music and lyrics together — from a simple text description. It supports dozens of genres from pop to classical and lets you extend or edit generated tracks.' },
  udio: { en: 'Udio generates high-quality music from text descriptions with fine-grained style control. It\'s known for producing studio-quality audio across diverse genres and allows remixing of generated tracks.' },
  'murf-ai': { en: 'Murf AI is a professional text-to-speech platform with 120+ natural-sounding AI voices in 20+ languages. It\'s widely used for videos, podcasts, and e-learning content creation.' },
  'copy-ai': { en: 'Copy.ai is an AI writing tool specialized in marketing copy and sales content. With 90+ templates for ads, emails, product descriptions, and social posts, it dramatically speeds up copywriting workflows.' },
  writesonic: { en: 'Writesonic is an AI content platform combining writing, SEO optimization, and a ChatGPT-like chatbot called Chatsonic with real-time web search. Ideal for bloggers and digital marketers.' },
  sudowrite: { en: 'Sudowrite is an AI writing tool specifically designed for fiction writers. It helps with story generation, character development, scene description, and overcoming writer\'s block.' },
  cursor: { en: 'Cursor is a code editor built on VS Code with deeply integrated AI. It understands your entire codebase, writes new code with Composer, chats about your code, and offers intelligent tab completion.' },
  replit: { en: 'Replit is an online IDE with built-in AI assistance for code generation and debugging. It requires zero setup and runs in the browser, making it perfect for learning, prototyping, and quick deployment.' },
  tabnine: { en: 'Tabnine is an AI code completion tool that works across all major IDEs. It features a privacy mode where code never leaves your machine — ideal for enterprise and security-conscious developers.' },
  'bolt-new': { en: 'Bolt.new is an AI-powered full-stack web development platform that generates complete applications from a single prompt. It supports npm packages, instant deployment, and a live preview in the browser.' },
  'otter-ai': { en: 'Otter.ai is an AI meeting assistant that transcribes conversations in real time, generates summaries, and identifies speakers. It integrates with Zoom, Google Meet, and Microsoft Teams.' },
  'mem-ai': { en: 'Mem is an AI-powered note-taking app that automatically organizes your notes with intelligent tagging and smart search. It connects your ideas and surfaces relevant information when you need it.' },
  taskade: { en: 'Taskade is an all-in-one AI productivity platform combining task management, mind maps, notes, and video calls. Its AI agents can automate workflows and manage projects autonomously.' },
  'semrush-ai': { en: 'SEMrush with AI capabilities is the industry\'s most comprehensive SEO and digital marketing platform. Its AI writing assistant and content optimization tools help create high-ranking content at scale.' },
  'surfer-seo': { en: 'Surfer SEO uses AI to optimize content for search engines in real time. Its content editor scores your writing and provides NLP-based keyword suggestions to improve Google rankings.' },
  ahrefs: { en: 'Ahrefs is a powerful SEO toolset with the web\'s best backlink database. It provides in-depth keyword research, competitor analysis, site audits, and rank tracking for SEO professionals.' },
  'figma-ai': { en: 'Figma AI brings artificial intelligence directly into the Figma design tool with features like AI design generation, smart rename, and auto layout. It helps designers work faster and smarter.' },
  looka: { en: 'Looka is an AI-powered logo maker and brand identity platform. It generates professional logos from your preferences and includes a complete brand kit with colors, fonts, and business card designs.' },
  khroma: { en: 'Khroma is an AI color tool that learns your color preferences and generates personalized palettes, gradients, and typography combinations. It\'s free and widely used by UI/UX designers.' },
  'julius-ai': { en: 'Julius AI is a conversational data analysis tool that lets you upload CSV or Excel files and ask questions in plain English. It generates charts, runs Python, and executes SQL queries automatically.' },
  'obviously-ai': { en: 'Obviously AI is a no-code machine learning platform that builds predictive models from your data in minutes. Non-technical users can predict churn, sales, and other outcomes without writing code.' },
  'tableau-ai': { en: 'Tableau with Einstein AI is the leading data visualization platform powered by Salesforce AI. It enables natural language queries, automated insights, and interactive dashboards for business intelligence.' },
  'runway-ml': {
    en: 'Runway is the leading platform for AI-powered video generation and editing. It enables text-to-video generation, background removal, image animation, and professional-grade editing tools all in one platform.',
    fr: 'Runway est la plateforme leader dans la génération et l\'édition de vidéos par IA. Elle permet la génération vidéo à partir de texte, la suppression d\'arrière-plan et l\'animation d\'images.',
    es: 'Runway es la plataforma líder en generación y edición de video con IA. Permite generar video desde texto, eliminar fondos y animar imágenes.',
    tr: 'Runway, yapay zeka destekli video oluşturma ve düzenleme alanında lider platformdur. Metin-video dönüşümü, arka plan kaldırma ve görsel animasyon sunar.',
    de: 'Runway ist die führende Plattform für KI-gestützte Videogenerierung und -bearbeitung. Sie ermöglicht Text-zu-Video-Generierung, Hintergrundentfernung und Bildanimation.',
  },
  elevenlabs: {
    en: 'ElevenLabs produces ultra-realistic human voices using AI. It supports voice cloning, custom voice characters, and voiceover generation in over 30 languages including excellent Arabic support.',
    fr: 'ElevenLabs produit des voix humaines ultra-réalistes par IA. Il prend en charge le clonage vocal, les personnages vocaux personnalisés et la génération de voix off en plus de 30 langues.',
    es: 'ElevenLabs produce voces humanas ultrarrealistas mediante IA. Admite clonación de voz, personajes de voz personalizados y generación de narración en más de 30 idiomas.',
    tr: 'ElevenLabs, yapay zeka kullanarak ultra gerçekçi insan sesleri üretir. Ses klonlama, özel ses karakterleri ve 30\'dan fazla dilde seslendirme oluşturmayı destekler.',
    de: 'ElevenLabs produziert ultra-realistische menschliche Stimmen mit KI. Es unterstützt Stimmklonen, benutzerdefinierte Stimmcharaktere und Vertonung in über 30 Sprachen.',
  },
  'jasper-ai': {
    en: 'Jasper AI specializes in creating professional marketing content including ads, SEO articles, and social media posts. It offers 50+ ready-made templates and supports collaborative team workflows.',
    fr: 'Jasper AI se spécialise dans la création de contenu marketing professionnel : publicités, articles SEO et posts sur les réseaux sociaux. Il propose 50+ modèles prêts à l\'emploi.',
    es: 'Jasper AI se especializa en crear contenido de marketing profesional: anuncios, artículos SEO y publicaciones en redes sociales. Ofrece más de 50 plantillas listas para usar.',
    tr: 'Jasper AI, profesyonel pazarlama içeriği oluşturmada uzmanlaşmıştır: reklamlar, SEO makaleleri ve sosyal medya gönderileri. 50\'den fazla hazır şablon sunar.',
    de: 'Jasper AI ist spezialisiert auf die Erstellung professioneller Marketinginhalte: Anzeigen, SEO-Artikel und Social-Media-Posts. Es bietet 50+ fertige Vorlagen.',
  },
}

export const TOOL_I18N: Record<string, ToolI18n> = {
  chatgpt: {
    pros: {
      en: ['Easy-to-use interface', 'Supports Arabic language', 'Free version is sufficient', 'GPT-4 is very powerful'],
      fr: ['Interface facile à utiliser', 'Prend en charge l\'arabe', 'Version gratuite suffisante', 'GPT-4 très puissant'],
      es: ['Interfaz fácil de usar', 'Compatible con árabe', 'Versión gratuita suficiente', 'GPT-4 muy potente'],
      tr: ['Kullanımı kolay arayüz', 'Arapça desteği var', 'Ücretsiz sürüm yeterli', 'GPT-4 çok güçlü'],
      de: ['Einfach zu bedienende Oberfläche', 'Arabisch-Unterstützung', 'Kostenlose Version ausreichend', 'GPT-4 sehr leistungsstark'],
    },
    cons: {
      en: ['Free version can be slow at times', 'May generate inaccurate information'],
      fr: ['Version gratuite parfois lente', 'Peut générer des informations inexactes'],
      es: ['La versión gratuita puede ser lenta', 'Puede generar información incorrecta'],
      tr: ['Ücretsiz sürüm bazen yavaş', 'Yanlış bilgi üretebilir'],
      de: ['Kostenlose Version manchmal langsam', 'Kann ungenaue Informationen generieren'],
    },
    features: {
      en: ['Natural conversation', 'Content writing', 'Programming', 'File analysis', 'Image generation (Plus)'],
    },
  },
  gemini: {
    pros: {
      en: ['Largely free to use', 'Integrated with Google services', 'Very fast responses', 'Excellent image understanding'],
      fr: ['Largement gratuit', 'Intégré aux services Google', 'Très rapide', 'Excellente compréhension des images'],
      es: ['Ampliamente gratuito', 'Integrado con servicios de Google', 'Muy rápido', 'Excelente comprensión de imágenes'],
      tr: ['Büyük ölçüde ücretsiz', 'Google hizmetleriyle entegre', 'Çok hızlı', 'Görsel anlama mükemmel'],
      de: ['Weitgehend kostenlos', 'In Google-Dienste integriert', 'Sehr schnell', 'Ausgezeichnetes Bildverständnis'],
    },
    cons: {
      en: ['Less accurate than GPT-4 in some tasks', 'Inconsistent Arabic support'],
      fr: ['Moins précis que GPT-4 dans certaines tâches', 'Support arabe variable'],
      es: ['Menos preciso que GPT-4 en algunas tareas', 'Soporte árabe inconsistente'],
      tr: ['Bazı görevlerde GPT-4\'ten daha az doğru', 'Arapça desteği tutarsız'],
      de: ['Weniger genau als GPT-4 bei manchen Aufgaben', 'Inkonsistente Arabisch-Unterstützung'],
    },
    features: {
      en: ['Multimodal conversation', 'Google Workspace integration', 'Gemini Advanced', 'Web search'],
    },
  },
  claude: {
    pros: {
      en: ['Very long context (200K tokens)', 'High safety standards', 'Excellent document analysis', 'Precise and accurate responses'],
      fr: ['Très long contexte (200K tokens)', 'Normes de sécurité élevées', 'Excellente analyse de documents', 'Réponses précises'],
      es: ['Contexto muy largo (200K tokens)', 'Altos estándares de seguridad', 'Excelente análisis de documentos', 'Respuestas precisas'],
      tr: ['Çok uzun bağlam (200K token)', 'Yüksek güvenlik standartları', 'Mükemmel belge analizi', 'Hassas yanıtlar'],
      de: ['Sehr langer Kontext (200K Token)', 'Hohe Sicherheitsstandards', 'Hervorragende Dokumentenanalyse', 'Präzise Antworten'],
    },
    cons: {
      en: ['Sometimes slower than GPT-4', 'Some content restrictions'],
      fr: ['Parfois plus lent que GPT-4', 'Quelques restrictions de contenu'],
      es: ['A veces más lento que GPT-4', 'Algunas restricciones de contenido'],
      tr: ['Bazen GPT-4\'ten daha yavaş', 'Bazı içerik kısıtlamaları'],
      de: ['Manchmal langsamer als GPT-4', 'Einige Inhaltsbeschränkungen'],
    },
    features: {
      en: ['200K token context', 'PDF file analysis', 'Creative writing', 'Precise coding', 'Web search'],
    },
  },
  midjourney: {
    pros: {
      en: ['Unmatched image quality', 'Diverse artistic styles', 'Huge community'],
      fr: ['Qualité d\'image inégalée', 'Styles artistiques variés', 'Grande communauté'],
      es: ['Calidad de imagen incomparable', 'Estilos artísticos diversos', 'Gran comunidad'],
      tr: ['Eşsiz görüntü kalitesi', 'Çeşitli sanatsal stiller', 'Büyük topluluk'],
      de: ['Unübertroffene Bildqualität', 'Vielfältige Kunststile', 'Große Community'],
    },
    cons: {
      en: ['No free version', 'Works through Discord only', 'Limited Arabic prompt support'],
      fr: ['Pas de version gratuite', 'Fonctionne uniquement via Discord', 'Support limité des prompts arabes'],
      es: ['Sin versión gratuita', 'Solo funciona a través de Discord', 'Soporte árabe limitado'],
      tr: ['Ücretsiz sürüm yok', 'Yalnızca Discord üzerinden çalışır', 'Sınırlı Arapça prompt desteği'],
      de: ['Keine kostenlose Version', 'Funktioniert nur über Discord', 'Eingeschränkte Arabisch-Prompt-Unterstützung'],
    },
    features: {
      en: ['Professional image generation', 'Variety of artistic styles', 'High resolution', 'Image editing'],
    },
  },
  'dall-e-3': {
    pros: {
      en: ['Highly accurate instruction understanding', 'Available with ChatGPT Plus', 'Excellent image quality'],
      fr: ['Compréhension précise des instructions', 'Disponible avec ChatGPT Plus', 'Excellente qualité d\'image'],
      es: ['Comprensión precisa de instrucciones', 'Disponible con ChatGPT Plus', 'Excelente calidad de imagen'],
      tr: ['Talimatları yüksek doğrulukla anlama', 'ChatGPT Plus ile kullanılabilir', 'Mükemmel görüntü kalitesi'],
      de: ['Hochpräzises Anweisungsverständnis', 'Verfügbar mit ChatGPT Plus', 'Hervorragende Bildqualität'],
    },
    cons: {
      en: ['Requires Plus subscription', 'Slower than some competitors'],
      fr: ['Nécessite un abonnement Plus', 'Plus lent que certains concurrents'],
      es: ['Requiere suscripción Plus', 'Más lento que algunos competidores'],
      tr: ['Plus aboneliği gerektirir', 'Bazı rakiplerden daha yavaş'],
      de: ['Erfordert Plus-Abonnement', 'Langsamer als einige Konkurrenten'],
    },
    features: {
      en: ['Text-to-image generation', 'Deep instruction understanding', 'ChatGPT integration', 'Arabic support'],
    },
  },
  perplexity: {
    pros: {
      en: ['Free and fast', 'Reliable sources', 'Up-to-date information'],
      fr: ['Gratuit et rapide', 'Sources fiables', 'Informations à jour'],
      es: ['Gratuito y rápido', 'Fuentes confiables', 'Información actualizada'],
      tr: ['Ücretsiz ve hızlı', 'Güvenilir kaynaklar', 'Güncel bilgiler'],
      de: ['Kostenlos und schnell', 'Zuverlässige Quellen', 'Aktuelle Informationen'],
    },
    cons: {
      en: ['Less creative than ChatGPT', 'Requires constant internet connection'],
      fr: ['Moins créatif que ChatGPT', 'Nécessite une connexion internet'],
      es: ['Menos creativo que ChatGPT', 'Requiere conexión a internet constante'],
      tr: ['ChatGPT\'den daha az yaratıcı', 'Sürekli internet bağlantısı gerektirir'],
      de: ['Weniger kreativ als ChatGPT', 'Erfordert ständige Internetverbindung'],
    },
    features: {
      en: ['Real-time web search', 'Source citations', 'Accurate summaries', 'Pro with GPT-4'],
    },
  },
  'github-copilot': {
    pros: {
      en: ['Huge time savings', 'Integrated with GitHub', 'Excellent Python and JS support'],
      fr: ['Gain de temps considérable', 'Intégré à GitHub', 'Excellent support Python et JS'],
      es: ['Gran ahorro de tiempo', 'Integrado con GitHub', 'Excelente soporte para Python y JS'],
      tr: ['Büyük zaman tasarrufu', 'GitHub ile entegre', 'Python ve JS için mükemmel destek'],
      de: ['Enormes Zeitsparen', 'In GitHub integriert', 'Hervorragende Python- und JS-Unterstützung'],
    },
    cons: {
      en: ['Fully paid', 'May occasionally suggest insecure code'],
      fr: ['Entièrement payant', 'Peut parfois suggérer du code non sécurisé'],
      es: ['Completamente de pago', 'Puede sugerir código inseguro ocasionalmente'],
      tr: ['Tamamen ücretli', 'Zaman zaman güvensiz kod önerebilir'],
      de: ['Vollständig kostenpflichtig', 'Kann gelegentlich unsicheren Code vorschlagen'],
    },
    features: {
      en: ['Auto code completion', 'Test writing', 'Code explanation', '20+ programming languages', 'Chat in editor'],
    },
  },
  'stable-diffusion': {
    pros: {
      en: ['Completely free', 'Full control', 'Huge and active community'],
      fr: ['Totalement gratuit', 'Contrôle total', 'Grande communauté active'],
      es: ['Completamente gratuito', 'Control total', 'Comunidad enorme y activa'],
      tr: ['Tamamen ücretsiz', 'Tam kontrol', 'Büyük ve aktif topluluk'],
      de: ['Völlig kostenlos', 'Volle Kontrolle', 'Riesige und aktive Community'],
    },
    cons: {
      en: ['Requires a powerful GPU', 'Complex setup for beginners'],
      fr: ['Nécessite un GPU puissant', 'Configuration complexe pour les débutants'],
      es: ['Requiere una GPU potente', 'Configuración compleja para principiantes'],
      tr: ['Güçlü GPU gerektirir', 'Yeni başlayanlar için karmaşık kurulum'],
      de: ['Erfordert leistungsstarke GPU', 'Komplexes Setup für Anfänger'],
    },
    features: {
      en: ['Open source', 'Runs locally', 'LoRA and fine-tuning', 'Thousands of models', 'No content restrictions'],
    },
  },
  'notion-ai': {
    pros: {
      en: ['Integrated with workspace', 'Easy to use', 'Great for teams'],
      fr: ['Intégré à l\'espace de travail', 'Facile à utiliser', 'Excellent pour les équipes'],
      es: ['Integrado al espacio de trabajo', 'Fácil de usar', 'Excelente para equipos'],
      tr: ['Çalışma alanıyla entegre', 'Kullanımı kolay', 'Ekipler için harika'],
      de: ['In Arbeitsbereich integriert', 'Einfach zu bedienen', 'Ideal für Teams'],
    },
    cons: {
      en: ['Requires Notion subscription', 'Limited outside Notion'],
      fr: ['Nécessite un abonnement Notion', 'Limité en dehors de Notion'],
      es: ['Requiere suscripción de Notion', 'Limitado fuera de Notion'],
      tr: ['Notion aboneliği gerektirir', 'Notion dışında sınırlı'],
      de: ['Erfordert Notion-Abonnement', 'Außerhalb von Notion eingeschränkt'],
    },
    features: {
      en: ['Text writing and improvement', 'Document summarization', 'Translation', 'List and table generation', 'Notion integration'],
    },
  },
  'runway-ml': {
    pros: {
      en: ['High video quality', 'Professional interface', 'Advanced editing tools'],
      fr: ['Qualité vidéo élevée', 'Interface professionnelle', 'Outils de montage avancés'],
      es: ['Alta calidad de video', 'Interfaz profesional', 'Herramientas de edición avanzadas'],
      tr: ['Yüksek video kalitesi', 'Profesyonel arayüz', 'Gelişmiş düzenleme araçları'],
      de: ['Hohe Videoqualität', 'Professionelle Oberfläche', 'Erweiterte Bearbeitungswerkzeuge'],
    },
    cons: {
      en: ['Free plan is very limited', 'High cost for heavy production use'],
      fr: ['Plan gratuit très limité', 'Coût élevé pour une utilisation intensive'],
      es: ['El plan gratuito es muy limitado', 'Costo elevado para uso intensivo'],
      tr: ['Ücretsiz plan çok sınırlı', 'Yoğun kullanım için yüksek maliyet'],
      de: ['Kostenloser Plan sehr begrenzt', 'Hohe Kosten für intensiven Produktionseinsatz'],
    },
    features: {
      en: ['Text-to-video generation', 'Automatic background removal', 'Image animation', 'Gen-2 model', 'AI editing'],
    },
  },
  elevenlabs: {
    pros: {
      en: ['Unmatched voice quality', 'Excellent Arabic support', 'Easy-to-use API'],
      fr: ['Qualité vocale inégalée', 'Excellent support arabe', 'API facile à utiliser'],
      es: ['Calidad de voz incomparable', 'Excelente soporte árabe', 'API fácil de usar'],
      tr: ['Eşsiz ses kalitesi', 'Mükemmel Arapça desteği', 'Kullanımı kolay API'],
      de: ['Unübertroffene Sprachqualität', 'Hervorragende Arabisch-Unterstützung', 'Einfach zu bedienende API'],
    },
    cons: {
      en: ['Free plan limited to 10 minutes', 'Voice cloning requires paid plan'],
      fr: ['Plan gratuit limité à 10 minutes', 'Clonage vocal nécessite un plan payant'],
      es: ['Plan gratuito limitado a 10 minutos', 'Clonación de voz requiere plan de pago'],
      tr: ['Ücretsiz plan 10 dakikayla sınırlı', 'Ses klonlama ücretli plan gerektirir'],
      de: ['Kostenloser Plan auf 10 Minuten begrenzt', 'Stimmklonen erfordert bezahlten Plan'],
    },
    features: {
      en: ['Human voice generation', 'Voice cloning', '30+ languages', 'Available API', 'Excellent Arabic voice'],
    },
  },
  // ── Supabase expanded tools ─────────────────────────────────
  'jasper-ai': {
    pros: { en: ['Great for marketing copy', 'Tons of templates', 'Team collaboration'] },
    cons: { en: ['Expensive subscription', 'No free plan'] },
    features: { en: ['AI copywriting', '50+ templates', 'SEO mode', 'Brand voice', 'Plagiarism checker'] },
  },
  grok: {
    pros: { en: ['Real-time X/Twitter data', 'Partially free', 'Bold and direct answers'] },
    cons: { en: ['Full version requires X Premium', 'Limited outside X platform'] },
    features: { en: ['Real-time X posts access', 'Casual conversation style', 'Image analysis', 'Code generation', 'Real-time search'] },
  },
  'meta-ai': {
    pros: { en: ['Completely free', 'No separate app needed', 'Works inside WhatsApp'] },
    cons: { en: ['Privacy concerns with Meta', 'Less accurate than GPT-4'] },
    features: { en: ['WhatsApp & Instagram integration', 'Free image generation', 'Built on Llama 3', 'Multilingual', 'Web search'] },
  },
  'microsoft-copilot': {
    pros: { en: ['Integrated with Microsoft 365', 'Free in browser', 'Arabic interface support'] },
    cons: { en: ['Full version is paid', 'Requires Microsoft account'] },
    features: { en: ['Office 365 integration', 'Meeting summarization', 'Word document creation', 'Excel data analysis', 'DALL-E image generation'] },
  },
  llama: {
    pros: { en: ['Completely free', 'Full privacy', 'Works offline'] },
    cons: { en: ['Requires technical skills', 'Needs powerful hardware'] },
    features: { en: ['Open source', 'Runs locally', 'No fees', 'Customizable', 'Multiple model sizes'] },
  },
  mistral: {
    pros: { en: ['High efficiency at low cost', 'Open source', 'European-made'] },
    cons: { en: ['Less known than GPT', 'Smaller user community'] },
    features: { en: ['Open-source models', 'High efficiency', 'Available API', 'Mixtral model', 'Free Le Chat server'] },
  },
  cohere: {
    pros: { en: ['Enterprise-grade reliability', 'Strong multilingual support', 'Excellent for RAG'] },
    cons: { en: ['Less known to consumers', 'Pricing can be complex'] },
    features: { en: ['Command R+ model', 'Embed API', 'Rerank API', 'RAG support', 'Enterprise deployment'] },
  },
  'adobe-firefly': {
    pros: { en: ['Commercially safe images', 'Deep Adobe integration', 'High quality results'] },
    cons: { en: ['Requires Creative Cloud subscription', 'Limited free credits'] },
    features: { en: ['Text-to-image', 'Generative fill', 'Adobe CC integration', 'Commercial licensing', 'Style transfer'] },
  },
  'canva-ai': {
    pros: { en: ['Easy for non-designers', 'All-in-one design tool', 'Generous free tier'] },
    cons: { en: ['Less control than Photoshop', 'AI features require Pro'] },
    features: { en: ['Magic Design', 'Text to image', 'Background remover', 'AI presentations', 'Brand kit'] },
  },
  ideogram: {
    pros: { en: ['Excellent text rendering in images', 'Free tier available', 'High quality output'] },
    cons: { en: ['Limited styles vs Midjourney', 'Smaller community'] },
    features: { en: ['Text in images', 'Typography generation', 'Multiple styles', 'Remix feature', 'Free generation'] },
  },
  'leonardo-ai': {
    pros: { en: ['Very high image quality', 'Generous free plan', 'Fine-tuning support'] },
    cons: { en: ['Complex interface for beginners', 'Credits can run out fast'] },
    features: { en: ['AI image generation', 'Fine-tuned models', 'Image-to-image', 'Canvas editor', 'Motion generation'] },
  },
  'flux-ai': {
    pros: { en: ['Extremely detailed images', 'Open weights available', 'Fast generation'] },
    cons: { en: ['Requires credits for high quality', 'Some models are very large'] },
    features: { en: ['Flux Pro / Dev / Schnell', 'Photorealistic output', 'Open source weights', 'API access', 'ControlNet support'] },
  },
  sora: {
    pros: { en: ['Stunning video quality', 'Long video generation', 'Realistic physics'] },
    cons: { en: ['Limited access', 'Expensive', 'No API yet'] },
    features: { en: ['Text-to-video', 'Up to 60 seconds', 'Cinematic quality', 'Scene consistency', 'Storyboard mode'] },
  },
  'kling-ai': {
    pros: { en: ['High quality video', 'Face consistency', 'Free credits available'] },
    cons: { en: ['Slower generation', 'Limited duration in free plan'] },
    features: { en: ['Text-to-video', 'Image-to-video', 'Face tracking', '5-second clips', 'Cinematic mode'] },
  },
  'pika-labs': {
    pros: { en: ['Easy to use', 'Good motion quality', 'Discord community'] },
    cons: { en: ['Short video clips', 'Limited customization'] },
    features: { en: ['Text-to-video', 'Image animation', 'Motion control', 'Lip sync', 'Style transfer'] },
  },
  'hailuo-ai': {
    pros: { en: ['Very realistic motion', 'Good at human videos', 'Free to try'] },
    cons: { en: ['Requires phone verification', 'Limited daily credits'] },
    features: { en: ['Video generation', 'Realistic motion', 'Portrait generation', 'Scene creation', 'Audio sync'] },
  },
  'suno-ai': {
    pros: { en: ['Full song generation', 'Lyrics + music together', 'Many genres'] },
    cons: { en: ['Limited daily credits', 'No instrument isolation'] },
    features: { en: ['Full song creation', 'Lyrics generation', 'Multiple genres', 'Extend song', 'Custom style'] },
  },
  udio: {
    pros: { en: ['High audio quality', 'Detailed style control', 'Good for remixing'] },
    cons: { en: ['Credits run out quickly', 'Inconsistent results'] },
    features: { en: ['Music generation', 'Style control', 'Remix feature', 'Extended tracks', 'Instrumental mode'] },
  },
  'murf-ai': {
    pros: { en: ['Professional voice quality', '120+ voices', 'Video sync feature'] },
    cons: { en: ['Expensive for heavy use', 'Free plan very limited'] },
    features: { en: ['120+ AI voices', '20+ languages', 'Voice cloning', 'Video voiceover', 'Pitch & speed control'] },
  },
  'copy-ai': {
    pros: { en: ['Fast copy generation', '90+ templates', 'Good free plan'] },
    cons: { en: ['Output needs editing', 'Repetitive for long content'] },
    features: { en: ['Blog posts', 'Ad copy', 'Email sequences', '90+ templates', 'Brand voice'] },
  },
  writesonic: {
    pros: { en: ['SEO-focused content', 'Chatsonic with web search', 'Affordable pricing'] },
    cons: { en: ['Quality varies by template', 'Word limit on free plan'] },
    features: { en: ['AI article writer', 'Chatsonic chatbot', 'SEO optimizer', 'Paraphraser', 'Product descriptions'] },
  },
  sudowrite: {
    pros: { en: ['Built for fiction writers', 'Creative and imaginative', 'Great for writer\'s block'] },
    cons: { en: ['Niche tool', 'Expensive for casual users'] },
    features: { en: ['Story generation', 'Describe tool', 'Brainstorm', 'Rewrite', 'Pacing analysis'] },
  },
  cursor: {
    pros: { en: ['Best for developers', 'Understands full codebase', 'Generous free tier'] },
    cons: { en: ['Relies on paid AI models', 'Can be slow on large files'] },
    features: { en: ['Codebase understanding', 'Composer for new code', 'Chat with code', 'Tab autocomplete', 'All language support'] },
  },
  replit: {
    pros: { en: ['No setup required', 'Full online IDE', 'AI assistance built-in'] },
    cons: { en: ['Slow for large projects', 'Limited free compute'] },
    features: { en: ['Online IDE', 'AI code generation', 'Live collaboration', 'Deploy instantly', '50+ languages'] },
  },
  tabnine: {
    pros: { en: ['Works offline', 'Strong privacy', 'Integrates with all IDEs'] },
    cons: { en: ['Less powerful than Copilot', 'Needs training time'] },
    features: { en: ['Code completion', 'Privacy mode', 'All major IDEs', 'Team training', 'Whole-line completions'] },
  },
  'bolt-new': {
    pros: { en: ['Full app from one prompt', 'Deploys instantly', 'No coding needed'] },
    cons: { en: ['Limited for complex apps', 'Token credits run out'] },
    features: { en: ['Full-stack generation', 'Instant deployment', 'npm support', 'File system', 'Live preview'] },
  },
  'otter-ai': {
    pros: { en: ['Accurate transcription', 'Meeting summaries', 'Integrates with Zoom'] },
    cons: { en: ['Limited free minutes', 'Struggles with accents'] },
    features: { en: ['Real-time transcription', 'Meeting summary', 'Speaker identification', 'Zoom/Teams integration', 'Search transcripts'] },
  },
  'mem-ai': {
    pros: { en: ['Auto-organizes notes', 'Smart search', 'AI summarization'] },
    cons: { en: ['Expensive Pro plan', 'Mobile app limited'] },
    features: { en: ['Smart notes', 'AI search', 'Auto-tagging', 'Meeting notes', 'Collaboration'] },
  },
  taskade: {
    pros: { en: ['All-in-one workspace', 'AI agents built-in', 'Great for teams'] },
    cons: { en: ['Can be overwhelming', 'Pricing tiers complex'] },
    features: { en: ['AI task generation', 'Mind maps', 'Video calls', 'Workflow automation', 'Team collaboration'] },
  },
  'semrush-ai': {
    pros: { en: ['Industry-leading SEO data', 'AI content optimization', 'Competitor analysis'] },
    cons: { en: ['Very expensive', 'Steep learning curve'] },
    features: { en: ['Keyword research', 'AI writing assistant', 'Site audit', 'Backlink analysis', 'Position tracking'] },
  },
  'surfer-seo': {
    pros: { en: ['Real-time content scoring', 'NLP-powered suggestions', 'Easy to use'] },
    cons: { en: ['Pricey for small teams', 'Limited to written content'] },
    features: { en: ['Content editor', 'SERP analyzer', 'Keyword surfer', 'Audit tool', 'AI outline generator'] },
  },
  ahrefs: {
    pros: { en: ['Best backlink database', 'Comprehensive SEO toolset', 'Accurate traffic estimates'] },
    cons: { en: ['One of the most expensive tools', 'No free plan'] },
    features: { en: ['Site explorer', 'Keywords explorer', 'Content explorer', 'Rank tracker', 'Site audit'] },
  },
  'figma-ai': {
    pros: { en: ['Seamlessly integrated in Figma', 'Speeds up design workflow', 'Auto layout improvements'] },
    cons: { en: ['Requires Figma subscription', 'Still in beta for some features'] },
    features: { en: ['AI design generation', 'Auto layout', 'Smart rename', 'Dev mode', 'Prototype generation'] },
  },
  looka: {
    pros: { en: ['Easy logo creation', 'Affordable', 'Full brand kit'] },
    cons: { en: ['Less creative than human designers', 'Generic results sometimes'] },
    features: { en: ['AI logo maker', 'Brand kit', 'Business card design', 'Social media assets', 'SVG export'] },
  },
  khroma: {
    pros: { en: ['AI-powered color discovery', 'Personalized palettes', 'Free to use'] },
    cons: { en: ['Limited export options', 'Basic interface'] },
    features: { en: ['AI color palettes', 'Personalized suggestions', 'Color search', 'Gradient generator', 'Type pairing'] },
  },
  'julius-ai': {
    pros: { en: ['Conversational data analysis', 'No code needed', 'Multiple file formats'] },
    cons: { en: ['Limited for complex stats', 'Credits-based model'] },
    features: { en: ['CSV/Excel analysis', 'Chart generation', 'SQL queries', 'Python execution', 'Natural language queries'] },
  },
  'obviously-ai': {
    pros: { en: ['No-code ML', 'Fast predictions', 'Easy to understand results'] },
    cons: { en: ['Limited for expert data scientists', 'Pricing not transparent'] },
    features: { en: ['Predictive analytics', 'No-code ML', 'Data visualization', 'API integration', 'Churn prediction'] },
  },
  'tableau-ai': {
    pros: { en: ['Best-in-class visualizations', 'Einstein AI integration', 'Huge community'] },
    cons: { en: ['Very expensive', 'Complex for beginners'] },
    features: { en: ['AI-powered insights', 'Data blending', 'Interactive dashboards', 'Natural language queries', 'Salesforce integration'] },
  },
}

type Locale = 'ar' | 'en' | 'fr' | 'es' | 'tr' | 'de'

/**
 * Returns translated pros for a tool slug, or original Arabic if no translation found
 */
export function getLocalizedPros(slug: string, arabicPros: string[], locale: string): string[] {
  if (locale === 'ar') return arabicPros
  const override = TOOL_I18N[slug]?.pros
  if (!override) return []   // don't show Arabic on non-Arabic pages
  const lang = locale as Exclude<Locale, 'ar'>
  return override[lang] || override.en || []
}

export function getLocalizedCons(slug: string, arabicCons: string[], locale: string): string[] {
  if (locale === 'ar') return arabicCons
  const override = TOOL_I18N[slug]?.cons
  if (!override) return []
  const lang = locale as Exclude<Locale, 'ar'>
  return override[lang] || override.en || []
}

export function getLocalizedFeatures(slug: string, arabicFeatures: string[], locale: string): string[] {
  if (locale === 'ar') return arabicFeatures
  const override = TOOL_I18N[slug]?.features
  if (!override) return []
  return override.en || []
}

export function getLocalizedDescription(slug: string, arabicDescription: string, locale: string): string {
  if (locale === 'ar') return arabicDescription
  const desc = DESCRIPTIONS[slug]
  if (!desc) return ''   // empty is better than Arabic on English pages
  const lang = locale as 'en' | 'fr' | 'es' | 'tr' | 'de'
  return desc[lang] || desc.en || ''
}
