export async function generateMetadata() {
  return {
    title: 'Hetvi Joshi | Software Engineer | Full Stack Developer',
    description: 'Crafting robust and scalable software solutions with precision and innovation.',
    keywords: 'Hetvi Joshi, Software Engineer, Frontend Developer, Backend Developer, Full Stack Developer, Portfolio',
    openGraph: {
      title: 'Hetvi Joshi - Software Engineer',
      description: 'Crafting robust and scalable software solutions with precision and innovation.',
      images: ['/portfolio/images/my-profile.jpg'],
    },
    alternates: {
      canonical: 'https://hetvijoshi.com',
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application-name': 'Hetvi Joshi Portfolio',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Hetvi Joshi',
      jobTitle: 'Software Engineer',
      url: 'https://hetvijoshi.com',
      image: '/portfolio/images/my-profile.jpg',
      sameAs: [
        'https://linkedin.com/in/hetvi-joshi',
        'https://github.com/hetvijoshi'
      ]
    }
  };
} 