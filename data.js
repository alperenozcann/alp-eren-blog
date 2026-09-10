const sambo = [
  {
    baslik: "Sambo yolculuğum",
    resim: "resimler/sambo.webp",
    metin: `Sambo'ya bir arkadaşımın teşvikiyle başladım ve Nisan 2025'ten beri
    Combat Sambo ile aktif olarak ilgileniyorum. Aynı yıl aday hakemlik
    başvurusunda bulundum ve kursu tam puanla geçerek aday hakem olma
    hakkını kazandım. Eğlenceli ve samimi bir ortamımız var; sporla
    ilgilenen herkesi bu heyecana dahil etmeye çalışıyorum. 💪`
  }
];

const seyahat = [
  {
    baslik: "Rotam",
    metin: `Bugüne kadar Bulgaristan, Slovenya, Sırbistan, Avusturya, Almanya,
    Danimarka, Çekya, İsveç, Finlandiya, İsviçre, Belçika ve Hollanda'yı
    gezme fırsatım oldu.`
  },
  {
    baslik: "Zürih'te bir tesadüf",
    resim: "resimler/zurih.jpg",
    metin: `Aklımda kalan en özel yer Zürih oldu. Şehirde gezerken tam da Zürih
    Üniversitesi Tıp Fakültesi'nin mezuniyet törenine denk geldik.
    Kepler havada uçuşurken, ailelerin gözlerindeki gururu ve şehrin o
    anki coşkulu havasını hiç unutmuyorum — planlanmamış bir anın
    insanı nasıl da bir yolculuğun en güzel hatırasına dönüştürebildiğine
    güzel bir örnekti.`
  },
  {
    baslik: "Brüksel'de bir açık hava konseri",
    resim: "resimler/belcika.jpg",
    metin: `Brüksel'de gezerken de kendimizi bir açık hava konserinin ortasında
    bulduk. Şehrin meydanlarından birinde, akşamüstü müziğin sesiyle
    dolan sokaklar ve etrafındaki keyifli kalabalık, seyahatin en
    keyifli sürprizlerinden biri oldu.`
  }
];
const kitaplar = [
  {
    kategori: "Okültizm / Mistisizm",
    resim: "resimler/okultizm.jpeg",
    metin: `Okültizm/Mistisizm, ideoloji ve Klasik Edebiyat birbirinden bağımsız
    ve alakasız konular olsa da bugüne dek hep merakım üzerine gittim...`,
    liste: [
      "Mistik Kabala — Dion Fortune",
      "Gizli Öğreti — H.P. Blavatsky",
      "Kabala ve Maji — E.V. Buttler"
    ]
  },
  {
    kategori: "İdeoloji",
    resim: "resimler/turkic.png",
    metin: `Tarihimize olan ilgim küçük yaşlardan başlamıştı...`,
    liste: [
      "Hüseyin Nihal Atsız — Bozkurtlar / Ruh Adam / Dalkavuklar Gecesi / Z Vitamini / Türk Tarihinde Meseleler",
      "Ziya Gökalp — Makaleler 1 / 2"
    ]
  },
    {
    kategori: "Dünya Klasikleri (Rus Edebiyatı ağırlıklı)",
    
    metin: `Buraya Dünya Klasikleri ile ilgili kişisel yazını ekleyeceğiz.`,
    liste: [
      "Beyaz Geceler — Dostoyevski",
      "Budala — Dostoyevski",
      "Karamazov Kardeşler — Dostoyevski",
      "Suç ve Ceza — Dostoyevski"
    ]
  }
];

module.exports = { kitaplar, sambo, seyahat };