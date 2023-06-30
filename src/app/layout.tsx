import "./styles/globals.scss";

// export const metadata = {
//   title: "Pedro Kielma - Frontend Developer Portfolio",
//   description:
//     "I am a frontend developer experienced in Next.js, TypeScript, JavaScript, React, Node.js, and Express. Check out my portfolio to see my work and skills.",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://pedrokielma.com",
//     site_name: "Pedro Kielma Portfolio",
//     images: [
//       {
//         url: "https://pedrokielma.com/images/profile-image.png",
//         width: 800,
//         height: 600,
//         alt: "Pedro Kielma - Frontend Developer",
//         type: "image/jpeg",
//       },
//     ],
//   },
// };

export const metadata = {
  title: "Pedro Kielma - Frontend Developer Portfolio",
  description:
    "I am a frontend developer experienced in Next.js, TypeScript, JavaScript, React, Node.js, and Express. Check out my portfolio to see my work and skills.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pedrokielma.com",
    site_name: "Pedro Kielma Portfolio",
    images: [
      {
        url: "https://pedrokielma.com/images/profile-image.png",
        width: 800,
        height: 600,
        alt: "Pedro Kielma - Frontend Developer",
        type: "image/jpeg",
      },
    ],
  },
  additionalMetaTags: [
    {
      property: "image",
      content: "https://pedrokielma.com/images/profile-image.png",
    },
    {
      property: "og:title",
      content: "Pedro Kielma - Frontend Developer Portfolio",
    },
    { name: "apple-mobile-web-app-title", content: "Pedro Kielma Portfolio" },
    {
      rel: "apple-touch-startup-image",
      href: "https://pedrokielma.com/images/profile-image.png",
    },
  ],
  additionalLinkTags: [{ rel: "shortcut icon", href: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
