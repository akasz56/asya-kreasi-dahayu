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
    title: 'BIMTEK ANGGOTA DRPD PROVINSI & DPRD KABUPATEN KOTA SE BANTEN, JAWA BARAT DAN DKI JAKARTA',
    subtitle: 'EO, MULTIMEDIA',
    description:
      'Kami memberikan pelayanan all-in dalam persiapan teknis dan perlengkapan acara mulai dari sistem, visual, dan akomodasi sebagai komitmen dalam pelayanan sektor pengembangan.',
    asset: [],
  },
  {
    xid: '2',
    title: 'OUTING RSUD KOTA BULUKUMBA',
    subtitle: 'MULTIMEDIA',
    description:
      'Kami memberikan pelayanan berupa pendampingan sebagai pemandu wisata dan dokumentasi kegiatan dalam acara outing karyawan di Bulukumba, Sulawesi Selatan.',
    asset: [
      // { src: '/assets/outing_rsud_bulukumba/video.mp4', type: 'video' },
      // { src: '/assets/outing_rsud_bulukumba/image (1).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (2).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (3).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (4).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (5).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (6).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (7).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (8).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (9).jpg', type: 'image' },
      // { src: '/assets/outing_rsud_bulukumba/image (10).jpg', type: 'image' },
    ],
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
    asset: [
      // { src: '/assets/maesindo/image (1).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (2).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (3).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (4).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (5).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (6).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (7).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (8).jpeg', type: 'image' },
      // { src: '/assets/maesindo/image (9).jpeg', type: 'image' },
    ],
  },
]
