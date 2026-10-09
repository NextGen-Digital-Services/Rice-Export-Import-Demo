import { constructMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/sections/HomeHero';
import { TrustBar } from '@/components/sections/TrustBar';
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection';
import { JourneyTimeline } from '@/components/site/JourneyTimeline';
import { WorldMap } from '@/components/site/WorldMap';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CertificationsMarquee } from '@/components/sections/CertificationsMarquee';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CallToActionBand } from '@/components/sections/CallToActionBand';

export const metadata = constructMetadata({
  title: 'Home | Premier Basmati & Non-Basmati Rice Exporters',
  description: 'Taxvi Global is a leading export house for 1121 Basmati, 1509 Basmati, IR64 Parboiled, and Sona Masoori rice varieties with APEDA and ISO accreditation.'
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <FeaturedProductsSection />
      <JourneyTimeline />
      <WorldMap />
      <ProcessSteps />
      <CertificationsMarquee />
      <TestimonialsSection />
      <CallToActionBand />
    </>
  );
}
