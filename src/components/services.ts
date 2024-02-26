export interface Service {
    name: string
    nickname: string | null
    description: string
    feature: ServiceFeature[]
}

export interface ServiceFeature {
    title: string
    description: string
}

const placeholderFeatures: ServiceFeature[] = [
    {
        title: 'Keunggulan',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
    {
        title: 'Jasa yang disediakan',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
    {
        title: 'Fitur tambahan',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
    },
];

export const services: Service[] = [
    {
        name: 'MICE (Meeting Incentive Convention Exhibition)',
        nickname: 'MICE',
        description:
            'Tim kami akan membantu kreator untuk mencapai hasil yang terbaik dengan memberikan pelayanan all-in dengan keserbagunaan untuk tumbuh di industri ini mulai dari akomodasi, transportasi, hingga publikasi.',
        feature: placeholderFeatures,
    },
    {
        name: 'Multimedia',
        nickname: null,
        description:
            'Tim kami memberikan pelayanan yang lengkap mulai dari sistem, visual, dan perlengkapan lainnya dengan berkomitmen untuk kesempurnaan dan akurasi dalam berkolaborasi dengan sektor lain seperti MICE dan desain grafis.',
        feature: placeholderFeatures,
    },
    {
        name: 'Desain Grafis',
        nickname: null,
        description:
            'Tim kami membantu kreator dalam menciptakan dan membangun identitas, ide merek, dan pengalaman dengan ekspresi khas yang terhubung dan terlibat untuk melaksanakan tujuan yang telah ditetapkan.',
        feature: placeholderFeatures,
    },
    {
        name: 'Garment & Fashion',
        nickname: null,
        description: '',
        feature: placeholderFeatures,
    },
    {
        name: 'Konsultan Kreatif',
        nickname: null,
        description:
            'Tim kami membantu untuk memberikan arahan dan solusi dalam merancang identitas grafis yang unik dengan mengidentifikasi peluang komersial, konsumen, dan budaya untuk merek tersebut.',
        feature: placeholderFeatures,
    },
]