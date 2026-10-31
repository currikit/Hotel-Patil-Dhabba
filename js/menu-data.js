/* Hotel Tejas — menu data (edit prices and dishes here) */
/* ---------- Data: Hotel Tejas menu card ---------- */
const SPECIALS = [
  {img:"gavthi", mr:"गावठी कोंबडी", en:"Gavthi Kombdi", sub:{mr:"अस्सल गावरान कोंबडी, झणझणीत रस्सा. गावठी हंडी ₹८०० / १,४००", en:"Country chicken in a fiery rassa. Gavthi Handi ₹800 / 1,400"}, pr:"₹1,500", tag:{mr:"आमची खासियत",en:"Our speciality"}},
  {img:"surmai_special", mr:"सुरमई", en:"Surmai", sub:{mr:"फ्राय ₹४५० · मसाला ₹५०० · थाळी ₹५५०", en:"Fry ₹450 · Masala ₹500 · Thali ₹550"}, pr:"₹450", tag:{mr:"आमची खासियत",en:"Our speciality"}},
  {img:"pomfret", mr:"पापलेट", en:"Paplet (Pomfret)", sub:{mr:"फ्राय ₹४५० · मसाला ₹५०० · थाळी ₹५५०", en:"Fry ₹450 · Masala ₹500 · Thali ₹550"}, pr:"₹450", tag:{mr:"आमची खासियत",en:"Our speciality"}},
  {img:"prawns_special", mr:"कोळंबी (प्रॉन्स)", en:"Prawns (Kolambi)", sub:{mr:"फ्राय किंवा मसाला. बिर्याणी आणि थाळी ₹५५०", en:"Fry or masala. Biryani and thali ₹550"}, pr:"₹420", tag:{mr:"आमची खासियत",en:"Our speciality"}},
  {img:"chicken_handi", mr:"चिकन मालवणी हंडी", en:"Chicken Malvani Handi", sub:{mr:"हाफ / फुल", en:"Half / Full"}, pr:"₹500 / 900"},
  {img:"mutton", mr:"मटण मालवणी हंडी", en:"Mutton Malvani Handi", sub:{mr:"हाफ / फुल", en:"Half / Full"}, pr:"₹900 / 1,400"},
  {img:"bombil", mr:"बोंबील फ्राय", en:"Bombil Fry", sub:{mr:"कुरकुरीत बोंबील", en:"Crisp Bombay duck"}, pr:"₹220"},
  {img:"solkadhi", mr:"सोलकढी", en:"Solkadhi", sub:{mr:"कोकम आणि नारळाचं दूध", en:"Kokum and coconut milk"}, pr:"₹60"},
];

const THALIS = [
  ["अंडा मालवणी थाळी","Anda Malvani Thali",250],["चिकन मालवणी थाळी","Chicken Malvani Thali",320],
  ["मटण मालवणी थाळी","Mutton Malvani Thali",450],["गावठी चिकन थाळी","Gavthi Chicken Thali",500],
  ["सुरमई थाळी","Surmai Thali",550],["पापलेट थाळी","Pomfret (Paplet) Thali",550],
  ["कोळंबी थाळी","Kolambi (Prawns) Thali",550],["बांगडा थाळी","Bangda Thali",350],
  ["मांदेली थाळी","Mandeli Thali",350],["वजरी थाळी","Vajri Thali",350],
  ["मुंडी थाळी","Mundi Thali",350],["बोंबील थाळी","Bombil Thali",350],
  ["व्हेज थाळी","Veg Thali",250]
];

/* sizes: P=Plate H=Half F=Full; price as number or [[size,price],...] */
const P=(a,b)=>[["P",a],["H",b]], HF=(a,b)=>[["H",a],["F",b]];
const MENU = [
 {id:"veg-start", kind:"veg", img:"papad", mr:"व्हेज स्टार्टर्स", en:"Veg Starters", items:[
  ["रोस्टेड पापड","Roasted Papad",40],["फ्राय पापड","Fry Papad",50],["मसाला पापड","Masala Papad",90],["नाचणी पापड","Nachni Papad",80],["नाचणी मसाला पापड","Nachni Masala Papad",120],
  ["चणा गार्लिक","Chana Garlic",220],["चणा कोळीवाडा गार्लिक","Chana Koliwada Garlic",240],["चणा बॉईल","Chana Boil",200],["ग्रीनपीस गार्लिक","Green Peas Garlic",240],["ग्रीन सॅलेड","Green Salad",90],
  ["फिंगर चिप्स","Finger Chips",220],["पनीर पकोडा","Paneer Pakoda",250],["व्हेज मंचुरीयन","Veg Manchurian",260],
  ["पनीर चिली","Paneer Chilli",P(250,400)],["पनीर क्रिस्पी","Paneer Crispy",P(280,450)],["पनीर ६५","Paneer 65",P(280,450)],["मशरूम चिली","Mushroom Chilli",P(260,450)],
  ["व्हेज क्रिस्पी","Veg Crispy",P(250,400)],["व्हेज चिली","Veg Chilli",P(240,400)],["सोयाबीन चिली","Soyabean Chilli",P(260,450)],["आलू चिली","Aloo Chilli",P(240,400)]]},
 {id:"veg-main", kind:"veg", img:"paneer", mr:"व्हेज मेन कोर्स", en:"Veg Main Course", items:[
  ["व्हेज थाळी","Veg Thali",250],["व्हेज कोल्हापुरी","Veg Kolhapuri",250],["मिक्स व्हेज","Mix Veg",250],["व्हेज तवा","Veg Tawa",280],["व्हेज मराठा","Veg Maratha",280],["व्हेज कोफ्ता","Veg Kofta",280],
  ["पनीर मसाला","Paneer Masala",250],["पनीर कोल्हापुरी","Paneer Kolhapuri",260],["पनीर लपेटा","Paneer Lapeta",280],["पनीर भुर्जी","Paneer Bhurji",260],["पनीर टिक्का मसाला","Paneer Tikka Masala",280],
  ["पनीर मटर मसाला","Paneer Matar Masala",280],["पनीर बटर मसाला","Paneer Butter Masala",280],["पनीर कढाई","Paneer Kadai",280],["पनीर हंडी","Paneer Handi",HF(400,800)],["पनीर कोल्हापुरी हंडी","Paneer Kolhapuri Handi",HF(400,800)],
  ["ग्रीनपीस मसाला","Green Peas Masala",250],["मशरूम मसाला","Mushroom Masala",280],["मशरूम लपेटा","Mushroom Lapeta",280],["मशरूम कोल्हापुरी","Mushroom Kolhapuri",280],["मशरूम बटर मसाला","Mushroom Butter Masala",300],
  ["मशरूम हंडी","Mushroom Handi",HF(450,800)],["मशरूम पनीर मसाला","Mushroom Paneer Masala",300],["पिठलं","Pithla",260],["शेव भाजी","Shev Bhaji",200],["चना मसाला","Chana Masala",200],
  ["मटकी मसाला","Matki Masala",240],["अख्खा मसूर","Akkha Masoor",240],["डाळ फ्राय","Dal Fry",220],["डाळ तडका","Dal Tadka",240],["व्हेज हंडी","Veg Handi",HF(400,800)],["काजू मसाला","Kaju Masala",300]]},
 {id:"veg-rice", kind:"veg", img:"manchurian", mr:"व्हेज चायनीज आणि भात", en:"Veg Chinese & Rice", items:[
  ["व्हेज मंचाव सूप","Veg Manchow Soup",150],["व्हेज फ्राईड राईस","Veg Fried Rice",240],["व्हेज शेजवान नूडल्स","Veg Schezwan Noodles",280],["व्हेज ट्रिपल नूडल्स","Veg Triple Noodles",320],
  ["व्हेज हक्का नूडल्स","Veg Hakka Noodles",260],["व्हेज शेजवान राईस","Veg Schezwan Rice",280],["व्हेज ट्रिपल राईस","Veg Triple Rice",320],
  ["व्हेज बिर्याणी","Veg Biryani",280],["व्हेज पुलाव","Veg Pulao",280],["पनीर बिर्याणी","Paneer Biryani",300],["डाळ खिचडी","Dal Khichdi",240],["डाळ खिचडी तडका","Dal Khichdi Tadka",260],
  ["स्टीम राईस","Steam Rice",HF(80,140)],["जीरा राईस","Jeera Rice",HF(90,160)],["मसाला राईस","Masala Rice",220]]},
 {id:"nv-start", kind:"nv", img:"lollipop", mr:"नॉनव्हेज स्टार्टर्स", en:"Non-veg Starters", items:[
  ["अंडा बॉईल","Anda Boil",80],["अंडा बॉईल फ्राय","Anda Boil Fry",100],["अंडा भुर्जी","Anda Bhurji",140],["अंडा ऑम्लेट","Anda Omelette",100],["अंडा हाफ फ्राय","Anda Half Fry",90],["अंडा चिली","Anda Chilli",240],
  ["चिकन कोळीवाडा","Chicken Koliwada",P(250,350)],["चिकन ६५","Chicken 65",P(280,450)],["चिकन रोस्ट","Chicken Roast",P(260,350)],["चिकन पकोडा","Chicken Pakoda",P(250,350)],
  ["चिकन लॉलीपॉप","Chicken Lollipop",HF(180,300)],["चिकन शेजवान लॉलीपॉप","Chicken Schezwan Lollipop",HF(200,400)],["चिकन तवा","Chicken Tawa",P(280,450)],
  ["चिकन चिली","Chicken Chilli",P(280,350)],["चिकन क्रिस्पी","Chicken Crispy",P(300,450)],["चिकन सुक्का","Chicken Sukka",P(260,400)],
  ["लिव्हर पेटा फ्राय","Liver Peta Fry",240],["वजडी फ्राय","Vajdi Fry",260],["मुंडी फ्राय","Mundi Fry",260],["भेजा फ्राय","Bheja Fry",250],
  ["चिकन लपेटा","Chicken Lapeta",P(280,450)],["लिव्हर पेटा लपेटा","Liver Peta Lapeta",P(300,450)],["वजडी मसाला","Vajdi Masala",280],["मुंडी मसाला","Mundi Masala",280],["मटण लपेटा","Mutton Lapeta",P(350,850)]]},
 {id:"nv-main", kind:"nv", img:"chicken_handi", mr:"नॉनव्हेज मेन कोर्स आणि हंडी", en:"Non-veg Main Course & Handi", items:[
  ["चिकन मसाला","Chicken Masala",250],["चिकन कोल्हापुरी","Chicken Kolhapuri",280],["चिकन बटर मसाला","Chicken Butter Masala",300],["चिकन टिक्का मसाला","Chicken Tikka Masala",[["",350],["H",500]]],
  ["अंडा मसाला","Anda Masala",220],["अंडा करी","Anda Curry",240],["मटण मसाला","Mutton Masala",320],["मटण कोल्हापुरी","Mutton Kolhapuri",350],["चिकन कढई","Chicken Kadhai",300],
  ["चिकन हंडी","Chicken Handi",HF(450,800)],["चिकन मालवणी हंडी","Chicken Malvani Handi",HF(500,900)],["चिकन कोल्हापुरी हंडी","Chicken Kolhapuri Handi",HF(500,900)],
  ["स्पे. गावठी हंडी","Spl. Gavthi Handi",HF(800,1400)],["स्पे. गावठी कोंबडा","Spl. Gavthi Kombda",1500],["बटर चिकन हंडी","Butter Chicken Handi",HF(600,900)],
  ["मटण हंडी","Mutton Handi",HF(800,1300)],["मटण मालवणी हंडी","Mutton Malvani Handi",HF(900,1400)]]},
 {id:"seafood", kind:"nv", img:"surmai_fry", mr:"स्पे. मच्छी (सी फूड)", en:"Special Seafood", items:[
  ["सुरमई फ्राय","Surmai Fry",450],["सुरमई मसाला","Surmai Masala",500],["पापलेट फ्राय","Pomfret (Paplet) Fry",450],["पापलेट मसाला","Pomfret (Paplet) Masala",500],
  ["कोळंबी फ्राय","Kolambi (Prawns) Fry",420],["कोळंबी मसाला","Kolambi (Prawns) Masala",420],["बांगडा फ्राय","Bangda Fry",200],["बांगडा मसाला","Bangda Masala",250],
  ["मांदेली फ्राय","Mandeli Fry",200],["बोंबील फ्राय","Bombil Fry",220],["जवळा सुकट चटणी","Jawla Sukat Chutney",250],["बोंबील चटणी","Bombil Chutney",250]]},
 {id:"biryani", kind:"nv", img:"biryani", mr:"बिर्याणी", en:"Biryani", items:[
  ["अंडा बिर्याणी","Egg Biryani",250],["चिकन बिर्याणी","Chicken Biryani",280],["मटण बिर्याणी","Mutton Biryani",400],["कोळंबी बिर्याणी","Prawns Biryani",550]]},
 {id:"thalis", kind:"nv", img:"malvani_thali2", mr:"स्पे. थाळी", en:"Special Thalis", items: THALIS.slice(0,12)},
 {id:"nv-chinese", kind:"nv", img:"fried_rice", mr:"नॉनव्हेज चायनीज", en:"Non-veg Chinese", items:[
  ["अंडा फ्राईड राईस","Anda Fried Rice",200],["चिकन फ्राईड राईस","Chicken Fried Rice",250],["चिकन शेजवान राईस","Chicken Schezwan Rice",280],["चिकन ट्रिपल राईस","Chicken Triple Rice",320],
  ["चिकन हक्का नूडल्स","Chicken Hakka Noodles",250],["चिकन शेजवान नूडल्स","Chicken Schezwan Noodles",280],["चिकन ट्रिपल नूडल्स","Chicken Triple Noodles",320],["चिकन मंचाव सूप","Chicken Manchow Soup",150]]},
 {id:"breads", kind:"all", img:"bhakri", mr:"रोटी / भाकरी / चपाती / नान", en:"Roti, Bhakri & Naan", items:[
  ["भाकरी तांदूळ","Rice Bhakri",30],["चपाती","Chapati",20],["तंदूरी रोटी","Tandoori Roti",25],["बटर रोटी","Butter Roti",35],["तंदूरी नान","Tandoori Naan",80],
  ["बटर नान","Butter Naan",90],["गार्लिक नान","Garlic Naan",130],["चीज गार्लिक नान","Cheese Garlic Naan",220],["पराठा","Paratha",150]]},
 {id:"drinks", kind:"all", img:"solkadhi", mr:"कोल्ड्रिंक्स आणि एक्स्ट्रा", en:"Drinks & Extras", items:[
  ["मिनरल वॉटर","Mineral Water",20],["लस्सी","Lassi",60],["ताक","Buttermilk",40],["दही वाटी","Curd Bowl",60],["सोलकढी","Solkadhi",60],
  ["स्प्राईट","Sprite",50],["थम्सअप","Thums Up",50],["सोडा","Soda",40],["रेडबुल","Red Bull",150],["एक्स्ट्रा रस्सा वाटी","Extra Rassa Bowl",80],["एक्स्ट्रा रस्सा बादली","Extra Rassa Bucket",150]]},
];
