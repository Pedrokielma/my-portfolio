import { DefaultSeoProps } from 'next-seo';

const SEOConfig: DefaultSeoProps = {
  defaultTitle: 'Pedro Kielma Portfolio',
  description: 'created by PedroKielma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '../../public/images/profile-image.png',
    site_name: 'Pedro Kielma Portfolio',
  },
};

export default SEOConfig;
