-- ① Create table
CREATE TABLE IF NOT EXISTS tools (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug            text UNIQUE NOT NULL,
  name            text NOT NULL,
  name_ar         text NOT NULL,
  tagline_ar      text NOT NULL,
  description_ar  text NOT NULL,
  category        text NOT NULL,
  pricing         text NOT NULL CHECK (pricing IN ('free','freemium','paid')),
  price_monthly   numeric,
  price_yearly    numeric,
  features        text[] DEFAULT '{}',
  pros            text[] DEFAULT '{}',
  cons            text[] DEFAULT '{}',
  website_url     text NOT NULL,
  logo_url        text NOT NULL,
  screenshot_url  text,
  rating          numeric(3,2) DEFAULT 0,
  reviews_count   int DEFAULT 0,
  tags            text[] DEFAULT '{}',
  is_featured     boolean DEFAULT false,
  launched_at     date,
  updated_at      timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS tools_category_idx ON tools (category);
CREATE INDEX IF NOT EXISTS tools_pricing_idx  ON tools (pricing);
CREATE INDEX IF NOT EXISTS tools_featured_idx ON tools (is_featured);

-- ② Enable public read (RLS off for anon read)
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read" ON tools FOR SELECT USING (true);

-- ③ Insert seed data
INSERT INTO tools (slug,name,name_ar,tagline_ar,description_ar,category,pricing,price_monthly,price_yearly,features,pros,cons,website_url,logo_url,rating,reviews_count,tags,is_featured,launched_at) VALUES
('chatgpt','ChatGPT','شات جي بي تي','أشهر نموذج محادثة بالذكاء الاصطناعي من OpenAI','ChatGPT هو نموذج لغوي ضخم من OpenAI قادر على المحادثة، كتابة المحتوى، البرمجة، الترجمة وأكثر. يدعم اللغة العربية بشكل جيد ويتوفر بنسخة مجانية ومدفوعة.','chatbot','freemium',20,200,ARRAY['محادثة طبيعية','كتابة محتوى','برمجة','تحليل ملفات','توليد صور (Plus)'],ARRAY['واجهة سهلة','يدعم العربية','نسخة مجانية كافية','GPT-4 قوي جداً'],ARRAY['النسخة المجانية بطيئة أحياناً','قد يُنتج معلومات خاطئة'],'https://chat.openai.com','/logos/chatgpt.svg',4.8,1240,ARRAY['chatgpt','openai','gpt4','محادثة','كتابة'],true,'2022-11-30'),

('gemini','Gemini','جيميني','نموذج Google متعدد الوسائط لفهم النصوص والصور','Gemini هو نموذج الذكاء الاصطناعي من Google، يتميز بالتكامل مع خدمات Google وقدرته على فهم النصوص والصور والصوت في نفس الوقت.','chatbot','freemium',19.99,199,ARRAY['محادثة متعددة الوسائط','تكامل Google Workspace','Gemini Advanced','بحث في الويب'],ARRAY['مجاني بشكل كبير','متكامل مع Google','سريع جداً','فهم الصور ممتاز'],ARRAY['أقل دقة من GPT-4 في بعض المهام','دعم العربية متفاوت'],'https://gemini.google.com','/logos/gemini.svg',4.5,890,ARRAY['gemini','google','ai','محادثة'],true,'2023-12-06'),

('midjourney','Midjourney','ميدجورني','أفضل أداة لتوليد الصور الاحترافية بالذكاء الاصطناعي','Midjourney هي أداة توليد صور بالذكاء الاصطناعي تُنتج صوراً فنية احترافية بجودة عالية جداً. تعمل عبر Discord وتتميز بأسلوبها الفني المميز.','image','paid',10,96,ARRAY['توليد صور احترافية','تنويع الأساليب الفنية','دقة عالية جداً','تعديل الصور'],ARRAY['جودة لا مثيل لها','أساليب فنية متنوعة','مجتمع ضخم'],ARRAY['لا نسخة مجانية','يعمل عبر Discord فقط','لا يدعم العربية في البرومبت بشكل كامل'],'https://midjourney.com','/logos/midjourney.svg',4.7,2100,ARRAY['midjourney','صور','فن','تصميم'],true,'2022-03-14'),

('claude','Claude','كلود','نموذج Anthropic الآمن والدقيق لتحليل المستندات والكتابة','Claude من Anthropic يتميز بسياق طويل جداً (200K توكن)، وهو ممتاز لتحليل المستندات الطويلة والكتابة الإبداعية والبرمجة.','chatbot','freemium',20,200,ARRAY['سياق 200K توكن','تحليل ملفات PDF','كتابة إبداعية','برمجة دقيقة','بحث في الويب'],ARRAY['سياق طويل جداً','أمان عالٍ','تحليل مستندات ممتاز','استجابات دقيقة'],ARRAY['بطيء أحياناً مقارنة بـ GPT-4','قيود في بعض المواضيع'],'https://claude.ai','/logos/claude.svg',4.6,670,ARRAY['claude','anthropic','محادثة','تحليل'],true,'2023-03-14'),

('dall-e-3','DALL·E 3','دالي 3','توليد صور من النص مع دعم ممتاز للغة العربية','DALL·E 3 من OpenAI يتميز بفهمه العميق للتعليمات النصية وقدرته على إنتاج صور دقيقة تعكس الوصف بتفاصيله. متاح داخل ChatGPT Plus.','image','freemium',20,200,ARRAY['توليد صور من نص','فهم عميق للتعليمات','متكامل مع ChatGPT','دعم جيد للعربية'],ARRAY['فهم التعليمات بدقة عالية','متاح مع ChatGPT Plus','جودة ممتازة'],ARRAY['يحتاج اشتراك Plus','أبطأ من بعض المنافسين'],'https://openai.com/dall-e-3','/logos/dalle.svg',4.5,540,ARRAY['dalle','openai','صور','توليد'],false,'2023-10-01'),

('perplexity','Perplexity AI','بيربلكسيتي','محرك بحث ذكي يجيب بمصادر موثوقة ومحدّثة','Perplexity هو محرك بحث مدعوم بالذكاء الاصطناعي يبحث في الإنترنت ويجيب بإجابات شاملة مع ذكر المصادر.','productivity','freemium',20,200,ARRAY['بحث في الويب بالوقت الفعلي','ذكر المصادر','ملخصات دقيقة','نسخة Pro مع GPT-4'],ARRAY['مجاني وسريع','مصادر موثوقة','معلومات حديثة'],ARRAY['أقل إبداعاً من ChatGPT','يحتاج إنترنت دائماً'],'https://perplexity.ai','/logos/perplexity.svg',4.4,430,ARRAY['perplexity','بحث','مصادر','أخبار'],false,'2022-08-01'),

('github-copilot','GitHub Copilot','جيت هاب كوبايلوت','مساعد البرمجة الذكي المدمج مع VS Code وجميع المحررات','GitHub Copilot يقترح كوداً كاملاً أثناء الكتابة، يفهم السياق ويكتب دوال ووحدات اختبار.','code','paid',10,100,ARRAY['إكمال الكود تلقائياً','كتابة اختبارات','شرح الكود','دعم 20+ لغة برمجة','Chat داخل المحرر'],ARRAY['توفير وقت هائل','مدمج مع GitHub','دعم ممتاز لـ Python وJS'],ARRAY['مدفوع بالكامل','قد يقترح كوداً غير آمن أحياناً'],'https://github.com/features/copilot','/logos/copilot.svg',4.7,1800,ARRAY['copilot','github','كود','برمجة','vscode'],true,'2021-06-29'),

('stable-diffusion','Stable Diffusion','ستيبل ديفيوجن','نموذج توليد صور مفتوح المصدر يعمل على جهازك مجاناً','Stable Diffusion نموذج مفتوح المصدر لتوليد الصور يمكن تشغيله على جهازك بدون اشتراك.','image','free',null,null,ARRAY['مفتوح المصدر','يعمل محلياً','LoRA وfine-tuning','آلاف الموديلات','بدون قيود محتوى'],ARRAY['مجاني تماماً','تحكم كامل','مجتمع ضخم ونشط'],ARRAY['يحتاج GPU قوي','الإعداد معقد للمبتدئين'],'https://stability.ai','/logos/sd.svg',4.5,3200,ARRAY['stable diffusion','صور','مفتوح المصدر'],false,'2022-08-22'),

('notion-ai','Notion AI','نوشن AI','الذكاء الاصطناعي مدمج داخل Notion لتحسين الكتابة والملاحظات','Notion AI يضيف قدرات الذكاء الاصطناعي مباشرة داخل Notion. يساعد في كتابة المستندات والتلخيص والترجمة.','writing','freemium',10,96,ARRAY['كتابة وتحسين النصوص','تلخيص المستندات','ترجمة','توليد قوائم وجداول','مدمج مع Notion'],ARRAY['مدمج مع workspace','سهولة الاستخدام','ممتاز للفرق'],ARRAY['يحتاج اشتراك Notion','محدود خارج Notion'],'https://notion.so/product/ai','/logos/notion.svg',4.3,560,ARRAY['notion','كتابة','إنتاجية','ملاحظات'],false,'2023-02-22'),

('runway-ml','Runway','رانوي','منصة توليد الفيديو بالذكاء الاصطناعي للمحترفين','Runway هي المنصة الرائدة في توليد وتحرير الفيديو بالذكاء الاصطناعي.','video','freemium',15,144,ARRAY['توليد فيديو من نص','إزالة الخلفية تلقائياً','تحريك الصور','Gen-2 model','تحرير AI'],ARRAY['جودة فيديو عالية','واجهة احترافية','أدوات تحرير متقدمة'],ARRAY['الخطة المجانية محدودة جداً','سعر مرتفع للإنتاج الكثيف'],'https://runwayml.com','/logos/runway.svg',4.4,720,ARRAY['runway','فيديو','توليد','تحرير'],true,'2023-06-01'),

('elevenlabs','ElevenLabs','إليفن لابز','أفضل أداة لتوليد الصوت البشري الطبيعي بالذكاء الاصطناعي','ElevenLabs تنتج أصواتاً بشرية واقعية بالذكاء الاصطناعي. يمكن استنساخ أي صوت وبناء شخصيات صوتية.','audio','freemium',5,55,ARRAY['توليد صوت بشري','استنساخ الأصوات','30+ لغة','API متاح','صوت عربي ممتاز'],ARRAY['جودة صوت لا مثيل لها','دعم العربية ممتاز','API سهل الاستخدام'],ARRAY['الخطة المجانية 10 دقائق فقط','استنساخ الأصوات يحتاج خطة مدفوعة'],'https://elevenlabs.io','/logos/elevenlabs.svg',4.8,940,ARRAY['elevenlabs','صوت','TTS','عربي','بودكاست'],true,'2022-01-01'),

('jasper-ai','Jasper AI','جاسبر AI','أداة كتابة محتوى تسويقي احترافي بالذكاء الاصطناعي','Jasper متخصص في كتابة المحتوى التسويقي: إعلانات ومقالات SEO ومنشورات سوشيال ميديا وأكثر.','writing','paid',39,468,ARRAY['50+ قالب محتوى','كتابة SEO','محتوى سوشيال ميديا','Brand voice','فريق تعاوني'],ARRAY['متخصص في التسويق','قوالب احترافية','دعم الفرق'],ARRAY['سعر مرتفع','لا نسخة مجانية','أقل إبداعاً من ChatGPT'],'https://jasper.ai','/logos/jasper.svg',4.2,380,ARRAY['jasper','كتابة','تسويق','SEO','محتوى'],false,'2021-01-01')

ON CONFLICT (slug) DO NOTHING;
