import { Metadata } from 'next';
import { SITE_NAME, DEFAULT_OG_IMAGE } from './constants';

export function constructMetadata({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  canonical
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Premium Basmati & Non-Basmati Rice Exporters`;
  const metaDesc = description || 'TAXVI GLOBAL is a leading global export-import house specializing in 1121 Basmati, 1509 Basmati, IR64 Parboiled, and Sona Masoori rice varieties with ISO & APEDA accreditation.';

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      images: [{ url: image }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDesc,
      images: [image]
    },
    ...(canonical ? { alternates: { canonical } } : {})
  };
}
