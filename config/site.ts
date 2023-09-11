export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Modern eats",
  description:
    "A modern e-commerce website example built with Next.js 13.",
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        }
      ]
    },
  ],
  links: {
    github: "https://github.com/Michael0520/NextJS13-ecomm-website",
  },
}
