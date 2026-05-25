#!/usr/bin/env python3
"""
批量生成城市详情页 - 东方城市人文空间·文旅网站
使用北京模板结构，生成11个城市的双语详情页
"""

import os

# 城市数据模板（可后续完善具体内容）
CITIES = {
    "shanghai": {
        "name": "Shanghai",
        "nameZh": "上海",
        "hero_color": "#C8102E",  # 上海红
        "attractions": [
            {
                "name": "The Bund",
                "nameZh": "外滩",
                "location": "Zhongshan East 1st Road, Huangpu District",
                "history": "The Bund developed in the late 19th century as Shanghai's financial hub...",
                "highlights": ["Colonial architecture", "Huangpu River view", "City skyline"],
                "hours": "Open all day (best at night)",
                "ticket": "Free",
                "transport": "Metro Line 2/10 to East Nanjing Road Station...",
                "duration": "2-3 hours",
                "season": "All year, especially night view",
                "tips": "Visit at night for spectacular skyline"
            }
        ],
        "cuisine": [
            {
                "name": "Xiaolongbao (Soup Dumplings)",
                "nameZh": "小笼包",
                "flavor": "Delicate, savory, umami-rich broth",
                "story": "Originated in Nanxiang, Shanghai in 1875...",
                "how_to_eat": "Carefully bite the top, sip soup, then eat whole",
                "price": "¥30-50 per basket"
            }
        ],
        "culture": [
            {
                "name": "Shanghai Opera",
                "nameZh": "沪剧",
                "origin": "Developed from local folk songs in Qing Dynasty...",
                "experience": "Melodic singing with Shanghainese dialect...",
                "where": "Shanghai Grand Theatre, Yifu Theatre",
                "best_time": "Evening performances",
                "significance": "Represents Shanghai's local cultural identity"
            }
        ]
    },
    "guilin": {
        "name": "Guilin",
        "nameZh": "桂林",
        "hero_color": "#2E8B57",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "chengdu": {
        "name": "Chengdu",
        "nameZh": "成都",
        "hero_color": "#8B4513",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "hangzhou": {
        "name": "Hangzhou",
        "nameZh": "杭州",
        "hero_color": "#228B22",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "xian": {
        "name": "Xi'an",
        "nameZh": "西安",
        "hero_color": "#8B0000",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "lijiang": {
        "name": "Lijiang",
        "nameZh": "丽江",
        "hero_color": "#4682B4",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "suzhou": {
        "name": "Suzhou",
        "nameZh": "苏州",
        "hero_color": "#2F4F4F",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "guangzhou": {
        "name": "Guangzhou",
        "nameZh": "广州",
        "hero_color": "#DC143C",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "shenzhen": {
        "name": "Shenzhen",
        "nameZh": "深圳",
        "hero_color": "#4169E1",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "chongqing": {
        "name": "Chongqing",
        "nameZh": "重庆",
        "hero_color": "#B22222",
        "attractions": [],
        "cuisine": [],
        "culture": []
    },
    "qingdao": {
        "name": "Qingdao",
        "nameZh": "青岛",
        "hero_color": "#007BA7",
        "attractions": [],
        "cuisine": [],
        "culture": []
    }
}

def generate_city_page(city_id, lang='en'):
    """生成单个城市详情页"""
    city = CITIES[city_id]
    is_zh = lang == 'zh'
    
    # 图片使用Lorem Picsum免费服务
    img_url = f"https://picsum.photos/seed/{city_id}/800/600"
    
    # 这里生成HTML内容（简化版，完整版需要填充所有字段）
    html = f'''<!DOCTYPE html>
<html lang="{'en' if lang == 'en' else 'zh-CN'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{city['name'] if lang == 'en' else city['nameZh']} - Oriental City Cultural Space</title>
    <meta name="description" content="Discover {city['name']} - {city['nameZh']}">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>Oriental City Cultural Space</h1>
                    <span class="subtitle">Cultural Tourism</span>
                </div>
                <nav class="nav">
                    <a href="../index.html" class="nav-link">Home</a>
                    <a href="../city.html" class="nav-link">Cities</a>
                    <button class="lang-switch" onclick="switchLang()">{'中文' if lang == 'en' else 'EN'}</button>
                </nav>
            </div>
        </div>
    </header>

    <!-- City Hero -->
    <section class="city-hero" style="background: linear-gradient(135deg, {city['hero_color']} 0%, #6BB6FF 100%);">
        <div class="container">
            <h2 style="font-size: 3rem; margin-bottom: 1rem;">{city['name'] if lang == 'en' else city['nameZh']}</h2>
            <p style="font-size: 1.25rem; opacity: 0.9;">{'Discover the charm of ' + city['name'] if lang == 'en' else '发现' + city['nameZh'] + '的魅力'}</p>
        </div>
    </section>

    <!-- Content Sections (TODO: Fill with real data) -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">{'Core Scenic Spots' if lang == 'en' else '核心景区'}</h2>
            <p>{'Content to be filled...' if lang == 'en' else '内容待填充...'}</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 Oriental City Cultural Space</p>
        </div>
    </footer>

    <script>
        function switchLang() {{
            window.location.href = '{city_id + "-zh.html" if lang == "en" else city_id + ".html"}';
        }}
    </script>
</body>
</html>'''
    
    return html

def main():
    base_dir = r"D:\旅游网站\cities"
    os.makedirs(base_dir, exist_ok=True)
    
    for city_id in CITIES.keys():
        # 生成英文版
        en_html = generate_city_page(city_id, 'en')
        with open(os.path.join(base_dir, f"{city_id}.html"), 'w', encoding='utf-8') as f:
            f.write(en_html)
        
        # 生成中文版
        zh_html = generate_city_page(city_id, 'zh')
        with open(os.path.join(base_dir, f"{city_id}-zh.html"), 'w', encoding='utf-8') as f:
            f.write(zh_html)
        
        print(f"Generated: {city_id}.html / {city_id}-zh.html")
    
    print("\nAll city pages generated!")
    print("⚠️  TODO: Fill in real content for attractions/cuisine/culture/travel tips")

if __name__ == "__main__":
    main()
