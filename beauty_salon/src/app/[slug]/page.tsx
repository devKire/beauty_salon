import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";

import FloatingWhatsAppButton from "./components/floating-whatsapp-button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionCTA from "./components/SectionCTA";
import SectionHero from "./components/SectionHero";
import SectionServices from "./components/SectionServices";
import SectionStats from "./components/SectionStats";
import SectionTestimonails from "./components/SectionTestimonails";

interface LandingPageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: LandingPageProps) => {
  const { slug } = await params;

  const landingpage = await db.landingPage.findUnique({
    where: { slug },
    include: {
      contactInfo: true,
    },
  });

  if (!landingpage) {
    notFound();
  }

  if (!landingpage.contactInfo) {
    notFound();
  }

  return (
    <>
      {/* Seção com imagem de fundo */}
      <div className="min-h-screen w-full bg-cover bg-fixed bg-center">
        <Header contact={landingpage.contactInfo} landingpage={landingpage} />
        <section id="hero">
          <SectionHero
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>
        <Separator />
        <section id="stats">
          <SectionStats
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>

        <section id="services">
          <SectionServices
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>
        <Separator />

        <section id="testimonials">
          <SectionTestimonails
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>
        <Separator />

        <section id="cta">
          <SectionCTA
            contact={landingpage.contactInfo}
            landingpage={landingpage}
          />
        </section>
        <Separator />

        <Footer contact={landingpage.contactInfo} landingpage={landingpage} />

        <FloatingWhatsAppButton contact={landingpage.contactInfo} />
      </div>
    </>
  );
};

export default Page;
