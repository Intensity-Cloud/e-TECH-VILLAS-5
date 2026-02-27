
/* ============================================================
   PRODUCT DATABASE — Real Images
   ============================================================ */
const PRODS = [
  {
    id:0,name:"Samsung Galaxy S26 Ultra",brand:"Samsung",
    spec:"Snapdragon 8 Elite Gen 5 | 12GB | 256GB",
    price:359999,old:389999,rating:5,rcount:128,
    img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-ultra-r2.jpg",
    imgs:[
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-ultra-r2.jpg",
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-ultra-5g.jpg",
      "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s26-ultra-r2q.jpg"
    ],
    fallback:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
    cat:"smartphone new",badges:["launched","new"],disc:8,po:true,
    desc:"The Samsung Galaxy S26 Ultra is the pinnacle of mobile innovation. Featuring the world's first built-in Privacy Display with Flex Magic Pixel technology, Snapdragon 8 Elite Gen 5, 200MP quad-camera with 8K video, Galaxy AI 3rd Gen, S Pen, and slimmest-ever Ultra design at just 7.9mm.",
    colors:[{n:"Cobalt Violet",h:"#4B0082"},{n:"Black",h:"#1a1a1a"},{n:"White",h:"#e8e8e8"},{n:"Sky Blue",h:"#87CEEB"},{n:"Pink Gold",h:"#d4a0a0"},{n:"Silver Shadow",h:"#aaaaaa"}],
    specs:[["Display","6.9\" QHD+ Dynamic AMOLED, 120Hz, 2600 nits"],["Chipset","Snapdragon 8 Elite Gen 5 for Galaxy"],["RAM/Storage","12GB RAM | 256GB / 512GB / 1TB"],["Camera","200MP f/1.4 + 50MP UW + 50MP 5x + 10MP 3x | 12MP selfie"],["Video","8K @ 30fps APV codec, Enhanced Nightography"],["Battery","5,000mAh | 60W wired | 25W Qi2 wireless"],["OS","Android 16 + One UI 8.5"],["AI","Galaxy AI 3rd Gen | Gemini Scam Detection"],["S Pen","Included"],["Privacy","Flex Magic Pixel Privacy Display"],["Dimensions","163.6 × 78.1 × 7.9mm | 214g"]],
    reviews:[{a:"Ahmed K.",s:5,t:"Absolutely stunning. Privacy Display alone is worth the price."},{a:"Sara M.",s:5,t:"200MP camera in real-world shots is breathtaking."},{a:"Usman R.",s:4,t:"Galaxy AI features are genuinely useful — Scam Detection especially."}]
  },
  {
    id:1,name:"iPhone 15 Pro",brand:"Apple",spec:"A17 Pro | 8GB | 256GB",
    price:379000,old:399000,rating:5,rcount:320,
    img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg","https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-a.jpg"],
    fallback:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    cat:"smartphone",badges:["hot"],disc:5,po:false,
    desc:"iPhone 15 Pro with A17 Pro chip, titanium design, 48MP camera, USB 3 speeds and Action Button.",
    colors:[{n:"Natural Titanium",h:"#bbb"},{n:"Black Titanium",h:"#222"},{n:"White Titanium",h:"#ddd"},{n:"Blue Titanium",h:"#4477aa"}],
    specs:[["Display","6.1\" Super Retina XDR OLED, 120Hz"],["Chip","A17 Pro"],["Camera","48MP Main | 12MP Ultra | 12MP 3x Zoom"],["Battery","3274mAh | USB-C fast charge"],["OS","iOS 17"]],
    reviews:[{a:"Bilal A.",s:5,t:"Best iPhone ever. Camera is insane."},{a:"Hina S.",s:5,t:"Titanium build feels incredible."},{a:"Zain T.",s:4,t:"Battery could be better but everything else perfect."}]
  },
  {
    id:2,name:"OPPO Reno 12 Pro",brand:"OPPO",spec:"Dimensity 7300 | 12GB | 256GB",
    price:89000,old:99000,rating:4,rcount:87,
    img:"https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-pro.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-pro.jpg"],
    fallback:"https://images.unsplash.com/photo-1598327105854-c8674faddf79?w=400&q=80",
    cat:"smartphone",badges:["sale"],disc:10,po:false,
    desc:"OPPO Reno 12 Pro brings AI portrait photography and HASSELBLAD color tuning.",
    colors:[{n:"Space Purple",h:"#6622aa"},{n:"Sunset Gold",h:"#c8a040"}],
    specs:[["Display","6.7\" AMOLED, 120Hz"],["Chip","Dimensity 7300"],["Camera","50MP + 50MP Portrait + 8MP Wide"],["Battery","5000mAh | 80W SUPERVOOC"],["OS","Android 14 + ColorOS 14"]],
    reviews:[{a:"Nadia F.",s:4,t:"Great camera for the price."},{a:"Ali Z.",s:5,t:"Portrait mode is stunning."},{a:"Omer K.",s:4,t:"Very fast charging!"}]
  },
  {
    id:3,name:"Vivo V30 Pro",brand:"Vivo",spec:"Snapdragon 7 Gen 3 | 12GB | 256GB",
    price:79000,old:89000,rating:4,rcount:63,
    img:"https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg"],
    fallback:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    cat:"smartphone",badges:["sale"],disc:11,po:false,
    desc:"Vivo V30 Pro with ZEISS optics, dual-ring flash, and super slim 7.5mm profile.",
    colors:[{n:"Twilight Blue",h:"#4361ee"},{n:"Royal Gold",h:"#c8a040"}],
    specs:[["Display","6.78\" AMOLED, 120Hz"],["Chip","Snapdragon 7 Gen 3"],["Camera","50MP ZEISS + 50MP Portrait"],["Battery","5000mAh | 80W FlashCharge"]],
    reviews:[{a:"Rana M.",s:4,t:"ZEISS cameras exceptional."},{a:"Sana B.",s:5,t:"Love the slim design."},{a:"Farhan T.",s:4,t:"Battery life impressive."}]
  },
  {
    id:4,name:"Xiaomi 14",brand:"Xiaomi",spec:"Snapdragon 8 Gen 3 | 12GB | 256GB",
    price:119000,old:129000,rating:5,rcount:97,
    img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg"],
    fallback:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&q=80",
    cat:"smartphone",badges:["hot"],disc:8,po:false,
    desc:"Xiaomi 14 with Snapdragon 8 Gen 3, Leica triple camera and 90W HyperCharge.",
    colors:[{n:"Black",h:"#111"},{n:"Jade Green",h:"#2d8a60"},{n:"White",h:"#ddd"}],
    specs:[["Display","6.36\" LTPO AMOLED, 120Hz"],["Chip","Snapdragon 8 Gen 3"],["Camera","50MP Leica + 50MP Tele + 50MP Ultra"],["Battery","4610mAh | 90W HyperCharge"]],
    reviews:[{a:"Hamza R.",s:5,t:"Leica cameras phenomenal."},{a:"Ayesha N.",s:5,t:"90W charging lightning fast."},{a:"Kashif I.",s:4,t:"Compact flagship done right."}]
  },
  {
    id:5,name:"Samsung Galaxy S24 Ultra",brand:"Samsung",spec:"Snapdragon 8 Gen 3 | 12GB | 256GB",
    price:249000,old:299000,rating:5,rcount:204,
    img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg","https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928.jpg"],
    fallback:"https://images.unsplash.com/photo-1706474186484-1e1e3bda024a?w=400&q=80",
    cat:"smartphone",badges:["sale"],disc:17,po:false,
    desc:"Massive price drop after S26 launch. Still one of the best with 200MP camera and S Pen.",
    colors:[{n:"Titanium Black",h:"#222"},{n:"Titanium Gray",h:"#888"},{n:"Titanium Violet",h:"#6644bb"}],
    specs:[["Display","6.8\" Dynamic AMOLED, 120Hz"],["Chip","Snapdragon 8 Gen 3"],["Camera","200MP + 50MP 5x + 12MP Ultra"],["Battery","5000mAh | 45W fast charge"]],
    reviews:[{a:"Abdullah M.",s:5,t:"Massive discount makes it even better value."},{a:"Zara H.",s:5,t:"S Pen productivity unmatched."},{a:"Salman T.",s:4,t:"Still flagship-tier."}]
  },
  {
    id:6,name:"Tecno Spark 20 Pro",brand:"Tecno",spec:"Helio G99 | 8GB | 256GB",
    price:38000,old:43000,rating:4,rcount:45,
    img:"https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg"],
    fallback:"https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80",
    cat:"smartphone budget",badges:["sale"],disc:12,po:false,
    desc:"Tecno Spark 20 Pro offers budget-friendly performance with 108MP camera.",
    colors:[{n:"Cyber White",h:"#e8e8e8"},{n:"Magic Skin Blue",h:"#4488cc"}],
    specs:[["Display","6.78\" IPS LCD, 120Hz"],["Chip","Helio G99"],["Camera","108MP + 2MP Depth"],["Battery","5000mAh | 33W"]],
    reviews:[{a:"Imran A.",s:4,t:"Fantastic value for money."},{a:"Daniyal K.",s:4,t:"Surprisingly good camera."},{a:"Rida L.",s:3,t:"Good battery, average performance."}]
  },
  {
    id:7,name:"Realme 12 Pro+",brand:"Realme",spec:"Snapdragon 7s Gen 2 | 12GB | 256GB",
    price:72000,old:79000,rating:4,rcount:52,
    img:"https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro.jpg"],
    fallback:"https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80",
    cat:"smartphone budget",badges:["sale"],disc:9,po:false,
    desc:"Realme 12 Pro+ with submarine-inspired design and Sony IMX890 primary camera.",
    colors:[{n:"Submarine Blue",h:"#003399"},{n:"Navigator Beige",h:"#d4b896"}],
    specs:[["Display","6.7\" AMOLED, 120Hz"],["Chip","Snapdragon 7s Gen 2"],["Camera","50MP Sony IMX890 + 64MP 3x Tele"],["Battery","5000mAh | 67W SUPERVOOC"]],
    reviews:[{a:"Usman F.",s:4,t:"Great zoom camera."},{a:"Maryam S.",s:4,t:"Unique submarine design."},{a:"Bilal G.",s:4,t:"67W charging great."}]
  },
  {
    id:8,name:"Dell XPS 15",brand:"Dell",spec:"Intel Core i9 | 32GB | 1TB SSD",
    price:310000,old:340000,rating:5,rcount:76,
    img:"https://fdn2.gsmarena.com/vv/bigpic/dell-xps-15-9530.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/dell-xps-15-9530.jpg"],
    fallback:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    cat:"laptop",badges:["hot"],disc:9,po:false,
    desc:"Dell XPS 15 with InfinityEdge OLED display, Intel Core i9, and NVIDIA RTX 4060.",
    colors:[{n:"Platinum Silver",h:"#aaa"},{n:"Frost White",h:"#e8e8e8"}],
    specs:[["Display","15.6\" OLED 3.5K 120Hz"],["Processor","Intel Core i9-14900H"],["GPU","NVIDIA RTX 4060 8GB"],["RAM","32GB DDR5"],["Storage","1TB NVMe SSD"]],
    reviews:[{a:"Waqar A.",s:5,t:"Best Windows laptop for creators."},{a:"Noor K.",s:4,t:"OLED display stunning."},{a:"Hassan Z.",s:5,t:"Blazing fast."}]
  },
  {
    id:9,name:"Asus ROG Zephyrus G14",brand:"Asus",spec:"Ryzen 9 | 32GB | 1TB | RTX 4090",
    price:420000,old:460000,rating:5,rcount:89,
    img:"https://fdn2.gsmarena.com/vv/bigpic/asus-rog-zephyrus-g14-2024.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/asus-rog-zephyrus-g14-2024.jpg"],
    fallback:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80",
    cat:"laptop gaming",badges:["hot"],disc:9,po:false,
    desc:"Asus ROG Zephyrus G14 — ultimate gaming laptop with AniMe Matrix lid and RTX 4090.",
    colors:[{n:"Eclipse Gray",h:"#333"},{n:"Moonlight White",h:"#ddd"}],
    specs:[["Display","14\" QHD+ 165Hz"],["Processor","AMD Ryzen 9 8945HS"],["GPU","NVIDIA RTX 4090 16GB"],["RAM","32GB DDR5"],["Storage","1TB PCIe 4.0 SSD"]],
    reviews:[{a:"Ahmed R.",s:5,t:"Best gaming laptop ever!"},{a:"Tariq B.",s:5,t:"RTX 4090 insane."},{a:"Raza M.",s:4,t:"AniMe Matrix so cool."}]
  },
  {
    id:10,name:"Apple MacBook Pro M3",brand:"Apple",spec:"M3 Pro | 18GB | 512GB",
    price:520000,old:549000,rating:5,rcount:145,
    img:"https://fdn2.gsmarena.com/vv/bigpic/apple-macbook-pro-14-2023-m3-pro-m3-max.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/apple-macbook-pro-14-2023-m3-pro-m3-max.jpg"],
    fallback:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
    cat:"laptop",badges:["hot"],disc:5,po:false,
    desc:"MacBook Pro M3 Pro chip delivers incredible performance and up to 22 hours battery.",
    colors:[{n:"Space Black",h:"#1c1c1c"},{n:"Silver",h:"#aaa"}],
    specs:[["Display","14\" Liquid Retina XDR, 120Hz"],["Chip","Apple M3 Pro"],["RAM","18GB Unified Memory"],["Storage","512GB SSD"],["Battery","Up to 22 hours"]],
    reviews:[{a:"Ayesha P.",s:5,t:"M3 Pro is an absolute beast."},{a:"Omar N.",s:5,t:"22h battery life-changing."},{a:"Komal S.",s:5,t:"Best for video editing."}]
  },
  {
    id:11,name:"HP Spectre x360",brand:"HP",spec:"Intel Core Ultra 7 | 16GB | 512GB",
    price:285000,old:310000,rating:5,rcount:58,
    img:"https://fdn2.gsmarena.com/vv/bigpic/hp-spectre-x360-14-2024.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/hp-spectre-x360-14-2024.jpg"],
    fallback:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
    cat:"laptop",badges:["sale"],disc:8,po:false,
    desc:"HP Spectre x360 — premium 2-in-1 with OLED touch display and Intel Core Ultra 7.",
    colors:[{n:"Nightfall Black",h:"#111"},{n:"Poseidon Blue",h:"#3355aa"}],
    specs:[["Display","13.5\" 2.8K OLED Touch"],["Processor","Intel Core Ultra 7 155H"],["RAM","16GB LPDDR5x"],["Storage","512GB SSD"]],
    reviews:[{a:"Faiza R.",s:5,t:"Love the 2-in-1 versatility."},{a:"Saqib A.",s:4,t:"OLED gorgeous."},{a:"Maria T.",s:5,t:"Premium build."}]
  },
  {
    id:12,name:"Sony PS5",brand:"Sony",spec:"AMD Zen 2 | Custom RDNA 2 | 825GB",
    price:145000,old:160000,rating:5,rcount:287,
    img:"https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5.jpg"],
    fallback:"https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80",
    cat:"gaming",badges:["hot"],disc:9,po:false,
    desc:"Sony PlayStation 5 — 4K gaming, ray tracing, 3D Audio, ultra-high speed SSD.",
    colors:[{n:"White",h:"#ddd"},{n:"Black",h:"#111"}],
    specs:[["CPU","AMD Zen 2, 8 Cores @ 3.5GHz"],["GPU","AMD RDNA 2, 10.28 TFLOPs"],["Storage","825GB Custom SSD"],["Resolution","Up to 8K"],["Audio","Tempest 3D AudioTech"]],
    reviews:[{a:"Shahzaib K.",s:5,t:"Incredible gaming experience."},{a:"Iqra M.",s:5,t:"DualSense haptics next level."},{a:"Rizwan A.",s:5,t:"Best console ever."}]
  },
  {
    id:13,name:"Xbox Series X",brand:"Microsoft",spec:"AMD Zen 2 | RDNA 2 | 1TB SSD",
    price:130000,old:145000,rating:5,rcount:176,
    img:"https://fdn2.gsmarena.com/vv/bigpic/microsoft-xbox-series-x.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/microsoft-xbox-series-x.jpg"],
    fallback:"https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&q=80",
    cat:"gaming",badges:["sale"],disc:10,po:false,
    desc:"Xbox Series X — 12 teraflops, true 4K 120fps, Quick Resume.",
    colors:[{n:"Carbon Black",h:"#111"}],
    specs:[["CPU","AMD Zen 2, 8 Cores @ 3.8GHz"],["GPU","AMD RDNA 2, 12 TFLOPs"],["Storage","1TB Custom NVMe SSD"],["Resolution","4K 120fps"]],
    reviews:[{a:"Jawad N.",s:5,t:"Game Pass Ultimate incredible."},{a:"Saif R.",s:4,t:"Quick Resume game changer."},{a:"Hira A.",s:5,t:"4K 120fps buttery smooth."}]
  },
  {
    id:14,name:"Nintendo Switch OLED",brand:"Nintendo",spec:"Tegra X1+ | 64GB | 7\" OLED",
    price:75000,old:82000,rating:5,rcount:142,
    img:"https://fdn2.gsmarena.com/vv/bigpic/nintendo-switch-oled-model.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/nintendo-switch-oled-model.jpg"],
    fallback:"https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&q=80",
    cat:"gaming",badges:["hot"],disc:9,po:false,
    desc:"Nintendo Switch OLED — vibrant 7\" OLED, enhanced audio, 64GB internal storage.",
    colors:[{n:"White",h:"#ddd"},{n:"Neon Blue/Red",h:"#0044ff"}],
    specs:[["Display","7\" OLED"],["Storage","64GB"],["Battery","4.5–9 hours"],["Modes","TV, Tabletop, Handheld"]],
    reviews:[{a:"Zainab M.",s:5,t:"OLED screen beautiful."},{a:"Ali P.",s:5,t:"Love the portability."},{a:"Sara K.",s:5,t:"Best gaming device ever."}]
  },
  {
    id:15,name:"Razer Huntsman V3",brand:"Razer",spec:"Analog Optical | Per-Key RGB",
    price:22000,old:26000,rating:4,rcount:64,
    img:"https://fdn2.gsmarena.com/vv/bigpic/razer-huntsman-v2-analog.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/razer-huntsman-v2-analog.jpg"],
    fallback:"https://images.unsplash.com/photo-1561336526-2914f13ceb36?w=400&q=80",
    cat:"gaming accessory peripheral",badges:["sale"],disc:15,po:false,
    desc:"Razer Huntsman V3 Pro — Analog Optical switches for precise actuation control.",
    colors:[{n:"Black",h:"#111"}],
    specs:[["Switches","Razer Analog Optical v2"],["Lighting","Per-Key Chroma RGB"],["Connection","USB-C"]],
    reviews:[{a:"Faisal N.",s:4,t:"Analog actuation game changer."},{a:"Waleed K.",s:5,t:"RGB lighting stunning."}]
  },
  {
    id:16,name:"Logitech G Pro X2 Mouse",brand:"Logitech",spec:"HERO 25K | Wireless | 70hr",
    price:18000,old:21000,rating:5,rcount:98,
    img:"https://fdn2.gsmarena.com/vv/bigpic/logitech-g-pro-x-superlight-2.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/logitech-g-pro-x-superlight-2.jpg"],
    fallback:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    cat:"gaming accessory peripheral",badges:["hot"],disc:14,po:false,
    desc:"Logitech G Pro X2 Superlight — 60g with HERO 25K sensor for esports professionals.",
    colors:[{n:"Black",h:"#111"},{n:"White",h:"#ddd"}],
    specs:[["Sensor","HERO 25K"],["Weight","60g"],["Battery","70 hours"],["Polling Rate","2000Hz"]],
    reviews:[{a:"Kamran S.",s:5,t:"Lightest gaming mouse."},{a:"Rahul A.",s:5,t:"HERO sensor flawless."}]
  },
  {
    id:17,name:"JBL Tune 770NC",brand:"JBL",spec:"ANC | 70hr | Bluetooth 5.3",
    price:12000,old:15000,rating:4,rcount:112,
    img:"https://fdn2.gsmarena.com/vv/bigpic/jbl-tune-770nc.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/jbl-tune-770nc.jpg"],
    fallback:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    cat:"accessory audio budget",badges:["sale"],disc:20,po:false,
    desc:"JBL Tune 770NC — Adaptive Noise Cancelling, JBL Pure Bass Sound, 70-hour battery.",
    colors:[{n:"Black",h:"#111"},{n:"White",h:"#ddd"},{n:"Blue",h:"#0044cc"}],
    specs:[["Driver","40mm"],["Battery","70 hours ANC off"],["ANC","Adaptive"],["BT","5.3"]],
    reviews:[{a:"Nadia M.",s:4,t:"Bass incredible for price."},{a:"Shoaib R.",s:4,t:"ANC works well."},{a:"Fiza A.",s:5,t:"Best budget headphones!"}]
  },
  {
    id:18,name:"Samsung Galaxy Watch 6",brand:"Samsung",spec:"1.4\" AMOLED | Health | 40mm",
    price:55000,old:62000,rating:4,rcount:86,
    img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"],
    fallback:"https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=400&q=80",
    cat:"accessory wearable",badges:["sale"],disc:11,po:false,
    desc:"Galaxy Watch 6 with advanced health monitoring, body composition, sleep tracking.",
    colors:[{n:"Graphite",h:"#444"},{n:"Gold",h:"#d4a020"},{n:"Cream",h:"#f0e8d8"}],
    specs:[["Display","1.4\" AMOLED 450x450"],["Sensors","BioActive (ECG, PPG)"],["Battery","~40 hours"],["OS","Wear OS 5 + One UI Watch 6"]],
    reviews:[{a:"Kiran A.",s:4,t:"Best Android smartwatch."},{a:"Irfan B.",s:5,t:"Health tracking accurate."},{a:"Sobia K.",s:4,t:"Beautiful display."}]
  },
  {
    id:19,name:"Anker 65W GaN Charger",brand:"Anker",spec:"65W | 3-Port | USB-C + USB-A",
    price:4500,old:6000,rating:5,rcount:203,
    img:"https://fdn2.gsmarena.com/vv/bigpic/anker-nano-charger-65w.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/anker-nano-charger-65w.jpg"],
    fallback:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    cat:"accessory budget",badges:["sale"],disc:25,po:false,
    desc:"Anker Nano Pro 65W GaN — 3 ports, charge laptop + phone + tablet simultaneously.",
    colors:[{n:"Black",h:"#111"},{n:"White",h:"#eee"}],
    specs:[["Power","65W total"],["Ports","2x USB-C + 1x USB-A"],["Tech","GaN II"],["Size","50% smaller than original"]],
    reviews:[{a:"Raza M.",s:5,t:"Tiny but charges everything!"},{a:"Asma T.",s:5,t:"Best travel charger."},{a:"Hamid K.",s:5,t:"Zero heat, great speed."}]
  },
  {
    id:20,name:"Logitech MX Master 3S",brand:"Logitech",spec:"8K DPI | Quiet Click | USB-C",
    price:21000,old:24000,rating:5,rcount:134,
    img:"https://fdn2.gsmarena.com/vv/bigpic/logitech-mx-master-3s.jpg",
    imgs:["https://fdn2.gsmarena.com/vv/bigpic/logitech-mx-master-3s.jpg"],
    fallback:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
    cat:"accessory peripheral",badges:["hot"],disc:13,po:false,
    desc:"Logitech MX Master 3S — world's most advanced productivity mouse with MagSpeed scrolling.",
    colors:[{n:"Graphite",h:"#444"},{n:"Pearl White",h:"#e8e8e8"}],
    specs:[["Sensor","8000 DPI Darkfield"],["Scroll","MagSpeed electromagnetic"],["Battery","70 days | USB-C"],["Buttons","7 programmable"]],
    reviews:[{a:"Adnan R.",s:5,t:"MagSpeed scrolling addictive."},{a:"Maha K.",s:5,t:"Best productivity mouse."},{a:"Zafar A.",s:5,t:"Perfect for work and design."}]
  }
];

const DEALS_DATA = [
  {id:0,name:"Galaxy S26 Ultra — Pre-Order Special",disc:8,stock:47,total:100},
  {id:12,name:"Sony PS5 Bundle + 2 Games",disc:16,stock:12,total:50},
  {id:5,name:"Samsung Galaxy S24 Ultra",disc:17,stock:28,total:80},
  {id:9,name:"Asus ROG Zephyrus G14",disc:9,stock:8,total:30},
  {id:10,name:"Apple MacBook Pro M3",disc:5,stock:15,total:40},
  {id:17,name:"JBL Tune 770NC + Free Case",disc:20,stock:55,total:100}
];

const GAMING_IDS = [12,13,14,15,16,9,0,18];

/* ============================================================
   STATE
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('etv_cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('etv_wish')||'[]');
let currentSlide = 0;
let sliderTimer;
let modalQty = 1;

/* ============================================================
   CURSOR SYSTEM
   ============================================================ */
const co = document.getElementById('cursor-outer');
const ci = document.getElementById('cursor-inner');
let mx=0,my=0,ox=0,oy=0;
let trailPoints = [];

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  ci.style.left = mx+'px'; ci.style.top = my+'px';
  // trail
  createTrail(mx, my);
  // parallax hero phone
  const phone = document.getElementById('hero-phone');
  const slide = document.querySelector('.s26-slide.on');
  if (phone && slide) {
    const rect = slide.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const py = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    phone.style.transform = `translateY(${-py}px) rotateY(${px*0.5}deg) rotateX(${-py*0.3}deg)`;
    phone.style.filter = `drop-shadow(${-px*0.5}px ${py*0.5}px 30px rgba(0,212,255,0.4)) drop-shadow(0 0 60px rgba(0,212,255,0.15))`;
  }
  // Double banner mouse shine
  document.querySelectorAll('.dbl-card').forEach(card => {
    const r = card.getBoundingClientRect();
    const px2 = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const py2 = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    card.style.setProperty('--mx', px2+'%');
    card.style.setProperty('--my', py2+'%');
  });
  // product cards 3D tilt
  document.querySelectorAll('.pcard:hover,.game-card:hover').forEach(card => {
    const r = card.getBoundingClientRect();
    const px3 = (e.clientX - r.left - r.width/2) / (r.width/2);
    const py3 = (e.clientY - r.top - r.height/2) / (r.height/2);
    card.style.transform = `translateY(-8px) rotateX(${-py3*5}deg) rotateY(${px3*6}deg) scale(1.02)`;
    const shine = card.querySelector('.card-shine');
    if(shine){
      shine.style.background = `radial-gradient(circle 180px at ${((px3+1)/2*100).toFixed()}% ${((py3+1)/2*100).toFixed()}%, rgba(255,255,255,0.08) 0%, transparent 70%)`;
    }
  });
});

// Smooth outer cursor follow
function animateCursor() {
  ox += (mx - ox) * 0.12;
  oy += (my - oy) * 0.12;
  co.style.left = ox+'px'; co.style.top = oy+'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor enter/leave interactive
document.addEventListener('mouseover', e => {
  if(e.target.matches('button,a,.pcard,.cat-btn,.ftab,.bsm,.h-dot,input,label,.soc,.iBtn')) {
    document.body.classList.add('cursor-hover');
  }
});
document.addEventListener('mouseout', e => {
  if(e.target.matches('button,a,.pcard,.cat-btn,.ftab,.bsm,.h-dot,input,label,.soc,.iBtn')) {
    document.body.classList.remove('cursor-hover');
  }
});
document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

// Click ripple
document.addEventListener('click', e => {
  const r = document.createElement('div');
  r.className = 'click-ripple';
  r.style.left = e.clientX+'px'; r.style.top = e.clientY+'px';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 600);
});

// Cursor trail
let trailTimeout;
function createTrail(x, y) {
  clearTimeout(trailTimeout);
  const t = document.createElement('div');
  t.className = 'cursor-trail';
  t.style.left = x+'px'; t.style.top = y+'px';
  t.style.width = '5px'; t.style.height = '5px';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 600);
}

/* ============================================================
   MAGNETIC BUTTON EFFECT
   ============================================================ */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width/2);
    const dy = e.clientY - (r.top + r.height/2);
    btn.style.transform = `translate(${dx*0.25}px, ${dy*0.25}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ============================================================
   BOKEH DOTS
   ============================================================ */
function initBokeh() {
  const c = document.getElementById('bokeh-canvas');
  if (!c) return;
  for (let i = 0; i < 18; i++) {
    const d = document.createElement('div');
    d.className = 'bokeh';
    const size = 6 + Math.random()*18;
    const hue = Math.random() > 0.5 ? 'rgba(0,212,255,' : 'rgba(123,47,255,';
    d.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${hue}${0.3+Math.random()*0.5});
      animation-duration:${6+Math.random()*8}s;
      animation-delay:${Math.random()*6}s;
      filter:blur(${2+Math.random()*3}px);
    `;
    c.appendChild(d);
  }
}

/* ============================================================
   STAR FIELD
   ============================================================ */
function initStars() {
  const sf = document.getElementById('star-field');
  if (!sf) return;
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = 1+Math.random()*2;
    s.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random()*100}%;top:${Math.random()*100}%;
      animation-duration:${2+Math.random()*4}s;
      animation-delay:${Math.random()*4}s;
    `;
    sf.appendChild(s);
  }
}

/* ============================================================
   GAMING PARTICLES
   ============================================================ */
function initGameParticles() {
  const p = document.getElementById('g-particles');
  if (!p) return;
  for (let i = 0; i < 22; i++) {
    const g = document.createElement('div');
    g.className = 'gp';
    g.style.cssText = `
      left:${Math.random()*100}%;
      animation-duration:${5+Math.random()*5}s;
      animation-delay:${Math.random()*6}s;
    `;
    p.appendChild(g);
  }
}

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function fallbackImg(el, fb) { if(fb) el.src = fb; }

function renderProducts(filter='all') {
  const grid = document.getElementById('prods-grid');
  const filtered = filter==='all' ? PRODS : PRODS.filter(p=>p.cat.includes(filter));
  grid.innerHTML = filtered.map((p,i)=>`
    <div class="pcard ${p.id===0?'s26card':''} reveal" style="animation-delay:${(i%4)*0.07}s;">
      <div class="pcard-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="pcard-img" loading="lazy"
          onerror="this.src='${p.fallback}'">
        <div class="pcard-badges">
          ${p.id===0?'<span class="bdg bdg-launch">🔥 JUST LAUNCHED</span>':''}
          ${p.badges.includes('new')&&p.id!==0?'<span class="bdg bdg-new">NEW</span>':''}
          ${p.badges.includes('hot')?'<span class="bdg bdg-hot">HOT</span>':''}
          ${p.badges.includes('sale')?'<span class="bdg bdg-sale">SALE</span>':''}
          <span class="bdg bdg-brand">${p.brand}</span>
        </div>
        ${p.disc?`<div class="disc-bdg">-${p.disc}%</div>`:''}
        <div class="qview" onclick="openProdModal(${p.id})"><i class="fas fa-eye" style="margin-right:6px;"></i>Quick View</div>
        <div class="card-shine" style="position:absolute;inset:0;pointer-events:none;border-radius:var(--r) var(--r) 0 0;"></div>
      </div>
      <div class="pcard-info">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-spec">${p.spec}</div>
        <div class="pcard-stars">
          <span class="stars">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)}</span>
          <span class="rcount">(${p.rcount})</span>
        </div>
        <div class="pcard-price">
          ${p.old?`<span class="pold">PKR ${p.old.toLocaleString()}</span>`:''}
          <span class="pnew">PKR ${p.price.toLocaleString()}</span>
        </div>
        <div class="pcard-acts">
          <button class="btn-cart ${p.po?'po':''}" onclick="addToCart(${p.id})">${p.po?'🚀 Pre-Order':'🛒 Add to Cart'}</button>
          <button class="btn-wish ${wishlist.includes(p.id)?'on':''}" onclick="toggleWish(${p.id},this)" id="wb-${p.id}">
            <i class="${wishlist.includes(p.id)?'fas':'far'} fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
  initCardHover();
}

function initCardHover() {
  document.querySelectorAll('.pcard,.game-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function ftFilter(el, f) {
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  renderProducts(f);
}

function filterTab(el, f) {
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  if(el) el.classList.add('active');
  renderProducts(f);
  document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
}

/* ============================================================
   RENDER DEALS
   ============================================================ */
function renderDeals() {
  const g = document.getElementById('deals-grid');
  g.innerHTML = DEALS_DATA.map(d => {
    const p = PRODS.find(x=>x.id===d.id);
    return `
    <div class="deal-card reveal">
      <div class="deal-disc">-${d.disc}%</div>
      <img src="${p.img}" alt="${d.name}" class="deal-img"
        onerror="this.src='${p.fallback}'">
      <div class="deal-name">${d.name}</div>
      <div class="deal-mini">
        <span class="dm-n dh">47</span><span class="dm-s">:</span>
        <span class="dm-n dm">59</span><span class="dm-s">:</span>
        <span class="dm-n ds">59</span>
      </div>
      <div class="pcard-price" style="margin-bottom:10px;">
        <span class="pold">PKR ${p.old?.toLocaleString()}</span>
        <span class="pnew">PKR ${p.price.toLocaleString()}</span>
      </div>
      <div class="deal-prog"><div class="deal-prog-fill" style="width:${Math.round(d.stock/d.total*100)}%;"></div></div>
      <div class="deal-stock">Only ${d.stock} left — ${Math.round(d.stock/d.total*100)}% remaining</div>
      <button class="btn-cart" style="width:100%;" onclick="addToCart(${d.id})">${d.id===0?'🚀 Pre-Order':'🛒 Add to Cart'}</button>
    </div>`;
  }).join('');
  observeReveal();
}

/* ============================================================
   RENDER GAMING
   ============================================================ */
function renderGaming() {
  const g = document.getElementById('game-grid');
  g.innerHTML = GAMING_IDS.map(id => {
    const p = PRODS.find(x=>x.id===id);
    return `
    <div class="game-card pcard">
      <div class="pcard-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="pcard-img" loading="lazy"
          onerror="this.src='${p.fallback}'" style="height:190px;">
        <div class="qview" onclick="openProdModal(${p.id})"><i class="fas fa-eye" style="margin-right:6px;"></i>Quick View</div>
        <div class="card-shine" style="position:absolute;inset:0;pointer-events:none;border-radius:var(--r) var(--r) 0 0;"></div>
      </div>
      <div class="pcard-info">
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-spec">${p.spec}</div>
        <div class="pcard-price"><span class="pnew" style="color:#00ff88;">PKR ${p.price.toLocaleString()}</span></div>
        <div class="pcard-acts">
          <button class="btn-cart" style="background:linear-gradient(135deg,#00ff88,#00cc66);" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
          <button class="btn-wish" onclick="toggleWish(${p.id},this)"><i class="far fa-heart"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(id) {
  const p = PRODS.find(x=>x.id===id);
  const ex = cart.find(c=>c.id===id);
  if(ex) ex.qty++; else cart.push({id,qty:1});
  saveCart(); updateBadge();
  showToast(`<i class="fas fa-check-circle"></i> ${p.name} added to cart!`);
}
function saveCart(){ localStorage.setItem('etv_cart',JSON.stringify(cart)); }
function updateBadge(){
  document.getElementById('cart-badge').textContent = cart.reduce((s,c)=>s+c.qty,0);
}
function openCart(){ renderCartItems(); document.getElementById('cart-drawer').classList.add('open'); document.getElementById('ovl').classList.add('on'); }
function closeCart(){ document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('ovl').classList.remove('on'); }
function renderCartItems(){
  const list = document.getElementById('cart-items');
  const foot = document.getElementById('cart-foot');
  if(!cart.length){
    list.innerHTML='<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
    foot.style.display='none'; return;
  }
  foot.style.display='block';
  let tot=0;
  list.innerHTML=cart.map(c=>{
    const p=PRODS.find(x=>x.id===c.id); if(!p) return '';
    tot+=p.price*c.qty;
    return `<div class="ci">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='${p.fallback}'">
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">PKR ${p.price.toLocaleString()}</div>
        <div class="ci-qty">
          <button class="qb" onclick="chQty(${c.id},-1)"><i class="fas fa-minus"></i></button>
          <span class="qn">${c.qty}</span>
          <button class="qb" onclick="chQty(${c.id},1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="ci-rm" onclick="rmCart(${c.id})"><i class="fas fa-trash"></i></button>
    </div>`;
  }).join('');
  document.getElementById('c-sub-val').textContent='PKR '+tot.toLocaleString();
}
function chQty(id,d){ const i=cart.find(c=>c.id===id); if(i) i.qty=Math.max(1,i.qty+d); saveCart();updateBadge();renderCartItems(); }
function rmCart(id){ cart=cart.filter(c=>c.id!==id); saveCart();updateBadge();renderCartItems(); showToast('<i class="fas fa-trash"></i> Item removed');}
function checkout(){ cart=[]; saveCart();updateBadge();closeCart(); showToast('<i class="fas fa-check-circle"></i> 🎉 Order Placed! Thank you!',4000); }

/* ============================================================
   WISHLIST
   ============================================================ */
function toggleWish(id, btn) {
  if(wishlist.includes(id)){
    wishlist=wishlist.filter(w=>w!==id);
    btn.classList.remove('on'); btn.innerHTML='<i class="far fa-heart"></i>';
    showToast('<i class="far fa-heart"></i> Removed from wishlist');
  } else {
    wishlist.push(id); btn.classList.add('on'); btn.innerHTML='<i class="fas fa-heart"></i>';
    showToast('<i class="fas fa-heart" style="color:var(--red)"></i> Added to wishlist!');
  }
  localStorage.setItem('etv_wish',JSON.stringify(wishlist));
}
function openWishlist(){
  const c=document.getElementById('wish-content');
  if(!wishlist.length){ c.innerHTML='<div class="wish-empty"><i class="fas fa-heart" style="font-size:48px;color:var(--border);display:block;margin-bottom:14px;"></i><p>Your wishlist is empty</p></div>'; }
  else { c.innerHTML='<div class="wish-grid">'+wishlist.map(id=>{
    const p=PRODS.find(x=>x.id===id); if(!p) return '';
    return `<div class="wi">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='${p.fallback}'">
      <div class="wi-name">${p.name}</div>
      <div class="wi-price">PKR ${p.price.toLocaleString()}</div>
      <div class="wi-acts">
        <button class="btn-mvc" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="btn-rwi" onclick="rmWish(${p.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`;
  }).join('')+'</div>'; }
  document.getElementById('wish-modal').classList.add('on');
}
function closeWishlist(){ document.getElementById('wish-modal').classList.remove('on'); }
function rmWish(id){ wishlist=wishlist.filter(w=>w!==id); localStorage.setItem('etv_wish',JSON.stringify(wishlist)); const b=document.getElementById('wb-'+id); if(b){b.classList.remove('on');b.innerHTML='<i class="far fa-heart"></i>';} openWishlist(); }

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProdModal(id) {
  const p = PRODS.find(x=>x.id===id); if(!p) return;
  modalQty=1;
  const imgs = p.imgs||[p.img];
  const c=document.getElementById('pm-content');
  c.innerHTML=`
  <div class="pm-grid">
    <div>
      <img src="${imgs[0]}" alt="${p.name}" class="pm-main-img" id="pmmi"
        onerror="this.src='${p.fallback}'">
      <div class="pm-thumbs">
        ${imgs.map((im,i)=>`<img src="${im}" alt="${p.name}" class="pm-thumb ${i===0?'on':''}"
          onclick="swPMImg('${im}',this)" onerror="this.src='${p.fallback}'">`).join('')}
      </div>
    </div>
    <div class="pm-info">
      <div style="font-size:11px;color:var(--muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">${p.brand}</div>
      <h2>${p.name}</h2>
      <div style="color:#ffd700;font-size:13px;margin-bottom:12px;">${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)} <span style="color:var(--muted);font-size:12px;">(${p.rcount} reviews)</span></div>
      <div class="pm-price-row">
        <span class="pm-new">PKR ${p.price.toLocaleString()}</span>
        ${p.old?`<span class="pm-old">PKR ${p.old.toLocaleString()}</span>`:''}
        ${p.disc?`<span class="p-badge">-${p.disc}%</span>`:''}
      </div>
      ${p.colors?`<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Color:</div>
      <div class="pm-colors">${p.colors.map(cl=>`<div class="csw" style="background:${cl.h};" title="${cl.n}" onclick="this.parentElement.querySelectorAll('.csw').forEach(s=>s.classList.remove('on'));this.classList.add('on');"></div>`).join('')}</div>`:''}
      <div class="qty-row">
        <span class="ql">Qty:</span>
        <button class="pm-qb" onclick="chMQty(-1)"><i class="fas fa-minus"></i></button>
        <span class="pm-qn" id="pmq">1</span>
        <button class="pm-qb" onclick="chMQty(1)"><i class="fas fa-plus"></i></button>
      </div>
      <div class="pm-btns">
        <button class="btn-cart ${p.po?'po':''}" style="flex:1;" onclick="addToCart(${p.id});closePM();">${p.po?'🚀 Pre-Order':'🛒 Add to Cart'}</button>
        <button class="btn-buy" onclick="addToCart(${p.id});closePM();openCart();">Buy Now</button>
      </div>
      <div class="pm-tabs">
        <button class="pm-tab on" onclick="swPMTab(this,'pmt-d')">Description</button>
        <button class="pm-tab" onclick="swPMTab(this,'pmt-s')">Specs</button>
        <button class="pm-tab" onclick="swPMTab(this,'pmt-r')">Reviews</button>
      </div>
      <div class="pm-tc on" id="pmt-d">${p.desc||''}${p.id===0?`<div style="margin-top:14px;background:rgba(0,212,255,.06);border:1px solid var(--border);border-radius:var(--rs);padding:14px;"><div style="color:var(--accent);font-weight:700;margin-bottom:7px;"><i class="fas fa-eye-slash" style="margin-right:6px;"></i>Privacy Display</div><p style="font-size:12.5px;color:var(--muted);">Flex Magic Pixel hides your screen from side-angle viewers. Activate from Quick Panel — full screen, specific apps or notifications.</p></div>`:''}</div>
      <div class="pm-tc" id="pmt-s">${p.specs?`<table class="specs-tbl">${p.specs.map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table>`:'<p style="color:var(--muted);">Specs not available.</p>'}</div>
      <div class="pm-tc" id="pmt-r">${Array.isArray(p.reviews)&&p.reviews.length?p.reviews.map(r=>`<div class="rev-item"><div class="rev-auth">${r.a} <span style="color:#ffd700;">${'★'.repeat(r.s)}</span></div><div class="rev-txt">${r.t}</div></div>`).join(''):'<p style="color:var(--muted);">No reviews.</p>'}</div>
    </div>
  </div>`;
  // set first color active
  setTimeout(()=>{ const sw=c.querySelector('.csw'); if(sw) sw.classList.add('on'); },50);
  document.getElementById('prod-modal').classList.add('on');
}
function swPMImg(src,el){ document.getElementById('pmmi').src=src; document.querySelectorAll('.pm-thumb').forEach(t=>t.classList.remove('on')); el.classList.add('on'); }
function chMQty(d){ modalQty=Math.max(1,modalQty+d); const el=document.getElementById('pmq'); if(el) el.textContent=modalQty; }
function swPMTab(btn,id){ document.querySelectorAll('.pm-tab').forEach(b=>b.classList.remove('on')); document.querySelectorAll('.pm-tc').forEach(c=>c.classList.remove('on')); btn.classList.add('on'); const el=document.getElementById(id); if(el) el.classList.add('on'); }
function closePM(){ document.getElementById('prod-modal').classList.remove('on'); }

/* ============================================================
   HERO SLIDER
   ============================================================ */
function goSlide(n) {
  const slides=document.querySelectorAll('.hero-slide');
  const dots=document.querySelectorAll('.h-dot');
  slides[currentSlide]?.classList.remove('on');
  dots[currentSlide]?.classList.remove('on');
  currentSlide=(n+slides.length)%slides.length;
  slides[currentSlide]?.classList.add('on');
  dots[currentSlide]?.classList.add('on');
  resetPB();
  // reset phone anim on s26 slide
  const phone=document.getElementById('hero-phone');
  if(phone) phone.style.transform='';
}
function nextSlide(){ goSlide(currentSlide+1); }
function prevSlide(){ goSlide(currentSlide-1); }
function resetPB(){
  const b=document.getElementById('hpb');
  b.classList.remove('run'); b.style.transition='none'; b.style.width='0%';
  setTimeout(()=>{ b.style.transition=''; b.classList.add('run'); },40);
}
function startSlider(){ sliderTimer=setInterval(nextSlide,5000); }

/* ============================================================
   COUNTDOWN TIMERS
   ============================================================ */
function startLaunch(){
  const tgt=new Date('2026-03-11T00:00:00');
  const tick=()=>{
    const diff=tgt-new Date(); if(diff<=0) return;
    const pad=n=>String(n).padStart(2,'0');
    const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),
          m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    [['sp-d',d],['sp-h',h],['sp-m',m],['sp-s',s]].forEach(([id,v])=>{ const el=document.getElementById(id); if(el) el.textContent=pad(v); });
  };
  tick(); setInterval(tick,1000);
}
function startFlash(){
  const tgt=Date.now()+48*3600000;
  const tick=()=>{
    const diff=Math.max(0,tgt-Date.now());
    const pad=n=>String(n).padStart(2,'0');
    const h=Math.floor(diff/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);
    [['fh',h],['fm',m],['fs2',s]].forEach(([id,v])=>{ const el=document.getElementById(id); if(el) el.textContent=pad(v); });
    document.querySelectorAll('.dh').forEach(el=>el.textContent=pad(h));
    document.querySelectorAll('.dm').forEach(el=>el.textContent=pad(m));
    document.querySelectorAll('.ds').forEach(el=>el.textContent=pad(s));
  };
  tick(); setInterval(tick,1000);
}

/* ============================================================
   SEARCH
   ============================================================ */
document.getElementById('nav-search').addEventListener('input', function(){
  const q=this.value.trim().toLowerCase();
  const dd=document.getElementById('srch-dd');
  if(!q){ dd.classList.remove('open'); return; }
  const res=PRODS.filter(p=>p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)).slice(0,6);
  if(!res.length){ dd.classList.remove('open'); return; }
  dd.innerHTML=res.map(p=>`
    <div class="srch-item" onclick="openProdModal(${p.id});document.getElementById('nav-search').value='';document.getElementById('srch-dd').classList.remove('open');">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='${p.fallback}'">
      <div><div class="srch-item-name">${p.name}</div><div class="srch-item-price">PKR ${p.price.toLocaleString()}</div></div>
    </div>`).join('');
  dd.classList.add('open');
});
document.addEventListener('click',e=>{ if(!e.target.closest('.srch-wrap')) document.getElementById('srch-dd').classList.remove('open'); if(!e.target.closest('.usr-wrap')) document.getElementById('usr-dd').classList.remove('on'); });

/* ============================================================
   MOBILE NAV
   ============================================================ */
function openMob(){ document.getElementById('mob-nav').classList.add('open'); document.getElementById('ovl').classList.add('on'); }
function closeMob(){ document.getElementById('mob-nav').classList.remove('open'); document.getElementById('ovl').classList.remove('on'); closeCart(); }
function toggleUsr(){ document.getElementById('usr-dd').classList.toggle('on'); }

/* ============================================================
   SCROLL EFFECTS
   ============================================================ */
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.getElementById('navbar').classList.toggle('scrolled',y>50);
  document.getElementById('btt').classList.toggle('show',y>400);
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function observeReveal(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  },{threshold:.1});
  document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-right:not(.visible)').forEach(el=>obs.observe(el));
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg,dur=2600){
  const tc=document.getElementById('toasts');
  const t=document.createElement('div'); t.className='toast'; t.innerHTML=msg;
  tc.appendChild(t);
  setTimeout(()=>{ t.classList.add('out'); setTimeout(()=>t.remove(),300); },dur);
}

/* ============================================================
   EXIT POPUP
   ============================================================ */
function showEP(){ if(localStorage.getItem('etv_ep')) return; document.getElementById('exit-pop').classList.add('on'); }
function closeEP(){ document.getElementById('exit-pop').classList.remove('on'); localStorage.setItem('etv_ep','1'); }

/* ============================================================
   NEWSLETTER
   ============================================================ */
function subscribe(){
  const v=document.getElementById('nl-email').value;
  if(!v||!v.includes('@')){ showToast('<i class="fas fa-exclamation-circle" style="color:var(--red)"></i> Enter a valid email'); return; }
  document.getElementById('nl-email').value='';
  showToast('<i class="fas fa-check-circle"></i> 🎉 Welcome to the e-TECH VILLAS family!',3500);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  renderProducts();
  renderDeals();
  renderGaming();
  updateBadge();
  startSlider();
  startLaunch();
  startFlash();
  observeReveal();
  initBokeh();
  initStars();
  initGameParticles();
  // re-init magnetic buttons after products rendered
  setTimeout(()=>{
    document.querySelectorAll('.magnetic').forEach(btn=>{
      btn.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2);
        const dy=e.clientY-(r.top+r.height/2);
        btn.style.transform = `translate(${dx*0.25}px, ${dy*0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
  // show exit popup
  setTimeout(showEP, 8000);
});
