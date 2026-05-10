import { Hero } from "@/components/landing/Hero";
import { Reviews } from "@/components/landing/Reviews";
import { Services } from "@/components/landing/Services";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Process } from "@/components/landing/Process";
import { Request } from "@/components/landing/Request";
import { Contacts } from "@/components/landing/Contacts";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Reviews />
      <Services />
      <BeforeAfter />
      <Process />
      <Request />
      <Contacts />
    </main>
  );
};

export default Index;
