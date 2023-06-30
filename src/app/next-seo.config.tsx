import { DefaultSeoProps } from "next-seo";

const SEOConfig: DefaultSeoProps = {
  defaultTitle: "Pedro Kielma Portfolio",
  description: "created by PedroKielma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pedrokielma.com",
    site_name: "Pedro Kielma Portfolio",

    images: [
      {
        url: "../../public/images/profile-image.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
    ],
  },
};

export default SEOConfig;
