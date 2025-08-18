import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TextType from '../components/TextType';
import styles from '../page.module.css';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={styles.noirNav}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className={styles.logo}>CANVAS CODER</Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about" className="active">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <TextType 
              text={[
                "About CANVAS CODER",
                "Where creativity meets",
                "technical excellence"
              ]}
              typingSpeed={80}
              pauseDuration={1800}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
            />
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We&apos;re passionate about creating digital experiences that not only look stunning but also deliver exceptional functionality and user engagement.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            At CANVAS CODER, we believe that exceptional digital experiences are born from the perfect balance of 
            creative vision and technical precision. Our mission is to transform ideas into powerful, 
            user-centric digital solutions that not only meet business objectives but exceed user expectations.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.servicesSection}>
        <h2>Our Values</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>🎯</span>
              <h3 className={styles.cardTitle}>Purpose-Driven Design</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Every element we create has a specific purpose. No decoration for decoration&apos;s sake - only meaningful, functional design that serves your users and your brand.</p>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>⚡</span>
              <h3 className={styles.cardTitle}>Performance First</h3>
            </div>
            <div className={styles.cardContent}>
              <p>We build fast, efficient, and scalable solutions. Performance isn&apos;t an afterthought - it&apos;s built into every decision we make from the ground up.</p>
            </div>
          </div>
          
          <div className={styles.magicBentoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>♿</span>
              <h3 className={styles.cardTitle}>Accessibility by Default</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Inclusive design is not optional. We ensure that every experience we create is accessible to all users, regardless of their abilities or devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discovery</h3>
              <p className="text-gray-400">We start by understanding your business, goals, and target audience to create solutions that truly matter.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Design</h3>
              <p className="text-gray-400">Our design process focuses on user experience, visual hierarchy, and creating intuitive interfaces that delight users.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Development</h3>
              <p className="text-gray-400">We build with modern technologies, ensuring your solution is fast, secure, and scalable for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Team</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            CANVAS CODER is a team of passionate designers, developers, and strategists who believe in the power of 
            thoughtful digital experiences. We combine creativity with technical expertise to deliver solutions that make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">SM</div>
              <h3 className="text-xl font-semibold text-white">Swarnadeep Maity</h3>
              <p className="text-gray-400">Founder & Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">CC</div>
              <h3 className="text-xl font-semibold text-white">CANVAS CODER</h3>
              <p className="text-gray-400">Creative Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work Together?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your digital vision to life with creativity, precision, and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
              <Link href="/services">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            © 2024 CANVAS CODER. All rights reserved. Crafting digital experiences with purpose.
          </p>
        </div>
      </footer>
    </div>
  );
} 
