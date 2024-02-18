export interface Asset {
  src: string
  type: string
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
    title: 'BIMTEK ANGGOTA DRPD PROVINSI & DPRD KABUPATEN KOTA SE BANTEN, JAWA BARAT DAN DKI JAKARTA',
    subtitle: 'EO, MULTIMEDIA',
    description:
      'Kami memberikan pelayanan all-in dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dan akomodasi sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [
      { src: '/asset/bimtek2024/asset (1).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (2).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (3).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (4).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (5).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (6).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (7).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (8).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (9).jpg', type: 'image' },
      { src: '/asset/bimtek2024/asset (10).jpg', type: 'image' },
    ],
  },
  {
    xid: '2',
    title: 'OUTING RSUD KOTA DEPOK',
    subtitle: 'MULTIMEDIA',
    description:
      'Kami memberikan pelayanan berupa pendampingan sebagai pemandu wisata dan dokumentasi kegiatan dalam acara outing karyawan di Bulukumba, Sulawesi Selatan.',
    asset: [],
  },
  {
    xid: '3',
    title: 'PT RAJAWALI PERKASA FURNITURE',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [],
  },
  {
    xid: '4',
    title: 'PT SAM AND ANDY',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [],
  },
  {
    xid: '5',
    title: 'PT MAESINDO INDONESIA',
    subtitle: 'EO',
    description:
      'Kami memberikan pelayanan persiapan teknis dan kelengkapan visual dengan keserbagunaan sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [],
  },
]
