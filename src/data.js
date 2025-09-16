export const weatherInfo = {
    "-50--15": {
        day: {
            image: "extreme-freeze.png",
            alt: "Extreme freezing cold (Day)",
            note: "Dangerously cold ❄️. Stay indoors if possible!",
        },
        night: {
            image: "extreme-freeze-night.jpg",
            alt: "Extreme freezing cold (Night)",
            note: "Freezing night ❄️. Stay warm and avoid going out!",
        },
    },
    "-15--10": {
        day: {
            image: "very-cold.png",
            alt: "Very cold weather (Day)",
            note: "Very cold! Dress in layers and cover up.",
        },
        night: {
            image: "very-cold-night.jpg",
            alt: "Very cold weather (Night)",
            note: "Very cold night 🌙. Extra blankets recommended.",
        },
    },
    "-10--5": {
        day: {
            image: "cold.png",
            alt: "Cold temperature (Day)",
            note: "Cold weather, wear a warm jacket.",
        },
        night: {
            image: "cold-night.jpg",
            alt: "Cold temperature (Night)",
            note: "Chilly night, wear thick clothes to stay warm.",
        },
    },
    "-5-0": {
        day: {
            image: "chilly.png",
            alt: "Chilly near freezing (Day)",
            note: "Chilly, gloves and hats recommended.",
        },
        night: {
            image: "chilly-night.jpg",
            alt: "Chilly near freezing (Night)",
            note: "Cold night near freezing ❄️. Keep warm indoors.",
        },
    },
    "0-5": {
        day: {
            image: "cool.png",
            alt: "Cool temperature (Day)",
            note: "Cool weather. Light jacket needed.",
        },
        night: {
            image: "cool-night.jpg",
            alt: "Cool temperature (Night)",
            note: "Cool night, keep a blanket handy.",
        },
    },
    "5-10": {
        day: {
            image: "mild-cool.png",
            alt: "Mildly cool (Day)",
            note: "Mildly cool, a sweater should be fine.",
        },
        night: {
            image: "mild-cool-night.jpg",
            alt: "Mildly cool (Night)",
            note: "Slightly cold night, sweater or light blanket recommended.",
        },
    },
    "10-15": {
        day: {
            image: "pleasant.png",
            alt: "Pleasant weather (Day)",
            note: "Pleasant and fresh, great for a walk outside.",
        },
        night: {
            image: "pleasant-night.jpg",
            alt: "Pleasant weather (Night)",
            note: "Comfortable evening, perfect for a night stroll.",
        },
    },
    "15-20": {
        day: {
            image: "warm.png",
            alt: "Warm weather (Day)",
            note: "Mildly cool 🌤️. Feels nice and a bit fresh outside.",
        },
        night: {
            image: "warm-night.jpg",
            alt: "Warm weather (Night)",
            note: "Cool night 🌙. A sweater or blanket may be needed.",
        },
    },
    "20-25": {
        day: {
            image: "comfortably-warm.png",
            alt: "Comfortably warm (Day)",
            note: "Nice and warm, perfect for outdoor activities.",
        },
        night: {
            image: "comfortably-warm-night.jpg",
            alt: "Comfortably warm (Night)",
            note: "Warm night 🌙. A light breeze keeps it nice.",
        },
    },
    "25-30": {
        day: {
            image: "hot.png",
            alt: "Hot temperature (Day)",
            note: "Hot weather 🌞, stay hydrated.",
        },
        night: {
            image: "hot-night.jpg",
            alt: "Hot temperature (Night)",
            note: "Warm night, keep hydrated and cool.",
        },
    },
    "30-35": {
        day: {
            image: "very-hot.png",
            alt: "Very hot weather (Day)",
            note: "Very hot! Avoid being outside too long.",
        },
        night: {
            image: "very-hot-night.jpg",
            alt: "Very hot weather (Night)",
            note: "Hot evening 🌙. Use fans or AC to stay cool.",
        },
    },
    "35-50": {
        day: {
            image: "extreme-heat.png",
            alt: "Extreme heat (Day)",
            note: "Extreme heat 🌋. Stay cool and drink lots of water!",
        },
        night: {
            image: "extreme-heat-night.jpg",
            alt: "Extreme heat (Night)",
            note: "Very hot night 🌙. Avoid heavy activities and stay hydrated.",
        },
    },
};

export const rainInfo = {
    "0-1": {
        day: {
            image: "light-rain.png",
            alt: "Light rain (Day)",
            note: "Drizzle ☔. A light umbrella is enough.",
        },
        night: {
            image: "light-rain-night.jpg",
            alt: "Light rain (Night)",
            note: "Light showers 🌧️. Roads may be a little slippery.",
        },
    },
    "1-5": {
        day: {
            image: "moderate-rain.png",
            alt: "Moderate rain (Day)",
            note: "Moderate rain ☔. Take a proper umbrella or raincoat.",
        },
        night: {
            image: "moderate-rain-night.jpg",
            alt: "Moderate rain (Night)",
            note: "Steady rainfall 🌧️. Drive carefully.",
        },
    },
    "5-20": {
        day: {
            image: "heavy-rain.png",
            alt: "Heavy rain (Day)",
            note: "Heavy rain 🌧️. Stay safe, possible waterlogging.",
        },
        night: {
            image: "heavy-rain-night.jpg",
            alt: "Heavy rain (Night)",
            note: "Strong rainfall 🌧️. Avoid unnecessary travel.",
        },
    },
    "20-100": {
        day: {
            image: "extreme-rain.png",
            alt: "Extreme rain (Day)",
            note: "Extreme rain ⛈️. Flooding possible, stay indoors!",
        },
        night: {
            image: "extreme-rain-night.jpg",
            alt: "Extreme rain (Night)",
            note: "Dangerous rainfall ⛈️. Avoid going outside.",
        },
    },
};

export const cities = [
  // Asia - Major Cities (300 cities)
  "Tokyo", "Delhi", "Shanghai", "Mumbai", "Beijing", "Dhaka", "Osaka", "Karachi", "Chongqing", "Istanbul", "Kolkata", "Manila", "Tianjin", "Guangzhou", "Shenzhen", "Chengdu", "Nanjing", "Wuhan", "Xi'an", "Hangzhou", "Foshan", "Shenyang", "Harbin", "Suzhou", "Dongguan", "Qingdao", "Jinan", "Changchun", "Dalian", "Zhengzhou", "Shantou", "Kunming", "Changsha", "Taiyuan", "Hefei", "Shijiazhuang", "Urumqi", "Fuzhou", "Wuxi", "Ningbo", "Xuzhou", "Lanzhou", "Nanning", "Tangshan", "Zibo", "Handan", "Jining", "Weifang", "Luoyang", "Zhongshan", "Baotou", "Yantai", "Zhuhai", "Shaoxing", "Xinxiang", "Zhenjiang", "Changzhou", "Tengzhou", "Hengyang", "Baoding", "Cangzhou", "Jiaxing", "Nantong", "Dezhou", "Liaocheng", "Yancheng", "Tai'an", "Huai'an", "Jinhua", "Huzhou", "Lishui", "Taizhou", "Wenzhou", "Quzhou", "Bengbu", "Anqing", "Suqian", "Xingtai", "Heze", "Binzhou", "Zaozhuang", "Jingzhou", "Zhumadian", "Shangqiu", "Nanyang", "Xinyang", "Luohe", "Kaifeng", "Anyang", "Puyang", "Hebi", "Jiaozuo", "Pingdingshan", "Xuchang", "Sanmenxia", "Zhoukou", "Jiamusi", "Qiqihar", "Daqing", "Mudanjiang", "Jixi", "Shuangyashan", "Hegang", "Yichun", "Qitaihe", "Heihe", "Suihua", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Bhopal", "Patna", "Vadodara", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan", "Vasai", "Varanasi", "Srinagar", "Dhanbad", "Jodhpur", "Amritsar", "Raipur", "Allahabad", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Madurai", "Guwahati", "Chandigarh", "Thiruvananthapuram", "Solapur", "Hubballi", "Mysore", "Tiruchirappalli", "Bareilly", "Aligarh", "Moradabad", "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj", "Mangalore", "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", "Maheshtala", "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Goyang", "Yongin", "Bucheon", "Cheonan", "Ansan", "Jeonju", "Anyang", "Pohang", "Uijeongbu", "Hwaseong", "Gimhae", "Gumi", "Iksan", "Yangsan", "Suncheon", "Chuncheon", "Asan", "Gunsan", "Tongyeong", "Jeju City", "Seogwipo", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama", "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Sakai", "Niigata", "Hamamatsu", "Kumamoto", "Sagamihara", "Shizuoka", "Okayama", "Kashiwa", "Ichikawa", "Suita", "Takatsuki", "Toyama", "Toyota", "Iwaki", "Kochi", "Nara", "Fujisawa", "Nagano", "Toyohashi", "Nishinomiya", "Wakayama", "Fukuyama", "Naha", "Asahikawa", "Koriyama", "Mito", "Akashi", "Fukushima", "Maebashi", "Jakarta", "Surabaya", "Bandung", "Medan", "Bekasi", "Palembang", "Tangerang", "Makassar", "Semarang", "Depok", "South Tangerang", "Batam", "Bandar Lampung", "Padang", "Malang", "Pekanbaru", "Denpasar", "Samarinda", "Tasikmalaya", "Serang", "Jambi", "Cimahi", "Balikpapan", "Sukabumi", "Mataram", "Banjarmasin", "Yogyakarta", "Surakarta", "Pontianak", "Manado", "Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Nakhon Si Thammarat", "Rayong", "Chon Buri", "Lampang", "Nakhon Sawan", "Ubon Ratchathani", "Surat Thani", "Ho Chi Minh City", "Hanoi", "Da Nang", "Bien Hoa", "Hue", "Nha Trang", "Can Tho", "Rach Gia", "Qui Nhon", "Vung Tau", "Singapore", "Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Islamabad", "Bahawalpur", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Comilla", "Mymensingh",

  // Europe - Major Cities (250 cities)
  "London", "Berlin", "Madrid", "Rome", "Paris", "Bucharest", "Hamburg", "Budapest", "Warsaw", "Vienna", "Barcelona", "Munich", "Milan", "Prague", "Sofia", "Brussels", "Birmingham", "Cologne", "Naples", "Turin", "Amsterdam", "Zagreb", "Riga", "Kraków", "Stockholm", "Helsinki", "Oslo", "Copenhagen", "Athens", "Lisbon", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "L'Hospitalet", "A Coruña", "Vitoria-Gasteiz", "Granada", "Elche", "Oviedo", "Badalona", "Cartagena", "Terrassa", "Jerez de la Frontera", "Sabadell", "Móstoles", "Santa Cruz de Tenerife", "Pamplona", "Almería", "Alcalá de Henares", "Fuenlabrada", "Leganés", "San Sebastián", "Getafe", "Burgos", "Albacete", "Castellón de la Plana", "Alcorcón", "Logroño", "Badajoz", "Huelva", "Salamanca", "Marbella", "Lleida", "Tarragona", "León", "Cádiz", "Dos Hermanas", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster", "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen", "Halle", "Magdeburg", "Freiburg", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", "Mainz", "Rostock", "Kassel", "Hagen", "Hamm", "Saarbrücken", "Mülheim", "Potsdam", "Ludwigshafen", "Oldenburg", "Leverkusen", "Osnabrück", "Solingen", "Heidelberg", "Herne", "Neuss", "Darmstadt", "Paderborn", "Regensburg", "Ingolstadt", "Würzburg", "Fürth", "Wolfsburg", "Offenbach", "Ulm", "Heilbronn", "Pforzheim", "Göttingen", "Bottrop", "Trier", "Recklinghausen", "Reutlingen", "Bremerhaven", "Koblenz", "Bergisch Gladbach", "Jena", "Remscheid", "Erlangen", "Moers", "Siegen", "Hildesheim", "Salzgitter", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Angers", "Grenoble", "Dijon", "Nîmes", "Aix-en-Provence", "Saint-Quentin-en-Yvelines", "Brest", "Le Mans", "Amiens", "Tours", "Limoges", "Clermont-Ferrand", "Villeurbanne", "Besançon", "Orléans", "Metz", "Rouen", "Mulhouse", "Perpignan", "Caen", "Boulogne-Billancourt", "Nancy", "Saint-Denis", "Argenteuil", "Roubaix", "Tourcoing", "Montreuil", "Avignon", "Créteil", "Poitiers", "Nanterre", "Versailles", "Pau", "Fort-de-France", "Courbevoie", "Vitry-sur-Seine", "Colombes", "Aulnay-sous-Bois", "Saint-Pierre", "Rueil-Malmaison", "Champigny-sur-Marne", "Antibes", "La Rochelle", "Calais", "Cannes", "Colmar", "Drancy", "Ajaccio", "Mérignac", "Bourges", "Saint-Nazaire", "Dunkerque", "Saint-Maur-des-Fossés", "Fréjus", "Issy-les-Moulineaux", "Noisy-le-Grand", "Évry", "Cergy", "Valence", "Antony", "La Seyne-sur-Mer", "Sarcelles", "Vénissieux", "Clichy", "Troyes", "Levallois-Perret", "Montauban", "Neuilly-sur-Seine", "Pantin", "Niort", "Lorient", "Pessac", "Ivry-sur-Seine", "Cergy-Pontoise", "Chambéry", "Belfort", "Saint-Ouen", "Vincennes", "Cholet", "Angoulême", "Beauvais", "Alès", "Narbonne", "Clamart", "Sartrouville", "Grasse", "Laval", "Martigues", "Aubagne", "Tampon", "Blois", "Saint-Brieuc", "Châlons-en-Champagne", "Arras", "Villejuif", "Le Blanc-Mesnil", "Livry-Gargan", "Maisons-Alfort", "Épinay-sur-Seine", "Meaux", "Bondy", "Castres", "Brive-la-Gaillarde", "Carcassonne", "Bayonne", "Vannes", "Charleville-Mézières", "Mantes-la-Jolie", "Saint-Priest", "Six-Fours-les-Plages", "Hyères", "Châteauroux", "Albi", "Fontenay-sous-Bois",

  // North America - Major Cities (200 cities)
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington", "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Long Beach", "Kansas City", "Mesa", "Virginia Beach", "Atlanta", "Colorado Springs", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi", "Lexington", "Pittsburgh", "Anchorage", "Stockton", "Cincinnati", "Saint Paul", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Jersey City", "Chula Vista", "Fort Wayne", "Orlando", "St. Petersburg", "Chandler", "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Winston-Salem", "Glendale", "Garland", "Hialeah", "Reno", "Chesapeake", "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise", "Richmond", "San Bernardino", "Spokane", "Rochester", "Des Moines", "Modesto", "Fayetteville", "Tacoma", "Oxnard", "Fontana", "Montgomery", "Moreno Valley", "Shreveport", "Yonkers", "Akron", "Huntington Beach", "Little Rock", "Augusta", "Amarillo", "Mobile", "Grand Rapids", "Salt Lake City", "Tallahassee", "Huntsville", "Grand Prairie", "Knoxville", "Worcester", "Newport News", "Brownsville", "Overland Park", "Santa Clarita", "Providence", "Garden Grove", "Chattanooga", "Oceanside", "Jackson", "Fort Lauderdale", "Santa Rosa", "Rancho Cucamonga", "Port St. Lucie", "Tempe", "Ontario", "Vancouver", "Cape Coral", "Sioux Falls", "Springfield", "Peoria", "Pembroke Pines", "Elk Grove", "Salem", "Lancaster", "Corona", "Eugene", "Palmdale", "Salinas", "Pasadena", "Fort Collins", "Hayward", "Pomona", "Cary", "Rockford", "Alexandria", "Escondido", "McKinney", "Joliet", "Sunnyvale", "Toronto", "Montreal", "Calgary", "Ottawa", "Edmonton", "Mississauga", "Winnipeg", "Vancouver", "Brampton", "Hamilton", "Quebec City", "Surrey", "Laval", "Halifax", "London", "Markham", "Vaughan", "Gatineau", "Saskatoon", "Longueuil", "Burnaby", "Regina", "Richmond", "Richmond Hill", "Oakville", "Burlington", "Barrie", "Oshawa", "Sherbrooke", "Saguenay", "Lévis", "Kelowna", "Abbotsford", "Coquitlam", "Trois-Rivières", "Guelph", "Cambridge", "Whitby", "Ajax", "Langley", "Saanich", "Terrebonne", "Milton", "St. Catharines", "New Westminster", "Brossard", "Thunder Bay", "Waterloo", "Delta", "Chatham-Kent", "Red Deer", "Kamloops", "Brantford", "Cape Breton", "Lethbridge", "Saint-Jean-sur-Richelieu", "Clarington", "Pickering", "Nanaimo", "Sudbury", "North Vancouver", "Boucherville", "Repentigny", "Saint-Jérôme", "Drummondville", "Saint-Hyacinthe",

  // South America - Major Cities (100 cities)
  "São Paulo", "Rio de Janeiro", "Buenos Aires", "Lima", "Bogotá", "Santiago", "Caracas", "Fortaleza", "Belo Horizonte", "Medellín", "Recife", "Porto Alegre", "Brasília", "Salvador", "Montevideo", "Córdoba", "Cali", "Goiânia", "Belém", "Guarulhos", "Campinas", "São Luís", "São Gonçalo", "Maceió", "Duque de Caxias", "Natal", "Campo Grande", "Teresina", "Nova Iguaçu", "São Bernardo do Campo", "João Pessoa", "Santo André", "Osasco", "Jaboatão dos Guararapes", "São José dos Campos", "Ribeirão Preto", "Uberlândia", "Sorocaba", "Contagem", "Aracaju", "Feira de Santana", "Cuiabá", "Joinville", "Aparecida de Goiânia", "Londrina", "Juiz de Fora", "Ananindeua", "Niterói", "Serra", "Vila Velha", "Campos dos Goytacazes", "Mauá", "Carapicuíba", "Olinda", "Campina Grande", "São José do Rio Preto", "Caxias do Sul", "Moji das Cruzes", "Diadema", "Piracicaba", "Cariacica", "Betim", "Bauru", "São Vicente", "Montes Claros", "Vitória da Conquista", "Franca", "Paulista", "Pelotas", "Canoas", "Anápolis", "Maringá", "Jundiaí", "Caucaia", "Vitória", "Florianópolis", "Blumenau", "Ponta Grossa", "Foz do Iguaçu", "Limeira", "Suzano", "Caruaru", "Cascavel", "Petrópolis", "Uberaba", "Praia Grande", "Santarém", "Governador Valadares", "Taubaté", "Volta Redonda", "Imperatriz", "Guarujá", "Presidente Prudente", "Lages", "Itaquaquecetuba", "Marília", "Araraquara", "Dourados", "Santa María", "Rosario", "La Plata", "Mar del Plata", "Quilmes", "San Miguel de Tucumán", "Salta", "Santa Fe", "Corrientes", "Bahía Blanca", "Resistencia", "San Salvador de Jujuy", "Paraná", "Posadas", "Neuquén", "Santiago del Estero", "Formosa", "San Luis",

  // Africa - Major Cities (100 cities)
  "Cairo", "Lagos", "Kinshasa", "Luanda", "Dar es Salaam", "Johannesburg", "Khartoum", "Algiers", "Nairobi", "Casablanca", "Addis Ababa", "Cape Town", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin", "Oyo", "Enugu", "Abeokuta", "Abuja", "Sokoto", "Onitsha", "Warri", "Calabar", "Uyo", "Katsina", "Ado-Ekiti", "Akure", "Bauchi", "Ikeja", "Makurdi", "Minna", "Accra", "Kumasi", "Tamale", "Sekondi-Takoradi", "Ashaiman", "Sunyani", "Cape Coast", "Obuasi", "Abidjan", "Bouaké", "Daloa", "San-Pédro", "Yamoussoukro", "Divo", "Korhogo", "Dakar", "Pikine", "Touba", "Guédiawaye", "Thiès", "Kaolack", "Saint-Louis", "Mbour", "Ziguinchor", "Diourbel", "Rabat", "Fez", "Sale", "Marrakech", "Agadir", "Tangier", "Meknes", "Oujda", "Kenitra", "Tetouan", "Safi", "Mohammedia", "Khouribga", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez", "Luxor", "al-Mansura", "El-Mahalla El-Kubra", "Tanta", "Asyut", "Ismailia", "Fayyum", "Zagazig", "Aswan", "Damietta", "Damanhur", "al-Minya", "Beni Suef", "Qena", "Sohag", "Hurghada", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Pietermaritzburg", "Rustenburg", "Polokwane", "Welkom", "Klerksdorp", "Potchefstroom", "Virginia", "Vereeniging", "Benoni", "Tembisa", "Alberton", "Germiston", "Randburg", "Roodepoort",

  // Middle East - Major Cities (50 cities)  
  "Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Kermanshah", "Ahvaz", "Urmia", "Rasht", "Zahedan", "Hamadan", "Kerman", "Yazd", "Ardabil", "Bandar Abbas", "Arak", "Eslamshahr", "Zanjan", "Baghdad", "Basra", "Mosul", "Erbil", "Kirkuk", "Najaf", "Karbala", "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Taif", "Tabuk", "Buraidah", "Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Kuwait City", "Ahmadi", "Hawalli", "Doha", "Al Rayyan", "Manama", "Riffa", "Muscat", "Seeb", "Salalah"
];
  
