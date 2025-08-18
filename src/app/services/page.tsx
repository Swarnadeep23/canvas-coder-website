import styles from "../page.module.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TextType from '../components/TextType';

export default function ServicesPage() {
  return (
    <div className={styles.noirPage}>
      {/* Navigation */}
      <nav className={styles.noirNav}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className={styles.logo}>CANVAS CODER</Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services" className="active">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <TextType 
              text={[
                "Our Services",
                "Crafted with precision",
                "Delivered with excellence"
              ]}
              typingSpeed={80}
              pauseDuration={1800}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
            />
          </h1>
          <p className={styles.heroSubtitle}>
            We specialize in creating digital experiences that combine functionality with aesthetic excellence.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Design Systems</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Build scalable, consistent UI libraries for your brand. We create comprehensive design systems that ensure visual consistency across all platforms.</p>
              <ul>
                <li>• Component Libraries</li>
                <li>• Style Guides</li>
                <li>• Design Tokens</li>
                <li>• Documentation</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Web Development</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Modern, performant websites with a focus on UX. We build fast, accessible, and scalable web applications.</p>
              <ul>
                <li>• React/Next.js Development</li>
                <li>• Performance Optimization</li>
                <li>• SEO & Accessibility</li>
                <li>• API Integration</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Brand Strategy</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Elevate your digital presence with cohesive branding. We help you establish a strong, memorable brand identity.</p>
              <ul>
                <li>• Brand Identity Design</li>
                <li>• Visual Guidelines</li>
                <li>• Brand Positioning</li>
                <li>• Marketing Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.aboutSection}>
        <h2>Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="text-[#ff4500] text-3xl font-bold mb-4">1</div>
            <h3 className="text-white text-xl mb-2">Discovery</h3>
            <p className="text-[#888]">We start by understanding your goals, audience, and requirements.</p>
          </div>
          <div className="text-center">
            <div className="text-[#ff4500] text-3xl font-bold mb-4">2</div>
            <h3 className="text-white text-xl mb-2">Design</h3>
            <p className="text-[#888]">Creating beautiful, functional designs that align with your brand.</p>
          </div>
          <div className="text-center">
            <div className="text-[#ff4500] text-3xl font-bold mb-4">3</div>
            <h3 className="text-white text-xl mb-2">Deliver</h3>
            <p className="text-[#888]">Building and launching your project with ongoing support.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.contactSection}>
        <h2>Ready to Get Started?</h2>
        <p className="text-[#ccc] mb-6">
          Let&apos;s discuss how we can help bring your vision to life.
        </p>
        <Button asChild className="bg-[#ff4500] hover:bg-[#ff6633] text-white border-none transition-all duration-300 hover:translate-y-[-2px]">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>&copy; 2024 CANVAS CODER Design System. All rights reserved.</span>
      </footer>
    </div>
  );
} 