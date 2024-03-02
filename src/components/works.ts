export interface Asset {
  src: string
  type: 'image' | 'video'
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
    title: 'BIMTEK ANGGOTA DRPD PROVINSI & DPRD KABUPATEN KOTA SE BANTEN, JAWA BARAT DAN DKI JAKARTA 2022',
    subtitle: 'EO, MULTIMEDIA',
    description:
      'Kami memberikan pelayanan all-in dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dan akomodasi sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [
      { src: '/assets/bimtek_banjabar_2022/video.mp4', type: 'video' },
      { src: '/assets/bimtek_banjabar_2022/image (1).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (2).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (3).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (4).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (5).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (6).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (7).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (8).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (9).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2022/image (10).jpg', type: 'image' },
    ],
  },
  {
    xid: '2',
    title: 'BIMTEK ANGGOTA DRPD PROVINSI & DPRD KABUPATEN KOTA SE BANTEN, JAWA BARAT DAN DKI JAKARTA 2023',
    subtitle: 'EO, MULTIMEDIA',
    description:
      'Kami memberikan pelayanan all-in dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dan akomodasi sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [
      { src: '/assets/bimtek_banjabar_2023/video.mp4', type: 'video' },
      { src: '/assets/bimtek_banjabar_2023/image (1).jpg', type: 'image' },
      { src: '/assets/bimtek_banjabar_2023/image (2).jpg', type: 'image' },
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
    title: 'OUTING RSUD KOTA DEPOK',
    subtitle: 'MULTIMEDIA',
    description:
      'Kami memberikan pelayanan berupa pendampingan sebagai pemandu wisata dan dokumentasi kegiatan dalam acara outing karyawan di Bulukumba, Sulawesi Selatan.',
    asset: [
      { src: '/assets/outing_rsud_bulukumba/video.mp4', type: 'video' },
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
    title: 'PT RAJAWALI PERKASA FURNITURE',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
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
    title: 'PT SAM AND ANDY',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
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
    title: 'PT MAESINDO INDONESIA',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
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
