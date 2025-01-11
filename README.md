T.C. 
ATATÜRK ÜNİVERSİTESİ 
MÜHENDİSLİK FAKÜLTESİ 
BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ 
BİLGİSAYAR MÜHENDİSLİĞİ SEÇMELİ TASARIM DERSİ - 1 
CARTOL 
SAĞLIKLI YAŞAM UYGULAMASI 
HAZIRLAYAN 
Muhammed Faruk TUTKUS – 210707072 
PROJE DANIŞMANI 
Dr. Öğr. Üyes Blal USANMAZ 
GÜZ DÖNEMİ - 2025 
 ÖZET  ...........................................................................................................................  4 
 ABSTRACT  ..................................................................................................................  5 
 1.GİRİŞ  ........................................................................................................................  6 
 1.1.  Tezn  Amacı  ve  Önem  ....................................................................................  6 
 1.2.  Problem  Tanımı  ...............................................................................................  7 
 1.3.  Tezn  Kapsamı  ve  Yöntem  ..............................................................................  7 
 1.4.  Tezn  Yapısı  .....................................................................................................  8 
 2.  LİTERATÜR  TARAMASI  ..........................................................................................  9 
 2.1.  Sağlıklı  Yaşam  ve  Beslenme  Uygulamaları  .....................................................  9 
 2.2.  Yapay  Zekâ  Tabanlı  Mobl  Uygulamalar  ........................................................  10 
 2.3.  Lteratürde  Karşılaşılan  Eksklkler  ve  İhtyaçlar  .............................................  11 
 2.4.  “Cartol”  Uygulamasının  Lteratürdek  Konumu  ..............................................  12 
 3.  TASARIM  VE  YÖNTEM  .........................................................................................  13 
 3.1.  Gelştrme  Ortamı  ve  Terch  Edlen  Teknolojler  .............................................  13 
 3.1.1.  React  Natve  ve  Expo  ...........................................................................  13 
 3.1.2.  Clerk  le  Kmlk  Doğrulama  (Auth)  .........................................................  13 
 3.1.3.  Frebase  le  Ver  Depolama  ...................................................................  14 
 3.1.4.  Gemn  API  le  Yapay  Zekâ  (AI)  Entegrasyonu  .....................................  14 
 3.2.  Yazılım  Gelştrme  Sürec  ..............................................................................  15 
 3.3.  Mmar  Yapı  ve  Ver  Akışı  ...............................................................................  16 
 3.4.  Neden  Bu  Teknoloj ler?  .................................................................................  16 
 3.5.  Son  Değerlendrme  .......................................................................................  17 
 4.  UYGULAMA  GELİŞTİRME  SÜRECİ  .....................................................................  18 
 4.1.  Başlangıç  Ekranı  (startScreen.jsx)  ................................................................  19 
 4.2.  Grş  Ekranı  (sgnIn.jsx)  .................................................................................  20 
 4.3.  Kayıt  Ekranı  (newUser.jsx  -  sgnUp.jsx)  ........................................................  21 
 4.4.  Home  Ekranı  (home.jsx)  ................................................................................  26 
 4.5.  Tarfler  Ekranı  (recpe.jsx)  ..............................................................................  29 
 4.6.  AI  Ekranı  ........................................................................................................  31 
 4.7.  Arayüz  Frontları:  Tab  Bar  ve  Drawer  .............................................................  33 
 4.8.  Genel  Değerlendrme  ....................................................................................  35 
 5.  TEST  VE  DEĞERLENDİRME  ...............................................................................  36 
 5.1.  Test  Stratejs  .................................................................................................  36 
 5.2.  Fonksyonel  Testler  ........................................................................................  36 
 5.2.1.  Grş  ve  Kayıt  İşlemler  ..........................................................................  36 
 5.2.2.  Home  Ekranı  .........................................................................................  37 
 5.2.3.  Tarfler  Ekranı  ........................................................................................  37 
 5.2.4.  AI  Ekranı  ...............................................................................................  38 
 5.3.  Kullanılablrlk  (UX)  Testler  ...........................................................................  38 
 5.4.  Performans  Testler  .......................................................................................  39 
 5.5.  Güvenlk  ve  Ver  Gzllğ  Değerlendrmes  .....................................................  39 
 5.6.  Genel  Değerlendrme  ve  Sonuçlar  ................................................................  40 
 6.  SONUÇLAR  VE  ÖNERİLER  ..................................................................................  41 
 6.1.  Genel  Değerlendrme  ....................................................................................  41 
 6.2.  Katkılar  ..........................................................................................................  42 
 6.3.  Önerler  ve  Gelecek  Çalışmalar  ....................................................................  42 
 6.4.  Genel  Sonuç  ..................................................................................................  43 
 7.  UYGULAMAYI  ÇALIŞTIRMA  ADIMLARI  ...........................................................................  44 
 KAYNAKÇA  ................................................................................................................  46 
ÖZET 
Bu tez çalışmasında, sağlıklı yaşam ve beslenme alanında kullanıcıların 
htyaçlarını karşılamak üzere  “Cartol”  sml br  mobl uygulama gelştrlmştr. 
Uygulamanın temel amacı, günlük kalor ve su htyacını hesaplamak, beslenme 
sürecn kşye özel önerlerle desteklemek ve besnlere lşkn kalor, yağ, proten, 
karbonhdrat değerlern sunmanın yanı sıra tarf blgleryle brlkte kullanıcılara 
kapsamlı br rehberlk sağlamaktır. Uygulamada entegre edlen yapay zekâ modülü, 
kullanıcıların sağlıklı yaşamla lgl sorularına anlık olarak yanıt vereblmekte ve 
görsel tanıma sstem sayesnde br yyeceğn kalor ve besn değerlern otomatk 
olarak belrleyp lgl tarfler önereblmektedr. 
ABSTRACT 
In ths thess, a moble applcaton named “Cartol” was developed to meet the 
needs of users n the feld of healthy lvng and nutrton. The man purpose of the 
applcaton s to calculate daly calore and water needs, to support the nutrton 
process wth personalzed recommendatons and to provde comprehensve 
gudance to users wth recpe nformaton as well as calore, fat, proten, 
carbohydrate values of foods. The artfcal ntellgence module ntegrated n the 
applcaton can nstantly respond to users' questons about healthy lvng and 
automatcally determne the calore and nutrtonal values of a food and recommend 
the relevant recpes thanks to the vsual recognton system. 
1.GİRİŞ 
Sağlıklı yaşam ve dengel beslenme, günümüzün en öneml konularından br 
hâlne gelmştr. Teknolojnn hızla gelşmes ve akıllı telefonların yaygın kullanımı, 
sağlıklı beslenme ve yaşam tarzı alışkanlıklarının takbne yönelk mobl 
uygulamaların artmasına yol açmıştır. Özellkle gün çersnde alınan ve yakılan 
kalornn doğru şeklde hesaplanması, günlük su tüketmnn düzenlenmes, 
besnlern çerdğ değerlern blnmes gb unsurlar, kullanıcıların daha blnçl hareket 
etmesn sağlamaktadır. Bu çalışma kapsamında gelştrlen  Cartol  sml mobl 
uygulama, günlük kalor ve su htyacı hesaplamadan, yapay zekâ desteğyle besn 
tanıma ve sağlıkla lgl soru-cevap özellğne kadar çeştl modüller sunarak 
kullanıcılara kapsamlı br rehber olmayı hedeflemektedr. 
1.1. Tezn Amacı ve Önem 
Bu tez çalışmasının temel amacı, kullanıcıların sağlık ve beslenme 
htyaçlarını tek br mobl platformda karşılayablecekler br uygulama gelştrmektr. 
Uygulama; günlük kalor hesabını otomatk olarak yapma, yakılması gereken kalor 
mktarını hesaplayablme, günlük su tüketm çn kşselleştrlmş önerler sunma ve 
kullanıcıların tüketmey düşündükler gıdaların tarflerne ve besn değerlerne 
kolayca ulaşma gb olanaklar sağlamaktadır. Ayrıca, uygulama çnde yer alan yapay 
zekâ tabanlı modül, kullanıcıların sağlıkla lgl sorularına anlık olarak yanıt verme, 
gıdaların görüntülern analz ederek kalor ve besn değer blgs sunma ve lgl 
yemek tarflern önereblme gb gelşmş özellklere sahptr. 
Bu tez çalışması, djtal sağlık alanındak mevcut boşlukları ve kullanıcıların 
sık karşılaştığı sorunları gdermey amaçlamaktadır. Günümüzde brçok kullanıcı, 
sağlıklı yaşam tarzını destekleyc araçlara gereksnm duyarken, doğru veryle 
desteklenmş uygulamaların kısıtlılığı öneml br problem olarak öne çıkmaktadır. 
Dolayısıyla,  Cartol  uygulaması le hem blmsel kaynaklara  dayalı besn ve tarf 
blglern hem de yapay zekâ destekl çözümler tek çatı altında brleştrmek, 
kullanıcıların hayat kaltesn yükseltmenn yanı sıra bu alandak akademk 
çalışmalara da katkı sağlamayı hedeflemektedr. 
1.2. Problem Tanımı 
Teknolojnn gelşmesne rağmen sağlıklı beslenme ve dyet takb konularında 
hâlâ brtakım eksklkler bulunmaktadır. Örneğn, brçok mobl uygulama: 
●  Manuel ver grş  gerektrmekte, bu da kullanıcılar  çn zaman kaybına ve 
ver doğruluğunda sorunlara neden olmaktadır. 
●  Yyeceklern  kalor ve besn değerlern  gösterrken  sınırlı veya güvensz ver 
kaynaklarına dayanmaktadır. 
●  Günlük  su tüketm  takbn bast hatırlatma yöntemleryle  yapmakta ve 
kşselleştrlmş önerler sunmamaktadır. 
●  Yapay zekâ  entegrasyonu sınırlı olduğundan, kullanıcılar  hem hız hem de 
doğruluk açısından tatmn edc sonuçlar alamamaktadır. 
Tüm bu sorunları göz önünde bulundurarak hazırlanan  Cartol  uygulaması; 
kalor, proten, yağ ve karbonhdrat değerlernn kapsamlı şeklde sunulması, günlük 
su htyacının kşsel verler ışığında hesaplanması ve yapay zekâyla sağlanan 
otomatk yyecek tanıma gb özellklerle bu boşluğu doldurmayı amaçlamaktadır. 
1.3. Tezn Kapsamı ve Yöntem 
Bu çalışmada ele alınan kapsam, “Cartol” sml mobl uygulamanın tasarım, 
gelştrme ve değerlendrme aşamalarını çermektedr. Özellkle şu bleşenler 
üzernde durulacaktır: 
●  Fonksyonel Gereksnmler: 
o  Günlük kalor alımı ve su tüketm hesaplama 
o  Besn tarflernn lstelenmes ve besn değerlernn gösterm 
o  Yapay zekâ modülünün, kullanıcıların sağlıkla lgl sorularını 
cevaplaması ve gıda görüntü tanıması 
●  Teknk Altyapı ve Tasarım: 
o  Mobl uygulamanın arayüz ve ver tabanı tasarımı 
o  Görüntü tanıma, makne öğrenmes ve dern öğrenme modellernn 
entegrasyonu 
●  Test ve Değerlendrme: 
o  Uygulamanın fonksyonel, kullanılablrlk ve performans testler 
o  Yapay zekâ modülünün doğruluk ve hız analzler 
o  Kullanıcı ger bldrmlernn toplanması ve değerlendrlmes 
Çalışma yöntemler arasında; lteratür taraması, ntel/ ncel ver toplama 
teknkler, uygulama prototpnn gelştrlmes, test ve yleştrme adımları yer 
almaktadır. Bu sayede, kullanıcıların htyaçlarına uygun, şlerlğ yüksek br çözüm 
ortaya koymak hedeflenmektedr. 
1.4. Tezn Yapısı 
Bu tez, toplam yed ana bölümden oluşmaktadır. 
●  2. LİTERATÜR TARAMASI  bölümünde, sağlıklı beslenme  ve yapay zekâ 
alanındak mevcut çalışmalar le lgl lteratür ncelemes yapılacaktır. 
●  3. TASARIM VE YÖNTEM  bölümünde, Cartol uygulamasının  gereksnmler, 
sstem mmars ve kullanılacak teknolojler detaylandırılacaktır. 
●  4. UYGULAMA GELİŞTİRME SÜRECİ  bölümünde, mobl uygulamanın 
tasarım aşamaları, arayüz gelştrme, yapay zekâ entegrasyonu gb adımlar 
anlatılacaktır. 
●  5. TEST VE DEĞERLENDİRME  bölümünde, uygulamanın fonksyonel  ve 
performans testlerne ek olarak kullanıcı deneym test sonuçlarına yer 
verlecektr. 
●  6. SONUÇLAR VE ÖNERİLER  bölümünde, çalışma sonunda  varılan sonuçlar 
özetlenecek ve gelecekte yapılablecek gelştrmelere dar önerler 
sunulacaktır. 
●  7.UYGULAMAYI ÇALIŞTIRMA ADIMLARI  bölümünde uygulamanın  kaynak 
kodlarına erşen br kşnn projey yerel ortamda nasıl kurup çalıştırableceğ 
açıklanacaktır. Öncelkle Node.js kurulu olması, GtHub deposunun ndrlmes 
(veya klonlanması),  npm i  komutu le bağımlılıkların  yüklenmes ve  npm run 
start  adımıyla Expo üzernden projey çalıştırma sürec  adım adım 
anlatılacaktır. 
●  KAYNAKÇA  bölümünde se tez sürecnde yararlanılan  blmsel kaynaklar, 
destekleyc blgler yer alacaktır. 
Bu çerçevede, Cartol uygulamasının gelştrlmes ve değerlendrlmes 
üzernden sağlıklı beslenme ve yapay zekâ odaklı mobl çözümlern önemn 
vurgulamak, uygulamanın getrdğ yenlkler ortaya koymak ve bu alanda gelecekte 
gerçekleştrlecek çalışmalara ışık tutmak amaçlanmaktadır. 
2. LİTERATÜR TARAMASI 
Bu bölümde, sağlıklı yaşam ve beslenme uygulamalarına dar çalışmalar, 
yapay zekâ tabanlı mobl çözümler ve görüntü tanıma teknklernn kullanım alanları 
ncelenmektedr. Ayrıca, bu araştırmalarda tespt edlen eksklkler ve geleceğe 
yönelk önerler de ele alınarak “Cartol” uygulamasının konumlandırılması 
amaçlanmaktadır. 
2.1. Sağlıklı Yaşam ve Beslenme Uygulamaları 
Sağlıklı beslenme alışkanlıklarının yaygınlaşması, obezte ve kronk 
hastalıklarla mücadele açısından krtk br öneme sahptr. Mobl teknolojlern 
gelşmesyle brlkte, kullanıcıların  günlük kalor  takb  ,  besn değerler ncelemes  , 
su tüketm önerler  gb konularda anlık ver sağlamasına  olanak tanıyan 
uygulamalar hızla yaygınlaşmıştır. 
●  Günlük Kalor ve Besn Takb:  Çeştl araştırmalar,  kalor takbnn 
kullanıcıların yeme davranışlarını dengelemesnde öneml olduğunu 
göstermektedr. Ancak pek çok uygulamada manuel ver grş gerekllğ, 
kullanıcıları uzun vadede uygulamadan uzaklaştıran br faktör olmuştur. 
●  Su Tüketm ve Sağlık Faydaları:  Lteratürde, yeterl  su tüketmnn 
metabolzmayı ve klo kaybını destekledğ vurgulanmaktadır. Bu nedenle 
uygulamalarda su tüketmnn anımsatılması ve kşselleştrlmes, 
kullanıcıların uygulamalara olan bağlılığını artırablmektedr. 
●  Besn Tarfler ve Kşselleştrlmş Önerler:  Kullanıcıların,  sağlıklı yemek 
tarflerne hızlı erşm steğyle beraber, tarflern kalor, yağ, proten ve 
karbonhdrat değerlern öğrenme htyacı da ortaya çıkmıştır. Uygulamalarda 
genellkle tarf paylaşımı yapılmakta ancak çoğu zaman besn değerler eksk 
ya da yeterszdr. 
2.2. Yapay Zekâ Tabanlı Mobl Uygulamalar 
Yapay zekâ (AI), günümüzde brçok alanda olduğu gb mobl sağlık ve 
beslenme uygulamalarında da kullanıcı deneymn zengnleştren en krtk 
unsurlardan br hâlne gelmştr.  Cartol  uygulamasında  da AI tabanlı br yaklaşım 
benmsenmş; uygulamanın temel fonksyonlarından bazıları hazır br AI hzmetnden 
yararlanılarak (  Google Gemn API  ) sağlanmaktadır.  Bu sayede, uygulama 
gelştrme sürecnde sıfırdan br model eğtme zorluğu ve yüksek malyetlern önüne 
geçlrken, aynı zamanda endüstr standardı kabul edlen ler sevye makne 
öğrenmes teknklernden faydalanılmış olmaktadır. 
●  Hazır Model ve API Tabanlı Mmarnn Avantajları: 
o  Kolay Entegrasyon:  Google Gemn gb hazır yapay  zekâ platformları, 
gelştrcler çn API tabanlı entegrasyon kolaylığı sağlamaktadır. Bu 
yaklaşım, gelştrclern karmaşık model eğtm süreçleryle veya 
devasa ver şleme htyaçlarıyla uğraşmadan, hızla prototp oluşturup 
uygulamaya alınmasına mkân tanır. 
o  Gelşmş Doğal Dl İşleme (NLP) Özellkler:  Kullanıcıların  sağlıkla 
lgl sorularını anlayıp doğru cevaplar üreteblmek veya önerlerde 
bulunablmek çn gelşmş NLP algortmaları gerekmektedr. Google 
Gemn API, büyük ölçekl ver setler le eğtldğnden, farklı dllerde ve 
çeştl konularda yüksek doğruluk oranına sahp cevaplar sunmaya 
yardımcı olur. 
o  Sürekl Güncellenen Model:  Hazır hzmet sağlayıcılar,  modellern 
düzenl olarak güncelledklernden, uygulama gelştrcler model 
güncellemeler veya yleştrmeleryle manuel olarak lglenmek zorunda 
kalmazlar. Böylece, uygulama  her zaman  en yen ve  en gelşmş 
sürümden yararlanablr. 
o  Kaynak Yönetm ve Malyet:  Sıfırdan br model eğtmek,  yüksek 
şlem gücü ve genş br ver altyapısı gerektrr. Hazır API’ler, 
ölçekleneblrlk ve operasyonel malyetler yönetme açısından daha 
uygun br alternatf sunarak, uygulama gelştrclern odağını temel 
şlevsellğe ve kullanıcı deneymne yönlendrmesne olanak tanır. 
●  Kullanıcıyla Etkleşml Soru-Cevap ve Danışmanlık Hzmet: 
o  Kşselleştrme:  Google Gemn gb gelşmş AI modeller, 
kullanıcıların kısa fadeler veya sorularıyla dah anlamlı ve 
kşselleştrlmş yanıtlar üreteblr. Bu özellkle sağlık, dyet ve egzersz 
önerlernde anında destek sağlayarak kullanıcı memnunyetn artırır. 
o  Gerçek Zamanlı İletşm:  Uygulama, nternet bağlantısının  bulunduğu 
her yerde anlık olarak API’ye stek yapıp cevap alablr; böylece 
kullanıcı, 7/24 sürekl br dyetsyen veya sağlık danışmanı desteğ 
alıyormuş gb hsseder. 
●  Görüntü Tanıma ve Ver Analz: 
o  Google Gemn API veya benzer platformların görüntü tanıma 
yetenekler, çeştl gıdaların fotoğraflarını analz ederek kalor tahmn, 
besn değer blgs gb verler hızlı ve büyük oranda doğru br şeklde 
sağlayablr. 
o  Kullanıcı, telefon kamerasıyla herhang br yyeceğn fotoğrafını 
çektğnde, uygulama bu görüntüyü Gemn API’ye göndererek 
tanımlama ve besn değerler analz sonuçlarını anında ger döndürür. 
Bu sayede, kullanıcıların manuel besn kaydı yapma gereksnm azalır. 
Bu kapsamda, “Cartol” uygulamasının yapay zekâ entegrasyonu,  Google 
Gemn API  gb hazır ve güçlü br modeln kullanımını  temel almaktadır. Bu 
yaklaşım, uygulamanın hızlı prototplenmesn ve kullanıcılar çn gelşmş br 
deneym sunmasını mümkün kılmaktadır. AI modülüne at dern öğrenme 
algortmaları veya eğtlmş modeller, tamamen Google’ın bulut tabanlı altyapısında 
bulunmakta; gelştrc ekbn yapması gereken tek şey, API aracılığıyla bu hzmete 
bağlanmak ve gelen sonuçları uygulama ara yüzüne uyarlamaktır. 
2.3. Lteratürde Karşılaşılan Eksklkler ve İhtyaçlar 
Özetlenen çalışmalar, sağlıklı beslenme uygulamalarında  otomasyon  ,  doğru 
ver sağlama  ve  kullanıcı deneym  konularına dar  öneml blgler sunmaktadır. 
Buna rağmen aşağıdak eksklkler, gelştrlecek yen uygulama ve projeler çn 
fırsatlar barındırmaktadır: 
●  Manuel Ver Grş ve Kullanıcı Motvasyonu:  Brçok  uygulamada hâlâ 
manuel ver grş gereksnm, kullanıcıların uzun vadede uygulamaları 
bırakmasına yol açmaktadır. 
●  Kısıtlı Yapay Zekâ Entegrasyonu:  Mevcut uygulamaların  çoğunda AI, 
yalnızca temel soru-cevap veya öner sstemleryle sınırlıdır. Görüntü tanıma 
veya ler düzey kşselleştrme gb alanlarda ekskler mevcuttur. 
●  Kapsamlı Besn Ver Tabanı Eksklğ:  Yyeceklern  kalor, karbonhdrat, 
proten ve yağ mktarlarını çeren güncel, güvenlr ve genş br ver tabanına 
erşmek çoğu zaman zordur. Bu durum hem uygulamaların doğruluğunu 
düşürür hem de kullanıcı memnunyetn azaltır. 
●  Gerçek Zamanlı Ger Bldrm:  Kullanıcıların anlık  olarak aldıkları ger 
bldrmlern yetersz olması, sağlıklı yaşam uygulamalarının etkllğn 
sınırlandırmaktadır. 
2.4. “Cartol” Uygulamasının Lteratürdek Konumu 
“Cartol” uygulaması, lteratürde sıkça değnlen şu temel sorunlara çözümler 
getrmey hedeflemektedr: 
●  Otomatk Kalor ve Su Hesaplama:  Kullanıcılara günlük  kalor alımını ve su 
htyacını hatırlatarak hem zaman tasarrufu sağlamayı hem de uzun sürel 
kullanım motvasyonu yaratmayı amaçlar. 
●  Yapay Zekâ Destekl Analz:  Sağlıkla lgl sorulara  anlık cevap vereblme, 
fotoğrafı çeklen yyeceğn kalor ve besn değern tahmn etme gb şlevlerle 
mevcut uygulamalardak eksklğ gdermey hedefler. 
●  Reçete ve Besn Değerler Ver tabanı:  Tarf ve besn  değerler ver 
tabanının kullanıcı dostu şeklde sunulması, sağlıklı beslenme alışkanlıklarının 
kazanılmasını ve sürdürüleblr olmasını kolaylaştırır. 
●  Gerçek Zamanlı Destek:  Uygulama, kullanıcılara yyecek  tanıma ve 
soru-cevap modüllern gerçek zamanlı olarak sunarak, etkleşm sürekl kılan 
br deneym yaşatmayı amaçlamaktadır. 
Bu bağlamda, “Cartol” projes hem lteratürde değnlen problemlern 
çözümüne katkı sağlamakta hem de yen nesl mobl uygulamalarda yapay zekâ 
entegrasyonunun nasıl daha etkn kullanılableceğne dar br örnek model 
sunmaktadır. Br sonrak bölümde, uygulamanın gelştrlmes aşamasında zlenen 
yöntemler, sstem mmars ve teknk detaylar açıklanacaktır. 
3. TASARIM VE YÖNTEM 
Bu bölümde, “Cartol” mobl uygulamasının gelştrlmes çn terch edlen 
teknolojler, genel yazılım mmars ve kullanılan kütüphane/servslern entegrasyon 
yöntemler açıklanmaktadır. “Cartol”, sağlıklı yaşam ve beslenme odağında, 
kullanıcıların günlük kalor le su tüketm takbn yapablmesne, besn değerlerne 
erşp tarfler nceleyeblmesne ve yapay zekâ desteğyle gıda tanıma/kalor 
hesaplaması yapablmesne mkân tanıyan br mobl uygulamadır. 
3.1. Gelştrme Ortamı ve Terch Edlen Teknoloj ler 
3.1.1. React Natve ve Expo 
●  React Natve:  “Cartol” uygulamasının temeln oluşturan  React Natve, 
JavaScrpt/TypeScrpt le  Androd  ve  OS  çn tek  kod tabanından uygulama 
gelştrmey mümkün kılan br çerçevedr. React Natve’n esnek yapısı ve 
güçlü topluluk desteğ, hızlı prototpleme ve kolay hata gderme süreçler 
sunmuştur. 
●  Expo:  Bu proje kapsamında, React Natve uygulamasını  daha kolay 
yapılandırmak ve test etmek adına  Expo  platformu kullanılmıştır.  Expo, 
kamera erşm, konum blgs, push bldrmler gb mobl chaz özellklern 
hızlıca projeye dahl edeblecek  API paketler  sunar.  Ayrıca, Expo Go 
uygulaması le gerçek chaz üzernde anlık test yapma olanağı, gelştrme 
sürecn öneml ölçüde hızlandırmıştır. 
3.1.2. Clerk le Kmlk Doğrulama (Auth) 
●  Clerk:  Uygulamanın grş (logn) ve kayıt (sgnup)  süreçlernde  kullanıcı 
kmlk doğrulamasını (authentcaton)  yönetmek amacıyla  Clerk hzmet 
kullanılmıştır. Clerk, e-posta/şfre veya sosyal medya hesaplarıyla grş 
seçeneğ sunarak, kullanıcı verlern güvenl bçmde saklar ve yönetr. 
o  Kolay Entegrasyon:  React Natve uygulamasına Clerk’n  sağladığı 
SDK  üzernden bağlanılarak, kullanıcının oturum açması,  oturum 
doğrulaması ve şfre sıfırlama gb şlemler tek kod tabanıyla 
yönetlmştr. 
o  Güvenlk ve Ver Gzl lğ:  Clerk, şfrelern güvenl  saklanmasını ve 
JWT (JSON Web Token) le kullanıcı oturumlarının doğrulanmasını 
sağlar. Böylelkle, uygulama ek br sunucu katmanına gerek duymadan 
güvenlr  br auth altyapısı kazanmıştır. 
3.1.3. Frebase le Ver Depolama 
●  Frebase:  Kullanıcıların dyet geçmş, yemek tarfler  ve gıdaların besn 
değerler gb verler,  Frebase  altyapısında saklanmaktadır.  Genş br 
ölçekleneblrlğe sahp olması ve gerçek zamanlı ver senkronzasyonu gb 
özellkler nedenyle, Frebase uygulamanın temel ver tabanını oluşturmuştur. 
o  Cloud Frestore:  Projedek kullanıcı verler (profl  blgler, günlük 
kalor/su tüketm) ve yemek tarf verler, Cloud Frestore üzernde 
doküman-temell br yapı halnde depolanır. 
o  Gerçek Zamanlı Güncelleme:  Kullanıcının ekledğ veya  güncelledğ 
öğün blgler, dğer modüllerle  senkron  şeklde anında  paylaşılablr; 
böylece kalor hesaplayıcı veya su tüketm takvm gb ekranlar, 
kullanıcının müdahales olmaksızın otomatk yenlenr. 
3.1.4. Gemn API le Yapay Zekâ (AI) Entegrasyonu 
●  Gemn API:  Uygulamanın yapay zekâ modülü, Google  tarafından sağlanan 
Gemn API veya benzer br hazır büyük dl model hzmetne yapılan  API 
stekler  üzernden çalışır. 
o  Sağlık Soru-Cevap Modülü:  Kullanıcılar, sağlıklı beslenme,  dyet ve 
egzersz önerler gb konularda uygulama ç sohbet penceresne 
sorular yönelteblr. Bu sorular, Gemn API aracılığıyla şlenerek anlık 
ve kşselleştrlmş yanıtlar üretlr. 
o  Görüntü Analz / Tanıma:  Kullanıcı, gıdanın fotoğrafını  uygulama 
aracılığıyla çektğnde bu görsel Gemn API’ye gönderlr. Ardından, 
tanınan gıdanın yaklaşık kalor değer ve besn çerğ hesaplanarak 
kullanıcıya sunulur. 
o  Hazır Model Kullanımı:  Kend yapay zekâ modeln eğtme  gereksnm 
ortadan kalkar; API sağlayıcısı, güncel ve büyük ver setleryle 
beslenmş modeller sürekl güncelleyerek yüksek doğruluk oranları 
elde etmeye mkân tanır. 
3.2. Yazılım Gelştrme Sürec 
Projenn gelştrm,  çevk (Agle)  yöntem benmsenerek  yürütülmüştür. 
Yaklaşık 2-3 haftalık sprntler şeklnde yapılandırılan bu süreç, her sprnt sonunda 
çalışan br prototp ortaya koymayı ve kullanıcı ger bldrmleryle sürekl yleştrme 
yapmayı amaçlamıştır. 
1.  Analz ve İş Lstes Oluşturma (User Stores): 
a.  Kullanıcıların temel htyaçları, “günlük kalor takb”, “sağlık soruları 
sorma”, “yemeklern kalor değer öğrenme” vb. başlıklara ayrılmış, her 
br ş kalem çn hedefler belrlenmştr. 
2.  Arayüz Tasarımı (UI/UX): 
a.  Fgma veya benzer br arayüz prototpleme aracı kullanılarak, Expo ve 
React Natve le örtüşecek şeklde sade, anlaşılır ve dnamk ekran 
tasarımları oluşturulmuştur. 
3.  Gelştrme (Development): 
a.  React Natve  kullanarak modüler br yapı oluşturulmuş,  Clerk le 
kullanıcı kmlk doğrulama akışı entegre edlmştr. 
b.  Frebase  le vertabanı etkleşm (Cloud Frestore)  sağlanmış; yemek 
tarfler, kullanıcı profller ve günlük kalor kayıtlarının saklanması çn 
gerekl koleksyonlar ve dokümanlar tanımlanmıştır. 
c.  Gemn API  le yapay zekâ (soru-cevap ve görüntü tanıma)  özellkler 
eklenmş, kullanıcıdan gelen steklere gerçek zamanlı yanıt veren 
şlevler yazılmıştır. 
4.  Test ve Debuggng: 
a.  Brleştrme (Integraton) Testler:  Clerk, Frebase  ve Gemn API 
arasında ver alışverşnde çıkablecek sorunlar tespt edlerek 
gderlmştr. 
b.  Brm Testler (Unt Tests):  Uygulamanın temel modüllerndek 
fonksyonlar (ör. kalor hesaplama, ver çekme) test edlmştr. 
c.  Kullanıcı Deneym Testler (UX):  Plot kullanıcı  grupları, arayüz akışı 
ve yapay zekâ modülünün doğruluğu hakkında ger bldrm vermş, 
arayüz yleştrmeler bu dönütler ışığında yapılmıştır. 
5.  Dağıtım (Deployment) ve Sürüm Yönetm: 
a.  Expo ve React Natve yapısı, uygulamanın Androd ve OS 
mağazalarına dağıtımını kolaylaştırmıştır. 
b.  Sürüm notları, hata düzeltmeler ve yen özellklern eklenmes gb 
aşamalar sürekl entegrasyon (CI) ve sürekl teslm (CD) kültürüne 
uygun şeklde yönetlmştr. 
3.3. Mmar Yapı ve Ver Akışı 
Aşağıdak örnek akış dyagramı (metn formatında özetlenmştr) uygulamanın 
React Natve tarafı le bulut servsler arasındak etkleşm göstermektedr: 
1.  Kullanıcı  -> (Clerk) ->  Grş/Kayıt 
a.  Kullanıcı, Clerk altyapısı aracılığıyla oturum açar. 
2.  Mobl Uygulama (React Natve/Expo)  <->  Frebase 
a.  Kullanıcı, kalor grşlern veya besn değerler ekleme şlemlern 
gerçekleştrdğnde bu verler Frebase Cloud Frestore’da saklanır ve 
gerçek zamanlı olarak güncellenr. 
3.  Mobl Uygulama (React Natve/Expo)  ->  Gemn API 
a.  Kullanıcı br gıdanın fotoğrafını çektğnde veya sağlıkla lgl soru 
sorduğunda, stek Gemn API’ye gönderlr. 
b.  API’den gelen cevap (ör. gıda türü, kalor blgs veya soru-cevap 
sonuçları), uygulama arayüzünde gösterlr. 
3.4. Neden Bu Teknoloj ler? 
1.  React Natve + Expo: 
a.  Çapraz Platform Desteğ:  Hem OS hem de Androd çn  tek kod 
tabanıyla gelştrme olanağı, bakım kolaylığı sağlar. 
b.  Hızlı Gelştrme Sürec:  Lve Reload ve Expo Go gb  araçlar 
sayesnde prototpler hızlıca test etmek mümkündür. 
2.  Clerk: 
a.  Güvenlr Kmlk Doğrulama:  Şfre yönetm, e-posta  onayı veya 
sosyal medya entegrasyonu gb karmaşık şlemler bast br paketle 
sunar. 
b.  Hazır Arayüz Bleşenler:  Kullanıcı grş ve kayıt  ekranlarını hızla 
oluşturmayı mümkün kılar. 
3.  Frebase (Cloud Frestore): 
a.  Gerçek Zamanlı Ver Senkronzasyonu:  Kullanıcının  ekledğ veya 
güncelledğ verler, tüm chazlarda anında senkronze olur. 
b.  Kolay Yönetm ve Otomatk Ölçekleneblrlk:  Start-up  ve projeler 
çn sunucu yönetme htyacını büyük ölçüde ortadan kaldırır. 
4.  Gemn API (AI Hzmet): 
a.  Hazır Modeln Gücü:  Kapsamlı verlerle eğtlmş,  gelşmş doğal dl 
şleme ve görüntü tanıma yetenekler sunar. 
b.  Sürekl Güncellenen Altyapı:  Yen sürümler ve yleştrmeler, 
uygulamaya otomatk olarak yansır ve yüksek doğruluk oranı elde 
edlr. 
3.5. Son Değerlendrme 
Uygulamada kullanılan React Natve, Expo, Clerk, Frebase ve Gemn API 
teknolojler, “Cartol”un  hızlı prototpleme  ,  kolay  entegrasyon  ve  güçlü yapay 
zekâ  yetenekler sunmasını sağlamıştır. Gelştrme  sürecnde, kullanıcı ger 
bldrmler dkkate alınarak grş-kayıt akışı, ver saklama, gerçek zamanlı kalor/su 
tüketm takb ve AI modülü arasındak şlevler sürekl yleştrlmştr. Bu modüler 
mmar sayesnde, uygulamanın lerleyen sürümlernde yen özellklern eklenmes 
(ör. farklı dyet programları, gelşmş egzersz takb) kolayca gerçekleştrlmes 
hedeflenmektedr. 
Br sonrak bölümde,  Cartol  uygulamasının gelştrme  sürecnde oluşturulan 
modüller ve test aşamaları daha detaylı ele alınacak; ardından elde edlen bulgular 
ve kullanıcı ger bldrmler ışığında uygulamanın etkllğ değerlendrlecektr. 
4. UYGULAMA GELİŞTİRME SÜRECİ 
Bu bölümde, “Cartol” uygulamasının ekranları, etkleşm akışları ve her br 
bleşenn gelştrlme sürec ayrıntılı şeklde ele alınmaktadır. Uygulama; React Natve 
ve Expo çerçeveler kullanılarak gelştrlmş, kmlk doğrulama çn Clerk, ver 
saklama çn Frebase, yapay zekâ odaklı fonksyonlar çn se Gemn API’den 
yararlanmıştır. Aşağıda, ekranlar kronolojk br mantıkla açıklanmaktadır. 
*logo.png 
*splashScreen.jsx 
4.1. Başlangıç Ekranı (startScreen.jsx) 
Uygulama lk açıldığında, kullanıcıyı  Başlangıç Ekranı  karşılamaktadır. 
Burada k temel senaryo bulunmaktadır: 
1.  Oturum Açmamış Kullanıcı: 
a.  Ekranda k buton yer alır: 
.  “Zaten Br Hesabım Var” 
.  “Yen Kullanıcıyım” 
b.  Bu seçm, kullanıcının hang ekrana yönlendrleceğn belrlemektedr: 
.  “Zaten Br Hesabım Var” butonuna tıklayan kullanıcı  Grş 
Ekranı  na, 
.  “Yen Kullanıcıyım” butonuna tıklayan kullanıcı se  Yen 
Kullanıcı  ekranına yönlendrlr. 
2.  Oturum Açmış Kullanıcı: 
a.  Eğer Clerk üzernden zaten grş yapmış br kullanıcı varsa, ekranda 
“Tekrardan Hoş Geldnz”  mesajı le  “Çıkış Yap”  butonu  görüntülenr. 
b.  Kullanıcı sterse uygulamaya kaldığı yerden devam eder veya logout 
butonuna basarak hesabından çıkış yapablr. 
Bu yaklaşım, uygulamanın kullanıcıya bast ve doğrudan br navgasyon 
sunmasını sağlar. Ayrıca oturum açmış ve açmamış kullanıcılar çn farklı ekranları 
dnamk olarak göstermek, kullanıcı deneymn (UX) kşselleştrerek hız kazandırır. 
4.2. Grş Ekranı (sgnIn.jsx) 
Grş Ekranı  , “Zaten Br Hesabım Var” butonuna tıklayan kullanıcıya sunulur 
ve  e-posta  ,  şfre  grş le  “Şfrem Unuttum”  bağlantısını  çerr. Ayrıca, sosyal 
medya hesapları (Google, Apple, Facebook) üzernden de hızlı grş yapılablr. Bu 
şlem tamamen  Clerk  üzernden yönetlmektedr. 
1.  E-posta / Şfre Grş 
a.  Kullanıcının form valdasyonu (doğru e-posta formatı, mnmum şfre 
uzunluğu vb.) yapılır. 
b.  Form verler Clerk API’ye gönderlerek kmlk doğrulaması sağlanır. 
c.  Başarılı oturum açmada kullanıcı  Home Ekranı  na yönlendrlr;  hata 
durumunda se ekranda anlamlı hata mesajları görüntülenr. 
2.  Şfrem Unuttum 
a.  Kullanıcı bu bağlantıya tıkladığında, Clerk üzernden  e-posta kod 
doğrulaması  veya benzer br mekanzmayla şfre yenleme  adımları 
başlar. 
b.  Başarılı br şfre yenleme sonrasında kullanıcı tekrar Grş Ekranı’na 
döner. 
3.  Sosyal Medya Grş Butonları 
a.  Google, Apple ve Facebook üzernden hızlı oturum açma sağlanır. 
b.  Clerk, bu sosyal sağlayıcılardan gelen kullanıcı blglern güvenl br 
şeklde yönetr ve uygulamaya dönen kullanıcıya at kmlk doğrulama 
jetonlarını saklar. 
4.3. Kayıt Ekranı (newUser.jsx - sgnUp.jsx) 
Kayıt Ekranı  , “Yen Kullanıcıyım” dyen kşnn uygulamayla lk defa tanıştığı 
aşamadır ve k temel adımdan oluşur: 
1.  Kullanıcı Blgler Ekranı 
a.  Kullanıcı, kendsyle lgl ön blgler grer:  İsm,  Boy, Klo, Yaş, 
Cnsyet, Klo Hedef ve Aktvte Sevyes  . 
b.  Bu blglern amacı, kullanıcının günlük htyacı olan  kalor, 
karbonhdrat, yağ ve proten  değerlern daha doğru 
hesaplayablmektr. 
c.  Kullanıcı, bu blgler tamamladıktan sonra  kayıt  ekranına  yönlendrlr. 
2.  Kayıt (Sgn-Up) Formu 
a.  Kullanıcı,  kullanıcı adı, e-posta, şfre ve şfre  tekrar  gb alanları 
doldurur. 
b.  Aynı zamanda Google, Apple ve Facebook butonları üzernden de 
kayıt (veya oturum açma) mümkündür. 
c.  Üye ol butonuna basıldığında, Clerk aracılığıyla kullanıcı hesabı 
oluşturulur.  Clerk’n döndürdüğü kullanıcı ID  , uygulamanın  ver 
tabanında (Frebase) kullanıcıya at belgelern (document) eşleştrlmes 
çn kullanılır. 
d.  Başarılı kayıt sonrasında, uygulama kullanıcının günlük alması gereken 
kalor, karbonhdrat, yağ ve proten  değerlern hesaplayarak 
Frebase  üzernde  users  koleksyonunda br kayıt (document) 
oluşturur. 
e.  Kullanıcı, otomatk olarak  Home Ekranı  na yönlendrlr. 
Bu k aşamalı sürecn ayrıştırılması, uygulamaya esneklk kazandırır. 
Kullanıcı, kşsel verleryle lgl kısımda düşünerek en doğru blgy greblr, ardından 
hesap oluşturma adımına geçp Clerk üzernden kmlk doğrulamasını tamamlarken, 
teknk altyapı da Frebase tarafında kullanıcının makrolarını hesaplayıp saklayablr. 
*newUser.jsx ekranından kullanıcı blglern alma 
*sgnUp.js Ekranı, kullanıcı blgler global br değşken le bu ekrana aktarılır. 
Kullanıcı üye olduktan sonra otomatk olarak günlük kalor ve makro değerler 
hesaplanır 
*global tutulan tüm değşkenler 
 *kullanıcıdan alınan tüm değerler uygun formüllerle eşlenr ve kşnn tüm htyaçları 
 çıkarılır (su, kalor ve makro değerler vb.) 
 *alınan tüm değerler userData adındak br objenn çersne eklenr 
 *ardından frebase üzernde yen br kullanıcı oluşturulmak üzere addUserData 
 fonksyonu çağırılır 
4.4. Home Ekranı (home.jsx) 
Home Ekranı  , kullanıcının günlük ve genel sağlık verlern  takp edebleceğ 
merkezî bölümdür. Aşağıdak unsurları çerr: 
1.  Kalor ve Makro Besn Değerler 
a.  Kullanıcının gün çersnde  aldığı  ve  yakması gereken  kalor mktarı 
gerçek zamanlı olarak görüntülenr. 
b.  Toplam  proten, yağ ve karbonhdrat  değerler; kullanıcının  tükettğ 
öğünlerden ve kaydettğ fzksel aktvtelerden gelen verlere göre 
güncellenr. 
2.  Su Tüketm Takb 
a.  Kullanıcının  çtğ  ve  çmes gereken  su mktarı gösterlr. 
b.  Uygun br buton veya seçme arayüzü le su tüketm mktarı (ör. 200 ml, 
500 ml) kolayca ekleneblr. 
3.  Öğün Yönetm (Sabah, Öğle, Akşam) 
a.  Üç ayrı buton veya sekme,  sabah, öğle ve akşam  öğünler  çn 
tasarlanmıştır. 
b.  Kullanıcı, bu öğünlerde yedğ yemekler seçtğnde, Frebase’dek 
meals  koleksyonundak besn değerlerne göre lgl  makro değerler 
(kalor, yağ, proten, karbonhdrat)  otomatk  olarak  toplanır. 
4.  Boy ve Klo Takb 
a.  Uygulama, kullanıcının peryodk olarak boy ve klo grmesn steyeblr 
(veya boy sabt kalablr). 
b.  Bu değerler, tablolar veya grafkler şeklnde kullanıcıya sunularak 
lerleme takb  sağlar. 
Home Ekranı, uygulamanın en çok etkleşme grlen alanı olup kullanıcıya, 
sağlıklı beslenme hedeflerne dar gerçek zamanlı ger bldrm sunmayı amaçlar. 
 *freBase panelnn br görsel, her br değer realtme olarak güncelleneblr, 
 ekleneblr ve slneblr (userID değerler clerk üzernden alınmıştır) 
 *ana sayada tüm kullancı değerler güncelleneblr, ekleneblr ve slneblr 
*850ml su eklendkten sonra progressBar’ın görünümü (realtme olarak değşr) 
*takp edleblr boy ve klo lneCart’ları bu şeklde gözükür (realtme olarak değşr) 
4.5. Tarfler Ekranı (recpe.jsx) 
Tarfler Ekranı  , kullanıcının  Frebase  üzernde yer  alan  meals 
koleksyonundak yemek tarflerne ulaşmasını sağlar. Tarfler,  kahvaltı (breakfast)  , 
öğle yemeğ (lunch)  ve  akşam yemeğ (dnner)  şeklnde  kategorze edlr. 
1.  Tarf Lstes ve Arama (Search Bar) 
a.  Kullanıcı, ekranda tüm tarfler sıralı bçmde göreblr veya arama 
çubuğuna (search bar) yemek sm grerek lgl tarfler hızlıca bulablr. 
b.  İsterse sabah, öğle, akşam şeklnde  kategor  bazlı  fltre de 
uygulayablr. 
2.  Yemek Detayları 
a.  Br yemeğe tıklayan kullanıcı,  malzemeler, yapılışı  (hazırlama 
adımları)  ve  toplam kalor, yağ, proten, karbonhdrat  değerlern 
görüntüler. 
b.  Kullanıcı, bu tarf beğenrse doğrudan lgl öğüne ekleyerek kend 
günlük takbne yansıtablr. 
Bu özellk, kullanıcıların yen tarfler keşfetmesn, aynı zamanda öğünlern 
planlarken uygulama çndek ver tabanından yararlanmalarını kolaylaştırır. 
*kategorleştrleblr tarfler ekranı 
*yemekler searchBar’da aratılablr ve her br yemek toplam kalor ve makro değerler 
le brlkte çağırılır 
* freBase panelnn br görsel, her br değer realtme olarak güncelleneblr, 
ekleneblr ve slneblr 
4.6. AI Ekranı 
AI Ekranı  , uygulamanın  Gemn API  le entegrasyonunun  en yoğun şeklde 
kullanıldığı ekrandır. Kullanıcı, metn tabanlı veya görsel tabanlı sorgularını yapay 
zekâya letr. 
1.  Metn Tabanlı Sohbet (Chat) 
a.  Kullanıcı,  sağlık, beslenme, egzersz  gb konularda  sorularını yazılı 
olarak sorablr. 
b.  Gemn API, doğal dl şleme (NLP) yetenekler sayesnde 
kşselleştrlmş önerler  ,  genel tıbb blglendrmeler  veya  dyet 
puçları  vereblr. 
c.  Örneğn: “Başım ağrıyor, ne yapmamı önerrsn?” şeklnde br soruya 
yapay zekâ genel tavsyelerle yanıt verr. 
2.  Görüntü Analz 
a.  Kullanıcı, kamera veya galerden br fotoğraf yükleyerek  yemeğn 
kalor  ve  besn değerler  hakkında blg alablr. 
b.  Yapay zekâ, yemeğn  malzemelern  ve  yapılışını  da  tahmn edeblr. 
Örneğn, “Zencefl kabuklarıyla çay nasıl yapılır?” sorusunu görsel ya 
da metn şeklnde lettğnde, kullanıcıya adım adım tarf öners 
sunablr. 
3.  Sağlık Danışmanlığı 
a.  Uygulama, laçlarla veya genel sağlık durumlarıyla lgl temel 
blglendrme yapablr. Örneğn: “Bu laç hang durumlarda kullanılır?” 
veya “Günde kaç kez alınmalı?” gb sorular. 
b.  Kullanıcının htyaç duyableceğ medkal blglendrmelerde dama 
“doktor veya eczacıya danışılması” yönünde uyarılar eklenr. Böylece, 
uygulama yasal ve etk sorumluluklarını da yerne getrr. 
AI Ekranı, “Cartol”un en yenlkç modüllernden br olup, kullanıcı etkleşmn 
artırarak uygulamayı klask br kalor sayacının ötesne taşımaktadır. 
*portakal kabuklarının sağlık açısından neye y geldğn söyler 
*yüklenen yemeğn tam olarak açıklaması (tarf, malzemeler, kalor ve makro 
değerler) 
4.7. Arayüz Frontları: Tab Bar ve Drawer 
Uygulamadak ekranlar arasında sezgsel ve hızlı br geçş sağlamak amacıyla 
Tab Bar  ve  Drawer  gb temel navgasyon bleşenler  kullanılmıştır. Bu bleşenler, 
kullanıcı deneymn gelştrmek ve uygulamaya daha dnamk br görünüm 
kazandırmak adına  anmasyonlu geçşler  le zengnleştrlmştr. 
1.  Tab Bar (Sekme Çubuğu) 
a.  Ana Sekmeler:  Kullanıcı, Tab Bar üzernden sık kullanılan  ekranlara 
(Home, Tarfler, AI) tek dokunuşla geçş yapablr. Sekme konu ve 
metn etket, seçl sekmeye dkkat çekecek şeklde anmasyonlu olarak 
vurgulanır. 
b.  Anmasyonlu Geçşler:  Kullanıcı br sekmeden dğerne  geçerken 
butonun büyümes ya da reng değşmes gb küçük anmasyonlar 
uygulanmıştır. Bu, hem ekran geçşlernn daha akıcı görünmesn 
sağlar hem de uygulamaya modern br hs katar. 
c.  Durum Blgs (Badge vb.):  Eğer lgl sekmede okunmamış  bldrm 
veya güncel br görev varsa (ör. kullanıcı çn yen br yapay zekâ 
öners), bu durum küçük br “badge” le anmasyonlu bçmde gösterlr. 
2.  Drawer (Yan Menü) 
a.  Hızlı Erşm:  Drawer, ekranın sol veya sağ kenarından  çeklerek açılan 
br menü yapısıdır. Kullanıcı, uygulamanın temel fonksyonlarına ve 
ayarlarına (ör. Profl, Ayarlar, Hakkında vb.) buradan hızlıca ulaşablr. 
b.  Anmasyonlu Açılma/Kapanma:  Drawer açılırken haffçe  sayfanın 
yana kayması ve kaydırma (slde-n) efektyle gelmes, kullanıcıya  akıcı 
br geçş deneym sunar. React Natve’de “react-navgaton” veya 
“react-natve-reanmated” gb kütüphaneler kullanılarak kolaylıkla 
dnamk geçşler ve  yumuşak anmasyonlar  ekleneblr. 
c.  Kşselleştrleblr Alanlar:  Drawer çersnde kullanıcının  günün 
saatne göre merhaba mesajı  ,  kullanıcı adı  veya  statstkler 
gösterleblr. Bu verler, Frebase veya Clerk’den anlık olarak çeklp 
güncelleneblr. 
Her k navgasyon bleşennn anmasyonlu olarak tasarlanması, uygulamanın 
görsel tutarlılığını  artırmakla kalmaz, aynı zamanda  kullanıcı dostu ve modern br 
arayüz yaratır. 
Sonuç olarak,  Tab Bar  ve  Drawer  gb etkleşm bleşenler,  “Cartol” 
uygulamasının  ana ekran yapısını  destekleyerek, kullanıcıların  uygulama ç akışları 
hızlı ve keyfl şeklde deneymlemesn mümkün kılar. 
*anmasyonlu br tabBar, sayfa değştrrken kon büyür ve yazı kaybolur 
*anmasyonlu br drawer örneğ, brçok kısayol tool’una kolayca erşleblr 
4.8. Genel Değerlendrme 
Gelştrme sürecnde her ekran,  React Natve ve Expo  ortamında 
tasarlanmış;  Clerk  le kmlk doğrulama,  Frebase  le ver depolama,  Gemn API  le 
yapay zekâ tabanlı özellkler entegre edlmştr. Bu modüler yapı sayesnde, 
uygulamanın sürdürülmes ve yen özellklern eklenmes kolaylaşmaktadır. 
Uygulamadak ekranlar arasındak geçşler, kullanıcı deneymn gelştrmek 
adına mümkün olduğunca akıcı ve sezgsel tutulmuştur. Düzenl testler ve kullanıcı 
ger bldrmler, özellkle başlangıç ve kayıt ekranlarında anlaşılır form valdasyonları 
yapılmasını, tarfler bölümünde kapsamlı fltreleme ve arama özellğ sunulmasını ve 
AI ekranının kullanıcıya ek değer sağlamasını sağlamıştır. 
Sonrak bölümde, uygulamanın test aşamaları ve performans ölçümler ele 
alınacak, ardından elde edlen bulgular ışığında uygulamanın etkl lğ ve kullanıcı 
memnunyet değerlendrlecektr. 
5. TEST VE DEĞERLENDİRME 
Bu bölümde, “Cartol” uygulamasının farklı aşamalarında gerçekleştrlen 
testler ve bu testlerden elde edlen sonuçların değerlendrmes yer almaktadır. 
Uygulamanın temel bleşenler (Grş/Kayıt Ekranları, Home Ekranı, Tarfler Ekranı, AI 
Ekranı) le arka plandak servsler (Clerk, Frebase, Gemn API) üzernde yürütülen 
testler, fonksyonel, kullanılablrlk, performans ve güvenlk boyutlarında ele 
alınmıştır. 
5.1. Test Stratejs 
Uygulamada her modülün aşamalı olarak gelştrlmes sonucu,  teratf  br test 
stratejs benmsenmştr. Gelştrme süresnce kısa aralıklarla  brm testler  , 
modüller arası etkleşmler doğrulamak çn  entegrasyon  testler  ve kullanıcı 
deneymn değerlendrmek amacıyla  kullanılablrlk  testler  gerçekleştrlmştr. 
5.2. Fonksyonel Testler 
5.2.1. Grş ve Kayıt İşlemler 
●  Grş Ekranı (Logn) 
o  Poztf Senaryolar: 
▪  Doğru e-posta ve şfre kombnasyonuyla oturum açılablmes. 
▪  Google, Apple, Facebook gb sosyal hesaplarla sorunsuz grş 
yapılması. 
o  Negatf Senaryolar: 
▪  Yanlış veya kayıtlı olmayan e-posta/şfre grldğnde, anlamlı 
hata mesajının görüntülenmes. 
▪  “Şfrem Unuttum” adımında e-postanın geçerl formatta 
olmaması durumunda ger bldrm verlmes. 
●  Kayıt Ekranı (Sgn-Up) 
o  Kullanıcı Blg Toplama Aşaması:  İsm, boy, klo,  yaş, cnsyet, klo 
hedef ve aktvte sevyes gb blglern doğru formatta alınıp alınmadığı 
test edlmştr. 
o  Kayıt Formu: 
▪  E-posta, kullanıcı adı, şfre ve şfre tekrar alanlarının uygun 
valdasyon kuralları (ör. mnmum şfre uzunluğu) çerçevesnde 
çalışıp çalışmadığı denetlenmştr. 
▪  Google, Apple, Facebook üzernden kaydolma şlemnde 
Clerk’n verdğ kullanıcı ID le Frebase’de document 
oluşturulması doğrulanmıştır. 
o  Ver Tabanı Kayıt Kontrolü: 
▪  Clerk üzernden elde edlen kullanıcı ID’nn, Frebase’de  users 
koleksyonunda benzersz br kayıt oluşturup oluşturmadığı test 
edlmştr. 
▪  Günlük alınması gereken kalor, karbonhdrat, yağ ve proten 
değerlernn hesaplanıp lgl kullanıcı dokümanına kaydedldğ 
senaryo kontrol edlmştr. 
5.2.2. Home Ekranı 
●  Günlük Kalor, Makro Değerler ve Su Tüketm Takb: 
o  Kullanıcı br öğün ekledğnde veya su tüketm mktarını 
güncelledğnde, Frebase üzernde lgl alanların doğru şeklde 
güncellendğ gözlemlenmştr. 
o  Sabah, öğle ve akşam öğün butonlarından seçlen yyeceklern toplam 
kalor, yağ, proten ve karbonhdrat değerlerne otomatk eklenmes 
doğrulanmıştır. 
●  Boy ve Klo Takb: 
o  Kullanıcı, bell aralıklarla klo ölçümünü ekledğnde tabloda veya 
grafktek güncelleme süreçlernn hatasız çalıştığı kontrol edlmştr. 
o  Kullanıcı boy değern güncellemek stedğnde, ver tabanındak kaydın 
da doğru şeklde değştğ gözlemlenmştr. 
5.2.3. Tarfler Ekranı 
●  Tarf Lstes ve Kategorler (Sabah/Öğle/Akşam): 
o  Frebase’dek  meals  koleksyonundak verlern doğru  şeklde çeklmes, 
kahvaltı, öğle ve akşam kategorlerne ayrıştırılması test edlmştr. 
o  Search bar üzernden yapılan sorguların doğru tarflerle eşleşp 
eşleşmedğ kontrol edlmştr. 
●  Tarf Detay Ekranı: 
o  Seçlen tarfn malzeme lstes, yapılış adımları ve makro değerlernn 
eksksz görüntülenp görüntülenmedğ doğrulanmıştır. 
o  Kullanıcının tarf kend öğününe eklemes durumunda, Home 
Ekranı’ndak lgl makro değerlern (kalor, yağ, proten, karbonhdrat) 
anlık olarak güncellenp güncellenmedğ gözlemlenmştr. 
5.2.4. AI Ekranı 
●  Metn Tabanlı Sohbet: 
o  Kullanıcının beslenme, dyet, sağlık konularında yazdığı soruların 
Gemn API’ye gönderlmes, gelen yanıtın uygulamada doğru formatta 
gösterlmes test edlmştr. 
o  Yanıtın beklenmedk şeklde (ör. sunucu hatası) alınamaması hâlnde 
kullanıcıya uygun br hata mesajının letlmes doğrulanmıştır. 
●  Görüntü Analz: 
o  Kamera veya galerden seçlen görseln API’ye gönderlp, yyeceğn 
tanımlanması (kalor ve besn değerlernn tahmn) senaryosu 
denenmştr. 
o  Görseln tanınamaması hâlnde kullanıcıya “tanımlanamadı” benzer 
uyarı dönüp dönmedğ gözlemlenmştr. 
o  Aynı ekranda tarf veya malzemelern gösterlp gösterlmedğ kontrol 
edlmştr. 
5.3. Kullanılablrlk (UX) Testler 
Kullanılablrlk testler  , uygulamanın arayüz tasarımının  kullanıcı 
beklentleryle ne derece örtüştüğünü ve şlevlern erşleblrlk sevyesn ölçmek 
amacıyla gerçekleştrlmştr. 
1.  Navgasyon Akışı: 
a.  Başlangıç Ekranı → Grş veya Kayıt → Home Ekranı → Tarfler / AI 
gb geçşlern sezgsel olup olmadığı ncelenmştr. 
b.  Kullanıcı, menüler (Tab Bar, Drawer) bulmakta veya ekranlar arasında 
geçş yapmakta zorluk yaşamadıklarını belrtmştr. 
2.  Form Doldurma Deneym: 
a.  Kayıt esnasında kşsel blgler ve kullanıcı hesabı oluşturma adımları 
çn kullanılan form alanlarının yeternce açıklayıcı olduğu gözlenmştr. 
b.  Yetersz grlen blglerde veya eksk bırakılan alanlarda uygulamanın 
verdğ hataların (ör. uyarı mesajları) net ve anlaşılır olduğu teyt 
edlmştr. 
3.  Ekran Düzenler ve Anmasyonlar: 
a.  Home Ekranı ve Tarfler Ekranı arasında geçşlerde kullanılan 
anmasyonlu sekmeler ve Drawer açılma efektler, katılımcıların genel 
beğensn kazanmıştır. 
b.  Kullanıcıların büyük br kısmı, anmasyonların uygulamayı  daha 
modern ve kullanıcı dostu  hssettrdğn fade etmştr. 
5.4. Performans Testler 
Performans testler  , uygulamanın farklı koşullar altında  hız ve kararlılık 
göstermesn ncelemek amacıyla yapılmıştır: 
1.  Sunucu Yük Test: 
a.  Aynı anda brden fazla kullanıcının (ör. 50 eşzamanlı) grş-kayıt şlem 
yapması, tarflere göz atması ve AI sorgusu göndermes smüle 
edlmştr. 
b.  Frebase ve Clerk, bu senaryoda ortalama yanıt süres olarak kabul 
edleblr düzeyde (500 ms – 1 sn) performans serglemştr. Gemn API 
üzernden gelen yanıtlar da ortalama 3-4 sanye çnde şleneblmştr. 
2.  Mobl Performans ve Bellek Kullanımı: 
a.  React Natve + Expo üzernde, uzun sürel kullanım sonrası bellekte 
oluşablecek sızıntılar (memory leak) ve çökme (crash) durumları test 
edlmştr. 
b.  Düşük/orta sevye chazlarda uygulamanın açılış süres, ekranlar arası 
geçş hızı ve görsel tanıma süres ölçümlenmş, kabul edleblr br 
performans aralığında sonuçlar alınmıştır. 
3.  AI Görsel Analz Geckmes: 
a.  Kullanıcılar br fotoğraf çekp gönderdğnde API’den dönüş almak 
ortalama 3-4 sanye sürmüştür; bu süre, mobl ağ kaltesne ve görsel 
boyutuna göre 2-12 sanye arasında değşeblmektedr. 
5.5. Güvenlk ve Ver Gzllğ Değerlendrmes 
●  Clerk Entegrasyonu: 
o  Kullanıcı kmlk doğrulama süreçlernde sosyal medya grşler dahl 
şfrelern korunması ve JWT yönetm açısından testler yapılmış, 
potansyel açıklar veya ver sızıntısı rsk tespt edlmemştr. 
●  Frebase Ver Saklama: 
o  Kullanıcıların kşsel verler (sm, boy, klo vb.) Frestore’da  korunaklı 
şeklde tutulmaktadır. Frestore güvenlk kuralları (Frestore Securty 
Rules) uygun şeklde yapılandırılarak sadece yetkl kullanıcının kend 
belgesn okuyup yazmasına zn verlmştr. 
●  API İstekler: 
o  Gemn API le yapılan görüşmelerde HTTPS protokolü kullanılarak ver 
transfer şfrelenr. Görsel veya metnsel verlern sızdırılmaması çn 
gerekl SSL sertfkalarının geçerl olduğu teyt edlmştr. 
5.6. Genel Değerlendrme ve Sonuçlar 
Yapılan tüm testler sonucunda, “Cartol” uygulamasının hedeflenen 
fonksyonları büyük ölçüde  başarılı  br şeklde yerne  getrdğ, kullanıcıların 
uygulamaya dar olumlu ger bldrmlerde bulunduğu görülmüştür. Testlerde öne 
çıkan  başlıca kazanımlar  ve  yleştrme noktaları  şöyledr: 
●  Kazanımlar: 
o  Kayıt ve grş akışı, gerek form valdasyonu gerekse sosyal medya 
entegrasyonuyla sorunsuz çalışmıştır. 
o  Home Ekranı’nın kalor-makro takb ve su tüketm modülü, kullanıcıları 
gerçek zamanlı verlerle destekleyerek beklenen şlevler yerne 
getrmştr. 
o  Tarfler Ekranı’ndak hızlı arama ve kategor fltreleme, kullanıcı 
memnunyetn artırmıştır. 
o  AI Ekranı’nda metn tabanlı sohbet ve görüntü analz, kullanıcıların 
uygulamayı hem eğlencel hem de blglendrc bulmasını sağlamıştır. 
●  İyleştrme Noktaları: 
o  Bazı düşük sevye chazlarda, çok sayıda görsel tanıma steğ 
yapıldığında uygulamanın tepk süresnde (lag) artış olduğu 
gözlemlenmştr. Bu noktada önbellekleme (cachng) ve daha düşük 
çözünürlüklü resm gönderme gb optmzasyonlar düşünüleblr. 
o  Kullanıcılar, Home Ekranı’nda ekranda daha genş br özet görmek 
yerne “dkey kaydırma (scroll)” yapmadan tüm blgler göreblmey 
terch edebleceklern belrtmştr. Bu, tasarımda ekran alanının yenden 
düzenlenmesyle sağlanablr. 
Tüm bu bulgular ışığında, “Cartol” uygulamasının  sağlıklı  beslenme  ve 
yaşam tarzı  alanında kullanıcı dostu ve şlevsel br  çözüm sunduğu onaylanmıştır. 
Br sonrak bölümde, uygulamadan elde edlen  ger  bldrmler,  statstksel verler 
sonuç ve önerler olarak ncelenecek, ardından genel br değerlendrme ve geleceğe 
yönelk önerler sunulacaktır. 
6. SONUÇLAR VE ÖNERİLER 
Bu tez çalışmasında,  Cartol  sml mobl uygulama  gelştrlerek kullanıcıların 
sağlıklı beslenme ve yaşam tarzı takbne yönelk bütüncül br çözüm sunulması 
amaçlanmıştır. Uygulama;  React Natve ve Expo  altyapısı,  Clerk  le kmlk 
doğrulama,  Frebase  le ver saklama ve  Gemn API  üzernden yapay zekâ (AI) 
özellkleryle zengnleştrlmştr. Uygulamanın gelştrlen modüller (grş/kayıt, ev 
(home) ekranı, tarfler ekranı, AI ekranı vb.) ve test süreçler ncelendğnde, elde 
edlen  başlıca sonuçlar  ve  gelecek çalışmalara yönelk  önerler  şu şeklde 
özetleneblr: 
6.1. Genel Değerlendrme 
1.  Kullanıcı Dostu Arayüz: 
a.  Grş, kayıt, öğün ekleme, tarf görüntüleme ve yapay zekâ modüllerne 
at ekranlar, sade ve anlaşılır br tasarımla sunulmuştur. 
b.  Yapılan kullanılablrlk testlernde, kullanıcıların büyük br kısmı 
uygulamanın akıcı navgasyon (Tab Bar, Drawer) ve anmasyonlu 
geçşlern beğendğn belrtmştr. 
2.  Entegre Çözüm Yaklaşımı: 
a.  Uygulama çnde günlük kalor, yağ, proten, karbonhdrat ve su tüketm 
takbnn yanı sıra, tarf önerler ve yapay zekâ tabanlı danışmanlık br 
arada sunulmaktadır. 
b.  Görüntü tanıma özellğ, besn değer ölçümünde öneml br yenlk 
olarak öne çıkmakta; kullanıcının çekeceğ fotoğraflar aracılığıyla kalor 
ve besn değerlern otomatk tanımlayablmektedr. 
3.  Ver Güvenlğ ve Kşselleştrme: 
a.  Clerk altyapısı sayesnde kullanıcı oturumlarının güvenl şeklde 
yönetlmes, uygulamanın temel güçlü yanlarından brdr. 
b.  Frebase üzernde her kullanıcıya özel dokümanlar tutulması ve 
kşselleştrlmş kalor/makro hesaplamaları, uygulamanın kullanıcı 
deneym açısından değern artırmıştır. 
4.  Performans ve Ölçekleneblrlk: 
a.  Cloud tabanlı altyapı (Frebase, Clerk, Gemn API) sayesnde 
uygulama, düşük malyetle yüksek kullanıcı sayısına ölçekleneblr br 
mmarde tasarlanmıştır. 
b.  Test sonuçları, uygulamanın ortalama senaryolarda kabul edleblr 
yanıt süreler verdğn ve yüksek kullanım yoğunluğuna dayanabldğn 
göstermektedr. 
6.2. Katkılar 
1.  Mobl Sağlık Uygulamalarına Getrlen Yenlk: 
a.  Cartol, geleneksel kalor sayacı uygulamalarından farklı olarak yapay 
zekâ modülü, otomatk görsel tanıma ve zengn tarf vertabanı gb 
özellkler tek çatı altında toplayarak  kapsamlı  br  çözüm sunmuştur. 
2.  Djtal Sağlık Ekosstemne Akademk Katkı: 
a.  Bu tez, sağlıklı yaşam uygulamalarının nasıl modüler ve esnek br 
mmaryle gelştrlebleceğn, aynı zamanda AI entegrasyonu 
sayesnde kullanıcı deneymnn nasıl yleştrlebleceğn göstermştr. 
b.  React Natve, Expo, Clerk ve Frebase gb teknolojlern brlkte 
kullanılması, benzer projeler çn referans teşkl edeblecek br yol 
hartası sunmaktadır. 
3.  Kullanıcı Motvasyonunu Artırıcı Özellkler: 
a.  Günlük alınması ve yakılması gereken kalornn, su tüketmnn ve 
makro değerlern gerçek zamanlı takb; kullanıcıların uygulamayı 
düzenl şeklde kullanmasını destekler. 
b.  Klo ve boy takb, grafklerle lerleme göstermes gb görselleştrmeler, 
kullanıcıların motvasyonunu yüksek tutar. 
6.3. Önerler ve Gelecek Çalışmalar 
1.  Genşletlmş Tarf Ver Tabanı ve Kategorler: 
a.  Mevcut tarf koleksyonunu, farklı mutfak türlern ve çeştl dyet (ör. 
vejetaryen, vegan, ketojenk vb.) profllern kapsayacak şeklde 
büyütmek mümkündür. 
b.  Kullanıcıların kend tarflern eklemesne zn verlerek topluluk odaklı 
br yaklaşım gelştrleblr. 
2.  Gelşmş Aktvte ve Egzersz Takb: 
a.  Uygulama, yalnızca beslenme odaklı değl, aynı zamanda egzersz 
programları (ör. step sayısı, kalor yakımı) ve anlık ftness verleryle (ör. 
akıllı saat entegrasyonu) de desteklenerek daha  kapsamlı  br sağlık 
platformuna dönüşeblr. 
3.  Daha İler Yapay Zekâ Entegrasyonu: 
a.  Metn ve görüntü tanımanın ötesnde, kullanıcıların sesl komutlarla 
veya sohbet robotuyla etkleşmn sağlayan ek özellkler ekleneblr. 
b.  Hastalık durumunda (ör. dyabet, hpertansyon) kşye özel beslenme 
programları veya laç takb gb ler düzey önerler oluşturmak çn tıbb 
vertabanlarıyla (ör. HL7 FHIR standartları) entegrasyon düşünüleblr. 
4.  Kşselleştrme ve Sosyal Özellkler: 
a.  Kullanıcıların brbrleryle etkleşme geçeblecekler (ör. tarf paylaşma, 
deneym aktarımı) br topluluk modülü, uygulamanın etkleşm oranını 
artırablr. 
b.  Oyunlaştırma teknkler (ör. rozetler, puanlar, günlük hedef tamamlama 
rozetler) eklenerek kullanıcıların sağlıklı yaşam hedeflerne ulaşma 
motvasyonu güçlendrleblr. 
5.  Regülasyon ve Hukuk Gereksnmlere Uyum: 
a.  Sağlıkla lgl uygulamaların yasal kısıt ve standartlara (ör. KVKK/GDPR 
gb ver koruma yasaları, tıbb uygulamalar çn gerekl sertfkasyonlar) 
uyumlu olması önemldr. İlerde uygulamanın kapsamı büyüdükçe bu 
alanda detaylı çalışmalar yapılması gerekeblr. 
6.4. Genel Sonuç 
“Cartol” uygulaması, günlük kalor ve su takb, makro besn değerlernn 
hesaplanması, tarf önerler, yapay zekâ destekl soru-cevap ve görsel tanıma gb 
özellkler br araya getren  bütüncül  br mobl sağlık  asstanı olarak tasarlanmıştır. 
Gelştrlen modüler mmar, farklı servslern (Clerk, Frebase, Gemn API) entegre 
çalışmasını sağlamış; bu da uygulamaya hızlı gelştrme ve kolay ölçeklenme 
avantajı sunmuştur. Yapılan testlerde uygulamanın  kullanıcı dostu  ,  güvenlr  ve 
performanslı  olduğu doğrulanmıştır. 
Gelecekte uygulamanın daha da gelştrlmes, farklı dyet ve hastalık 
senaryolarının dâhl edlmes, sosyal özellklern eklenmes ve yapay zekâ 
modülünün genşletlmesyle Cartol’un çok daha kapsamlı br djtal sağlık 
platformuna dönüşmes amaçlanmaktadır. 
7. UYGULAMAYI ÇALIŞTIRMA ADIMLARI 
1.  Node.js Kurulumu 
○  Projey çalıştırablmek çn blgsayarınızda  Node.js  kurulu olması 
gerekmektedr. 
○  Node.js’n kurulu olup olmadığını kontrol etmek çn komut satırında 
aşağıdak komutu çalıştırablrsnz: 
node -v 
○  Eğer Node.js kurulu değlse,  https://nodejs.org/  sstemnze  uygun 
sürümü ndrp kurmanız gerekr. 
2.  Proje Deposu İndrme 
○  Aşağıdak GtHub reposuna gderek projey yerel ortamınıza  klonlayın 
veya  ZIP  dosyası şeklnde ndreblrsnz: 
https://gthub.com/Faruk-Tutkus/Cartol 
○  Gt kullanıyorsanız, konsol ya da termnal üzernden şu komutla projey 
ndreblrsnz: 
git clone https://github.com/Faruk-Tutkus/Cartol.git 
○  İndrme tamamlandıktan sonra, proje klasörüne grerek şlemlernze 
devam edn: 
cd Cartol 
3.  Bağımlılıkları Kurma (npm ) 
○  Proje klasöründe yer aldığınızdan emn olduktan sonra, projenn htyaç 
duyduğu tüm bağımlılıkları kurmak çn aşağıdak komutu çalıştırın: 
npm i 
○  Bu komut,  package.json  dosyasındak tüm bağımlılıkları  (React 
Natve, Expo, vb.) otomatk olarak ndrerek kuracaktır. 
4.  Projey Başlatma (npm run start) 
○  Bağımlılıkların kurulumu tamamlandıktan sonra, proje klasöründe şu 
komutu çalıştırarak uygulamayı başlatablrsnz: 
npm run start 
○  Bu komut,  Expo  ortamını devreye alır ve sze br QR  kod (veya URL) 
gösteren br termnal arayüzü sunar. Aynı zamanda tarayıcınızda da 
Expo Developer Tools açılablr. 
5.  Expo Go le Çalıştırma 
○  Mobl chazınızda (Androd veya OS)  Expo Go  uygulamasını  yükleyn 
(Google Play Store veya App Store’dan ndreblrsnz). 
○  Termnalde veya tarayıcınızda gördüğünüz  QR kodunu  Expo Go 
uygulaması üzernden tarayın. 
○  Kodu taradıktan sonra, Cartol uygulaması mobl chazınızda çalışmaya 
başlayacaktır. 
○  Dlersenz Androd Emulator veya OS Smulator üzernden de projey 
çalıştırablrsnz (gelştrme ortamınız ve Expo CLI ayarlarınıza bağlı 
olarak). 
KAYNAKÇA 
1.  React Natve Resmî Belgeler (React Natve Offcal Docs). 
[Çevrmç]. Erşm adres:  https://reactnatve.dev/docs/gettng-started 
2.  Expo Resmî Belgeler (Expo Documentaton). 
[Çevrmç]. Erşm adres:  https://docs.expo.dev/ 
3.  Clerk Resmî Belgeler (Clerk Documentaton). 
[Çevrmç]. Erşm adres:  https://clerk.com/docs 
4.  Frebase Resmî Belgeler (Frebase Documentaton). 
[Çevrmç]. Erşm adres:  https://frebase.google.com/docs 
5.  Google Gemn API Resmî Tanıtım ve Kılavuzları. 
[Çevrmç]. Erşm adres:  https://cloud.google.com/gemn/ 
6.  Kalor ve Makro Değerler Fatsecret 
[Çevrmç]. Erşm adres:  https://www.fatsecret.com.tr/ 
7.  Yemekler çn Br Ver Set Huggng Face 
[Çevrmç]. Erşm adres:  https://huggngface.co/datasets/corbt/all-recpes 
