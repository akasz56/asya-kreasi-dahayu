export interface Asset {
  src: string
  type: 'image' | 'video' | 'youtube'
  alt?: string
}

export interface Work {
  xid: string
  title: string
  subtitle: string
  description: string
  asset: Asset[]
}

export const worksData: Work[] = [
  {
    xid: '1',
    title: 'Bimtek Banjabar Jakarta 2022',
    subtitle: 'EO, Multimedia',
    description:
      'Sebagai bagian dari komitmen kami dalam pelayanan sektor pengembangan, kami telah dipercaya untuk menyediakan layanan persiapan teknis dan peralatan lengkap yang dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dokumentasi, hingga akomodasi.',
    asset: [
      { src: 'https://www.youtube.com/embed/6XzlBX031pg', type: 'youtube' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_8.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_1.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_2.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_3.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_4.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_5.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_6.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_7.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_9.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2022/image_10.jpg', type: 'image' },
    ],
  },
  {
    xid: '2',
    title: 'Bimtek Banjabar Jogjakarta 2023',
    description: 'Komitmen dan loyalitas kami dalam pelayanan sektor pengembangan dipercaya untuk melanjutkan sebagai penyedia layanan persiapan teknis dan peralatan lengkap seperti sistem, visual, dokumentasi, hingga akomodasi dengan kualitas yang tetap terjaga.',
    subtitle: 'EO, Multimedia',
    asset: [
      { src: 'https://www.youtube.com/embed/SVnCennKvtU', type: 'youtube' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_8.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_1.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_2.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_3.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_4.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_5.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_6.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_7.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_9.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_10.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_11.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_12.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_13.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_14.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/bimtek_banjabar_2023/image_15.jpg', type: 'image' },
    ],
  },
  {
    xid: '3',
    title: 'Outing RSUD Kota Depok',
    subtitle: 'Multimedia',
    description:
      'Kami memberikan pelayanan maksimal dalam pendampingan sebagai pemandu wisata dan dokumentasi kegiatan dengan visual yang ciamik untuk menciptakan pengalaman baru dalam acara outing karyawan di Bulukumba, Sulawesi Selatan.',
    asset: [
      { src: 'https://www.youtube.com/embed/4511zwz1cvs', type: 'youtube' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_1.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_2.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_3.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_4.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_5.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_6.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_7.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_8.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_9.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/outing_rsud_bulukumba/image_10.jpg', type: 'image' },
    ],
  },
  {
    xid: '4',
    title: 'PT Rajawali Perkasa Furniture',
    subtitle: 'EO',
    description:
      'Kami berinovasi dalam memberikan pelatihan kepada karyawan dengan materi-materi yang relevan dan sesuai dengan lapangan. Kelengkapan teknis termasuk kepada hal yang kami siapkan pula dalam mendukung kegiatan pada acara.',
    asset: [
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_1.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_2.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_3.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_4.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_5.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_6.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_7.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_8.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_9.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_10.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_11.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/rajawali/image_12.jpeg', type: 'image' },
    ],
  },
  {
    xid: '5',
    title: 'PT Sam and Andy',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan berjenjang sebagai komitmen kami dalam memberikan pelatihan yang tepat guna kepada karyawan dengan melakukan sosialisasi, ikut serta ke lapangan, dan juga memberikan teori dan praktik pada karyawan selama acara berlangsung.',
    asset: [
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_1.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_2.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_3.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_4.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_5.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_6.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_7.jpg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_8.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_9.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_10.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_11.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/sam_andy/image_12.jpeg', type: 'image' },
    ],
  },
  {
    xid: '6',
    title: 'PT Maesindo Indonesia',
    subtitle: 'EO',
    description:
      'Kami berkomitmen dalam meningkatkan kepedulian pada karyawan dalam teamwork tidak hanya dengan bekal materi dan praktik, namun memberikan pelayanan dalam menyiapkan panduan dan teknis untuk mendukung kegiatan pada acara pelatihan karyawan di perusahaan.',
    asset: [
      { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_1.jpeg', type: 'image' },
      // { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_2.jpeg', type: 'image' },
      // { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_3.jpeg', type: 'image' },
      // { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_4.jpeg', type: 'image' },
      // { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_5.jpeg', type: 'image' },
      // { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_6.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_7.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_8.jpeg', type: 'image' },
      { src: 'https://asyakreasidahayu.com/public/assets/maesindo/image_9.jpeg', type: 'image' },
    ],
  },
]
