/**
 * Detailed reviews, use cases, and getting-started guides for AI tools.
 * Used to enrich tool pages with substantive content for SEO and AdSense quality.
 */

export type ToolReview = {
  review: { ar: string; en: string; fr?: string; es?: string; tr?: string; de?: string }
  useCases: { ar: string[]; en: string[] }
  gettingStarted: { ar: string[]; en: string[] }
  verdict: { ar: string; en: string }
}

const REVIEWS: Record<string, ToolReview> = {
  chatgpt: {
    review: {
      ar: 'ChatGPT من OpenAI هو المساعد الذكي الأكثر شعبية في العالم، وقد غيّر طريقة تفاعل البشر مع الحاسوب. يعتمد على نماذج GPT-4 وGPT-4o المتطورة التي تتيح له فهم اللغة الطبيعية بعمق وتوليد نصوص عالية الجودة بلغات متعددة بما فيها العربية. يتميز ChatGPT بقدرته على إجراء محادثات طويلة مع الاحتفاظ بالسياق، مما يجعله مثالياً للمشاريع الطويلة. يدعم الأداة إمكانية البحث على الإنترنت، وتوليد الصور عبر DALL·E، وكتابة وتنفيذ الأكواد البرمجية. في مجال الكتابة، يستطيع ChatGPT كتابة المقالات والقصص والتقارير والبريد الإلكتروني بأسلوب احترافي. وفي مجال البرمجة، يساعد على كتابة الكود وتصحيح الأخطاء وشرح المفاهيم التقنية. النسخة المجانية كافية للاستخدام اليومي، بينما تقدم نسخة ChatGPT Plus بـ 20 دولاراً شهرياً وصولاً لأحدث النماذج وأولوية في الأداء.',
      en: 'ChatGPT by OpenAI is the world\'s most popular AI assistant, fundamentally changing how people interact with technology. Built on the powerful GPT-4 and GPT-4o models, it understands natural language with remarkable depth and generates high-quality text across dozens of languages. What sets ChatGPT apart is its ability to maintain context across long conversations, making it ideal for complex, multi-step projects. The tool supports web browsing for real-time information, image generation via DALL·E, and can write and execute code in its advanced Code Interpreter mode. For writers, ChatGPT produces articles, stories, reports, and professional emails with impressive fluency. For developers, it writes clean code, debugs errors, and explains technical concepts in plain language. The free tier is sufficient for casual daily use, while ChatGPT Plus at $20/month unlocks GPT-4o, faster responses, and priority access. Businesses can access the API for custom integrations at scale.',
    },
    useCases: {
      ar: ['كتابة المقالات والمحتوى التسويقي', 'تصحيح الكود البرمجي وشرح الأخطاء', 'الترجمة بين اللغات المختلفة', 'الرد على رسائل البريد الإلكتروني المهنية', 'التحليل والملخصات للوثائق الطويلة', 'التخطيط للمشاريع وإنشاء الخطط التفصيلية'],
      en: ['Writing articles and marketing content', 'Debugging code and explaining errors', 'Translating between languages', 'Drafting professional emails', 'Summarizing and analyzing long documents', 'Project planning and creating detailed roadmaps'],
    },
    gettingStarted: {
      ar: ['أنشئ حساباً مجانياً على chat.openai.com', 'ابدأ محادثة جديدة وأدخل سؤالك أو طلبك', 'جرّب الأوامر الموجّهة (Prompts) المحددة للحصول على نتائج أفضل', 'استخدم GPTs المتخصصة للمهام المحددة', 'ترقّ لـ Plus للوصول لـ GPT-4o وتوليد الصور'],
      en: ['Create a free account at chat.openai.com', 'Start a new conversation and enter your question or request', 'Use specific, detailed prompts to get better results', 'Explore specialized GPTs for specific tasks', 'Upgrade to Plus for GPT-4o access and image generation'],
    },
    verdict: {
      ar: 'ChatGPT هو الخيار الأول لمن يبدأ مع الذكاء الاصطناعي. مجاني وقوي ومتعدد الاستخدامات — لا غنى عنه في 2026.',
      en: 'ChatGPT is the go-to choice for anyone starting with AI. Free, powerful, and versatile — an indispensable tool in 2026.',
    },
  },

  gemini: {
    review: {
      ar: 'Gemini هو نموذج الذكاء الاصطناعي من Google، ويتميز بالتكامل العميق مع منظومة Google الكاملة. يفهم النص والصور والصوت ومقاطع الفيديو في آنٍ واحد، مما يجعله أداةً متعددة الوسائط حقيقية. يتصل Gemini تلقائياً بـ Google Search للحصول على معلومات حديثة، كما يتكامل مع Gmail وDocs وSheets وDrive مباشرةً. النسخة المجانية سخية وتتيح الوصول لنموذج Gemini 1.5 Pro، بينما تفتح نسخة Advanced بـ 20 دولاراً شهرياً إمكانيات Gemini Ultra. يتفوق Gemini على المنافسين في التحليل المتعدد الوسائط، إذ يمكنه قراءة PDF وتحليل الصور ومعالجة ساعات من الفيديو ضمن محادثة واحدة. الواجهة بالعربية ممتازة والأداء قوي للمهام البحثية والتحليلية.',
      en: 'Gemini is Google\'s flagship AI model, distinguished by deep integration with the entire Google ecosystem. It understands text, images, audio, and video simultaneously, making it a truly multimodal AI. Gemini connects automatically to Google Search for up-to-date information, and integrates directly with Gmail, Docs, Sheets, and Drive. The generous free tier provides access to Gemini 1.5 Pro, while the $20/month Advanced plan unlocks Gemini Ultra capabilities. Gemini excels over competitors in multimodal analysis — it can read PDFs, analyze images, and process hours of video within a single conversation. For users embedded in Google\'s productivity suite, Gemini offers unmatched workflow integration. Its research and analytical capabilities are particularly strong, making it ideal for students, researchers, and business analysts.',
    },
    useCases: {
      ar: ['تحليل مستندات PDF والصور', 'البحث المتعمق مع مصادر محدّثة', 'كتابة المحتوى في Google Docs', 'تحليل بيانات جداول Google Sheets', 'إنشاء عروض تقديمية في Google Slides'],
      en: ['Analyzing PDF documents and images', 'Deep research with up-to-date sources', 'Content writing inside Google Docs', 'Data analysis within Google Sheets', 'Creating presentations in Google Slides'],
    },
    gettingStarted: {
      ar: ['سجّل الدخول بحسابك على Google', 'افتح gemini.google.com', 'جرّب رفع صورة أو مستند وطرح أسئلة عنه', 'فعّل Gemini داخل Gmail لكتابة الردود', 'استخدم Gemini Advanced للمهام المعقدة'],
      en: ['Sign in with your Google account', 'Visit gemini.google.com', 'Try uploading an image or document and ask questions about it', 'Enable Gemini inside Gmail for drafting replies', 'Use Gemini Advanced for complex tasks'],
    },
    verdict: {
      ar: 'الخيار الأمثل لمستخدمي منظومة Google. تكامله مع الأدوات اليومية يجعله لا منافس له لهذه الشريحة.',
      en: 'The best choice for Google ecosystem users. Its daily tool integration makes it unmatched for this audience.',
    },
  },

  midjourney: {
    review: {
      ar: 'Midjourney يُعدّ من أفضل أدوات توليد الصور بالذكاء الاصطناعي في العالم، وقد أحدث ثورة في مجال الفن الرقمي والتصميم. يعمل عبر Discord مما يُتيح تجربة مجتمعية فريدة حيث يمكنك رؤية أعمال الآخرين والاستلهام منها. يتميز بأسلوبه الفني الاستثنائي الذي يجمع بين الواقعية والفن المفاهيمي، وقد استخدمه الفنانون والمصممون ومديرو الإعلانات حول العالم لإنتاج محتوى بصري مذهل. النسخة الخامسة (v6) أحدثت نقلة نوعية في التفاصيل الدقيقة وعرض الوجوه البشرية. لا توجد نسخة مجانية حالياً، لكن الاشتراك الأساسي بـ 10 دولارات شهرياً يُقدّم قيمة استثنائية للمصممين والمبدعين.',
      en: 'Midjourney is widely regarded as the finest AI image generation tool available, having sparked a revolution in digital art and design. It operates through Discord, creating a unique community experience where you can view others\' creations for inspiration. What distinguishes Midjourney is its exceptional artistic style — blending photorealism with conceptual art — that has been embraced by artists, designers, and creative directors worldwide. Version 6 brought remarkable improvements in fine details, text rendering, and human faces. While there is no free tier, the $10/month Basic plan delivers extraordinary value for creatives. The prompting system rewards specificity: the more detailed your description, the more precisely Midjourney captures your vision.',
    },
    useCases: {
      ar: ['تصميم أغلفة الكتب والألبومات الموسيقية', 'إنتاج صور تسويقية وإعلانية', 'تصور المشاريع المعمارية والداخلية', 'إنشاء شخصيات للقصص والألعاب', 'توليد خلفيات وصور فنية للمواقع'],
      en: ['Designing book covers and album art', 'Producing marketing and advertising visuals', 'Visualizing architectural and interior projects', 'Creating characters for stories and games', 'Generating artistic backgrounds and website visuals'],
    },
    gettingStarted: {
      ar: ['انضم لخادم Midjourney على Discord', 'اشترك في خطة Basic أو Standard', 'اكتب /imagine متبوعاً بوصف الصورة باللغة الإنجليزية', 'جرّب إضافة كلمات مثل --ar 16:9 لتغيير نسبة العرض', 'استخدم /describe لتحليل صورة وكتابة Prompt منها'],
      en: ['Join the Midjourney Discord server', 'Subscribe to the Basic or Standard plan', 'Type /imagine followed by your image description in English', 'Add parameters like --ar 16:9 to change aspect ratio', 'Use /describe to reverse-engineer a prompt from any image'],
    },
    verdict: {
      ar: 'لا يوجد منافس حقيقي لـ Midjourney في جودة الصور الفنية. الاستثمار في اشتراكه يستحق كل دولار لأي مبدع.',
      en: 'Midjourney has no real competitor for artistic image quality. The subscription investment is worth every dollar for any creative professional.',
    },
  },

  claude: {
    review: {
      ar: 'Claude من Anthropic يتصدر المنافسة في تحليل النصوص الطويلة والكتابة الإبداعية عالية الجودة. يتميز بنافذة سياق استثنائية تصل إلى 200,000 رمز، مما يُتيح له قراءة روايات كاملة أو ملفات قانونية ضخمة في آنٍ واحد. تعتمد Anthropic منهجية Constitutional AI في تطوير Claude، مما يجعله الأكثر أماناً وموثوقية بين نماذج الذكاء الاصطناعي الكبرى. يتفوق Claude على ChatGPT في مهام الكتابة الإبداعية والتحليل الدقيق، كما أن ردوده أكثر تنظيماً ووضوحاً. النسخة المجانية تُقدم Claude 3.5 Haiku، بينما يتيح الاشتراك بـ 20 دولاراً شهرياً الوصول لـ Claude Opus 4.5 الأقوى. يُعدّ الخيار الأمثل للمحترفين في القانون والأكاديميين والكتّاب الذين يحتاجون دقة عالية في العمل.',
      en: 'Claude by Anthropic leads the competition in long-form text analysis and high-quality creative writing. Its exceptional context window of up to 200,000 tokens allows it to read entire novels or large legal files in one session. Anthropic\'s Constitutional AI methodology makes Claude the safest and most reliable among major AI models — it refuses harmful requests more consistently and provides more nuanced responses. Claude outperforms ChatGPT in creative writing tasks and detailed analysis, with responses that are more organized and clearly structured. The free tier offers Claude 3.5 Haiku, while the $20/month subscription unlocks the powerful Claude Opus 4.5. It is the optimal choice for legal professionals, academics, and writers who require high precision in their work.',
    },
    useCases: {
      ar: ['تحليل العقود والوثائق القانونية الطويلة', 'كتابة الروايات والقصص القصيرة', 'مراجعة الأبحاث الأكاديمية وتلخيصها', 'كتابة كود برمجي بجودة عالية', 'تحليل البيانات وإعداد التقارير المفصلة'],
      en: ['Analyzing long contracts and legal documents', 'Writing novels and short stories', 'Reviewing and summarizing academic research', 'Writing high-quality code', 'Data analysis and preparing detailed reports'],
    },
    gettingStarted: {
      ar: ['افتح claude.ai وأنشئ حساباً مجانياً', 'ابدأ محادثة وارفع ملفاً أو أدخل نصاً طويلاً', 'اطلب من Claude تحليله أو إعداد تقرير عنه', 'جرّب Projects لتنظيم محادثاتك حسب المشاريع', 'اشترك في Pro للوصول لأقوى النماذج'],
      en: ['Open claude.ai and create a free account', 'Start a conversation and upload a file or paste long text', 'Ask Claude to analyze it or prepare a report', 'Try Projects to organize conversations by topic', 'Subscribe to Pro for access to the most powerful models'],
    },
    verdict: {
      ar: 'Claude هو الخيار الأفضل للمهام التي تتطلب دقة ووضوحاً. إذا كانت جودة الكتابة والتحليل أولويتك، فهذا هو خيارك.',
      en: 'Claude is the top choice for tasks requiring precision and clarity. If writing quality and analysis depth are your priorities, this is your tool.',
    },
  },

  perplexity: {
    review: {
      ar: 'Perplexity AI يُعيد تعريف مفهوم البحث على الإنترنت من خلال دمج قدرات النماذج اللغوية الكبيرة مع البحث الآني. بدلاً من قائمة من الروابط، يُقدّم Perplexity إجابات شاملة ومنظمة مع مصادر موثّقة لكل معلومة. يدعم وضع Pro الذي يتيح البحث العميق والوصول لنماذج GPT-4 وClaude. ما يُميّزه هو الشفافية الكاملة في ذكر المصادر، مما يجعله مثالياً للبحث الأكاديمي والمهني. يُقدّم أيضاً ميزة Spaces لتنظيم أبحاثك، وإمكانية متابعة موضوعات محددة. النسخة المجانية قوية جداً وكافية للاستخدام اليومي.',
      en: 'Perplexity AI redefines internet search by combining large language model capabilities with real-time web search. Instead of a list of links, Perplexity delivers comprehensive, structured answers with cited sources for every piece of information. The Pro mode enables deep research and access to GPT-4 and Claude models. What truly distinguishes it is complete source transparency, making it ideal for academic and professional research. It also offers Spaces for organizing your research and the ability to follow specific topics. The free tier is powerful and sufficient for daily use, while Pro at $20/month unlocks unlimited searches and advanced model access.',
    },
    useCases: {
      ar: ['البحث الأكاديمي مع توثيق المصادر', 'متابعة آخر الأخبار والتطورات', 'البحث عن معلومات تقنية محدّثة', 'مقارنة المنتجات والخدمات', 'التحقق من صحة المعلومات والحقائق'],
      en: ['Academic research with source documentation', 'Following the latest news and developments', 'Searching for up-to-date technical information', 'Comparing products and services', 'Fact-checking and verifying information'],
    },
    gettingStarted: {
      ar: ['افتح perplexity.ai مباشرة في المتصفح', 'اكتب سؤالك بشكل طبيعي كما تتحدث', 'راجع المصادر المذكورة تحت كل جزء من الإجابة', 'استخدم Follow-up Questions للتعمق أكثر', 'فعّل Pro للوصول لنماذج أقوى وبحث أعمق'],
      en: ['Open perplexity.ai directly in your browser', 'Type your question naturally as you would speak it', 'Review the cited sources listed under each part of the answer', 'Use Follow-up Questions to dig deeper', 'Activate Pro for access to stronger models and deeper research'],
    },
    verdict: {
      ar: 'Perplexity هو بديل Google الأذكى. إذا كنت تحتاج معلومات موثوقة بسرعة مع مصادرها، فلا خيار أفضل منه.',
      en: 'Perplexity is the smartest Google alternative. If you need reliable information quickly with sources, there is no better option.',
    },
  },

  'github-copilot': {
    review: {
      ar: 'GitHub Copilot من Microsoft وOpenAI غيّر قواعد اللعبة في مجال البرمجة. يعمل كمساعد برمجي ذكي مدمج مباشرة في محرر الكود، حيث يقترح أسطر كاملة أو دوال أو حتى ملفات بأكملها بناءً على السياق. تدرّب Copilot على مليارات الأسطر من الكود المفتوح المصدر، مما يجعله يفهم الأنماط البرمجية الشائعة بعمق. يدعم أكثر من 20 لغة برمجية وإطار عمل، ويتكامل مع VS Code وJetBrains وNeovim وغيرها. في الاختبارات المستقلة، يرفع Copilot إنتاجية المطورين بنسبة 55% في المتوسط. الاشتراك بـ 10 دولارات شهرياً يُعدّ استثماراً استثنائياً لأي مطور محترف.',
      en: 'GitHub Copilot from Microsoft and OpenAI has changed the rules of software development. It works as an intelligent coding assistant embedded directly in your code editor, suggesting complete lines, functions, or even entire files based on context. Trained on billions of lines of open-source code, Copilot understands common programming patterns at a deep level. It supports more than 20 programming languages and frameworks, integrating with VS Code, JetBrains, Neovim, and more. In independent testing, Copilot raises developer productivity by an average of 55%. At $10/month, it is an exceptional investment for any professional developer.',
    },
    useCases: {
      ar: ['كتابة الكود بسرعة أعلى بكثير', 'توليد Unit Tests تلقائياً', 'فهم كود قديم وتوثيقه', 'تحويل التعليقات إلى كود جاهز', 'تعلم لغات برمجة جديدة بسهولة'],
      en: ['Writing code significantly faster', 'Automatically generating unit tests', 'Understanding and documenting legacy code', 'Converting comments into ready code', 'Learning new programming languages easily'],
    },
    gettingStarted: {
      ar: ['ثبّت إضافة GitHub Copilot في VS Code', 'سجّل الدخول بحساب GitHub الخاص بك', 'ابدأ كتابة كود وانتظر اقتراحات Copilot', 'اضغط Tab لقبول الاقتراح أو Esc لرفضه', 'جرّب Copilot Chat لطرح أسئلة برمجية مباشرة'],
      en: ['Install the GitHub Copilot extension in VS Code', 'Sign in with your GitHub account', 'Start writing code and wait for Copilot suggestions', 'Press Tab to accept a suggestion or Esc to reject it', 'Try Copilot Chat to ask programming questions directly'],
    },
    verdict: {
      ar: 'GitHub Copilot هو الأداة الأكثر تأثيراً في مسيرة أي مطور. ترقية واجبة لكل من يكتب كوداً يومياً.',
      en: 'GitHub Copilot is the most impactful tool in any developer\'s career. A mandatory upgrade for anyone who writes code daily.',
    },
  },

  suno: {
    review: {
      ar: 'Suno AI أحدث ثورة في صناعة الموسيقى بإتاحة توليد أغانٍ كاملة بالصوت والكلمات في ثوانٍ. يكفي أن تكتب وصفاً مثل "أغنية هادئة عن غروب الشمس بصوت أنثوي" لتحصل على أغنية احترافية الإنتاج. يدعم Suno عشرات الأنواع الموسيقية من البوب والروك والجاز والكلاسيكي والموسيقى العربية. النموذج v4 يُنتج موسيقى يصعب تمييزها عن الإنتاج البشري. مثالي للموسيقيين الهواة والمنتجين ومنشئي المحتوى والمطورين الذين يحتاجون موسيقى تصويرية. الاشتراك المجاني يُتيح 50 أغنية شهرياً.',
      en: 'Suno AI has revolutionized music creation by enabling the generation of complete songs with vocals and lyrics in seconds. Simply describe "a calm song about a sunset in a female voice" and receive a professionally produced track. Suno supports dozens of musical genres from pop and rock to jazz, classical, and even Arabic music. The v4 model produces music that is difficult to distinguish from human production. It is ideal for amateur musicians, producers, content creators, and developers who need background music. The free plan allows 50 songs per month, while Pro at $8/month provides 500 credits and commercial rights.',
    },
    useCases: {
      ar: ['إنشاء موسيقى تصويرية لمقاطع الفيديو', 'توليد أغانٍ للعروض التقديمية', 'استكشاف أنواع موسيقية جديدة', 'إنتاج موسيقى للبودكاست', 'تعلم هياكل الأغاني المختلفة'],
      en: ['Creating background music for videos', 'Generating songs for presentations', 'Exploring new music genres', 'Producing music for podcasts', 'Learning different song structures'],
    },
    gettingStarted: {
      ar: ['افتح suno.com وسجّل بحساب Google', 'اضغط Create واكتب وصف الأغنية بالإنجليزية', 'اختر بين وضع Custom لكتابة كلماتك الخاصة أو الوضع التلقائي', 'انتظر 30 ثانية للحصول على نسختين مختلفتين', 'حمّل الأغنية أو شاركها مباشرة'],
      en: ['Open suno.com and sign in with a Google account', 'Click Create and describe your song in English', 'Choose between Custom mode for your own lyrics or automatic mode', 'Wait 30 seconds to receive two different versions', 'Download the song or share it directly'],
    },
    verdict: {
      ar: 'Suno هو المستقبل في إنتاج الموسيقى. للمبتدئين والمحترفين على حدٍّ سواء، لا توجد أداة مماثلة.',
      en: 'Suno is the future of music production. For beginners and professionals alike, there is no comparable tool.',
    },
  },

  elevenlabs: {
    review: {
      ar: 'ElevenLabs هو الرائد العالمي في تقنية تحويل النص إلى صوت بالذكاء الاصطناعي. يُنتج أصواتاً بشرية واقعية بشكل مذهل، مع التحكم الدقيق في النبرة والإيقاع والتعبير العاطفي. يدعم أكثر من 30 لغة بما فيها العربية، ويتيح استنساخ الأصوات (Voice Cloning) من عينة صوتية قصيرة. يستخدمه الناشرون لإنشاء كتب صوتية، والمعلمون لتطوير محتوى تعليمي، ومنشئو البودكاست لتحسين صوت الراوي. الواجهة البرمجية (API) متاحة للمطورين لدمج تقنية TTS في تطبيقاتهم. النسخة المجانية تُتيح 10,000 حرف شهرياً وهي كافية للاختبار والاستخدام الخفيف.',
      en: 'ElevenLabs is the global leader in AI text-to-speech technology. It produces astonishingly realistic human voices with precise control over tone, rhythm, and emotional expression. It supports more than 30 languages including Arabic, and offers Voice Cloning from a short audio sample. Publishers use it to create audiobooks, educators develop educational content, and podcast creators improve narrator voices. The API is available for developers to integrate TTS technology into their applications. The free tier provides 10,000 characters per month, sufficient for testing and light use, while paid plans start at $5/month.',
    },
    useCases: {
      ar: ['تحويل المقالات إلى بودكاست', 'إنشاء كتب صوتية من النصوص', 'توليد تعليق صوتي لمقاطع الفيديو', 'إنشاء مساعدات صوتية للتطبيقات', 'ترجمة وتدويب المحتوى بلغات متعددة'],
      en: ['Converting articles into podcasts', 'Creating audiobooks from text', 'Generating voice-overs for videos', 'Building voice assistants for apps', 'Translating and dubbing content in multiple languages'],
    },
    gettingStarted: {
      ar: ['أنشئ حساباً مجانياً على elevenlabs.io', 'اختر صوتاً من مكتبة الأصوات الجاهزة', 'الصق نصك وانقر على Generate', 'جرّب Voice Cloning برفع عينة صوتية', 'استخدم API لدمج الخدمة في تطبيقك'],
      en: ['Create a free account at elevenlabs.io', 'Choose a voice from the ready-made voice library', 'Paste your text and click Generate', 'Try Voice Cloning by uploading a voice sample', 'Use the API to integrate the service in your application'],
    },
    verdict: {
      ar: 'ElevenLabs لا منافس له في جودة الأصوات الاصطناعية. إذا كان المحتوى الصوتي جزءاً من عملك، فهو ضروري.',
      en: 'ElevenLabs has no competitor in synthetic voice quality. If audio content is part of your work, it is essential.',
    },
  },

  runway: {
    review: {
      ar: 'Runway ML يُعدّ الأداة الأكثر تطوراً في مجال توليد الفيديو بالذكاء الاصطناعي وتحريره. يتيح تحويل النص إلى فيديو، والصورة إلى فيديو، وتحريك العناصر، وإزالة الخلفيات تلقائياً. يستخدمه المخرجون السينمائيون والمصممون ومنشئو المحتوى لإنتاج مقاطع احترافية بكسور من تكلفة الإنتاج التقليدي. نموذج Gen-3 Alpha يُنتج فيديوهات بجودة 4K مع اتساق بصري ممتاز. الأداة الأفضل للمحترفين المبدعين الذين يحتاجون تحكماً دقيقاً في المحتوى المرئي. الاشتراك يبدأ من 12 دولاراً شهرياً.',
      en: 'Runway ML is the most advanced tool in AI video generation and editing. It enables text-to-video, image-to-video, element animation, and automatic background removal. Filmmakers, designers, and content creators use it to produce professional clips at a fraction of traditional production costs. The Gen-3 Alpha model generates 4K quality videos with excellent visual consistency. It is the best tool for creative professionals who need precise control over visual content. Subscriptions start at $12/month, with plans scaled to creative output needs.',
    },
    useCases: {
      ar: ['إنشاء مقاطع فيديو تسويقية', 'تحريك الصور الثابتة', 'إزالة الخلفيات من مقاطع الفيديو', 'توليد مؤثرات بصرية خاصة', 'إنتاج محتوى للسوشيال ميديا'],
      en: ['Creating marketing video clips', 'Animating still images', 'Removing backgrounds from videos', 'Generating special visual effects', 'Producing social media content'],
    },
    gettingStarted: {
      ar: ['أنشئ حساباً على runwayml.com', 'اختر أداة Gen-3 Alpha للبدء', 'أدخل وصفاً نصياً أو ارفع صورة', 'اختر مدة الفيديو ونسبة العرض', 'انتظر المعالجة وحمّل الفيديو'],
      en: ['Create an account at runwayml.com', 'Select the Gen-3 Alpha tool to start', 'Enter a text description or upload an image', 'Choose video duration and aspect ratio', 'Wait for processing and download the video'],
    },
    verdict: {
      ar: 'Runway هو الخيار المهني لتوليد الفيديو. قدراته لا مثيل لها إذا كانت الجودة والتحكم أولويتك.',
      en: 'Runway is the professional choice for video generation. Its capabilities are unmatched if quality and control are your priority.',
    },
  },

  notion: {
    review: {
      ar: 'Notion تحوّل من أداة تدوين ملاحظات إلى منصة عمل متكاملة تدمج الذكاء الاصطناعي في صميم تجربة المستخدم. يجمع Notion بين قواعد البيانات والمستندات وإدارة المشاريع والتعاون الفريقي في مكان واحد. ميزة Notion AI تُساعد على كتابة المحتوى والتلخيص والترجمة وتوليد الأفكار مباشرة داخل المستندات. يستخدمه ملايين الأفراد والفرق حول العالم لإدارة الأعمال والمشاريع الشخصية. النسخة المجانية سخية جداً وكافية للاستخدام الفردي.',
      en: 'Notion has evolved from a note-taking tool into a comprehensive workspace that integrates AI at the core of the user experience. It combines databases, documents, project management, and team collaboration in one place. Notion AI helps write content, summarize, translate, and generate ideas directly inside documents. Millions of individuals and teams worldwide use it to manage businesses and personal projects. The free tier is generous and sufficient for individual use, while team plans start at $8/member/month.',
    },
    useCases: {
      ar: ['إدارة المشاريع وتتبع المهام', 'إنشاء قاعدة معرفة للفريق', 'تدوين الملاحظات وتنظيمها', 'إعداد خطط المحتوى التسويقي', 'بناء قواعد بيانات مخصصة'],
      en: ['Managing projects and tracking tasks', 'Creating a team knowledge base', 'Taking and organizing notes', 'Preparing marketing content plans', 'Building custom databases'],
    },
    gettingStarted: {
      ar: ['سجّل مجاناً على notion.so', 'اختر قالباً جاهزاً أو ابدأ من صفحة فارغة', 'أنشئ قاعدة بيانات لمشاريعك', 'فعّل Notion AI من الإعدادات', 'شارك مساحة العمل مع فريقك'],
      en: ['Sign up for free at notion.so', 'Choose a ready template or start from a blank page', 'Create a database for your projects', 'Enable Notion AI from settings', 'Share the workspace with your team'],
    },
    verdict: {
      ar: 'Notion هو أفضل أداة لإدارة المعرفة والمشاريع. إذا كنت تبحث عن نظام عمل متكامل، ابدأ بـ Notion.',
      en: 'Notion is the best tool for knowledge and project management. If you are looking for a comprehensive work system, start with Notion.',
    },
  },
}

/**
 * Get the review content for a tool, or generate a template-based review.
 */
export function getToolReview(slug: string): ToolReview | null {
  return REVIEWS[slug] || null
}

/**
 * Generate a template-based review for tools without specific content.
 */
export function generateTemplateReview(
  toolName: string,
  category: string,
  pricing: string,
  priceMonthly: number | null,
  locale: string
): { review: string; useCases: string[]; gettingStarted: string[]; verdict: string } {
  const isFree = pricing === 'free'
  const isAr = locale === 'ar'

  if (isAr) {
    return {
      review: `${toolName} هي أداة ذكاء اصطناعي متخصصة في مجال ${getCategoryNameAr(category)}، وتُعدّ من الأدوات المميزة في هذا المجال. تتميز بواجهة سهلة الاستخدام وقدرات متقدمة تُساعد المستخدمين على إنجاز مهامهم بكفاءة أعلى. ${isFree ? 'تتوفر مجاناً مع جميع الميزات الأساسية.' : `تبدأ الأسعار من $${priceMonthly} شهرياً مع تجربة مجانية في أغلب الأحيان.`} تعتمد ${toolName} على تقنيات الذكاء الاصطناعي الحديثة لتقديم نتائج دقيقة وسريعة. سواء كنت مبتدئاً أو محترفاً، ستجد في ${toolName} ما يلبي احتياجاتك في ${getCategoryNameAr(category)}.`,
      useCases: [
        `تسريع مهام ${getCategoryNameAr(category)} اليومية`,
        'توفير الوقت والجهد في المشاريع',
        'الحصول على نتائج احترافية بسهولة',
        'التعاون مع الفرق وتبادل النتائج',
      ],
      gettingStarted: [
        `افتح الموقع الرسمي لـ ${toolName}`,
        'أنشئ حساباً مجانياً أو جرّب النسخة التجريبية',
        'استكشف الميزات الرئيسية من خلال الجولة التعريفية',
        'ابدأ بمشروع بسيط لتتعلم كيفية الاستخدام',
      ],
      verdict: `${toolName} أداة قوية في مجال ${getCategoryNameAr(category)}. ${isFree ? 'كونها مجانية تجعلها خياراً ممتازاً للبدء.' : 'جودتها تستحق الاستثمار.'}`,
    }
  }

  return {
    review: `${toolName} is a specialized AI tool in the field of ${getCategoryNameEn(category)}, standing out as one of the distinguished tools in this space. It features a user-friendly interface and advanced capabilities that help users accomplish tasks with greater efficiency. ${isFree ? 'It is available for free with all core features.' : `Pricing starts from $${priceMonthly}/month, usually with a free trial.`} ${toolName} leverages modern AI technologies to deliver accurate and fast results. Whether you are a beginner or a professional, you will find in ${toolName} what meets your needs in ${getCategoryNameEn(category)}.`,
    useCases: [
      `Accelerating daily ${getCategoryNameEn(category)} tasks`,
      'Saving time and effort on projects',
      'Achieving professional results with ease',
      'Collaborating with teams and sharing results',
    ],
    gettingStarted: [
      `Visit the official ${toolName} website`,
      'Create a free account or try the trial version',
      'Explore key features through the onboarding tour',
      'Start with a simple project to learn the workflow',
    ],
    verdict: `${toolName} is a powerful tool in ${getCategoryNameEn(category)}. ${isFree ? 'Being free makes it an excellent starting point.' : 'Its quality justifies the investment.'}`,
  }
}

function getCategoryNameAr(cat: string): string {
  const map: Record<string, string> = {
    chatbot: 'المحادثة والذكاء الاصطناعي',
    image: 'توليد الصور',
    video: 'توليد الفيديو',
    audio: 'الصوت والموسيقى',
    writing: 'الكتابة والمحتوى',
    code: 'البرمجة والتطوير',
    productivity: 'الإنتاجية',
    seo: 'تحسين محركات البحث',
    design: 'التصميم الجرافيكي',
    data: 'تحليل البيانات',
  }
  return map[cat] || cat
}

function getCategoryNameEn(cat: string): string {
  const map: Record<string, string> = {
    chatbot: 'AI chat and conversation',
    image: 'AI image generation',
    video: 'AI video generation',
    audio: 'AI audio and music',
    writing: 'AI writing and content',
    code: 'AI coding and development',
    productivity: 'AI productivity',
    seo: 'AI SEO optimization',
    design: 'AI graphic design',
    data: 'AI data analysis',
  }
  return map[cat] || cat
}
