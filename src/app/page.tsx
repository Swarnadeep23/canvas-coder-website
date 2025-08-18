import styles from "./page.module.css";
import ShapeBlur from "./components/ShapeBlur";
import ContactForm from "./components/ContactForm";
import TextType from './components/TextType';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { withPrefix } from "@/lib/assetPrefix";

export default function Home() {
  return (
    <div className={styles.noirPage}>
      {/* 1. Navigation */}
      <nav className={styles.noirNav}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className={styles.logo}>CANVAS CODER</Link>
          <ul>
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShapeBlur className="w-full h-full" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="mb-6">
            <TextType 
              text={[
                "Clean, professional web experiences",
                "with a focus on typography",
                "and negative space."
              ]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              className="text-6xl md:text-8xl font-bold leading-tight text-white"
            />
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Clean, professional web experiences with a focus on typography and negative space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              <Link href="/services">Explore Our Work</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Logo Grid Section */}
      <section className={styles.logoGridSection}>
        <div className={styles.logoGrid}>
          <img src={withPrefix('/vercel.svg')} alt="Logo 1" />
          <img src={withPrefix('/next.svg')} alt="Logo 2" />
          <img src={withPrefix('/globe.svg')} alt="Logo 3" />
          <img src={withPrefix('/file.svg')} alt="Logo 4" />
          <img src={withPrefix('/window.svg')} alt="Logo 5" />
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Design Systems</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Build scalable, consistent UI libraries for your brand.</p>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Web Development</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Modern, performant websites with a focus on UX.</p>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Brand Strategy</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Elevate your digital presence with cohesive branding.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild className="bg-[#ff4500] hover:bg-[#ff6633] text-white border-none transition-all duration-300 hover:translate-y-[-2px]">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className={styles.aboutSection}>
        <h2>About CANVAS CODER</h2>
        <p>
          CANVAS CODER is a design-driven studio specializing in minimalist, high-contrast digital experiences. Our philosophy: every pixel serves a purpose.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline" className="border-[#333] text-white hover:border-[#ff4500] transition-all duration-300">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <h2>Contact</h2>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
        <div className="text-center mt-6">
          <Button asChild variant="outline" className="border-[#333] text-white hover:border-[#ff4500] transition-all duration-300">
            <Link href="/contact">Full Contact Page</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>&copy; 2024 CANVAS CODER Design System. All rights reserved.</span>
      </footer>
    </div>
  );
}
