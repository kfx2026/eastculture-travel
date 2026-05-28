/**
 * 东方城市人文空间 · 文旅
 * 全站数据：双语词典 + 5城完整数据
 * 图片策略：Unsplash CDN + CSS渐变回退
 */
(function() {

// ========== 全站双语词典 ==========
var DICT = {
  site_name:        { en: "Oriental Cities · Travel", zh: "东方城市人文空间 · 文旅" },
  site_tagline:     { en: "Discover the soul of China through its cities", zh: "以城市为窗，见华夏之美" },
  home:             { en: "Home", zh: "首页" },
  cities:           { en: "Cities", zh: "城市" },
  about:            { en: "About", zh: "关于" },
  lang_switch:      { en: "中文", zh: "English" },
  back_top:         { en: "Top", zh: "顶部" },
  
  hero_title:       { en: "China Beyond the Postcard", zh: "不止于明信片的中国" },
  hero_sub:         { en: "Ancient capitals, misty mountains, fiery kitchens. Every city tells a story waiting to be lived.", zh: "古都烟云，山水意境，人间烟火。每座城市都有等待被亲历的故事。" },
  hero_cta:         { en: "Explore Cities", zh: "探索城市" },
  
  sec_featured:     { en: "Seasonal Picks", zh: "时令推荐" },
  sec_featured_sub: { en: "Handpicked destinations for this season", zh: "当季最值得去的城市精选" },
  sec_latest:       { en: "Recently Added", zh: "最新上线" },
  sec_latest_sub:   { en: "Fresh destinations ready for your next journey", zh: "全新目的地，等您启程" },
  sec_brand:        { en: "Why Travel With Us", zh: "品牌意境" },
  sec_brand_sub:    { en: "We don't just show you China. We help you feel it.", zh: "我们不只展示中国，我们帮您感受中国。" },
  
  brand_1_title:    { en: "Deep Local Insight", zh: "深耕本土视角" },
  brand_1_desc:     { en: "Every city guide is written by locals who live and breathe the place.", zh: "每份城市指南都由生活于此的本地人撰写。" },
  brand_2_title:    { en: "Practical & Honest", zh: "实用且诚实" },
  brand_2_desc:     { en: "No inflated reviews. Real prices, real tips, real experiences.", zh: "不夸大评价。真实价格、真实建议、真实体验。" },
  brand_3_title:    { en: "Culture First", zh: "文化先行" },
  brand_3_desc:     { en: "Beyond the landmarks — food, crafts, festivals, and the rhythm of daily life.", zh: "超越地标——美食、手艺、节庆、日常生活的韵律。" },
  
  city_count_label: { en: "cities and growing", zh: "座城市，持续更新中" },
  view_detail:      { en: "View Details", zh: "查看详情" },
  back_cities:      { en: "All Cities", zh: "返回城市列表" },
  
  sec_landmarks:    { en: "Must-See Landmarks", zh: "核心景区" },
  sec_cuisine:      { en: "Local Flavors", zh: "特色美食" },
  sec_culture:      { en: "Culture & Heritage", zh: "民俗文化" },
  sec_guide:        { en: "Traveler's Guide", zh: "境外出行攻略" },
  
  guide_climate:    { en: "Best Season", zh: "最佳季节" },
  guide_days:       { en: "Recommended Stay", zh: "建议天数" },
  guide_transit:    { en: "Getting Around", zh: "市内交通" },
  guide_intercity:  { en: "Getting There", zh: "城际交通" },
  guide_tips:       { en: "Essential Tips", zh: "实用贴士" },
  
  coming_soon:      { en: "More Cities Coming", zh: "更多城市即将上线" },
  coming_soon_sub:  { en: "We're adding new destinations regularly. Stay tuned.", zh: "我们定期更新城市内容，敬请期待。" },
  coming_tba:       { en: "To Be Announced", zh: "待定" },
  
  footer_text:      { en: "Oriental Urban Humanistic Space · Travel | Showcasing the beauty of China to the world", zh: "东方城市人文空间 · 文旅 | 向世界展示大美中国" },
  footer_contact:   { en: "Contact: 178577324@qq.com", zh: "联系：178577324@qq.com" },
  footer_copyright: { en: "© 2026 Oriental Cities. All content verified and updated regularly.", zh: "© 2026 东方城市人文空间。所有内容定期核对更新。" },
  footer_privacy:   { en: "Privacy Policy", zh: "隐私政策" },
  footer_food:      { en: "Chinese Food Guide", zh: "中华美食指南" },
  
  page:             { en: "Page", zh: "第" },
  page_of:          { en: "of", zh: "/" },
  prev:             { en: "Previous", zh: "上一页" },
  next:             { en: "Next", zh: "下一页" },
  
  ad_label:         { en: "Advertisement", zh: "广告" },

  // === New: differentiated sections ===
  sec_practical:    { en: "🛠 Practical Survival Guide", zh: "🛠 实操通关手册" },
  sec_honest:       { en: "⚠️ Honest Truth", zh: "⚠️ 避坑实话" },
  sec_secret:       { en: "🗺 Local Secrets", zh: "🗺 本地人才知道" },
};

// ========== 5城完整数据 ==========
var CITIES = [
  {
    id: "beijing",
    name:       { en: "Beijing", zh: "北京" },
    province:   { en: "Beijing Municipality", zh: "北京市" },
    intro:      { en: "The timeless capital where imperial grandeur meets cutting-edge modernity. Walk the Great Wall at sunrise, get lost in hutong alleyways, and taste Peking duck carved tableside.", zh: "千年帝都，气象万千。长城日出、胡同深处、桌前现片的烤鸭——北京在古老与先锋之间自如呼吸。" },
    hero_img:   "img/beijing.jpg",
    hero_fb:    "linear-gradient(135deg, #8B1E1E 0%, #C44536 40%, #E8A87C 100%)",
    landmarks: [
      { name: { en: "The Great Wall (Mutianyu)", zh: "慕田峪长城" }, img: "img/beijing.jpg", desc: { en: "The most breathtaking section near Beijing — fewer crowds, restored yet authentic, with a thrilling toboggan ride down.", zh: "北京近郊最壮美的一段——游客较少，修缮得当又不失古意，下山还能坐滑道。" }, highlight: { en: "Toboggan slide down the mountain", zh: "滑道下山超刺激" }, hours: { en: "7:30 AM – 5:30 PM", zh: "7:30 – 17:30" }, ticket: { en: "¥45 (Apr–Oct), ¥40 (Nov–Mar)", zh: "¥45（旺季）/ ¥40（淡季）" }, tips: { en: "Go early — arrive by 8 AM to have the wall almost to yourself.", zh: "早点去——8点前到，长城几乎是你的私人领地。" }, location: { en: "Huairou District, 70km from city center", zh: "怀柔区，距市中心70公里" }, rating: "4.8", tags: { en: "UNESCO · Iconic · Day Trip", zh: "世界遗产 · 地标 · 一日游" } },
      { name: { en: "The Forbidden City", zh: "故宫博物院" }, img: "img/beijing.jpg", desc: { en: "The world's largest palace complex — 980 buildings, 600 years of history. Every courtyard whispers tales of emperors and dynasties.", zh: "世界最大宫殿群——980座建筑，600年风云。每一进院落都是帝王将相的无声史书。" }, highlight: { en: "Hall of Supreme Harmony rooftop beasts", zh: "太和殿脊兽" }, hours: { en: "8:30 AM – 5:00 PM (closed Mon)", zh: "8:30 – 17:00（周一闭馆）" }, ticket: { en: "¥60 (Apr–Oct), ¥40 (Nov–Mar)", zh: "¥60（旺季）/ ¥40（淡季）" }, tips: { en: "Book online 7 days ahead — tickets sell out fast.", zh: "提前7天网上预约——票抢得很快。" }, location: { en: "Dongcheng District, central Beijing", zh: "东城区，北京市中心" }, rating: "4.9", tags: { en: "UNESCO · Must-See · Half-Day", zh: "世界遗产 · 必去 · 半日游" } },
      { name: { en: "Temple of Heaven", zh: "天坛公园" }, img: "img/beijing.jpg", desc: { en: "Where emperors prayed for harvest — the Hall of Prayer for Good Harvests is China's most perfect wooden structure. Come early morning for locals practicing tai chi.", zh: "帝王祭天之所——祈年殿是中国最完美的木构建筑。清晨来，看北京大爷大妈打太极。" }, highlight: { en: "Morning tai chi with locals", zh: "晨间太极，市井生活" }, hours: { en: "6:00 AM – 9:00 PM", zh: "6:00 – 21:00" }, ticket: { en: "¥15 (park), ¥35 (combo)", zh: "¥15（公园）/ ¥35（联票）" }, tips: { en: "The Echo Wall really works — stand at one end and whisper.", zh: "回音壁真的能回音——站一端轻声说话试试。" }, location: { en: "Dongcheng District, south of Forbidden City", zh: "东城区，故宫以南" }, rating: "4.7", tags: { en: "UNESCO · Morning · Architecture", zh: "世界遗产 · 清晨 · 建筑" } }
    ],
    cuisine: [
      { name: { en: "Peking Duck", zh: "北京烤鸭" }, img: "img/beijing.jpg", desc: { en: "Crispy skin, tender meat, carved tableside. Wrap in paper-thin pancakes with hoisin, cucumber, and scallions.", zh: "皮脆肉嫩，桌边现片。薄饼一抹甜面酱，配上黄瓜条、葱丝，一卷入口。" }, where: { en: "Available at traditional roast duck restaurants citywide", zh: "各大传统烤鸭店均有供应" }, price: { en: "¥200–400 per person", zh: "人均¥200–400" }, must_try: { en: "Ask for the 'crispy skin dipped in sugar' — a Beijing secret.", zh: "记得要'皮蘸白糖'——北京人的隐藏吃法。" } },
      { name: { en: "Zhajiang Noodles", zh: "老北京炸酱面" }, img: "img/beijing.jpg", desc: { en: "Hand-pulled noodles with fermented soybean paste, julienned cucumber, radish, and soybeans. Beijing's ultimate comfort food.", zh: "手擀面配黄酱肉丁，黄瓜丝、萝卜丝、黄豆码得齐齐整整。北京人的灵魂碳水。" }, where: { en: "Found in neighborhood noodle shops — look for the red lanterns", zh: "胡同面馆随处可见——认准红灯笼招牌" }, price: { en: "¥25–50 per bowl", zh: "¥25–50/碗" }, must_try: { en: "Mix thoroughly before eating — every strand should be coated.", zh: "上桌赶紧拌——每根面都要裹满酱。" } }
    ],
    culture: [
      { name: { en: "Hutong Wandering", zh: "胡同漫游" }, img: "img/beijing.jpg", desc: { en: "The real Beijing lives in its alleyways. Nanluoguxiang for the buzz, Wudaoying for the calm. Rent a bicycle — it's the only way.", zh: "胡同里才是真正的北京。南锣鼓巷热闹，五道营清静。租辆自行车——这是唯一的正确打开方式。" }, significance: { en: "Living history — some hutongs date back to the Yuan Dynasty (13th century)", zh: "活着的历史——有些胡同可追溯至元朝（13世纪）" }, best_time: { en: "Late afternoon, golden hour light", zh: "傍晚时分，金色光线最美" }, experience: { en: "Bicycle rental + hutong breakfast tour", zh: "租车骑行+胡同早点巡游" } }
    ],
    guide: {
      climate:   { en: "Spring (Apr–May) & Autumn (Sep–Oct) — mild, blue skies, perfect for walking.", zh: "春秋两季最佳（4-5月、9-10月）——温和舒适，蓝天白云，最适合步行探索。" },
      days:      { en: "4–5 days", zh: "4–5天" },
      transit:   { en: "Subway covers all major sites (¥3–9/ride). Didi (Chinese Uber) is cheap and reliable. Avoid taxis during rush hour.", zh: "地铁覆盖主要景区（¥3–9/次）。滴滴打车便宜可靠。高峰期避开出租车。" },
      intercity: { en: "Beijing Capital (PEK) & Daxing (PKX) airports. High-speed rail: 4.5h to Shanghai, 2.5h to Xi'an.", zh: "首都机场(PEK)+大兴机场(PKX)。高铁：4.5小时到上海，2.5小时到西安。" },
      tips:      { en: "Carry your passport at all times. Download Alipay before arrival. VPN is essential — Google and Instagram are blocked. Tap water is NOT drinkable.", zh: "随身带护照。提前下载支付宝。VPN必备——Google和Instagram被墙。自来水不可直饮。" }
    },
    practicalGuide: {
      en: '<p><strong>Visa:</strong> Beijing has 144-hour transit visa-free for citizens of 54 countries. You must arrive via PEK or Daxing airport and depart to a third country (not your origin). Apply at the visa counter before immigration — have your next flight confirmation ready.</p><p><strong>Payment:</strong> Download <strong>Alipay</strong> or <strong>WeChat Pay</strong> before arriving. Link your international credit card. Taxis, most restaurants, and even street vendors accept digital payment. Still carry ¥300–500 cash as backup — some small hutongs shops are cash-only.</p><p><strong>SIM Card:</strong> Buy at the airport upon arrival. China Unicom and China Mobile both offer tourist SIMs (7/15/30 days, ¥100–300). You need your passport. Alternatively, get an eSIM before arriving (e.g., Holafly, Airalo).</p><p><strong>VPN:</strong> Install a VPN on your phone AND laptop before arriving in China. Google, Instagram, Twitter, WhatsApp, and YouTube are all blocked. The VPN that works at home may NOT work in China — test it before you leave.</p><p><strong>Language survival:</strong> Almost no one speaks English outside tourist areas. Download <strong>Google Translate</strong> (offline Chinese pack) or <strong>Pleco</strong> before arrival. Learn these: "谢谢" (xièxiè, thank you), "多少钱" (duōshao qián, how much), "不要辣" (bú yào là, no spice).</p>',
      zh: '<p><strong>签证：</strong>北京对54个国家公民实施144小时过境免签。必须从首都机场或大兴机场入境，前往第三国（不能回出发国）。在边检前到签证柜台办理——准备好下一程机票。</p><p><strong>支付：</strong>出发前下载<strong>支付宝</strong>或<strong>微信支付</strong>，绑定国际信用卡。出租车、大部分餐厅、甚至街边摊都支持扫码支付。随身带¥300–500现金备用——有些胡同小店只收现金。</p><p><strong>手机卡：</strong>下飞机后在机场买。中国联通和中国移动都有旅行卡（7/15/30天，¥100–300）。需要护照。或者出发前买eSIM（如Holafly、Airalo）。</p><p><strong>VPN：</strong>在中国入境前就在手机和笔记本电脑上都装好VPN。Google、Instagram、Twitter、WhatsApp、YouTube全部被墙。你在家能用的VPN在中国可能不行——出发前一定要测试。</p><p><strong>语言救命：</strong>景区以外几乎没人说英语。出发前下载<strong>Google翻译</strong>（离线中文包）或<strong>Pleco</strong>。记住这几句：谢谢、多少钱、不要辣。</p>'
    },
    honestTips: {
      en: '<p><strong>The Great Wall is crowded.</strong> Everyone goes to Badaling — it\'s a human river. Go to <strong>Mutianyu</strong> instead (fewer crowds, toboggan ride). Even better: <strong>Jinshanling</strong> or <strong>Simatai</strong> (wild, unrestored, you\'ll be nearly alone). Arrive by 8 AM whatever you choose.</p><p><strong>The Forbidden City sells out.</strong> Tickets are released 7 days in advance on the official WeChat mini-program. They sell out in hours during peak season. Book the exact moment they become available. If you miss it, try again at midnight — sometimes they release returned tickets.</p><p><strong>Avoid public holidays.</strong> National Day (Oct 1-7), Chinese New Year (Jan/Feb), and May Day (May 1-5) transform Beijing into a wall-to-wall crowd. Everything is more expensive and twice as crowded. If you must come, book everything 2 months ahead.</p><p><strong>Peking Duck for tourists vs locals.</strong> Quanjude is historic but touristy. Dadong is modern and refined. The local secret: small restaurants near Qianmen serve just-as-good duck for one-third the price.</p>',
      zh: '<p><strong>长城人很多。</strong>所有人都去八达岭——跟下饺子一样。去<strong>慕田峪</strong>（人少，有滑道下山）。更好的是<strong>金山岭</strong>或<strong>司马台</strong>（野长城，几乎没有游客）。不管去哪段，早上8点前到。</p><p><strong>故宫门票靠抢。</strong>提前7天在官方微信小程序放票。旺季几小时就抢光。放票那一刻就去抢。没抢到的话凌晨再看看——有时候会有退票放出来。</p><p><strong>避开公共假期。</strong>国庆（10月1-7日）、春节（1/2月）、五一（5月1-5日）期间北京人山人海。什么都贵，哪都挤。如果非来不可，提前两个月订好一切。</p><p><strong>烤鸭去游客店还是本地店？</strong>全聚德有名但游客多。大董现代精致。本地秘密：前门附近的小店做的烤鸭不差，价格只有三分之一。</p>'
    },
    localSecrets: {
      en: '<p><strong>Jingshan Park at sunset.</strong> Climb the hill behind the Forbidden City for the single best view of Beijing — the entire Forbidden City sprawled at your feet, golden rooftops catching the last light. Entrance is ¥2. Go 30 minutes before sunset.</p><p><strong>Wudaoying Hutong.</strong> Skip Nanluoguxiang (too many tourists and mediocre overpriced snacks). Walk 10 minutes east to Wudaoying — quiet hutong with excellent independent cafes, bookstores, and restaurants that locals actually go to.</p><p><strong>Temple of Heaven mornings.</strong> Locals gather at 6 AM for tai chi, dancing, kite flying, and an impromptu concert of traditional instruments. It\'s more entertaining than the temple itself. You don\'t need a ticket for the park; just the inner temple area costs ¥15.</p><p><strong>Chinese breakfast on the street.</strong> Look for the breakfast carts between 6-9 AM. Try jianbing (savory crepe, ¥5-8), youtiao (fried dough), and doujiang (soy milk). Point at what you want, hand over small change — the best ¥5 you\'ll spend in Beijing.</p>',
      zh: '<p><strong>景山公园看日落。</strong>故宫后门的小山包，是看北京最好的地方——整个故宫在脚下展开，金色屋顶被夕阳照亮。门票¥2。日落前半小时到。</p><p><strong>五道营胡同。</strong>别去南锣鼓巷（太多游客，小吃贵还不好吃）。往东走10分钟到五道营——安静的胡同，有很好的独立咖啡馆、书店和本地人真的会去的餐馆。</p><p><strong>天坛清晨。</strong>早上6点本地人就来打太极、跳舞、放风筝、还有即兴民乐演奏。比天坛本身还有看头。公园门票¥15，不进祈年殿不需要额外买票。</p><p><strong>街头早点。</strong>早上6-9点找早摊车。尝尝煎饼果子（¥5-8）、油条、豆浆。指一下你要什么，给零钱——这是你在北京花得最值的¥5。</p>'
    }
  },
  {
    id: "chengdu",
    name:       { en: "Chengdu", zh: "成都" },
    province:   { en: "Sichuan Province", zh: "四川省" },
    intro:      { en: "The land of pandas, fiery hotpot, and a pace of life that redefines 'relaxed'. Sip tea in a bamboo grove while locals play mahjong — this is Chengdu.", zh: "熊猫之乡，火锅之城，一座重新定义'安逸'的城市。竹林里喝茶，听隔壁桌搓麻将——这就是成都。" },
    hero_img:   "img/chengdu.jpg",
    hero_fb:    "linear-gradient(135deg, #1B5E20 0%, #388E3C 40%, #81C784 100%)",
    landmarks: [
      { name: { en: "Giant Panda Breeding Base", zh: "大熊猫繁育研究基地" }, img: "img/chengdu.jpg", desc: { en: "See pandas at their most active — early morning feeding time is pure joy. Watch cubs tumble and adults munch bamboo with unmatched dedication.", zh: "看熊猫最活跃的时刻——清晨喂食时间萌到犯规。幼崽打滚，成年熊猫专注啃竹子。" }, highlight: { en: "Baby panda nursery (seasonal)", zh: "熊猫幼崽育婴室（季节性）" }, hours: { en: "7:30 AM – 6:00 PM", zh: "7:30 – 18:00" }, ticket: { en: "¥55", zh: "¥55" }, tips: { en: "Arrive at 7:30 AM sharp — pandas sleep by 10 AM. The moon gate entrance is less crowded.", zh: "7:30准时到——10点后熊猫就睡了。月亮门入口人少些。" }, location: { en: "Chenghua District, 18km north of city center", zh: "成华区，市中心以北18公里" }, rating: "4.8", tags: { en: "Wildlife · Family · Morning", zh: "野生动物 · 亲子 · 清晨" } },
      { name: { en: "Jinli Ancient Street", zh: "锦里古街" }, img: "img/chengdu.jpg", desc: { en: "Red lanterns, wooden architecture, and the best street food within the Wuhou Shrine complex. Perfect at dusk when lanterns flicker on.", zh: "红灯笼、木建筑、武侯祠旁最棒的街头小吃街。黄昏时分灯笼亮起，氛围满分。" }, highlight: { en: "Sichuan opera face-changing show", zh: "川剧变脸表演" }, hours: { en: "Open all day, best after 5 PM", zh: "全天开放，建议17:00后前往" }, ticket: { en: "Free (street area)", zh: "免费（街区）" }, tips: { en: "Try 'san da pao' (three big cannons) — a traditional snack with a theatrical preparation.", zh: "尝尝'三大炮'——制作过程有表演效果的传统小吃。" }, location: { en: "Wuhou District, adjacent to Wuhou Shrine", zh: "武侯区，紧邻武侯祠" }, rating: "4.5", tags: { en: "Street Food · Evening · Culture", zh: "街头美食 · 夜景 · 文化" } },
      { name: { en: "Mount Qingcheng", zh: "青城山" }, img: "img/chengdu.jpg", desc: { en: "Birthplace of Taoism — misty peaks, ancient temples hidden in dense forest. The front mountain is easier; the back mountain is wilder and far less crowded.", zh: "道教发源地——雾绕峰峦，密林藏古观。前山较平缓，后山更野，游客少得多。" }, highlight: { en: "Back mountain hiking trail", zh: "后山徒步步道" }, hours: { en: "8:00 AM – 5:30 PM", zh: "8:00 – 17:30" }, ticket: { en: "¥90 (front), ¥20 (back)", zh: "¥90（前山）/ ¥20（后山）" }, tips: { en: "Take the high-speed train to Qingchengshan station (30min from Chengdu).", zh: "成都坐高铁到青城山站仅30分钟。" }, location: { en: "Dujiangyan City, 68km from Chengdu", zh: "都江堰市，距成都68公里" }, rating: "4.7", tags: { en: "UNESCO · Nature · Day Trip", zh: "世界遗产 · 自然 · 一日游" } }
    ],
    cuisine: [
      { name: { en: "Sichuan Hotpot", zh: "四川火锅" }, img: "img/chengdu.jpg", desc: { en: "A cauldron of bubbling chili oil, Sichuan peppercorns, and infinite ingredients. The numbing-spicy (mala) sensation is unlike anything else.", zh: "翻滚的红油锅底，花椒与干辣椒共舞，食材无限。麻辣鲜香四重奏，没有体验过的人生不完整。" }, where: { en: "Hotpot restaurants are everywhere — follow the aroma and the crowds", zh: "火锅店遍布全城——循着香气和人潮走就对了" }, price: { en: "¥80–150 per person", zh: "人均¥80–150" }, must_try: { en: "Order 'huanghou' (beef aorta) and lotus root slices — trust us.", zh: "黄喉和藕片必点——信我们。" } },
      { name: { en: "Dan Dan Noodles", zh: "担担面" }, img: "img/chengdu.jpg", desc: { en: "A humble bowl of noodles with minced pork, preserved vegetables, and chili oil. Simple, perfect, and under ¥15.", zh: "肉末、芽菜、红油浇在手擀面上。简单、完美、不过15块钱。" }, where: { en: "Any local noodle shop — look for long queues", zh: "街边面馆——看到有人排队就对了" }, price: { en: "¥10–15 per bowl", zh: "¥10–15/碗" }, must_try: { en: "Add a spoon of the house chili paste on the side.", zh: "旁边辣椒酱舀一勺进去。" } }
    ],
    culture: [
      { name: { en: "Tea House Culture", zh: "茶馆文化" }, img: "img/chengdu.jpg", desc: { en: "Tea houses are Chengdu's living room. Bamboo chairs, jasmine tea, ear cleaning services — spend an entire afternoon doing nothing. It's an art form.", zh: "茶馆是成都人的客厅。竹椅、盖碗茶、掏耳朵——花一整个下午无所事事。这是一种艺术。" }, significance: { en: "Chengdu has over 10,000 tea houses — more than any city on Earth.", zh: "成都茶馆超万家——全球之最。" }, best_time: { en: "Any afternoon, rain or shine", zh: "任何下午，风雨无阻" }, experience: { en: "Renmin Park Heming Tea House — the most authentic", zh: "人民公园鹤鸣茶社——最正宗的老茶馆" } }
    ],
    guide: {
      climate:   { en: "Spring (Mar–May) & Autumn (Sep–Nov). Summer is hot and humid; winter is grey but mild.", zh: "春秋最佳（3-5月、9-11月）。夏季湿热，冬季阴冷但温和。" },
      days:      { en: "3–4 days", zh: "3–4天" },
      transit:   { en: "Metro is clean and easy (¥2–8). Bike sharing (Meituan/Hellobike) is the best way to explore.", zh: "地铁干净便利（¥2–8）。共享单车（美团/哈啰）是最佳探索方式。" },
      intercity: { en: "Chengdu Shuangliu (CTU) & Tianfu (TFU) airports. High-speed rail: 1h to Chongqing, 3h to Xi'an.", zh: "双流(CTU)+天府(TFU)双机场。高铁：1小时到重庆，3小时到西安。" },
      tips:      { en: "Sichuan food is SPICY — say 'bù là' (not spicy) if needed. Most restaurants can adjust. Bring tissues — many local spots don't provide napkins. Carry cash for street vendors.", zh: "川菜辣——需要的话说'不要辣'。多数餐馆可以调整。随身带纸巾——很多小店不提供。带现金以备路边摊。" }
    },
    practicalGuide: {
      en: '<p><strong>Getting around:</strong> Chengdu metro is excellent and cheap (¥2–8). Buy a 天府通 (Tianfu Tong) card at any station. Bike-sharing (Meituan/Hellobike) is everywhere — the best way to explore the city\'s flat terrain. Didi (Chinese Uber) costs ¥15–30 for most city rides.</p><p><strong>Panda Base logistics:</strong> The research base opens at 7:30 AM. Take metro Line 3 to Panda Avenue station, then a free shuttle bus. Arrive at 7:30 sharp — pandas are most active in the morning and sleep by 10 AM. The moon-gate entrance is less crowded. Buy tickets online in advance (¥55).</p><p><strong>Heat management:</strong> Chengdu summers are brutally humid (30°C+). Carry a portable fan and water. Most restaurants are not air-conditioned. Learn "微辣" (wēi là, mild spicy) — even "mild" in Sichuan is hot.</p><p><strong>Language:</strong> English is not widely spoken outside the tourist areas. Download Pleco (offline Chinese dictionary). Learn "多少钱" (how much) and "买单" (check, please).</p>',
      zh: '<p><strong>出行：</strong>成都地铁方便便宜（¥2–8）。任何地铁站都可以买天府通卡。共享单车（美团/哈啰）满街都是——平坦的成都骑自行车最舒服。滴滴市内大部分¥15–30。</p><p><strong>看熊猫攻略：</strong>繁育基地7:30开门。地铁3号线到熊猫大道站，转免费摆渡车。7:30准时到——熊猫早上最活跃，10点就睡了。月亮门入口人少。提前网上买票（¥55）。</p><p><strong>防热：</strong>成都夏天湿热得厉害（30°C+）。随身带小风扇和水。大部分餐馆没空调。学会说"微辣"——在四川，微辣已经很辣了。</p><p><strong>语言：</strong>景区以外英语不普及。下载Pleco（离线中文字典）。记住"多少钱"和"买单"这两句就够了。</p>'
    },
    honestTips: {
      en: '<p><strong>Hotpot is hotter than you think.</strong> Even the "mild" broth in Chengdu will make you sweat. If you\'re not a spice veteran, request "鸳鸯锅" (yuanyang guo, half spicy half clear broth). The oil-based broth is not soup — don\'t drink it. The sesame oil dip isn\'t for flavor; it coats your stomach against the spice. Your clothes will smell for 2 days after.</p><p><strong>Jinli vs Kuanzhai Xiangzi.</strong> Both are tourist streets with inflated prices. Jinli is more atmospheric at night. Kuanzhai is cleaner and more Instagram-friendly. Neither is where locals hang out — they\'re for tourists. Go once, take photos, don\'t spend much.</p><p><strong>Panda Base crowds.</strong> Despite arriving at 7:30, expect queues for the panda nursery. On weekends, wait times can exceed 1 hour. Weekdays are significantly better. Skip the panda volunteer program — it\'s expensive (¥3,000+) and you barely touch a panda.</p>',
      zh: '<p><strong>火锅比你想象的辣得多。</strong>在成都，连"微辣"都能让你出汗。吃不了辣就点"鸳鸯锅"——一半红油一半清汤。那层红油不是汤——别喝。香油蘸碟不是调味的，是给胃上保护膜的。吃完衣服带味两天。</p><p><strong>锦里vs宽窄巷子。</strong>两条都是游客街，价格虚高。锦里晚上更有氛围。宽窄更干净更适合拍照。但本地人都不去——去一次拍拍照就行了，别花大钱。</p><p><strong>熊猫基地排队。</strong>就算7:30到，看熊猫幼崽还是要排队。周末等一小时以上。工作日好得多。别参加熊猫志愿者项目——¥3000+，其实基本碰不到熊猫。</p>'
    },
    localSecrets: {
      en: '<p><strong>People\'s Park (Renmin Gongyuan).</strong> This is where Chengdu\'s soul lives. Find the Heming Tea House (鹤鸣茶社) — established 1923. Grab a bamboo chair, order jasmine tea (¥15–30), and watch locals play mahjong, get their ears cleaned, and argue about politics. Spend at least 2 hours doing nothing. It\'s called "安逸" (ānyì) — the art of comfortable idleness.</p><p><strong>Late-night hotpot in Yulin.</strong> The Yulin neighborhood (where Zhao Lei\'s song "Chengdu" is set) comes alive after 10 PM with hotpot restaurants that stay open until 4 AM. Go with friends, order beer, and watch Chengdu\'s nightlife unfold.</p><p><strong>Qingcheng Mountain back trail.</strong> Skip the front mountain (¥90, tourist trail with cable cars). Take the back mountain entrance (¥20, wild trail with waterfalls). It\'s more physically demanding but you\'ll have ancient Taoist temples almost to yourself. Take the high-speed train from Chengdu Xi\'pu station (30 min, ¥16).</p>',
      zh: '<p><strong>人民公园。</strong>成都的灵魂在这里。找到鹤鸣茶社（1923年开张），搬把竹椅，点杯盖碗茶（¥15–30），看本地人打麻将、掏耳朵、谈天说地。至少花两小时啥也不干。这叫"安逸"。</p><p><strong>玉林夜火锅。</strong>赵雷唱"成都"的玉林路，晚上10点后火锅店开始热闹，营业到凌晨4点。叫上朋友，点几瓶啤酒，看成都的夜生活怎么过。</p><p><strong>青城山后山。</strong>别去前山（¥90，游客路线有缆车）。走后山入口（¥20，野路有瀑布）。更费体力但你能独享古老的道观。成都犀浦站坐高铁30分钟到青城山站（¥16）。</p>'
    }
  },
  {
    id: "xian",
    name:       { en: "Xi'an", zh: "西安" },
    province:   { en: "Shaanxi Province", zh: "陕西省" },
    intro:      { en: "The ancient starting point of the Silk Road, home to the Terracotta Warriors and a Muslim Quarter that has been sizzling for over 1,000 years.", zh: "丝绸之路的东方起点，兵马俑的故乡。回民街的烟火气已经飘了上千年。" },
    hero_img:   "img/xian.jpg",
    hero_fb:    "linear-gradient(135deg, #6D4C41 0%, #A1887F 40%, #D7CCC8 100%)",
    landmarks: [
      { name: { en: "Terracotta Warriors", zh: "秦始皇兵马俑" }, img: "img/xian.jpg", desc: { en: "8,000 life-sized soldiers, each with a unique face, guarding China's first emperor for 2,200 years. The scale is staggering.", zh: "8000尊真人大小陶俑，千人千面，守护秦始皇2200年。规模震撼到失语。" }, highlight: { en: "Pit 1 — the main excavation hall", zh: "一号坑——主展厅" }, hours: { en: "8:30 AM – 5:00 PM", zh: "8:30 – 17:00" }, ticket: { en: "¥120", zh: "¥120" }, tips: { en: "Go to Pit 3 first, then Pit 2, then Pit 1. The reverse order avoids the tour group crush.", zh: "先看三号坑→二号坑→一号坑，反向走避开旅行团。" }, location: { en: "Lintong District, 35km east of Xi'an", zh: "临潼区，西安以东35公里" }, rating: "4.9", tags: { en: "UNESCO · Iconic · Day Trip", zh: "世界遗产 · 地标 · 一日游" } },
      { name: { en: "Ancient City Wall", zh: "西安古城墙" }, img: "img/xian.jpg", desc: { en: "China's best-preserved city wall — 14km of Ming Dynasty fortifications. Rent a bike and cycle the entire perimeter at sunset.", zh: "中国保存最完好的古城墙——明代14公里防御工事。租辆自行车，日落时分骑行一整圈。" }, highlight: { en: "Sunset bike ride along the wall", zh: "日落城墙骑行" }, hours: { en: "8:00 AM – 10:00 PM", zh: "8:00 – 22:00" }, ticket: { en: "¥54, bike rental ¥45", zh: "¥54，自行车租赁¥45" }, tips: { en: "South Gate (Yongning) has the best bike rental and the most dramatic entrance.", zh: "南门（永宁门）租车最佳，入口也最壮观。" }, location: { en: "City center, surrounding the old town", zh: "市中心，环绕老城" }, rating: "4.7", tags: { en: "Cycling · Sunset · Architecture", zh: "骑行 · 日落 · 建筑" } },
      { name: { en: "Muslim Quarter", zh: "回民街" }, img: "img/xian.jpg", desc: { en: "A maze of food stalls, spice markets, and the Great Mosque — a serene oasis hidden in the chaos. Come hungry.", zh: "美食摊、香料铺、大清真寺组成的美食迷宫——混乱中藏着宁静。空腹来。" }, highlight: { en: "Yangrou Paomo (lamb soup with bread)", zh: "羊肉泡馍" }, hours: { en: "All day, best from 5 PM", zh: "全天，下午5点后最佳" }, ticket: { en: "Free (street), ¥25 (Great Mosque)", zh: "免费（街区），清真寺¥25" }, tips: { en: "The Great Mosque is one of China's oldest — built in 742 AD. Don't miss the inner courtyards.", zh: "大清真寺始建于742年——别错过内院。" }, location: { en: "Lianhu District, behind the Drum Tower", zh: "莲湖区，鼓楼背后" }, rating: "4.6", tags: { en: "Food · Market · Evening", zh: "美食 · 市场 · 夜晚" } }
    ],
    cuisine: [
      { name: { en: "Yangrou Paomo", zh: "羊肉泡馍" }, img: "img/xian.jpg", desc: { en: "Tear flatbread into tiny pieces, then the chef ladles rich lamb broth over it. Hearty, warming, and deeply satisfying.", zh: "手工把饼掰成小块，厨师浇上滚烫羊肉汤。扎实、暖胃、满足感爆棚。" }, where: { en: "Muslim Quarter eateries and local lamb restaurants", zh: "回民街及本地羊肉馆均有" }, price: { en: "¥30–60 per person", zh: "人均¥30–60" }, must_try: { en: "The smaller you tear the bread, the better the texture.", zh: "饼掰得越小，口感越好。" } }
    ],
    culture: [
      { name: { en: "Tang Dynasty Music & Dance", zh: "唐乐舞" }, img: "img/xian.jpg", desc: { en: "A spectacular dinner show recreating Tang Dynasty court music and dance — silk robes, ancient instruments, and a lavish dumpling banquet.", zh: "复原唐代宫廷乐舞的华丽晚宴秀——丝绸长袍、古乐器、配上饺子盛宴。" }, significance: { en: "Xi'an was the capital of 13 dynasties, including the Tang (618–907) — China's golden age.", zh: "西安是十三朝古都，盛唐（618-907）是中国历史上的黄金时代。" }, best_time: { en: "Evening shows, daily", zh: "每晚演出" }, experience: { en: "Tang Dynasty Palace or Shaanxi Grand Opera House", zh: "唐乐宫或陕西歌舞大剧院" } }
    ],
    guide: {
      climate:   { en: "Spring (Apr–May) & Autumn (Sep–Oct). Summers are hot; winters are cold but less crowded.", zh: "春秋最佳（4-5月、9-10月）。夏季炎热，冬季寒冷但游客少。" },
      days:      { en: "3–4 days", zh: "3–4天" },
      transit:   { en: "Metro lines 1–4 cover main sites. Bus 306 (Tourist 5) goes directly to Terracotta Warriors from the train station.", zh: "地铁1-4号线覆盖主要景点。游5路（306路）从火车站直达兵马俑。" },
      intercity: { en: "Xi'an Xianyang Airport (XIY). High-speed rail: 2.5h to Beijing, 3h to Chengdu.", zh: "西安咸阳机场(XIY)。高铁：2.5小时到北京，3小时到成都。" },
      tips:      { en: "The Terracotta Warriors are 35km from the city — plan a half day. The Muslim Quarter is best explored on foot with an empty stomach. Try the persimmon cakes (shizi bing).", zh: "兵马俑距市区35公里——留半天时间。回民街最适合空腹步行探索。尝尝柿子饼。" }
    },
    practicalGuide: {
      en: '<p><strong>Getting to the Warriors:</strong> Take bus 306 (游5) from Xi\'an Railway Station — it goes directly to the Terracotta Warriors. ¥7, 1 hour. Taxis cost ¥120–150. Don\'t buy "jade" or "tea" along the way — classic scam. Official guides inside the museum cost ¥200 for a 2-hour tour (worth it).</p><p><strong>Muslim Quarter navigation:</strong> The main street (Beiyuanmen) is overwhelmingly crowded at night. Duck into the side alleys — the real food is there. Everything is halal (no pork). Learn "不要辣" (bú yào là) if you can\'t handle spice.</p><p><strong>City Wall biking:</strong> Rent a bike at the South Gate (Yongning). The full loop is 14km and takes 1.5-2 hours at a relaxed pace. Go 2 hours before sunset — you\'ll see the city transition from day to night from the wall. The bike rental costs ¥45, with a ¥200 deposit.</p><p><strong>Language:</strong> Xi\'an is less international than Beijing/Shanghai. English is limited. Pointing and smiling works. Download Pleco before you arrive.</p>',
      zh: '<p><strong>去兵马俑：</strong>西安火车站坐306路（游5）直达兵马俑，¥7，1小时。打车¥120–150。沿途不要买"玉石"或"茶叶"——经典骗局。博物馆内官方导游¥200/2小时（值得请）。</p><p><strong>回民街逛法：</strong>主街（北院门）晚上人挤人。钻到小巷子里——真正好吃的都在那里。所有食物都是清真（没有猪肉）。吃不了辣就说"不要辣"。</p><p><strong>城墙骑行：</strong>南门（永宁门）租自行车。完整一圈14公里，放松骑1.5-2小时。日落前两小时上去——在城墙上看着城市从白天过渡到夜晚。租车¥45，押金¥200。</p><p><strong>语言：</strong>西安没有北京上海那么国际化，英语不普及。指指点点加微笑就行。出发前下载Pleco。</p>'
    },
    honestTips: {
      en: '<p><strong>The Warriors are far from the city.</strong> It takes 1.5 hours each way minimum. The museum itself is 3 pits and a gift shop — don\'t expect a full-day experience. Many tourists are disappointed by the "you\'ve seen it in 45 minutes" factor. Go anyway — it\'s still one of the world\'s greatest archaeological sites.</p><p><strong>You cannot take photos WITH the warriors.</strong> Selfies are allowed, but no touching, no getting close, no flash photography. Security guards will whistle at you. Do not walk off the designated walkways — the floor contains actual archaeology.</p><p><strong>Muslim Quarter is a tourist trap.</strong> The food is overpriced on the main strip. Go to the side alleys — specifically Dapiyuan (大皮院) and Xiyangshi (西羊市) — where locals eat. Lamb skewers should cost ¥3-5, not ¥10. Yangrou paomo (bread in lamb soup) is worth the hype — find a busy shop, not a pretty one.</p>',
      zh: '<p><strong>兵马俑离市区很远。</strong>单程至少1.5小时。博物馆就是三个坑和一个纪念品店——别指望能逛一天。很多游客觉得"45分钟就看完了"有点失望。但还是值得去——世界最伟大的考古遗址之一。</p><p><strong>不能和兵马俑合影。</strong>可以自拍，但不能触摸、不能靠近、不能用闪光灯。保安会吹哨。不要走出指定步道——地下有真正的考古层。</p><p><strong>回民街是游客一条街。</strong>主街上东西贵。去侧巷——大皮院和西羊市——本地人在那里吃。羊肉串应该¥3-5，不是¥10。羊肉泡馍值得一试——找人多的小店，不是漂亮的店。</p>'
    },
    localSecrets: {
      en: '<p><strong>City Wall at sunset, by bike.</strong> This is Xi\'an\'s single best experience. Rent a bike at 5 PM, start from the South Gate, and ride counterclockwise. As the sun sets behind the wall\'s watchtowers, the city lights begin to flicker on below you. You can\'t do this in most Chinese cities — Xi\'an\'s wall is uniquely open for night cycling.</p><p><strong>The Forest of Steles (Beilin).</strong> A museum housing 3,000 stone tablets from the Han through Qing Dynasties. It\'s Xi\'an\'s most underrated attraction — silent, contemplative, and tells China\'s story in stone. The calligraphy on display spans 2,000 years. Most tourists skip it. Don\'t.</p><p><strong>Muslim Quarter back alleys after midnight.</strong> The main street closes down around 11 PM, but the side alleys come alive with a different crowd — locals, night-shift workers, and the best lamb soup of your life. Try the lamb offal soup (羊杂汤) at a stall that\'s been operating for 30 years.</p>',
      zh: '<p><strong>日落城墙骑行。</strong>这是西安最棒的体验。下午5点租车，从南门出发，逆时针骑。夕阳在城楼背后落下，城市灯光在你脚下亮起。中国大多数城市的城墙不能骑车——西安的城墙是唯一开放夜骑的。</p><p><strong>碑林。</strong>收藏了3000块从汉到清的石碑。西安最被低估的景点——安静、引人深思、用石头讲述中国故事。展出的书法跨越2000年。多数游客跳过这里。别跳。</p><p><strong>午夜回民街侧巷。</strong>主街11点收摊，但侧巷换了一群人——本地人、夜班工人、还有你吃过最好吃的羊肉汤。找一家开了30年的摊子，试试羊杂汤。</p>'
    }
  },
  {
    id: "hangzhou",
    name:       { en: "Hangzhou", zh: "杭州" },
    province:   { en: "Zhejiang Province", zh: "浙江省" },
    intro:      { en: "Marco Polo called it 'the city of heaven'. West Lake's misty waters, Dragon Well tea terraces, and ancient temples make Hangzhou China's most poetic city.", zh: "马可·波罗称之为'天城'。西湖烟波、龙井茶园、千年古刹——杭州是中国最富诗意的城市。" },
    hero_img:   "img/hangzhou.jpg",
    hero_fb:    "linear-gradient(135deg, #00695C 0%, #00897B 40%, #80CBC4 100%)",
    landmarks: [
      { name: { en: "West Lake", zh: "西湖" }, img: "img/hangzhou.jpg", desc: { en: "A UNESCO site that has inspired poets for millennia. Pagodas, arched bridges, willow-lined causeways — every view is a painting come alive.", zh: "世界遗产，千年诗意。雷峰塔、断桥、苏堤春晓——每一眼都是一幅活过来的水墨画。" }, highlight: { en: "Sunset from Leifeng Pagoda", zh: "雷峰塔日落" }, hours: { en: "Open 24 hours (scenic area)", zh: "24小时开放（景区）" }, ticket: { en: "Free (lake area), Leifeng Pagoda ¥40", zh: "免费（湖区），雷峰塔¥40" }, tips: { en: "Rent a bike and circle the entire lake (12km). Stop at random tea houses along the way.", zh: "租自行车环湖一周（12公里）。沿途随机停靠茶馆。" }, location: { en: "Xihu District, city center", zh: "西湖区，市中心" }, rating: "4.8", tags: { en: "UNESCO · Scenic · Cycling", zh: "世界遗产 · 风景 · 骑行" } },
      { name: { en: "Lingyin Temple", zh: "灵隐寺" }, img: "img/hangzhou.jpg", desc: { en: "One of China's largest and wealthiest Buddhist temples, tucked into forested hills. The Feilai Feng grottoes with 470+ stone carvings are a hidden wonder.", zh: "中国规模最大的佛教寺院之一，隐于山林。飞来峰470余尊石刻造像是隐藏的奇迹。" }, highlight: { en: "Feilai Feng ancient stone carvings", zh: "飞来峰石刻造像" }, hours: { en: "7:00 AM – 5:15 PM", zh: "7:00 – 17:15" }, ticket: { en: "¥75 (combo incl. Feilai Feng)", zh: "¥75（含飞来峰联票）" }, tips: { en: "Go on a weekday morning. The temple incense is thickest then.", zh: "工作日早上去。那时香火最旺，氛围最浓。" }, location: { en: "Xihu District, northwest of West Lake", zh: "西湖区，西湖北面" }, rating: "4.7", tags: { en: "Temple · History · Morning", zh: "寺庙 · 历史 · 清晨" } },
      { name: { en: "Longjing Tea Plantations", zh: "龙井茶园" }, img: "img/hangzhou.jpg", desc: { en: "Terraced tea fields stretching across rolling hills. Visit during spring harvest (late March–April) to see tea pickers at work and taste the freshest brew.", zh: "梯田茶园绵延起伏山丘。春季采摘季（3月底-4月）来看采茶人劳作，品尝最新鲜的龙井。" }, highlight: { en: "Spring tea harvest + tasting", zh: "春茶采摘+品鉴" }, hours: { en: "Daylight hours", zh: "白天时间" }, ticket: { en: "Free (fields), tasting ¥30–80", zh: "免费（茶园），品茶¥30–80" }, tips: { en: "Longjing Village is the most famous but Meijiawu offers a more authentic experience.", zh: "龙井村最有名，但梅家坞体验更地道。" }, location: { en: "Xihu District, southwest of West Lake", zh: "西湖区，西湖西南" }, rating: "4.6", tags: { en: "Nature · Tea · Spring", zh: "自然 · 茶 · 春季" } }
    ],
    cuisine: [
      { name: { en: "Dongpo Pork", zh: "东坡肉" }, img: "img/hangzhou.jpg", desc: { en: "Named after the Song Dynasty poet Su Dongpo — pork belly braised for hours until it collapses under chopsticks. Sweet, savory, and impossibly tender.", zh: "以宋代诗人苏东坡命名——五花肉文火慢炖至筷子一碰就散。咸甜交织，入口即化。" }, where: { en: "Traditional Hangzhou restaurants, especially near West Lake", zh: "杭州传统菜馆均有，西湖周边尤多" }, price: { en: "¥68–128 per dish", zh: "¥68–128/份" }, must_try: { en: "Pair with a cup of warm Shaoxing rice wine.", zh: "配一杯温黄酒。" } }
    ],
    culture: [
      { name: { en: "Silk Culture", zh: "丝绸文化" }, img: "img/hangzhou.jpg", desc: { en: "Hangzhou has been China's silk capital for over 1,000 years. Visit the National Silk Museum to see the entire journey from silkworm to fabric.", zh: "杭州作为中国丝绸之都已逾千年。去中国丝绸博物馆看从蚕茧到织锦的完整旅程。" }, significance: { en: "The Maritime Silk Road started here in the Song Dynasty.", zh: "宋代海上丝绸之路从这里出发。" }, best_time: { en: "Year-round", zh: "全年" }, experience: { en: "China National Silk Museum + silk shopping on Hefang Street", zh: "中国丝绸博物馆+河坊街丝绸购物" } }
    ],
    guide: {
      climate:   { en: "Spring (Mar–May) for tea & blossoms, Autumn (Sep–Nov) for clear skies. Summers are hot; winter is chilly but uncrowded.", zh: "春季（3-5月）品茶赏花，秋季（9-11月）天高云淡。夏季炎热，冬季微寒但游客少。" },
      days:      { en: "3 days", zh: "3天" },
      transit:   { en: "Metro is modern and efficient. Buses are convenient but crowded. Bike sharing is ideal for West Lake area.", zh: "地铁现代高效。公交便利但拥挤。共享单车环西湖最佳。" },
      intercity: { en: "Hangzhou Xiaoshan Airport (HGH). High-speed rail: 45min to Shanghai, 1.5h to Nanjing.", zh: "杭州萧山机场(HGH)。高铁：45分钟到上海，1.5小时到南京。" },
      tips:      { en: "West Lake is huge — don't try to walk it all. Rent a bike (Meituan bike ¥1.5/30min). Weekends are extremely crowded — visit on weekdays if possible.", zh: "西湖很大——别试图走完。租共享单车（美团¥1.5/30分钟）。周末极其拥挤——尽量工作日去。" }
    },
    practicalGuide: {
      en: '<p><strong>West Lake navigation:</strong> The lake is 15km in circumference. Rent a bike at the nearest Hellobike/Meituan stand (¥1.5/30min). The best route: start at Broken Bridge (断桥), ride along the north shore to the Su Causeway, cross via the causeway to the south shore, and end at Leifeng Pagoda. Don\'t try to do the whole loop on foot.</p><p><strong>Tea village visit:</strong> Longjing (Dragon Well) Tea Village is 30 minutes from the lake. Take bus 27 or a taxi (¥40). The "real" Longjing tea sold in tourist shops is rarely authentic. Go to a farmer\'s house in the village — they\'ll show you their tea fields and brew you a cup. A good 2025 Longjing costs ¥1,500–3,000 per jin (500g). If you\'re paying less, it\'s not real Longjing.</p><p><strong>Getting around:</strong> Hangzhou metro covers most areas (¥2–10). Didi is cheap. The city is bike-friendly — flat terrain and dedicated bike lanes. Alipay is accepted everywhere.</p><p><strong>Language:</strong> Hangzhou is moderately tourist-friendly. Hotel staff speak basic English. Taxi drivers don\'t. Have your destination written in Chinese.</p>',
      zh: '<p><strong>西湖怎么逛：</strong>西湖周长15公里。在最近的美团/哈啰单车点租车（¥1.5/30分钟）。最佳路线：断桥出发→沿北岸到苏堤→过苏堤到南岸→雷峰塔结束。别试图走完整圈。</p><p><strong>龙井茶村：</strong>龙井村距西湖30分钟。坐27路公交或打车（¥40）。旅游店卖的"正宗龙井"很少是真的。去村里茶农家——他们会给你看茶田、泡一杯茶。好的2025年龙井¥1500–3000/斤。低于这个价格就不是真龙井。</p><p><strong>出行：</strong>杭州地铁覆盖主要区域（¥2–10）。滴滴便宜。杭州很适合骑车——平坦且有专用自行车道。支付宝全覆盖。</p><p><strong>语言：</strong>杭州旅游友好度中等。酒店员工有基础英语。出租车司机不会。把目的地写成中文给他们看。</p>'
    },
    honestTips: {
      en: '<p><strong>West Lake is best at sunrise.</strong> Between 9 AM and 5 PM, the lake\'s shores are a sea of selfie sticks and tour group flags. Come at 5:30 AM when the mist still hangs over the water, and you\'ll understand why Chinese poets have been writing about this place for a thousand years. Bring a coffee and find a bench on the Su Causeway.</p><p><strong>Leifeng Pagoda is a modern rebuild.</strong> The original collapsed in 1924. What stands today is a 2002 reconstruction with an elevator. Great view from the top, but don\'t expect ancient atmosphere.</p><p><strong>Rainy ≠ bad.</strong> Actually, West Lake is arguably most beautiful in light rain — mist rises from the water, the mountains turn a hazy blue-green, and the crowds vanish. Pack a light rain jacket and go anyway.</p>',
      zh: '<p><strong>西湖最美是日出时分。</strong>早上9点到下午5点，湖边全是自拍杆和旅行团旗帜。早上5:30来，雾还没散的时候，你就明白为什么中国诗人写了西湖一千年。带杯咖啡，在苏堤上找条长椅坐下。</p><p><strong>雷峰塔是重建的。</strong>原塔1924年倒塌，现在是2002年重建的，还有电梯。登顶景色很好，但别指望有历史氛围。</p><p><strong>下雨天≠不好。</strong>其实西湖小雨时最美——水上升起薄雾，远山变蓝变朦胧，人还少。带件薄雨衣，下雨也去。</p>'
    },
    localSecrets: {
      en: '<p><strong>Longjing Village tea at dawn.</strong> The tea farmers start picking at 5 AM during spring harvest (late March to April). If you arrive at 6 AM, you can watch the whole process — picking, pan-firing, hand-rolling. The smell of roasting tea leaves in the morning air is unforgettable. Most tourists arrive at 10 AM and miss it completely.</p><p><strong>The lesser-known pagoda.</strong> Liufeng Pagoda (六和塔) on the Qiantang River is older, quieter, and offers a completely different view — the river, the bridge, and the city skyline. Built in 970 AD. Entrance is ¥20. Climb to the top for the best view of the Qiantang River tide.</p><p><strong>Hefang Street night market.</strong> Skip Hefang Street during the day (it\'s a tourist mall). Come after 9 PM when the day-trippers leave and the night vendors set up — grilled oysters, stinky tofu, and the local specialty: West Lake vinegar fish.</p>',
      zh: '<p><strong>龙井村清晨。</strong>春茶季（3月底到4月）茶农早上5点就开始采茶。如果你6点到，可以看全程——采摘、杀青、手揉。清晨空气中飘着炒茶香，让人忘不了。多数游客10点才到，完美错过。</p><p><strong>六和塔。</strong>钱塘江边的六和塔更老、更安静、视角完全不同——江、桥、城市天际线。建于970年。门票¥20。爬到顶看钱塘江潮水最佳。</p><p><strong>河坊街夜市。</strong>白天别去河坊街（就是个旅游商业街）。晚上9点后来，一日游游客走了，夜摊出来——烤生蚝、臭豆腐、还有本地特色西湖醋鱼。</p>'
    }
  },
  {
    id: "guilin",
    name:       { en: "Guilin", zh: "桂林" },
    province:   { en: "Guangxi Zhuang Autonomous Region", zh: "广西壮族自治区" },
    intro:      { en: "Karst peaks rise from misty rivers like dragon's teeth. Guilin's landscapes have inspired Chinese scroll paintings for a thousand years — and they're even more surreal in person.", zh: "喀斯特峰林从雾江中拔起，如龙齿般嶙峋。桂林山水入画千年——亲眼所见比画更超现实。" },
    hero_img:   "img/guilin.jpg",
    hero_fb:    "linear-gradient(135deg, #1A4A5A 0%, #2E7D6F 40%, #80CBC4 100%)",
    landmarks: [
      { name: { en: "Li River Cruise", zh: "漓江游船" }, img: "img/guilin.jpg", desc: { en: "The 83km cruise from Guilin to Yangshuo passes through the most surreal karst landscape on Earth. The view on the ¥20 note? You'll sail right past it.", zh: "从桂林到阳朔83公里水路，穿过地球上最超现实的喀斯特地貌。20元人民币上的风景？你会刚好经过。" }, highlight: { en: "The ¥20 note viewpoint", zh: "20元人民币取景地" }, hours: { en: "Boats depart 9:00–10:00 AM", zh: "游船9:00-10:00出发" }, ticket: { en: "¥215–360 depending on class", zh: "¥215–360（按舱位）" }, tips: { en: "Book the 4-star boat — fewer people, better food, and a rooftop viewing deck.", zh: "订四星级游船——人少、餐好、有顶层观景甲板。" }, location: { en: "Mopanshan Pier, Guilin", zh: "桂林磨盘山码头" }, rating: "4.8", tags: { en: "UNESCO · Cruise · Iconic", zh: "世界遗产 · 游船 · 地标" } },
      { name: { en: "Yangshuo Countryside", zh: "阳朔乡野" }, img: "img/guilin.jpg", desc: { en: "Rent a bicycle or scooter and get lost among rice paddies, karst peaks, and tiny villages. The Yulong River bamboo raft is an essential experience.", zh: "租辆自行车或小电驴，在稻田、峰林、小村庄间迷路。遇龙河竹筏漂流是必修课。" }, highlight: { en: "Yulong River bamboo rafting", zh: "遇龙河竹筏漂流" }, hours: { en: "All day", zh: "全天" }, ticket: { en: "Bike rental ¥30–50, bamboo raft ¥160–255", zh: "自行车¥30–50，竹筏¥160–255" }, tips: { en: "Skip West Street's tourist traps — the real Yangshuo is in the countryside. Rent an e-scooter (¥50/day).", zh: "略过西街的游客陷阱——真正的阳朔在乡野。租小电驴（¥50/天）。" }, location: { en: "Yangshuo County, 65km south of Guilin", zh: "阳朔县，桂林以南65公里" }, rating: "4.7", tags: { en: "Nature · Cycling · Adventure", zh: "自然 · 骑行 · 探险" } },
      { name: { en: "Longji Rice Terraces", zh: "龙脊梯田" }, img: "img/guilin.jpg", desc: { en: "Centuries-old rice terraces carved into mountainsides by Zhuang and Yao ethnic minorities. The 'Dragon's Backbone' rises through clouds — best at sunrise.", zh: "壮族和瑶族少数民族在群山中开凿的千年梯田。'龙脊'穿云而上——日出时分最为壮美。" }, highlight: { en: "Sunrise at Dazhai viewpoint", zh: "大寨观景台日出" }, hours: { en: "All day", zh: "全天" }, ticket: { en: "¥80", zh: "¥80" }, tips: { en: "Stay overnight in Ping'an or Dazhai village. The cable car at Dazhai saves a 2-hour climb.", zh: "在平安或大寨村住一晚。大寨缆车省去2小时爬山。" }, location: { en: "Longsheng County, 80km from Guilin", zh: "龙胜县，距桂林80公里" }, rating: "4.7", tags: { en: "Nature · Culture · Overnight", zh: "自然 · 文化 · 过夜" } }
    ],
    cuisine: [
      { name: { en: "Guilin Rice Noodles", zh: "桂林米粉" }, img: "img/guilin.jpg", desc: { en: "The breakfast that fuels Guilin — smooth rice noodles in a rich bone broth with braised beef, pickled beans, and roasted peanuts. Under ¥10.", zh: "桂林人的灵魂早餐——滑嫩米粉配浓郁骨汤，加卤牛肉、酸豆角、炸花生。不到10块钱。" }, where: { en: "Any busy corner noodle shop — the longer the queue, the better", zh: "街边米粉店随处可见——排队越长越好吃" }, price: { en: "¥6–12 per bowl", zh: "¥6–12/碗" }, must_try: { en: "Eat it 'dry' (no broth) first, then add soup at the end.", zh: "先干捞吃，最后加汤——桂林人标准吃法。" } }
    ],
    culture: [
      { name: { en: "Impression Liu Sanjie", zh: "印象·刘三姐" }, img: "img/guilin.jpg", desc: { en: "Zhang Yimou's epic outdoor water show — 600 performers on the Li River with the karst peaks as the backdrop. The world's largest natural stage.", zh: "张艺谋执导的史诗级户外水上实景演出——600名演员在漓江上以喀斯特峰林为幕。世界最大天然剧场。" }, significance: { en: "Tells the legend of Liu Sanjie, the folk song goddess of the Zhuang people.", zh: "讲述壮族歌仙刘三姐的传说。" }, best_time: { en: "Nightly at 7:30 PM & 9:30 PM (seasonal)", zh: "每晚19:30和21:30（季节调整）" }, experience: { en: "Book zone B1 for the best view. Bring mosquito repellent.", zh: "订B1区视野最佳。带驱蚊液。" } }
    ],
    guide: {
      climate:   { en: "Autumn (Sep–Nov) — dry, clear skies, perfect for photography. Spring (Apr–May) is lush but rainy.", zh: "秋季（9-11月）——干燥、天高云淡、拍照最佳。春季（4-5月）青翠但多雨。" },
      days:      { en: "3–4 days", zh: "3–4天" },
      transit:   { en: "Buses connect Guilin and Yangshuo (1.5h). Within Yangshuo, rent an e-scooter. Taxis are scarce in rural areas.", zh: "公交连接桂林和阳朔（1.5小时）。阳朔县内租小电驴。乡村区域出租车稀少。" },
      intercity: { en: "Guilin Liangjiang Airport (KWL). High-speed rail: 2.5h to Guangzhou, 3h to Hong Kong.", zh: "桂林两江机场(KWL)。高铁：2.5小时到广州，3小时到香港。" },
      tips:      { en: "Mosquito repellent is ESSENTIAL — especially near rice paddies. Weather changes rapidly — carry rain gear. The real magic is in the countryside, not the towns.", zh: "驱蚊液必备——尤其稻田附近。天气变化快——随身带雨具。真正的魔力在乡野，不在镇子里。" }
    },
    practicalGuide: {
      en: '<p><strong>Yangshuo vs Guilin:</strong> Most travelers use Guilin as a transit point and base themselves in Yangshuo (1.5h bus, ¥25). Yangshuo is where the karst landscape photo happens. Rent an e-scooter (¥50/day) to explore the countryside — it\'s the only way to truly experience the landscape. You don\'t need a license for an e-scooter.</p><p><strong>Li River cruise:</strong> The 4-hour cruise from Guilin to Yangshuo is the classic experience (¥320-450). The morning cruise (9 AM) has better light. The bamboo raft option (¥120-160) on the Yulong River in Yangshuo is more intimate and lets you touch the water. Book through your hotel, not street touts.</p><p><strong>Weather:</strong> Guilin is humid year-round. April-June is the rainy season — expect daily downpours. The upside: the karst peaks look their best in mist and rain. July-September is hot (35°C+) and the water is muddy from floods. October-November is perfect — clear skies, golden rice paddies.</p><p><strong>Cash is king in the countryside:</strong> In Yangshuo town, Alipay works. But once you go to the villages and rural roads, many places are cash-only. Carry ¥500+ in small bills.</p>',
      zh: '<p><strong>住阳朔还是桂林？</strong>多数旅行者把桂林当中转站，住阳朔（1.5小时大巴，¥25）。阳朔才是喀斯特风景照的拍摄地。租小电驴（¥50/天）去乡间探索——这是体验桂林山水的唯一正确方式。小电驴不需要驾照。</p><p><strong>漓江游船：</strong>桂林到阳朔的4小时游船是经典体验（¥320–450）。早班船（9点）光线最好。阳朔遇龙河的竹筏（¥120–160）更亲近水面，可以伸手摸水。通过酒店订，别找街头揽客的。</p><p><strong>天气：</strong>桂林全年潮湿。4-6月雨季，每天必下雨。好处：喀斯特山峰在雨雾中最美。7-9月炎热（35°C+），河水因洪水变浑浊。10-11月完美——晴空万里、金黄稻田。</p><p><strong>乡下只收现金。</strong>阳朔镇上支付宝通吃。但到了村庄和乡间小路，很多地方只收现金。随身带¥500+零钱。</p>'
    },
    honestTips: {
      en: '<p><strong>The Li River cruise is underwhelming in summer.</strong> The water is brown from silt, the sky is hazy from humidity, and you\'ll share the boat with 200 other tourists. Spring (April-May) and autumn (October-November) are the magic windows. If you come in July, skip the big cruise and do the Yulong River bamboo raft instead.</p><p><strong>Yangshuo West Street is a tourist circus.</strong> Bars playing "Country Roads," souvenir shops selling the same stuff as every other Chinese tourist street, and prices 3x the local rate. It\'s fun for one night. Spend your other evenings in the countryside villages or at a quiet riverside bar on the outskirts.</p><p><strong>The "free" bamboo raft photos are not free.</strong> At the Yulong River, people will offer to take your photo on a bamboo raft. They will then demand ¥50-100 for the photo. Decide upfront: either pay for the official experience, or just take your own photos from the riverbank.</p>',
      zh: '<p><strong>夏天的漓江游船让人失望。</strong>水是浑浊的棕色，天空雾蒙蒙，你还得和200个游客挤一条船。春秋两季（4-5月、10-11月）才是最佳时间。7月来的话，别坐大船，去遇龙河坐竹筏。</p><p><strong>阳朔西街就是游客夜市。</strong>酒吧放"Country Roads"，纪念品跟中国所有旅游街一样，价格是本地价的3倍。去一晚凑个热闹就够了。其他晚上去乡间村落或郊区的河边安静酒吧。</p><p><strong>"免费"竹筏照不免费。</strong>遇龙河有人主动给你在竹筏上拍照。拍完收你¥50–100。提前想好：要么花钱坐官方的竹筏体验，要么自己在岸边拍。</p>'
    },
    localSecrets: {
      en: '<p><strong>Xianggong Mountain (相公山) at sunrise.</strong> This is THE iconic Guilin photo spot — the view of the Li River snaking through karst peaks from above. 15 minutes from Yangshuo by e-scooter/taxi. The climb is 15 minutes (paved steps). Entrance ¥60. Arrive by 5:30 AM to claim a spot on the top viewing platform. The view will change how you see China.</p><p><strong>Xingping Ancient Town.</strong> The image on the ¥20 bill is here. Most tourists take the photo from the designated spot and leave. Stay longer — walk the old streets, eat fish from the river, and watch local fishermen with their cormorant birds at dusk. The town has been here for 1,700 years. Take the bus from Yangshuo (40min, ¥10).</p><p><strong>Bicycle route through the rice paddies.</strong> Rent a bicycle (not an e-scooter) and take the road from Yangshuo to Fuli Bridge — 12km of flat road through rice paddies with karst peaks on both sides. You\'ll pass water buffalo, old stone bridges, and farmers harvesting. This is the China you came to see. Bring water — there are few shops along the way.</p>',
      zh: '<p><strong>相公山日出。</strong>这是桂林最经典的照片拍摄点——从高处俯瞰漓江在喀斯特峰林间蜿蜒。距离阳朔15分钟小电驴/车程。爬山15分钟（有台阶）。门票¥60。早上5:30前到，山顶观景台找个位置。看到的景色会改变你对中国的认知。</p><p><strong>兴坪古镇。</strong>¥20元纸币上的图案就在这里。多数游客在指定位置拍完照就走。多待一会儿——逛老街、吃漓江鱼、黄昏看渔民带着鸬鹚捕鱼。这个镇子已经存在了1700年。阳朔坐大巴40分钟（¥10）。</p><p><strong>稻田骑行路线。</strong>租自行车（不是小电驴），从阳朔骑到福利桥——12公里平路穿过稻田，两边是喀斯特山峰。你会经过水牛、古石桥、正在收割的农民。这是你来中国想看的样子。带水——沿途小店很少。</p>'
    }
  },
  {
    id: "leshan",
    name:       { en: "Leshan", zh: "乐山" },
    province:   { en: "Sichuan Province", zh: "四川省" },
    intro:      { en: "Where three rivers converge beneath the world's largest stone Buddha. Leshan (ancient Jiazhou) blends misty mountains, thousand-year temples, and a food scene that rivals Chengdu itself. Slow down — this city lives at its own pace.", zh: "三江汇流处，端坐着世界最大石刻佛像。乐山（古称嘉州）将山水仙境、千年古刹和不输成都的美食融为一体。慢下来——这座城有自己的节奏。" },
    hero_img:   "img/leshan-1.jpg",
    hero_fb:    "linear-gradient(135deg, #2E7D32 0%, #558B2F 40%, #8BC34A 100%)",
    landmarks: [
      { name: { en: "Leshan Giant Buddha", zh: "乐山大佛" }, img: "img/leshan-1.jpg", desc: { en: "At 71 meters tall, the Leshan Giant Buddha is the largest stone-carved Maitreya Buddha in the world — carved into a cliff face where three rivers meet. For over 1,300 years, it has sat in serene silence, watching the waters of the Min, Qingyi, and Dadu rivers converge below. The scale is awe-inspiring: each foot is large enough for 100 people to sit on. Climb the Nine-Turn Plank Path alongside the Buddha for the best view.", zh: "71米高的乐山大佛是世界上最大的石刻弥勒坐像，雕凿在三江交汇处的悬崖峭壁上。1300多年来，它静坐于此，俯瞰岷江、青衣江、大渡河奔涌交汇。规模令人震撼——仅一只脚上就能站满百人。沿大佛右侧的九曲栈道下行，是仰视大佛的最佳角度。" }, highlight: { en: "Nine-Turn Plank Path — walk right next to the Buddha's head and feet", zh: "九曲栈道——紧贴大佛从头走到脚" }, hours: { en: "7:30 AM – 6:30 PM (Apr–Oct); 8:00 AM – 5:30 PM (Nov–Mar)", zh: "7:30–18:30（旺季）；8:00–17:30（淡季）" }, ticket: { en: "¥80", zh: "¥80" }, tips: { en: "Go early (before 8 AM) to beat the crowds and see the morning mist over the river. Boat cruise (¥70) gives the best full-body view.", zh: "早上8点前到避开人流，看江面晨雾。坐游船（¥70）能看到大佛全身最佳角度。" }, location: { en: "Downtown Leshan, at the confluence of three rivers", zh: "乐山市区，三江汇流处" }, rating: "4.9", tags: { en: "UNESCO · Iconic · Morning", zh: "世界遗产 · 地标 · 清晨" } },
      { name: { en: "Mount Emei (Emeishan)", zh: "峨眉山" }, img: "img/leshan-3.jpg", desc: { en: "One of China's Four Sacred Buddhist Mountains, Emeishan rises 3,099 meters above sea level — a realm of misty peaks, ancient temples hidden in bamboo forests, and wild monkeys that demand your snacks. The Golden Summit (Jinding) at dawn offers one of the most transcendent experiences in all of China — a sea of clouds stretching to the horizon, the sun rising in a blaze of gold, and if you're lucky, the legendary Buddha's Halo.", zh: "中国四大佛教名山之一，海拔3099米——云雾缭绕的山峰、竹林深处藏古寺、向你讨零食的野生猴群。金顶日出是中国最超凡的体验之一——云海一望无际，朝阳金光万丈，运气好还能看到传说中的佛光。" }, highlight: { en: "Golden Summit sunrise — sea of clouds and Buddha's Halo", zh: "金顶日出——云海+佛光奇观" }, hours: { en: "Open all day (cable car 5:00 AM – 6:00 PM)", zh: "全天开放（索道5:00–18:00）" }, ticket: { en: "¥160 (high season), ¥110 (low season); cable car ¥65 up / ¥55 down", zh: "¥160（旺季）/ ¥110（淡季）；索道上¥65/下¥55" }, tips: { en: "Take the cable car up and hike down — the trail passes 20+ temples. Wear good shoes; there are thousands of steps. Bring snacks for the monkeys (and hold your bags tight).", zh: "索道上山+徒步下山——沿途经过20多座寺庙。穿好鞋，台阶无数。给猴子带零食（但包要抓紧）。" }, location: { en: "Emeishan City, 40km from Leshan downtown", zh: "峨眉山市，距乐山市区约40公里" }, rating: "4.8", tags: { en: "UNESCO · Nature · Sunrise", zh: "世界遗产 · 自然 · 日出" } },
      { name: { en: "Jiazhou Ancient City & Night River View", zh: "嘉州古城与江景夜游" }, img: "img/leshan-6.jpg", desc: { en: "Leshan's old town, Jiazhou, hugs the riverfront with grey-tiled roofs and weathered wooden facades. By day, wander the narrow lanes where locals dry peppers on bamboo trays and play mahjong under ancient banyan trees. By night, the riverside promenade lights up — the Buddha is illuminated across the water, bridges shimmer in gold, and night cruise boats glide through the reflections.", zh: "乐山老城区嘉州沿江而建，青瓦民居、斑驳木门。白天穿梭小巷，看居民在竹匾上晒辣椒，在老榕树下搓麻将。入夜后江畔步道华灯初上——大佛被灯光照亮对岸，大桥金光闪烁，夜游船只划过倒影。" }, highlight: { en: "Night cruise under the illuminated Giant Buddha", zh: "夜游船——看灯光勾勒的大佛轮廓" }, hours: { en: "Night cruise 7:30 PM – 10:00 PM", zh: "夜游19:30–22:00" }, ticket: { en: "Night cruise ¥70", zh: "夜游船¥70" }, tips: { en: "The night view is best right after sunset — about 30 minutes of twilight blue. Take the 8 PM cruise slot.", zh: "黄昏后30分钟蓝调时刻最美。建议坐8点的船。" }, location: { en: "Binjiang Road, downtown Leshan", zh: "滨江路，乐山市区" }, rating: "4.6", tags: { en: "Evening · Scenic · Photography", zh: "夜景 · 摄影 · 浪漫" } }
    ],
    cuisine: [
      { name: { en: "Sweet-Skin Duck (Tianpi Ya)", zh: "甜皮鸭" }, img: "img/leshan-2.jpg", desc: { en: "Leshan's signature dish — lacquered duck with a glistening sugar glaze. The skin is crispy and sweet, the meat tender and savory. Each bite is a perfect balance of sweet and salty. The aroma alone can draw you across the street. It's a must-try that rivals Beijing's roast duck in its own way.", zh: "乐山的招牌硬菜——油亮红润的糖衣脆皮，紧实细嫩的鸭肉。每一口都是甜咸交织的完美平衡。香气能飘满整条街，绝不输北京烤鸭。" }, where: { en: "Found at dedicated roast duck shops across the city — follow the sweet aroma", zh: "遍布全城的烤鸭专门店——循着甜香走" }, price: { en: "¥30–60 per half duck", zh: "半只¥30–60" }, must_try: { en: "Ask for the drumstick — the best part, with the crispiest skin. Eat it while it's hot, fresh out of the oil.", zh: "要个鸭腿——最精华部位，皮最脆。趁热吃，刚出锅的最佳。" } },
      { name: { en: "Bobochicken (Bobo Ji)", zh: "钵钵鸡" }, img: "img/leshan-4.jpg", desc: { en: "Leshan's most iconic street snack — skewers of meat and vegetables soaked in a bubbling vat of chili oil or Sichuan peppercorn broth. It's served cold, making it the perfect summer appetizer. The Sichuan peppercorn version numbs your lips with every bite; the red oil version hits you with pure chili fragrance. One skewer leads to fifty. You've been warned.", zh: "乐山最经典街头小吃——竹签串着各种荤素，浸泡在红油或藤椒汤底里。冷吃，夏天绝配。藤椒味麻到嘴唇跳舞，红油味香到停不下来。一串接一串，五十串打底。" }, where: { en: "Every corner snack street in Leshan — look for the big pots of skewers", zh: "乐山的每一条小吃街——看到大盆竹签就是了" }, price: { en: "¥1–3 per skewer", zh: "¥1–3/串" }, must_try: { en: "Go for the duck gizzards and beef tripe — they absorb the most flavor. Don't be shy; grab a handful.", zh: "鸭胗和毛肚最入味。别客气，一把一把拿。" } },
      { name: { en: "Cross-Legged Beef (Qiaojiao Niurou)", zh: "跷脚牛肉" }, img: "img/leshan-7.jpg", desc: { en: "A steaming bowl of beef, offal, and tripe in a clear, fragrant broth simmered for hours with over 20 herbs and spices. The name literally means 'cross-legged beef' — because old patrons used to sit cross-legged on low stools while eating. The broth is the star: light yet profoundly savory, a testament to the Sichuan art of slow cooking.", zh: "一大碗热腾腾的牛肉、牛杂、毛肚，在20多种草药香料熬制的清汤中翻滚。名字来源于老食客坐在矮凳上跷着脚吃。汤是灵魂——清淡却鲜美无比，彰显川式慢炖的功力。" }, where: { en: "Leshan's Qiaojiao Niurou restaurants — look for steaming pots at the entrance", zh: "乐山的跷脚牛肉店——门口有大锅冒蒸汽的就是" }, price: { en: "¥30–60 per person", zh: "人均¥30–60" }, must_try: { en: "Order the mixed platter (niú zá) for a taste of everything. Dip in dry chili powder for the full experience.", zh: "点牛杂拼盘——一锅吃遍所有部位。蘸干辣椒面才是正确吃法。" } }
    ],
    culture: [
      { name: { en: "Leshan's Ancient Tea Horse Heritage", zh: "茶马古道与嘉州文脉" }, img: "img/leshan-8.jpg", desc: { en: "For over two millennia, Leshan has been a crossroads of culture and commerce along the ancient Southern Silk Road. The city's old streets — like Shizhong Laojie — still echo with the footsteps of merchants who once carried Sichuan tea and silk southward. Buddhist culture runs deep: the Giant Buddha is just the most visible of countless temples and grottoes scattered across the region. Poetry, calligraphy, and local opera thrive in the lanes.", zh: "两千多年来，乐山一直是南方丝绸之路上的文化重镇。老街巷陌间——如市中老街——仿佛还能听到当年茶马商队的脚步声。佛教文化深厚：大佛只是这片区域无数寺庙和石窟中最显眼的一座。诗词、书法、川剧在街巷间生生不息。" }, significance: { en: "2000+ years of history as a key hub on the Southern Silk Road", zh: "2000多年历史，南方丝绸之路重要节点" }, best_time: { en: "Any season — culture is timeless", zh: "四季皆宜——文化不分季节" }, experience: { en: "Walk Shizhong old street, visit a local teahouse, and catch a Sichuan opera performance", zh: "逛市中老街、泡茶馆、看一场川剧" } }
    ],
    guide: {
      climate:   { en: "Spring (Mar–May) & Autumn (Sep–Nov) — mild, clear, perfect for hiking and outdoor sightseeing. Summer is hot and humid; winter is cold and damp.", zh: "春秋最佳（3-5月、9-11月）——温和晴朗，适合登山和户外游览。夏季湿热，冬季阴冷潮湿。" },
      days:      { en: "2–3 days (add 1 more for Mount Emei)", zh: "2–3天（去峨眉山再加1天）" },
      transit:   { en: "Buses and taxis within the city. Leshan is compact — the Giant Buddha and old town are walkable. To reach Mount Emei, take bus route 601 (1 hour) or hire a taxi (¥80–100).", zh: "市内公交和出租车。乐山不大——大佛和老城区步行可达。去峨眉山坐601路（1小时）或打车（¥80–100）。" },
      intercity: { en: "Chengdu to Leshan: high-speed rail (50 min, ¥54) or bus (2h). The train station is \"Leshan\" (not Leshan North).", zh: "成都到乐山：高铁50分钟（¥54）或大巴2小时。买票到'乐山站'（不是乐山北）。" },
      tips:      { en: "Eat ALL the snacks — Leshan is one of China's great street food cities. The Giant Buddha boat tour is worth every yuan. Mount Emei gets cold at the summit even in summer — bring a jacket. Watch out for monkey bag-snatchers on Emeishan.", zh: "吃遍所有小吃——乐山是中国最顶级的街头美食城市之一。大佛游船票绝对值。峨眉山金顶夏天也冷——带外套。小心峨眉山的猴子抢包。" }
    }
  }
];

window.DICT = DICT;
window.CITIES = CITIES;

// 翻译函数
window._ = function(key, lang) {
  lang = lang || window._currentLang || 'en';
  var item = DICT[key];
  if (!item) return key;
  return item[lang] || item.en || key;
};

// 双语对象取值
window._t = function(obj, lang) {
  lang = lang || window._currentLang || 'en';
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || '';
};

})();
