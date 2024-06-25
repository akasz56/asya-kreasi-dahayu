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
      { src: '/assets/bimtek_banjabar_2022/image (5).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (1).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (2).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (3).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (4).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (6).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (7).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (8).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (9).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (10).jpg', type: 'image' },
    ],
  },
  {
    xid: '2',
    title: 'Bimtek Banjabar Jogjakarta 2023',
    description: 'Komitmen dan loyalitas kami dalam pelayanan sektor pengembangan dipercaya untuk melanjutkan sebagai penyedia layanan persiapan teknis dan peralatan lengkap seperti sistem, visual, dokumentasi, hingga akomodasi dengan kualitas yang tetap terjaga.',
    subtitle: 'EO, Multimedia',
    asset: [
      { src: 'https://www.youtube.com/embed/SVnCennKvtU', type: 'youtube' },
      { src: '/assets/bimtek_banjabar_2023/image (2).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (1).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (3).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (4).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (5).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (6).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (7).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (8).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (9).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (10).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (11).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (12).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (13).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (14).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (15).jpg', type: 'image' },
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
      { src: '/assets/outing_rsud_bulukumba/image (1).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (2).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (3).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (4).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (5).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (6).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (7).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (8).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (9).jpg', type: 'image' },
      { src: '/assets/outing_rsud_bulukumba/image (10).jpg', type: 'image' },
    ],
  },
  {
    xid: '4',
    title: 'PT Rajawali Perkasa Furniture',
    subtitle: 'EO',
    description:
      'Kami berinovasi dalam memberikan pelatihan kepada karyawan dengan materi-materi yang relevan dan sesuai dengan lapangan. Kelengkapan teknis termasuk kepada hal yang kami siapkan pula dalam mendukung kegiatan pada acara.',
    asset: [
      { src: '/assets/rajawali/image (1).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (2).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (3).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (4).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (5).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (6).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (7).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (8).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (9).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (10).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (11).jpeg', type: 'image' },
      { src: '/assets/rajawali/image (12).jpeg', type: 'image' },
    ],
  },
  {
    xid: '5',
    title: 'PT Sam and Andy',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan berjenjang sebagai komitmen kami dalam memberikan pelatihan yang tepat guna kepada karyawan dengan melakukan sosialisasi, ikut serta ke lapangan, dan juga memberikan teori dan praktik pada karyawan selama acara berlangsung.',
    asset: [
      { src: '/assets/sam_andy/image (1).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (2).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (3).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (4).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (5).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (6).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (7).jpg', type: 'image' },
      { src: '/assets/sam_andy/image (1).jpeg', type: 'image' },
      { src: '/assets/sam_andy/image (2).jpeg', type: 'image' },
      { src: '/assets/sam_andy/image (3).jpeg', type: 'image' },
      { src: '/assets/sam_andy/image (4).jpeg', type: 'image' },
      { src: '/assets/sam_andy/image (5).jpeg', type: 'image' },
    ],
  },
  {
    xid: '6',
    title: 'PT Maesindo Indonesia',
    subtitle: 'EO',
    description:
      'Kami berkomitmen dalam meningkatkan kepedulian pada karyawan dalam teamwork tidak hanya dengan bekal materi dan praktik, namun memberikan pelayanan dalam menyiapkan panduan dan teknis untuk mendukung kegiatan pada acara pelatihan karyawan di perusahaan.',
    asset: [
      { src: '/assets/maesindo/image (1).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (2).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (3).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (4).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (5).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (6).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (7).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (8).jpeg', type: 'image' },
      { src: '/assets/maesindo/image (9).jpeg', type: 'image' },
    ],
  },
]
