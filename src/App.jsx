import React, { useState, useEffect } from 'react';
import { Shield, Droplet, Clock, Leaf, AlertTriangle, Heart, CheckCircle, ChevronDown, Menu, X, BookOpen, Star, Award, Image as ImageIcon } from 'lucide-react';

// 這是我們的主要應用程式組件
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isArticleOpen, setIsArticleOpen] = useState(false);

  // 模擬滾動出現動畫
  useEffect(() => {
    const handleScroll = () => {
      // 簡單的滾動監聽邏輯
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { title: "含 (Hold)", desc: "倒取約 10ml 精華液", icon: <Droplet className="w-8 h-8" /> },
    { title: "泡 (Soak)", desc: "含在口中 2 分鐘 (關鍵！)", icon: <Clock className="w-8 h-8" /> },
    { title: "吐 (Spit)", desc: "將漱口水輕輕吐出", icon: <ChevronDown className="w-8 h-8" /> },
    { title: "留 (Retain)", desc: "吐後勿漱口！留住保護膜", icon: <Shield className="w-8 h-8" /> },
  ];

  // 定義 4 個亮點的資料結構
  // 注意：這裡的路徑必須完全對應您 GitHub public 資料夾內的檔名
  const highlights = [
    {
      id: "h1",
      title: "亮點一：口腔是「微生態系」",
      subtitle: "不是你死我活的戰場",
      desc: "堅持「0酒精、0西藥、0化學殺菌劑」。傳統殺菌像除草劑，湧健康則是以養代殺，精準抑制壞菌，保留好菌，將口腔修復成草木蔥蘢的森林。",
      icon: <Leaf className="w-6 h-6" />,
      // 對應您的檔名：02_健康守門員_02_亮點1.jpg
      image: "/02_健康守門員_02_亮點1.jpg", 
      color: "bg-green-600"
    },
    {
      id: "h2",
      title: "亮點二：牙科術後的「液態敷料」",
      subtitle: "生物科技帶來的深度修復",
      desc: "獨家「黏膜吸收技術」，將靈芝轉化為小分子，繞過代謝直接修復患處。SGS 實證 99.97% 抗菌，有效改善紅腫，是牙醫師眼中的修復神隊友。",
      icon: <Shield className="w-6 h-6" />,
      // 對應您的檔名：03_健康守門員_03_亮點2.jpg
      image: "/03_健康守門員_03_亮點2.jpg", 
      color: "bg-amber-600"
    },
    {
      id: "h3",
      title: "亮點三：顛覆習慣的「四字訣」",
      subtitle: "讓口腔吸收精華液",
      desc: "打破漱完即吐的舊習慣！含、泡、吐、留。最關鍵在於「留」，吐後不需清水漱口，讓植萃精華在黏膜形成長效保護膜。",
      icon: <CheckCircle className="w-6 h-6" />,
      // 對應您的檔名：04_健康守門員_04_亮點3.jpg
      image: "/04_健康守門員_04_亮點3.jpg", 
      color: "bg-blue-600"
    },
    {
      id: "h4",
      title: "亮點四：高價值的健康投資",
      subtitle: "從洗手台開始佈局",
      desc: "榮獲 2024 Monde Selection 世界品質金獎。成分天然，孕婦、幼童及化放療患者皆適用。每日兩分鐘，預防勝於治療。",
      icon: <Award className="w-6 h-6" />,
      // 對應您的檔名：05_健康守門員_05_亮點4.jpg
      image: "/05_健康守門員_05_亮點4.jpg", 
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-amber-50 selection:bg-amber-200 min-h-screen">
      
      {/* 全文閱讀視窗 (Modal) */}
      {isArticleOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl h-[90vh] rounded-3xl shadow-2xl flex flex-col relative overflow-hidden animate-fade-in-up">
            <div className="bg-amber-600 p-6 flex justify-between items-center text-white shrink-0">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="w-8 h-8" /> 口腔健康分享文
              </h3>
              <button 
                onClick={() => setIsArticleOpen(false)}
                className="p-2 hover:bg-amber-700 rounded-full transition"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="p-8 md:p-12 overflow-y-auto leading-loose text-xl text-gray-700 space-y-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                別再把口腔當戰場！靈芝漱口水如何翻轉「殺菌」舊觀念，成為全身健康的守門員？
              </h1>
              {/* 文章內容區塊 */}
              <section>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 border-l-8 border-amber-500 pl-4">從口腔到全身：這是一場關乎生命的「第一道防線」</h4>
                <p>
                  您是否曾想過，口腔內的微小細菌，竟是誘發心血管疾病、甚至阿茲海默症的潛在推手？醫學界近年不斷證實，口腔病菌能透過血液循環影響全身器官。口腔不僅是消化道的入口，更是維持生命健康的守門員。然而，大多數人在照護這道防線時，仍陷入「強力殺菌」的誤區。使用傳統漱口水時，那種辣得跳腳、刺痛乾澀的體感，常被誤認為「越辣越有效」。從生物科技與整體健康的觀點來看，這種做法無異於在口腔內進行「焦土戰爭」。現在，來自漢方智慧與現代生技結合的「湧健康靈芝漱口水」，正引領一場從「殺戮」轉向「修復與滋養」的革命，填補了長期被忽視的「居家照護空白」。
                </p>
              </section>

              <section>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 border-l-8 border-amber-500 pl-4">亮點一：口腔是「微生態系」，不是你死我活的戰場</h4>
                <p>
                  現代預防醫學強調的是「共生」而非「清空」。傳統含有酒精與化學殺菌劑的產品，就像噴灑強效除草劑，在消滅壞菌的同時，也摧毀了保護黏膜的益菌生態。「湧健康靈芝漱口水」核心理念在於溫和調理，堅持<strong>「0酒精、0西藥、0化學殺菌劑」</strong>。它並非無差別攻擊，而是透過精準抑制引發牙周病的關鍵元兇「牙齦卟啉單胞菌」（P. gingivalis），同時保留口腔應有的微生物平衡。「傳統漱口水讓口腔像是一片乾枯、龜裂的荒漠；而湧健康靈芝漱口水則是帶著養分的甘霖，旨在將口腔微生態修復成自然生態的森林。」這種「以養代殺」的策略，能避免傳統漱口水造成的黏膜乾燥與味覺失調，讓口腔找回自然的防禦力。
                </p>
              </section>

              <section>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 border-l-8 border-amber-500 pl-4">亮點二：牙科術後的「液態敷料」：生物科技帶來的深度修復</h4>
                <p>
                  為什麼這款產品能被牙醫師視為輔助治療與居家照護工具？關鍵在於它超越了清潔功能，具備「液態敷料」的修復價值。針對植牙、拔牙或牙周手術後的敏感時期，患者往往因傷口疼痛而無法正常刷牙，此時若使用含酒精的漱口水更是二次傷害。本產品利用<strong>「黏膜吸收技術」</strong>，讓有機鹿角靈芝中的多醣體與三萜類轉化為小分子。這項技術的優勢在於能繞過全身代謝的延遲，直接穿透黏膜屏障作用於患處，快速舒緩發炎紅腫。這份修復實力並非空談，而是有強大的科學背書：
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-4 bg-amber-50 p-6 rounded-xl">
                  <li><strong>權威臨床支持：</strong> 與「竹北光明牙醫」合作進行 IRB 人體臨床實驗，證實能顯著改善牙齦出血與紅腫，加速組織恢復健康狀態。</li>
                  <li><strong>高效抗菌實證：</strong> 經 SGS 檢驗，對牙齦卟啉單胞菌的抗菌率高達 <strong>99.97%</strong>。</li>
                  <li><strong>全方位照護延伸：</strong> 這份修復力不僅限於牙齦。在感冒初期或疫情期間感到喉嚨不適時，透過含漱能協助修復咽喉黏膜，成為全家人的「健康急救小包」。</li>
                </ul>
              </section>

              <section>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 border-l-8 border-amber-500 pl-4">亮點三：顛覆習慣的「四字訣」：讓口腔吸收精華液</h4>
                <p>
                  要發揮這瓶生物科技萃取的最大價值，必須打破傳統「漱完即吐、吐完即漱口」的習慣。我們稱之為口腔的「精華液保養」，請遵循牙醫師建議的四步驟：
                </p>
                <ol className="list-decimal pl-8 space-y-4 mt-4 font-bold text-amber-900">
                  <li><span className="text-2xl">含 (Hold)：</span> 倒取約 10ml（300ml容量裝的半瓶蓋）。</li>
                  <li><span className="text-2xl">泡 (Soak)：</span> <strong>含在口中持續 2 分鐘</strong>。這是最重要的「生技視窗」，讓植物精華有充足時間進行滲透與黏膜吸收。</li>
                  <li><span className="text-2xl">吐 (Spit)：</span> 將漱口水吐出。</li>
                  <li><span className="text-2xl">留 (Retain)：</span> <strong>吐掉後「不需要」再用清水漱口</strong>。這個「留」的觀念至關重要。不清水沖洗，是為了讓靈芝、金銀花、綠茶、甘草等七種植萃精華留在黏膜表面，持續發揮如同液態保護膜的作用。</li>
                </ol>
              </section>

              <section>
                <h4 className="text-2xl font-bold text-amber-800 mb-4 border-l-8 border-amber-500 pl-4">亮點四：從洗手台開始，佈局一場高價值的健康投資</h4>
                <p>
                  我們常願意花大錢在術後的植牙與補綴，卻忽略了每日僅需兩分鐘的基礎防護。「湧健康靈芝漱口水」的高品質已獲得國際權威認可，榮獲 <strong>「2024年 Monde Selection 世界品質評鑑大賞金獎」</strong>。其成分天然安全，除了珍稀的有機鹿角靈芝，更融合了漢方智慧，對於孕婦、幼童及黏膜脆弱的化放療患者皆極為友善。在居家照護中加入這道程序，不僅是為了口氣清新，更是透過預防醫學降低未來面臨高額牙科治療的風險。這是一瓶放在洗手台上，全家人都能共享的健康護盾。
                </p>
              </section>

              <section className="bg-gray-100 p-8 rounded-2xl text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">結語：您的口腔保養，是在破壞還是在建設？</h4>
                <p className="italic text-gray-600">
                  口腔是全身健康的縮影。當我們一味追求潔淨、追求殺菌的快感時，是否曾停下來思考：我們的黏膜是否正在求救？真正的護理不應該是一場辛辣的化學戰爭，而是一場溫柔的滋養建設。湧健康靈芝漱口水的出現，提醒了我們口腔照護應回歸本質：尊重生態平衡，給予黏膜所需的修復力。下一次漱口時，請試著問自己：「我是在破壞平衡，還是在建設健康？」
                </p>
              </section>
              
              <div className="pt-8 text-center pb-12">
                <button 
                  onClick={() => setIsArticleOpen(false)}
                  className="bg-amber-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-amber-700 transition shadow-lg"
                >
                  回到產品介紹
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
             {/* LOGO 圖片: 對應您的檔名 湧健康LOGO.png */}
             <img 
               src="/湧健康LOGO.png" 
               alt="湧健康 Ogift" 
               className="h-12 w-auto object-contain"
             />
          </div>
          
          <div className="hidden md:flex gap-8 text-gray-600 font-bold text-xl items-center">
            <button 
              onClick={() => setIsArticleOpen(true)}
              className="flex items-center gap-2 text-amber-700 font-bold hover:bg-amber-50 px-4 py-2 rounded-lg transition border border-amber-200"
            >
              <BookOpen className="w-6 h-6" /> 口腔健康分享文
            </button>
            <a href="#problem" className="hover:text-amber-600 transition">誤區</a>
            <a href="#solution" className="hover:text-amber-600 transition">漫畫圖解</a>
            <a href="#steps" className="hover:text-amber-600 transition">四字訣</a>
          </div>

          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-lg text-2xl top-20 absolute w-full left-0 z-40">
            <button 
              onClick={() => { setIsArticleOpen(true); setIsMenuOpen(false); }}
              className="flex items-center gap-2 text-amber-700 font-bold text-left"
            >
              <BookOpen className="w-6 h-6" /> 閱讀：口腔健康分享文
            </button>
            <a href="#problem" onClick={() => setIsMenuOpen(false)}>誤區</a>
            <a href="#solution" onClick={() => setIsMenuOpen(false)}>漫畫圖解</a>
            <a href="#steps" onClick={() => setIsMenuOpen(false)}>使用教學</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-200/20 rounded-l-full blur-3xl transform translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            
            {/* --- 新增：手機版專屬 重點資訊快速入口 --- */}
            <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setIsArticleOpen(true)}
                className="flex items-center justify-center gap-2 bg-white text-amber-800 font-bold px-4 py-3 rounded-2xl border-2 border-amber-100 shadow-md active:scale-95 transition-transform"
              >
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span className="text-lg">分享文</span>
              </button>
              <a
                href="#solution"
                className="flex items-center justify-center gap-2 bg-white text-amber-800 font-bold px-4 py-3 rounded-2xl border-2 border-amber-100 shadow-md active:scale-95 transition-transform"
              >
                <ImageIcon className="w-5 h-5 text-amber-600" />
                <span className="text-lg">漫畫圖解</span>
              </a>
            </div>
            {/* -------------------------------------- */}

            <span className="inline-block bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-2xl font-bold tracking-wide border border-amber-200">
              全家人的口腔守門員
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              您的口腔保養，是在<span className="text-red-500">破壞</span><br />還是<span className="text-green-600">建設</span>？
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              告別焦土戰術！<b>湧健康靈芝漱口水</b>，以「液態敷料」修復技術，為您重建口腔的森林生態。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a 
                href="https://ogift.com.tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-700 transition shadow-lg flex items-center justify-center gap-3"
              >
                湧健康官網 <ChevronDown className="w-6 h-6 -rotate-90" />
              </a>
            </div>
          </div>
          
          <div className="relative">
             {/* 產品圖: 對應您的檔名 靈芝漱口水_01.png */}
            <div className="relative z-10 mx-auto w-72 h-auto md:w-96 aspect-[3/4] bg-white rounded-[2rem] shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition duration-500 flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/10 pointer-events-none"></div>
               <img 
                 src="/靈芝漱口水_01.png" 
                 alt="湧健康靈芝漱口水產品圖" 
                 className="object-contain w-full h-full p-6"
               />
               <div className="absolute bottom-6 bg-amber-600 text-white text-base px-4 py-2 rounded shadow font-bold">
                 2024 世界金獎
               </div>
            </div>
            {/* 裝飾背景圓圈 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Comic Section 1: Problem (誤區與後果 - 保持原樣作為引入) */}
      <section id="problem" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">別把口腔當戰場！</h2>
            <p className="text-2xl text-gray-500">傳統殺菌觀念，正在破壞您的第一道防線</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* 左邊：誤區 */}
            <div className="bg-red-50 rounded-[2rem] p-8 border-2 border-red-100 flex flex-col transform hover:-translate-y-2 transition duration-300 shadow-sm">
               <div className="bg-white rounded-3xl overflow-hidden shadow-md mb-8 aspect-[3/4] relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-xl font-bold">
                    {/* 對應您的檔名：01_健康的守門員_01.jpg (注意: 有"的") */}
                    <img src="/01_健康的守門員_01.jpg" className="w-full h-full object-cover" alt="誤區漫畫" />
                  </div>
               </div>
               <h3 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-3">
                 <AlertTriangle className="w-8 h-8" /> 傳統誤區
               </h3>
               <p className="text-xl text-gray-700 leading-relaxed flex-grow">
                 酒精殺菌像「強力除草劑」，消滅壞菌的同時，也摧毀了保護黏膜的益菌生態。長期使用導致黏膜乾燥、味覺失調。
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comic Section 2: Solution (變更為：漫畫圖解 4大亮點) */}
      <section id="solution" className="py-24 px-6 bg-amber-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              靈芝漱口水 <span className="text-amber-200">4大亮點</span> 圖解
            </h2>
            <p className="text-2xl text-amber-100">一次看懂為什麼全家都需要它</p>
          </div>

          {/* 迴圈生成 4 個亮點區塊 */}
          {/* gap-8 手機版間距小，md:gap-16 電腦版間距大 */}
          <div className="space-y-24 md:space-y-32">
            {highlights.map((item, index) => (
              <div key={item.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                
                {/* 圖片區塊 */}
                {/* 在手機版 (grid-cols-1) 預設為 DOM 順序：先圖後文，符合「上圖下文」需求 */}
                {/* 在電腦版 (md:grid-cols-2) 透過 md:col-start-2 來改變顯示位置 */}
                <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                   <div className="bg-white p-3 rounded-[2rem] shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition duration-500">
                     <div className="rounded-[1.5rem] overflow-hidden aspect-[3/4] relative bg-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                          <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                        </div>
                     </div>
                   </div>
                </div>
    
                {/* 文字區塊 */}
                <div className={`space-y-8 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-white font-bold ${item.color}`}>
                     {item.icon} {item.title}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                    {item.subtitle}
                  </h3>
                  <p className="text-xl text-amber-100 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
    
              </div>
            ))}
          </div>

        </div>
        
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 100 100">
                <circle cx="100" cy="0" r="50" fill="white" />
            </svg>
        </div>
      </section>

      {/* Section 4: How to use (四字訣 - 保持作為總結圖示) */}
      <section id="steps" className="py-24 px-6 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-lg">Method</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">專家建議保養步驟</h2>
            <p className="text-xl text-gray-600 mt-6">簡單四步驟，效果加倍</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`
                  bg-white p-8 rounded-3xl shadow-lg border-b-8 text-center cursor-pointer transition-all duration-300
                  ${activeStep === index ? 'border-amber-600 transform -translate-y-4' : 'border-gray-200 hover:border-amber-300'}
                `}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${activeStep === index ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400'}`}>
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-base text-gray-500 leading-tight font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section (結語) */}
      <section className="py-24 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="w-28 h-28 bg-amber-500 rounded-full mx-auto flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
             <Shield className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            從洗手台開始的<br/><span className="text-amber-400">高價值健康投資</span>
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed">
            榮獲 2024 Monde Selection 世界品質金獎。<br/>
            成分天然，孕婦、幼童及化放療患者皆適用。
          </p>
          
          <div className="bg-gray-800 p-8 rounded-3xl inline-block mt-8 mx-auto max-w-2xl relative overflow-hidden">
             {/* 結語漫畫背景 (可選) */}
             <div className="absolute inset-0 opacity-20">
                {/* 對應您的檔名：06_健康守門員_結語.jpg (注意: 無"的") */}
                <img src="/06_健康守門員_結語.jpg" className="w-full h-full object-cover" />
             </div>
             <p className="text-2xl italic text-amber-200 leading-relaxed relative z-10">
               「下一次漱口時，請試著問自己：<br/>我是在破壞平衡，還是在建設健康？」
             </p>
          </div>

          <div className="pt-8">
            <button className="bg-amber-600 text-white w-full md:w-auto px-16 py-6 rounded-full text-2xl font-bold hover:bg-amber-500 transition shadow-lg hover:shadow-amber-500/50 animate-pulse">
              為全家人建立口腔防護盾
            </button>
            <p className="mt-6 text-lg text-gray-500">
               *本產品已投保產品責任險，請安心使用
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
