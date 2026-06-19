/* ═══════════════════════════════════════
   GLOBAL DAILY — MAIN WEBSITE LOGIC
   WITH 3 LANGUAGE SUPPORT (Tamil/English/Sinhala)
   ═══════════════════════════════════════ */

/* ─── TRANSLATIONS ─── */
const TRANSLATIONS = {
    ta: {
        nav_home: "முகப்பு",
        nav_world: "உலகம்",
        nav_tech: "தொழில்நுட்பம்",
        nav_business: "வணிகம்",
        nav_science: "அறிவியல்",
        nav_sports: "விளையாட்டு",
        nav_health: "சுகாதாரம்",
        placeholder_search: "செய்திகளைத் தேடு...",
        latest_news: "சமீபத்திய செய்திகள்",
        load_more: "மேலும் கட்டுரைகள் ↓",
        trending: "🔥 பிரபலமானவை",
        categories: "📂 பிரிவுகள்",
        newsletter: "📬 தினசரி சுருக்கம்",
        newsletter_desc: "முக்கியமான செய்திகளை உங்கள் மின்னஞ்சலுக்கு அனுப்புங்கள்.",
        subscribe: "சந்தா சேர்",
        footer_desc: "உலகம் முழுவதும் சுயாதீன பத்திரிகையாளர். தினமும் மில்லியன் கணக்கான வாசகர்களால் நம்பப்படுகிறது.",
        footer_sections: "பிரிவுகள்",
        footer_company: "நிறுவனம்",
        about_us: "எங்களைப் பற்றி",
        careers: "வேலைவாய்ப்பு",
        ethics: "பொருளாதார ஒழுக்கம்",
        contact: "தொடர்பு",
        advertise: "விளம்பரம்",
        follow_us: "எங்களை பின்தொடர்",
        rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
        privacy: "தனியுரிமைக் கொள்கை",
        terms: "விதிமுறைகள்",
        all_stories: "அனைத்து கதைகள்",
        read_more: "மேலும் படிக்க",
        by_author: "எழுதியவர்",
        published_on: "வெளியிடப்பட்டது",
        breaking_news: "உடனடி செய்திகள்",
        ad_label: "விளம்பரம்",
        search_results: "தேடல் முடிவுகள்",
        no_results: "எந்த செய்தியும் கிடைக்கவில்லை",
        close: "மூடு",
        loading: "ஏற்றுகிறது..."
    },
    en: {
        nav_home: "Home",
        nav_world: "World",
        nav_tech: "Technology",
        nav_business: "Business",
        nav_science: "Science",
        nav_sports: "Sports",
        nav_health: "Health",
        placeholder_search: "Search news...",
        latest_news: "Latest News",
        load_more: "Load More Articles ↓",
        trending: "🔥 Trending",
        categories: "📂 Categories",
        newsletter: "📬 Daily Briefing",
        newsletter_desc: "Get the most important stories delivered to your inbox every morning.",
        subscribe: "Subscribe",
        footer_desc: "Independent journalism from around the world. Trusted by millions of readers daily.",
        footer_sections: "Sections",
        footer_company: "Company",
        about_us: "About Us",
        careers: "Careers",
        ethics: "Code of Ethics",
        contact: "Contact",
        advertise: "Advertise",
        follow_us: "Follow Us",
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        all_stories: "All Stories",
        read_more: "Read More",
        by_author: "By",
        published_on: "Published on",
        breaking_news: "Breaking News",
        ad_label: "Advertisement",
        search_results: "Search Results",
        no_results: "No articles found",
        close: "Close",
        loading: "Loading..."
    },
    si: {
        nav_home: "මුල් පිටුව",
        nav_world: "ලෝකය",
        nav_tech: "තාක්ෂණය",
        nav_business: "ව්‍යාපාර",
        nav_science: "විද්‍යාව",
        nav_sports: "ක්‍රීඩා",
        nav_health: "සෞඛ්‍යය",
        placeholder_search: "පුවත් සොයන්න...",
        latest_news: "නවතම පුවත්",
        load_more: "තවත් ලිපි ↓",
        trending: "🔥 ජනප්‍රියයි",
        categories: "📂 කාණ්ඩ",
        newsletter: "📬 දෛනික සාරාංශය",
        newsletter_desc: "වැදගත්ම කතා ඔබගේ ඊමේල් වෙත එවන්න.",
        subscribe: "දායක වන්න",
        footer_desc: "ලෝකය පුරා ස්වාධීන මාධ්‍යවේදය. දිනපතා මිලියන ගණනක් කියවනවා.",
        footer_sections: "කාණ්ඩ",
        footer_company: "සමාගම",
        about_us: "අපි ගැන",
        careers: "රැකියා",
        ethics: "ආචාර ධර්ම",
        contact: "සම්බන්ධතා",
        advertise: "ප්‍රචාරණය",
        follow_us: "අපව අනුගමනය කරන්න",
        rights: "සියලු හිමිකම් ඇවිරිණි",
        privacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
        terms: "සේවා කොන්දේසි",
        all_stories: "සියලුම කතා",
        read_more: "තවත් කියවන්න",
        by_author: "ලිපිගත කළේ",
        published_on: "ප්‍රකාශित දිනය",
        breaking_news: "අලුත්ම පුවත්",
        ad_label: "දැන්වීම",
        search_results: "සෙවුම් ප්‍රතිඵල",
        no_results: "ලිපි හමු නොවීය",
        close: "වසන්න",
        loading: "පූරණය වෙමින්..."
    }
};

/* ─── CURRENT LANGUAGE ─── */
let currentLang = localStorage.getItem('gd_language') || 'ta';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gd_language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (TRANSLATIONS[lang][key]) {
            if (el.tagName === 'INPUT' && el.placeholder) {
                el.placeholder = TRANSLATIONS[lang][key];
            } else {
                // Preserve emoji prefixes
                const text = el.textContent;
                const emojiMatch = text.match(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]\s*/u);
                const emoji = emojiMatch ? emojiMatch[0] : '';
                el.textContent = emoji + TRANSLATIONS[lang][key];
            }
        }
    });
    
    // Re-render dynamic content
    renderFeed();
    renderCategories();
    renderTrending();
    renderAds();
}

/* ─── DEFAULT DATA ─── */
const DEFAULT_NEWS = [
    {
        id: 1718764800001,
        title: "உலக சந்தைகள் புதிய உச்சத்தை எட்டின",
        title_en: "Global Markets Rally as Inflation Data Shows Unexpected Cooling",
        title_si: "ලෝක වෙළඳපොළවල් උත්සාහයෙන් ඉහළට",
        excerpt: "பணவீக்க தரவுகள் எதிர்பாராத குளிர்ச்சியைக் காட்டுவதால் முக்கிய குறியீடுகள் புதிய உச்சங்களை எட்டின.",
        excerpt_en: "Major indices hit record highs Thursday as consumer price reports suggest the worst of the economic squeeze may be over.",
        excerpt_si: "පාරිභෝගික මිල වාර්තා පෙන්වා දෙන විට ප්‍රධාන දර්ශකයන් වාර්තාගත ඉහළ මට්ටම්වලට ළඟා විය.",
        content: "<p>பணவீக்க தரவுகள் எதிர்பாராத குளிர்ச்சியைக் காட்டுவதால் முக்கிய குறியீடுகள் புதிய உச்சங்களை எட்டின. Goldman Sachs ஆன்லிஸ்டுகள் Q3 க்கு தங்கள் கணிப்பை மேம்படுத்தினர்.</p>",
        content_en: "<p>Major indices hit record highs Thursday as consumer price reports suggest the worst of the economic squeeze may be over. Analysts at Goldman Sachs upgraded their outlook for Q3.</p>",
        content_si: "<p>පාරිභෝගික මිල වාර්තා පෙන්වා දෙන විට ප්‍රධාන දර්ශකයන් වාර්තාගත ඉහළ මට්ටම්වලට ළඟා විය. Goldman Sachs විශ්ලේෂකයන් Q3 සඳහා ඔවුන්ගේ දෘෂ්ටිවාදය උත්ශ්‍රේණි කළහ.</p>",
        category: "வணிகம்",
        category_en: "Business",
        category_si: "ව්‍යාපාර",
        author: "எலினா ரோஸ்டோவா",
        author_en: "Elena Rostova",
        author_si: "එලීනා රෝස්ටෝවා",
        date: new Date(Date.now() - 3600000 * 2).toISOString(),
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800&auto=format&fit=crop",
        video: "",
        featured: true,
        trending: true,
        status: "published"
    },
    {
        id: 1718764800002,
        title: "SpaceX அடுத்த தலைமுறை செயற்கைக்கோள்களை வெற்றிகரமாக ஏவியது",
        title_en: "SpaceX Launches Next-Gen Satellite Constellation",
        title_si: "SpaceX ඊළඟ පරම්පරා චන්ද්‍රිකා යැවීම",
        excerpt: "Falcon Heavy 24 முன்னணி தகவல்தொடர்பு செயற்கைக்கோள்களை சுற்றுப்பாதையில் ஏவியது.",
        excerpt_en: "The Falcon Heavy carried 24 advanced communications satellites into orbit, promising global high-speed internet coverage.",
        excerpt_si: "Falcon Heavy චන්ද්‍රිකා 24ක් කක්ෂයට රැගෙන ගියේය.",
        content: "<p>Falcon Heavy 24 முன்னணி தகவல்தொடர்பு செயற்கைக்கோள்களை சுற்றுப்பாதையில் ஏவியது. இந்த செயற்கைக்கோள்கள் லேசர் இணைப்புகளைக் கொண்டுள்ளன.</p>",
        content_en: "<p>The Falcon Heavy carried 24 advanced communications satellites into orbit. Each satellite is equipped with laser interlinks that allow data to travel at the speed of light.</p>",
        content_si: "<p>Falcon Heavy චන්ද්‍රිකා 24ක් කක්ෂයට රැගෙන ගියේය. එක් එක් චන්ද්‍රිකාව ලේසර් අන්තර්සම්බන්ධතා සහිතව සම්පූර්ණ කර ඇත.</p>",
        category: "அறிவியல்",
        category_en: "Science",
        category_si: "විද්‍යාව",
        author: "ஜேம்ஸ் சென்",
        author_en: "James Chen",
        author_si: "ජේම්ස් චෙන්",
        date: new Date(Date.now() - 3600000 * 5).toISOString(),
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&auto=format&fit=crop",
        video: "",
        featured: true,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800003,
        title: "AI பாதுகாப்பு ஒப்பந்தம் கையெழுத்தானது",
        title_en: "AI Safety Pact Signed by Leading Tech Giants",
        title_si: "AI ආරක්ෂක ගිවිසුම අත්සන් කර ඇත",
        excerpt: "Microsoft, Google, OpenAI புதிய வெளிப்படைத்தன்மை தரநிலைகளுக்கு ஒப்புக்கொண்டன.",
        excerpt_en: "Microsoft, Google, and OpenAI agree to new transparency standards and third-party auditing for large language models.",
        excerpt_si: "Microsoft, Google, OpenAI නව පාරදෘශ්‍යතා සම්මතවලට එකඟ විය.",
        content: "<p>Microsoft, Google, OpenAI புதிய வெளிப்படைத்தன்மை தரநிலைகளுக்கு ஒப்புக்கொண்டன. இந்த தன்னார்வ ஒப்பந்தம் AI உருவாக்கப்பட்ட உள்ளடக்கத்திற்கு வாட்டர்மார்க்கிங்கை அமைக்கிறது.</p>",
        content_en: "<p>Microsoft, Google, and OpenAI agree to new transparency standards. The voluntary pact sets benchmarks for watermarking AI-generated content.</p>",
        content_si: "<p>Microsoft, Google, OpenAI නව පාරදෘශ්‍යතා සම්මතවලට එකඟ විය. මෙම ස්වෙච්ඡා ගිවිසුම AI-ජනිත අන්තර්ගතයට වාටර්මාර්ක කිරීම සඳහා මානදණ්ඩ සකසයි.</p>",
        category: "தொழில்நுட்பம்",
        category_en: "Technology",
        category_si: "තාක්ෂණය",
        author: "சாரா மில்லர்",
        author_en: "Sarah Miller",
        author_si: "සාරා මිලර්",
        date: new Date(Date.now() - 3600000 * 8).toISOString(),
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: true,
        status: "published"
    },
    {
        id: 1718764800004,
        title: "UN உச்சிமாநாட்டில் வரலாற்று சுற்றுச்சூழல் ஒப்பந்தம்",
        title_en: "Historic Climate Agreement Reached at UN Summit",
        title_si: "UN සමුළුවේදී ඓතිහාසික දේශගුණ ගිවිසුමක්",
        excerpt: "நாடுகள் 2030க்கான கட்டாய கார்பன் குறைப்பு இலக்குகளை ஏற்றுக்கொண்டன.",
        excerpt_en: "Nations commit to binding carbon reduction targets for 2030, with a new fund for developing nations.",
        excerpt_si: "රටවල් 2030 සඳහා බැඳීම් කාබන් අඩුකිරීමේ ඉලක්කවලට කැපවී ඇත.",
        content: "<p>நாடுகள் 2030க்கான கட்டாய கார்பன் குறைப்பு இலக்குகளை ஏற்றுக்கொண்டன. $100 பில்லியன் ஆண்டு காலநிலை நிதி தொகுப்பு வளரும் நாடுகளுக்கு ஆதரவளிக்கும்.</p>",
        content_en: "<p>Nations commit to binding carbon reduction targets for 2030. The $100 billion annual climate finance package will support renewable energy transitions in developing nations.</p>",
        content_si: "<p>රටවල් 2030 සඳහා බැඳීම් කාබන් අඩුකිරීමේ ඉලක්කවලට කැපවී ඇත. බිලියන 100ක වාර්ෂික දේශගුණ මූල්‍ය පැකේජය සංවර්ධනය වෙමින් පවතින රටවලට සහාය වේ.</p>",
        category: "உலகம்",
        category_en: "World",
        category_si: "ලෝකය",
        author: "டேவிட் ஓகோன்க்வோ",
        author_en: "David Okonkwo",
        author_si: "ඩේවිඩ් ඔකොන්ක්වෝ",
        date: new Date(Date.now() - 3600000 * 12).toISOString(),
        image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: true,
        status: "published"
    },
    {
        id: 1718764800005,
        title: "புரட்சிகரமான பேட்டரி தொழில்நுட்பம் EV வரம்பை மடங்காக்குகிறது",
        title_en: "Revolutionary Battery Tech Triples EV Range",
        title_si: "විප්ලවීය බැටරි තාක්ෂණය EV පරාසය තෙගුණු කරයි",
        excerpt: "MIT ஆராய்ச்சியாளர்கள் EV பயமின்மையை நீக்கும் திண்மநிலை பேட்டரி முன்மாதிரியை அறிமுகப்படுத்தினர்.",
        excerpt_en: "Researchers at MIT unveil a solid-state battery prototype that could eliminate range anxiety for electric vehicles.",
        excerpt_si: "MIT පර්යේෂකයන් විද्युත් වාහනවලට පරාස ආතතිය ඉවත් කළ හැකි ඝන තත්ත්ව බැටරි මුල් ආදර්ශයක් හෙළිදරව් කළහ.",
        content: "<p>MIT ஆராய்ச்சியாளர்கள் EV பயமின்மையை நீக்கும் திண்மநிலை பேட்டரி முன்மாதிரியை அறிமுகப்படுத்தினர். இது 1,200 Wh/L ஆற்றல் அடர்த்தியை அடைகிறது.</p>",
        content_en: "<p>Researchers at MIT unveil a solid-state battery prototype. The lithium-metal design achieves 1,200 Wh/L energy density, roughly three times that of current Tesla batteries.</p>",
        content_si: "<p>MIT පර්යේෂකයන් ඝන තත්ත්ව බැටරි මුල් ආදර්ශයක් හෙළිදරව් කළහ. ලිතියම්-ලෝහ නිර්මාණය 1,200 Wh/L බලශක්ති ඝනත්වයට ළඟා වේ.</p>",
        category: "தொழில்நுட்பம்",
        category_en: "Technology",
        category_si: "තාක්ෂණය",
        author: "பிரியா படேல்",
        author_en: "Priya Patel",
        author_si: "ප්‍රියා පටෙල්",
        date: new Date(Date.now() - 3600000 * 14).toISOString(),
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800006,
        title: "ஒலிம்பிக் 2026: நிலையான மைதானங்கள் அறிமுகம்",
        title_en: "Olympics 2026: Sustainable Stadiums Unveiled",
        title_si: "ඔලිම්පික් 2026: තිරසාර ක්‍රීඩාංගණ හෙළිදරව් විය",
        excerpt: "மிலான்-கோர்டினா குழு முழுக்க முழுக்க புதுப்பிக்கத்தக்க ஆற்றல் மூலங்களால் இயக்கப்படும் பூஜ்ஜிய உமிழ்வு மைதானங்களை வெளியிட்டது.",
        excerpt_en: "The Milan-Cortina committee reveals zero-emission venues powered entirely by renewable energy sources.",
        excerpt_si: "මිලානෝ-කෝර්ටිනා කමිටුව සම්පූර්ණයෙන්ම පුනර්ජන්‍ය බලශක්ති මූලාශ්‍ර මගින් බලගැන්වූ බුද්ධිමත් විමෝචන ශාලා හෙළිදරව් කරයි.",
        content: "<p>மிலான்-கோர்டினா குழு முழுக்க முழுக்க புதுப்பிக்கத்தக்க ஆற்றல் மூலங்களால் இயக்கப்படும் பூஜ்ஜிய உமிழ்வு மைதானங்களை வெளியிட்டது. ஒலிம்பிக் கிராமம் விளையாட்டுக்குப் பிறகு மலிவு வீடுகளாக மாற்றப்படும்.</p>",
        content_en: "<p>The Milan-Cortina committee reveals zero-emission venues powered entirely by renewable energy sources. The Olympic Village will be converted into affordable housing after the Games.</p>",
        content_si: "<p>මිලානෝ-කෝර්ටිනා කමිටුව පුනර්ජන්‍ය බලශක්ති මූලාශ්‍ර මගින් බලගැන්වූ බුද්ධිමත් විමෝචන ශාලා හෙළිදරව් කරයි. ඔලිම්පික් ගම්මිරිස් ක්‍රීඩාවෙන් පසු මිලට ගත හැකි නවාතැන් බවට පරිවර්තනය කරනු ලැබේ.</p>",
        category: "விளையாட்டு",
        category_en: "Sports",
        category_si: "ක්‍රීඩා",
        author: "மார்க்கோ ரோஸி",
        author_en: "Marco Rossi",
        author_si: "මාර්කෝ රොසි",
        date: new Date(Date.now() - 3600000 * 18).toISOString(),
        image: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: true,
        status: "published"
    },
    {
        id: 1718764800007,
        title: "புதிய மலேரியா தடுப்பூசி 90% பயன்திறனைக் காட்டுகிறது",
        title_en: "New Malaria Vaccine Shows 90% Efficacy in Trials",
        title_si: "නව මැලේරියා එන්නත් සාම්පලවලදී 90% ක්‍රියාකාරිත්වය පෙන්වයි",
        excerpt: "WHO கட்டம் III சோதனை முடிவுகளை ஒட்டுண்ணி நோய்க்கு எதிரான போராட்டத்தில் திருப்புமுனையாக பாராட்டியது.",
        excerpt_en: "The WHO hails the Phase III trial results as a potential turning point in the fight against mosquito-borne disease.",
        excerpt_si: "WHO මදුරුවන් මගින් spreading රෝගයට එරෙහි සටනේ හැරවුම් ලක්ෂ්‍යයක් ලෙස අදියර III සාම්පල ප්‍රතිඵල ප්‍රශංසා කළේය.",
        content: "<p>WHO கட்டம் III சோதனை முடிவுகளை ஒட்டுண்ணி நோய்க்கு எதிரான போராட்டத்தில் திருப்புமுனையாக பாராட்டியது. R21/Matrix-M தடுப்பூசி 90% பாதுகாப்பை வழங்கியது.</p>",
        content_en: "<p>The WHO hails the Phase III trial results. The R21/Matrix-M vaccine demonstrated 90% protection in children aged 5–36 months across four African countries.</p>",
        content_si: "<p>WHO අදියර III සාම්පල ප්‍රතිඵල ප්‍රශංසා කළේය. R21/Matrix-M එන්නත අප්‍රිකානු රටවල් හතරක 5-36 මාස වයසේ දරුවන්ට 90% ආරක්ෂාව සපයන ලදී.</p>",
        category: "அறிவியல்",
        category_en: "Science",
        category_si: "විද්‍යාව",
        author: "அமரா ஓகாஃபோர்",
        author_en: "Amara Okafor",
        author_si: "අමාරා ඔකාෆෝර්",
        date: new Date(Date.now() - 3600000 * 22).toISOString(),
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800008,
        title: "மத்திய வங்கிகள் டிஜிட்டல் நாணய கட்டமைப்பை ஒருங்கிணைக்கின்றன",
        title_en: "Central Banks Coordinate on Digital Currency Framework",
        title_si: "මධ්‍යම බැංකු ඩිජිටල් මුදල් රාමුව එකට සකසති",
        excerpt: "BIS குறுக்கு-எல்லை CBDC பரிவர்த்தனைகளுக்கு ஒருங்கிணைந்த நெறிமுறையை அறிவித்தது.",
        excerpt_en: "The BIS announces a unified protocol for cross-border CBDC transactions to reduce remittance costs.",
        excerpt_si: "BIS මායිම් තරණ CBDC ගනුදෙනු සඳහා ඒකීය ප්‍රොටෝකෝලයක් නිවේදනය කළේය.",
        content: "<p>BIS குறுக்கு-எல்லை CBDC பரிவர்த்தனைகளுக்கு ஒருங்கிணைந்த நெறிமுறையை அறிவித்தது. Project Unified Ledger வைப்பில்லா பணம் அனுப்புவதற்கான கட்டணங்களை 80% வரை குறைக்கும்.</p>",
        content_en: "<p>The BIS announces a unified protocol for cross-border CBDC transactions. Project Unified Ledger will allow instant settlement between central bank digital currencies, cutting transfer fees by up to 80%.</p>",
        content_si: "<p>BIS මායිම් තරණ CBDC ගනුදෙනු සඳහා ඒකීය ප්‍රොටෝකෝලයක් නිවේදනය කළේය. Project Unified Ledger මධ්‍යම බැංකු ඩිජිටල් මුදල් අතර ක්ෂණික සettlement පහසු කරයි.</p>",
        category: "வணிகம்",
        category_en: "Business",
        category_si: "ව්‍යාපාර",
        author: "தாமஸ் வெபர்",
        author_en: "Thomas Weber",
        author_si: "තෝමස් වෙබර්",
        date: new Date(Date.now() - 3600000 * 26).toISOString(),
        image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800009,
        title: "கடலடி தொல்லியலாளர்கள் பழங்கால கப்பலைக் கண்டுபிடித்தனர்",
        title_en: "Underwater Archaeologists Discover Ancient Shipwreck",
        title_si: "දිය යට පුරාවිද්‍යාඥයන් පුරාණ නැව් අනතුරක් සොයාගෙන ඇත",
        excerpt: "கிரீஸ் கடலோரத்தில் கண்டுபிடிக்கப்பட்ட 2,000 வயது ரோமானிய வணிக கப்பல் சிறப்பாக பாதுகாக்கப்பட்ட பானைகளைக் கொண்டுள்ளது.",
        excerpt_en: "A 2,000-year-old Roman trading vessel found off the coast of Greece contains perfectly preserved amphorae.",
        excerpt_si: "ග්‍රීසියේ වෙරළබඩින් සොයාගත් වසර 2000ක් පැරණි රෝමානු වෙළඳ නැව සම්පූර්ණයෙන්ම සුරැකුණු ඇම්ෆෝරා ඇතුළත් වේ.",
        content: "<p>கிரீஸ் கடலோரத்தில் கண்டுபிடிக்கப்பட்ட 2,000 வயது ரோமானிய வணிக கப்பல் சிறப்பாக பாதுகாக்கப்பட்ட பானைகளைக் கொண்டுள்ளது. இந்த கப்பல் கிரேத்தாவின் மது, ஸ்பெயினின் ஒலிவ எண்ணெய், சிரியாவின் கண்ணாடி பொருட்களை ஏற்றிச் சென்றது.</p>",
        content_en: "<p>A 2,000-year-old Roman trading vessel found off the coast of Greece contains perfectly preserved amphorae. The cargo included wine from Crete, olive oil from Spain, and glassware from Syria.</p>",
        content_si: "<p>ග්‍රීසියේ වෙරළබඩින් සොයාගත් වසර 2000ක් පැරණි රෝමානු වෙළඳ නැව සම්පූර්ණයෙන්ම සුරැකුණු ඇම්ෆෝරා ඇතුළත් වේ. බඩු තොගයට ක්‍රීට් වල මුද්‍රිත පානය, ස්පාඤ්ඤයේ ඔලිව් තෙල් සහ සිරියාවේ වීදුරු භාණ්ඩ ඇතුළත් විය.</p>",
        category: "உலகம்",
        category_en: "World",
        category_si: "ලෝකය",
        author: "சோஃபியா அந்தோனெல்லி",
        author_en: "Sophia Antonelli",
        author_si: "සොෆියා ඇන්ටොනෙල්ලි",
        date: new Date(Date.now() - 3600000 * 30).toISOString(),
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800010,
        title: "F1 2026 இயந்திர விதிமுறைகளை அறிவித்தது",
        title_en: "Formula 1 Announces 2026 Engine Regulations",
        title_si: "ෆෝමියුලා 1 2026 එන්ජින් නියමයන් නිවේදනය කරයි",
        excerpt: "FIA 100% நிலையான எரிபொருட்களுக்கு மாறுவதையும்

              excerpt: "FIA 100% நிலையான எரிபொருட்களுக்கு மாறுவதையும் அதிகரிக்கப்பட்ட மின்சார சக்தி வெளியீட்டையும் உறுதி செய்தது.",
        excerpt_en: "The FIA confirms a move to 100% sustainable fuels and increased electrical power output for next-gen power units.",
        excerpt_si: "FIA ඊළඟ පරම්පරා බල ඒකක සඳහා 100% තිරසාර ඉන්ධන වෙත සහ වැඩි වැඩියෙන් විදුලි බල නිපදවීම වෙත යාම තහවුරු කළේය.",
        content: "<p>FIA 100% நிலையான எரிபொருட்களுக்கு மாறுவதையும் அதிகரிக்கப்பட்ட மின்சார சக்தி வெளியீட்டையும் உறுதி செய்தது. 2026 விதிமுறைகள் உள்எரிப்பு மற்றும் மின்சார சக்திக்கு இடையே 50/50 பிரிவை கட்டாயமாக்கும்.</p>",
        content_en: "<p>The FIA confirms a move to 100% sustainable fuels and increased electrical power output. The 2026 regulations will mandate a 50/50 split between internal combustion and electric power.</p>",
        content_si: "<p>FIA 100% තිරසාර ඉන්ධන වෙත සහ වැඩි විදුලි බල නිපදවීම වෙත යාම තහවුරු කළේය. 2026 නියමයන් අභ්‍යන්තර දහනය සහ විදුලි බලය අතර 50/50 බෙදීම නියෝග කරයි.</p>",
        category: "விளையாட்டு",
        category_en: "Sports",
        category_si: "ක්‍රීඩා",
        author: "லூயிஸ் ஹாமில்டன்",
        author_en: "Lewis Hamilton",
        author_si: "ලුවිස් හැමිල්ටන්",
        date: new Date(Date.now() - 3600000 * 34).toISOString(),
        image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: true,
        status: "published"
    },
    {
        id: 1718764800011,
        title: "குவாண்டம் கணினி நிமிடங்களில் சிக்கலை தீர்த்தது",
        title_en: "Quantum Computer Solves Problem in Minutes",
        title_si: "ක්වාන්ටම් පරිගණකය මිනිත්තුවලින් ගැටලුව විසඳයි",
        excerpt: "Google இன் சமீபத்திய Sycamore ப்ராசசர் பாரம்பரிய சூப்பர்கணினிகளுக்கு ஆயிரக்கணக்கான ஆண்டுகள் ஆகும் கணக்கீட்டை செய்தது.",
        excerpt_en: "Google's latest Sycamore processor performed a calculation that would take classical supercomputers millennia.",
        excerpt_si: "Google නවතම Sycamore ප්‍රොසෙසරය ක්ලැසිකල් සුපිරි පරිගණකවලට සහස්‍ර ගණනක් ගත වන ගණනයක් සිදු කළේය.",
        content: "<p>Google இன் சமீபத்திய Sycamore ப்ராசசர் பாரம்பரிய சூப்பர்கணினிகளுக்கு ஆயிரக்கணக்கான ஆண்டுகள் ஆகும் கணக்கீட்டை செய்தது. 1,000 தர்க்கரீதியான க்யூபிட்களைக் கொண்ட பிழை திருத்தப்பட்ட குவாண்டம் சிப் மருந்து கண்டுபிடிப்புக்கு தொடர்புடைய சிக்கலான மூலக்கூறு இடைவினையை உருவாக்கியது.</p>",
        content_en: "<p>Google's latest Sycamore processor performed a calculation that would take classical supercomputers millennia. The error-corrected quantum chip with 1,000 logical qubits simulated a complex molecular interaction relevant to drug discovery.</p>",
        content_si: "<p>Google නවතම Sycamore ප්‍රොසෙසරය ක්ලැසිකල් සුපිරි පරිගණකවලට සහස්‍ර ගණනක් ගත වන ගණනයක් සිදු කළේය. දෝෂ නිවැරදි කළ ක්වාන්ටම් චිපය ඖෂධ සොයාගැනීමට අදාළ සංකීර්ණ අණුක අන්තර්ක්‍රියාව අනුකරණය කළේය.</p>",
        category: "தொழில்நுட்பம்",
        category_en: "Technology",
        category_si: "තාක්ෂණය",
        author: "யுகி தனகா",
        author_en: "Yuki Tanaka",
        author_si: "යුකි තනකා",
        date: new Date(Date.now() - 3600000 * 40).toISOString(),
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    },
    {
        id: 1718764800012,
        title: "உலக காபி சப்ளை சங்கிலி இடையீட்டை எதிர்கொள்கிறது",
        title_en: "Global Coffee Supply Chain Faces Disruption",
        title_si: "ලෝක කෝපි සැපයුම් දාමය බාධාවකට මුහුණ දෙයි",
        excerpt: "பிரேசில் மற்றும் வியட்நாமில் வறட்சி Q3 வரை மொத்த பீன் விலைகளை தசாப்த உச்சத்திற்கு தள்ளும் அச்சுறுத்தலை ஏற்படுத்துகிறது.",
        excerpt_en: "Droughts in Brazil and Vietnam threaten to push wholesale bean prices to decade highs by Q3.",
        excerpt_si: "බ්‍රසීලයේ සහ වියට්නාමයේ නියඟ Q3 වන විට සමස්ත බෝග මිල දශකයක ඉහළ මට්ටම්වලට තල්ලු කිරීමට තර්ජනය කරයි.",
        content: "<p>பிரேசில் மற்றும் வியட்நாமில் வறட்சி Q3 வரை மொத்த பீன் விலைகளை தசாப்த உச்சத்திற்கு தள்ளும் அச்சுறுத்தலை ஏற்படுத்துகிறது. அராபிகா எதிர்காலங்கள் ஜனவரி முதல் 34% அதிகரித்துள்ளன.</p>",
        content_en: "<p>Droughts in Brazil and Vietnam threaten to push wholesale bean prices to decade highs by Q3. Arabica futures have already risen 34% since January, with roasters warning of $8 lattes by autumn.</p>",
        content_si: "<p>බ්‍රසීලයේ සහ වියට්නාමයේ නියඟ Q3 වන විට සමස්ත බෝග මිල දශකයක ඉහළ මට්ටම්වලට තල්ලු කිරීමට තර්ජනය කරයි. අරාබිකා futures ජනවාරියේ සිට 34% කින් ඉහළ ගොස් ඇත.</p>",
        category: "வணிகம்",
        category_en: "Business",
        category_si: "ව්‍යාපාර",
        author: "கார்லோஸ் மெண்டஸ்",
        author_en: "Carlos Mendez",
        author_si: "කාලෝස් මෙන්ඩෙස්",
        date: new Date(Date.now() - 3600000 * 48).toISOString(),
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&auto=format&fit=crop",
        video: "",
        featured: false,
        trending: false,
        status: "published"
    }
];

const DEFAULT_ADS = [
    {
        id: 1718764800101,
        title: "Premium Hosting Deal",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        link: "https://example.com/hosting",
        position: "header",
        active: true
    },
    {
        id: 1718764800102,
        title: "Tech Gadgets Sale",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&auto=format&fit=crop",
        link: "https://example.com/gadgets",
        position: "sidebar",
        active: true
    },
    {
        id: 1718764800103,
        title: "Online Courses",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
        link: "https://example.com/courses",
        position: "inline",
        active: true
    }
];

const DEFAULT_CATEGORIES = [
    { ta: "உலகம்", en: "World", si: "ලෝකය" },
    { ta: "தொழில்நுட்பம்", en: "Technology", si: "තාක්ෂණය" },
    { ta: "வணிகம்", en: "Business", si: "ව්‍යාපාර" },
    { ta: "அறிவியல்", en: "Science", si: "විද්‍යාව" },
    { ta: "விளையாட்டு", en: "Sports", si: "ක්‍රීඩා" }
];

/* ─── LOCALSTORAGE HELPERS ─── */
const DB = {
    get(key, fallback) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : fallback;
        } catch { return fallback; }
    },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

const KEYS = {
    NEWS: 'gd_news',
    ADS: 'gd_ads',
    CATS: 'gd_categories',
    LANG: 'gd_language'
};

function initData() {
    if (!localStorage.getItem(KEYS.NEWS)) DB.set(KEYS.NEWS, DEFAULT_NEWS);
    if (!localStorage.getItem(KEYS.ADS)) DB.set(KEYS.ADS, DEFAULT_ADS);
    if (!localStorage.getItem(KEYS.CATS)) DB.set(KEYS.CATS, DEFAULT_CATEGORIES);
}

function getNews() { return DB.get(KEYS.NEWS, []); }
function getAds() { return DB.get(KEYS.ADS, []); }
function getCategories() { return DB.get(KEYS.CATS, []); }

/* ─── LANGUAGE HELPERS ─── */
function getField(item, field) {
    const langField = `${field}_${currentLang}`;
    return item[langField] || item[field] || item[`${field}_ta`] || item[`${field}_en`] || '';
}

function getCategoryName(catObj) {
    if (typeof catObj === 'string') return catObj;
    return catObj[currentLang] || catObj.ta || catObj.en || '';
}

function findCategoryKey(catName) {
    const cats = getCategories();
    for (const cat of cats) {
        if (cat.ta === catName || cat.en === catName || cat.si === catName) {
            return cat;
        }
    }
    return null;
}

/* ─── UTILITIES ─── */
const timeAgo = (dateStr) => {
    const seconds = Math.floor((new Date() - new Date(dateStr)) / 1000);
    const intervals = { year: 31536000, month: 2592000, week: 604800, day: 86400, hour: 3600, minute: 60 };
    for (const [unit, secs] of Object.entries(intervals)) {
        const count = Math.floor(seconds / secs);
        if (count > 0) {
            if (currentLang === 'ta') {
                const taUnits = { year: 'வருடம்', month: 'மாதம்', week: 'வாரம்', day: 'நாள்', hour: 'மணி', minute: 'நிமிடம்' };
                return `${count} ${taUnits[unit]}${count > 1 ? 'கள்' : ''} முன்பு`;
            } else if (currentLang === 'si') {
                const siUnits = { year: 'වසර', month: 'මාසය', week: 'සතිය', day: 'දිනය', hour: 'පැය', minute: 'මිනිත්තුව' };
                return `${count} ${siUnits[unit]}${count > 1 ? 'කට' : 'කට'} පෙර`;
            }
            return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
        }
    }
    return currentLang === 'ta' ? 'இப்போதுதான்' : currentLang === 'si' ? 'දැන්ම' : 'Just now';
};

const formatDate = (date) => {
    const d = new Date(date);
    if (currentLang === 'ta') {
        return d.toLocaleDateString('ta-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    } else if (currentLang === 'si') {
        return d.toLocaleDateString('si-LK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

/* ─── STATE ─── */
let currentCategory = 'All';
let searchQuery = '';
let visibleCount = 6;

/* ─── RENDER: ADS ─── */
function renderAds() {
    const ads = getAds().filter(a => a.active);
    const header = ads.find(a => a.position === 'header');
    const sidebar = ads.find(a => a.position === 'sidebar');
    const inline = ads.find(a => a.position === 'inline');

    const renderAd = (ad, containerId) => {
        const el = document.getElementById(containerId);
        if (!el) return;
        if (ad) {
            el.innerHTML = `<div class="ad-label">${TRANSLATIONS[currentLang].ad_label}</div><a href="${ad.link}" target="_blank"><img src="${ad.image}" alt="${ad.title}" style="width:100%;height:auto;"></a>`;
            el.style.display = 'block';
        } else {
            el.innerHTML = '';
            el.style.display = 'none';
        }
    };

    renderAd(header, 'header-ad-container');
    renderAd(sidebar, 'sidebar-ad-container');
    renderAd(inline, 'inline-ad-container');
}

/* ─── RENDER: HERO ─── */
function renderHero() {
    const news = getNews().filter(n => n.status === 'published');
    const featured = news.filter(n => n.featured).slice(0, 3);
    if (featured.length === 0) {
        document.getElementById('hero-section').innerHTML = '';
        return;
    }
    const [main, ...side] = featured;

    document.getElementById('hero-section').innerHTML = `
        <article class="hero-main" onclick="openArticle(${main.id})">
            <img src="${main.image}" alt="${getField(main, 'title')}" loading="eager">
            <div class="overlay"></div>
            <div class="hero-content">
                <span class="category">${getField(main, 'category')}</span>
                <h2>${getField(main, 'title')}</h2>
                <p>${getField(main, 'excerpt')}</p>
                <div style="margin-top:1rem; font-size:0.85rem; opacity:0.8;">
                    ${getField(main, 'author')} • ${timeAgo(main.date)}
                </div>
            </div>
        </article>
        <div class="hero-side">
            ${side.map(item => `
                <article class="hero-card" onclick="openArticle(${item.id})">
                    <img src="${item.image}" alt="${getField(item, 'title')}" loading="lazy">
                    <div class="card-body">
                        <div class="category">${getField(item, 'category')}</div>
                        <h3>${getField(item, 'title')}</h3>
                        <div style="margin-top:auto; padding-top:0.75rem; font-size:0.8rem; color:var(--text-muted);">
                            ${timeAgo(item.date)}
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>
    `;
}

/* ─── RENDER: NEWS FEED ─── */
function renderFeed() {
    const allNews = getNews().filter(n => n.status === 'published');
    let filtered = allNews.filter(n => {
        const catName = getField(n, 'category');
        const matchCat = currentCategory === 'All' || catName === currentCategory;
        const matchSearch = !searchQuery ||
            getField(n, 'title').toLowerCase().includes(searchQuery.toLowerCase()) ||
            getField(n, 'excerpt').toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch && !n.featured;
    });

    const feedTitle = document.getElementById('feed-title');
    if (searchQuery) {
        feedTitle.textContent = `${TRANSLATIONS[currentLang].search_results}: "${searchQuery}"`;
    } else if (currentCategory === 'All') {
        feedTitle.textContent = TRANSLATIONS[currentLang].latest_news;
    } else {
        feedTitle.textContent = currentCategory;
    }

    const grid = document.getElementById('news-grid');
    const toShow = filtered.slice(0, visibleCount);
    
    if (toShow.length === 0) {
        grid.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:2rem;">${TRANSLATIONS[currentLang].no_results}</p>`;
    } else {
        grid.innerHTML = toShow.map(item => `
            <article class="article-card" onclick="openArticle(${item.id})">
                <img src="${item.image}" alt="${getField(item, 'title')}" loading="lazy">
                <div class="card-body">
                    <div class="meta">
                        <span class="cat">${getField(item, 'category')}</span>
                        <span>${timeAgo(item.date)}</span>
                    </div>
                    <h3>${getField(item, 'title')}</h3>
                    <p>${getField(item, 'excerpt')}</p>
                </div>
            </article>
        `).join('');
    }

    document.getElementById('load-more-wrap').style.display = visibleCount >= filtered.length ? 'none' : 'block';
}

/* ─── RENDER: TRENDING ─── */
function renderTrending() {
    const trending = getNews().filter(n => n.trending && n.status === 'published').slice(0, 5);
    document.getElementById('trending-list').innerHTML = trending.map((item, i) => `
        <div class="trending-item" onclick="openArticle(${item.id})">
            <div class="trending-num">${i + 1}</div>
            <div class="trending-info">
                <h4>${getField(item, 'title')}</h4>
                <span>${getField(item, 'category')} • ${timeAgo(item.date)}</span>
            </div>
        </div>
    `).join('');
}

/* ─── RENDER: CATEGORIES ─── */
function renderCategories() {
    const news = getNews().filter(n => n.status === 'published');
    const counts = {};
    news.forEach(n => {
        const catName = getField(n, 'category');
        counts[catName] = (counts[catName] || 0) + 1;
    });
    const cats = getCategories();

    const list = document.getElementById('category-list');
    const allStoriesText = TRANSLATIONS[currentLang].all_stories;
    
    let html = `
        <li data-cat="All" class="${currentCategory === 'All' ? 'active' : ''}">
            ${allStoriesText} <span class="count">${news.length}</span>
        </li>
    `;
    
    cats.forEach(cat => {
        const catName = getCategoryName(cat);
        html += `
            <li data-cat="${catName}" class="${currentCategory === catName ? 'active' : ''}">
                ${catName} <span class="count">${counts[catName] || 0}</span>
            </li>
        `;
    });
    
    list.innerHTML = html;

    list.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            currentCategory = li.dataset.cat;
            visibleCount = 6;
            renderFeed();
            renderCategories();
            window.scrollTo({ top: document.querySelector('.main-layout').offsetTop - 100, behavior: 'smooth' });
        });
    });
}

/* ─── RENDER: TICKER ─── */
function renderTicker() {
    const news = getNews().filter(n => n.status === 'published').slice(0, 6);
    const html = news.map(n => `<span class="ticker-item">${getField(n, 'title')}</span>`).join('');
    document.getElementById('ticker-content').innerHTML = html + html;
}

/* ─── ARTICLE MODAL ─── */
function openArticle(id) {
    const article = getNews().find(n => n.id == id);
    if (!article) return;

    const modal = document.getElementById('article-modal');
    const body = document.getElementById('modal-body');

    let mediaHtml = '';
    if (article.video && article.video.trim() !== '') {
        mediaHtml = `<video src="${article.video}" controls style="width:100%; max-height:400px; border-radius:8px 8px 0 0;"></video>`;
    } else {
        mediaHtml = `<img src="${article.image}" alt="${getField(article, 'title')}" style="width:100%; height:350px; object-fit:cover; border-radius:8px 8px 0 0;">`;
    }

    const content = getField(article, 'content') || `<p>${getField(article, 'excerpt')}</p>`;

    body.innerHTML = `
        <article class="modal-article">
            ${mediaHtml}
            <div class="modal-body">
                <span class="category">${getField(article, 'category')}</span>
                <h1>${getField(article, 'title')}</h1>
                <div class="meta-bar">
                    <span>✍️ ${getField(article, 'author')}</span>
                    <span>🕐 ${timeAgo(article.date)}</span>
                    <span>📅 ${formatDate(article.date)}</span>
                </div>
                <div class="article-text">
                    ${content}
                </div>
            </div>
        </article>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('article-modal').classList.remove('open');
    document.body.style.overflow = '';
}

/* ─── EVENT LISTENERS ─── */
document.addEventListener('DOMContentLoaded', () => {
    initData();

    // Initialize language
    setLanguage(currentLang);

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Date
    document.getElementById('current-date').textContent = formatDate(new Date());
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render all
    renderAds();
    renderHero();
    renderFeed();
    renderTrending();
    renderCategories();
    renderTicker();

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        visibleCount = 6;
        renderFeed();
    });

    // Category nav
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
        if (!link.dataset.cat) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = link.dataset.cat;
            searchQuery = '';
            document.getElementById('search-input').value = '';
            visibleCount = 6;
            renderFeed();
            renderCategories();
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.cat === currentCategory));
            closeMobile();
        });
    });

    // Load more
    document.getElementById('load-more-btn').addEventListener('click', () => {
        visibleCount += 3;
        renderFeed();
    });

    // Dark mode
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.body.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    // Mobile menu
    const mobileNav = document.getElementById('mobile-nav');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const openMobile = () => { mobileNav.classList.add('open'); mobileOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const closeMobile = () => { mobileNav.classList.remove('open'); mobileOverlay.classList.remove('open'); document.body.style.overflow = ''; };
    document.getElementById('mobile-menu-btn').addEventListener('click', openMobile);
    document.getElementById('close-mobile').addEventListener('click', closeMobile);
    mobileOverlay.addEventListener('click', closeMobile);

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('article-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('article-modal')) closeModal();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
