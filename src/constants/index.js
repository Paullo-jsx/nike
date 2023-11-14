import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about-us", label: "Sobre nós" },
    { href: "#products", label: "Produtos" },
    { href: "#contact-us", label: "Contate-nos" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Vendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "R$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "R$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "R$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "R$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Entrega Gratuita",
        subtext: "Desfrute de compras perfeitas com nosso serviço de remessa gratuita."
    },
    {
        imgURL: shieldTick,
        label: "Pagamento Seguro",
        subtext: "Experimente transações sem preocupações com nossas opções de pagamento seguras."
    },
    {
        imgURL: support,
        label: "Ajudamos você com prazer",
        subtext: "Nossa equipe dedicada está aqui para ajudá-lo em cada etapa do processo."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Márcio Bruno',
        rating: 4.5,
        feedback: "A atenção para explicar e a qualidade do produto excederam minhas expectativas. Super recomendo!"
    },
    {
        imgURL: customer2,
        customerName: 'Maria Lívia',
        rating: 4.5,
        feedback: "O produto não só atendeu como superou minhas expectativas. Eu com certeza irei retornar!"
    }
];


export const footerLinks = [
    {
        title: "Produtos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Ajuda",
        links: [
            { name: "Sobre nós", link: "/" },
            { name: "Perguntas frequentes", link: "/" },
            { name: "Como funciona", link: "/" },
            { name: "Política de privacidade", link: "/" },
            { name: "Política de pagamento", link: "/" },
        ],
    },
    {
        title: "Entrar em contato",
        links: [
            { name: "email@nike.com", link: "mailto:email@nike.com" },
            { name: "+5508500000000", link: "tel: +55 (DDD) 0000-0000" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];