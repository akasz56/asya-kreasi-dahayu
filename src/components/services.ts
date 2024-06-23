import { DisplayContentItem } from "./Display"

export interface Service {
    name: string
    icon: string,
    iconAdditionalClass?: string,
    asset: string,
    nickname?: string
    description: string
    feature: ServiceFeature[]
}

export interface ServiceFeature {
    title: string
    description: string
}

export const services: Service[] = [
    {
        name: 'MICE & EO',
        // name: 'MICE (Meeting Incentive Convention Exhibition)',
        icon: 'https://asyakreasidahayu.com/public/assets/icons/mice.svg',
        asset: '/images/services/service (1).webp',
        nickname: 'MICE',
        description:
            'Tim kami akan membantu kreator untuk mencapai hasil yang terbaik dengan memberikan pelayanan all-in dengan keserbagunaan untuk tumbuh di industri ini mulai dari akomodasi, transportasi, hingga publikasi.',
        feature: [
            {
                title: 'Keunggulan',
                description: 'Kami memberikan pelayanan komprehensif dalam persiapan acara dengan menawarkan semua komponen yang diperlukan dari awal hingga akhir.'
            },
            {
                title: 'Jasa yang disediakan',
                description: 'Perencanaan jadwal, survei, pemesanan, transportasi, asistensi, dokumentasi, dan perangkat multimedia.'
            }
        ],
    },
    {
        name: 'Multimedia',
        icon: 'https://asyakreasidahayu.com/public/assets/icons/mulmed.svg',
        iconAdditionalClass: 'lg:-ml-4',
        asset: '/images/services/service (2).webp',
        description:
            'Tim kami memberikan pelayanan yang lengkap mulai dari sistem, visual, dan perlengkapan lainnya dengan berkomitmen untuk kesempurnaan dan akurasi dalam berkolaborasi dengan sektor lain seperti MICE dan desain grafis.',
        feature: [
            {
                title: 'Keunggulan',
                description: 'Kami menggunakan sistem one-stop untuk berintegrasi memberikan serangkaian pelayanan jasa yang lengkap dan menyediakan teknis yang relevan.'
            },
            {
                title: 'Jasa yang disediakan',
                description: 'Desain grafis, fotografi, videografi, dan motion graphic.'
            }
        ],
    },
    {
        name: 'Ticketing',
        icon: 'https://asyakreasidahayu.com/public/assets/icons/ticketing.svg',
        asset: '/images/services/service (3).webp',
        description: 'Tim kami memberikan kemudahan dalam perancanaan akomodasi perjalanan kerja dengan komitmen meningkatkan kepuasan dan pengalaman yang lebih baik dibanding dengan pelayanan konvensional.',
        feature: [
            {
                title: 'Keunggulan',
                description: 'Kami memberikan pelayanan perencanaan akomodasi perjalanan kerja dengan harga yang kompetitif dan terpercaya'
            },
            {
                title: 'Jasa yang disediakan',
                description: 'Perencanaan jadwal, pengelolaan anggaran, dan akomodasi.'
            }
        ],
    },
    {
        name: 'Garment & Fashion',
        icon: 'https://asyakreasidahayu.com/public/assets/icons/garment.svg',
        asset: '/images/services/service (5).webp',
        description: 'Tim kami bekerja sama dalam menciptakan keindahan melalui mode kejatmikaan. Berdedikasi merancang menggunakan bahan berkualitas yang diolah dengan baik menjadi sebuah karya yang berkualitas, nyaman, dan tak lekang oleh waktu.',
        feature: [
            {
                title: 'Keunggulan',
                description:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            },
            {
                title: 'Jasa yang disediakan',
                description:
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
            }
        ],
    },
    {
        name: 'Konsultan Kreatif',
        icon: 'https://asyakreasidahayu.com/public/assets/icons/kreatif.svg',
        asset: '/images/services/service (4).webp',
        description:
            'Tim kami membantu dalam memberikan panduan dan solusi dalam merancang identitas grafis yang unik dengan mengidentifikasi peluang komersial, konsumen, dan budaya untuk merek tersebut.',
        feature: [
            {
                title: 'Keunggulan',
                description: 'Kami memberikan ruang umum maupun privat untuk kenyamanan berkonsultasi dalam perencanaan proyek kreatif dengan solusi yang inovatif dari tim kami.'
            },
            {
                title: 'Jasa yang disediakan',
                description: 'Coaching clinic, pembuatan strategi dan desain, dan konsultasi branding.'
            }
        ],
    },
]

export const servicesDisplay: DisplayContentItem[] = [
    {
        title: 'MICE (Meeting Incentive Convention Exhibition)',
        image: '/images/services/service (1).webp',
        description: 'Kami memberikan pelayanan dan edukasi untuk bidang yang masih minim atensi: “the meetings industry”.',
        href: '#',
    },
    {
        title: 'Multimedia',
        image: '/images/services/service (2).webp',
        description: 'Kami menciptakan hasil eksplorasi dengan realisasi ide yang unik dan berkelanjutan.',
        href: '#',
    },
    {
        title: 'Garment and Fashion',
        image: '/images/services/service (5).webp',
        description: 'Kami menciptakan mode yang inovatif namun tak lekang oleh waktu.',
        href: '#',
    },
    {
        title: 'Ticketing',
        image: '/images/services/service (3).webp',
        description: 'Kami memberikan solusi untuk kemudahan dalam perancanaan bepergian.',
        href: '#',
    },
    {
        title: 'Konsultan Kreatif',
        image: '/images/services/service (4).webp',
        description: 'Kami memberikan strategi dalam desain untuk membekali kreator dalam bertumbuh dan menciptakan mahakarya ke depannya.',
        href: '#',
    },
]