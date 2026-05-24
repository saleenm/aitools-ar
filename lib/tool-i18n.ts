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
}

type Locale = 'ar' | 'en' | 'fr' | 'es' | 'tr' | 'de'

/**
 * Returns translated pros for a tool slug, or original Arabic if no translation found
 */
export function getLocalizedPros(slug: string, arabicPros: string[], locale: string): string[] {
  if (locale === 'ar') return arabicPros
  const override = TOOL_I18N[slug]?.pros
  if (!override) return arabicPros
  const lang = locale as Exclude<Locale, 'ar'>
  return override[lang] || override.en || arabicPros
}

/**
 * Returns translated cons for a tool slug, or original Arabic if no translation found
 */
export function getLocalizedCons(slug: string, arabicCons: string[], locale: string): string[] {
  if (locale === 'ar') return arabicCons
  const override = TOOL_I18N[slug]?.cons
  if (!override) return arabicCons
  const lang = locale as Exclude<Locale, 'ar'>
  return override[lang] || override.en || arabicCons
}

/**
 * Returns translated features for a tool slug, or original Arabic if no translation found
 */
export function getLocalizedFeatures(slug: string, arabicFeatures: string[], locale: string): string[] {
  if (locale === 'ar') return arabicFeatures
  const override = TOOL_I18N[slug]?.features
  if (!override) return arabicFeatures
  return override.en || arabicFeatures
}

/**
 * Returns translated description for a tool slug, or original Arabic if no translation found
 */
export function getLocalizedDescription(slug: string, arabicDescription: string, locale: string): string {
  if (locale === 'ar') return arabicDescription
  const desc = DESCRIPTIONS[slug]
  if (!desc) return arabicDescription
  const lang = locale as 'en' | 'fr' | 'es' | 'tr' | 'de'
  return desc[lang] || desc.en || arabicDescription
}
