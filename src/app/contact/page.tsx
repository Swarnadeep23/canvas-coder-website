'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TextType from '../components/TextType';
import ContactForm from '../components/ContactForm';
import ProfileCard from '../components/ProfileCard';
import styles from '../page.module.css';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={styles.noirNav}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className={styles.logo}>CANVAS CODER</Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact" className="active">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <TextType 
              text={[
                "Get In Touch",
                "Let's discuss your",
                "next project"
              ]}
              typingSpeed={80}
              pauseDuration={1800}
              showCursor={true}
              cursorCharacter="|"
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
            />
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to bring your digital vision to life? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Email</h3>
              <p className="text-gray-400">swarnadeepmaity67@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Website</h3>
              <p className="text-gray-400">canvas-coder.com</p>
              <p className="text-sm text-gray-500 mt-2">Visit our portfolio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Response Time</h3>
              <p className="text-gray-400">24-48 hours</p>
              <p className="text-sm text-gray-500 mt-2">Business days only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Send Us a Message</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible. 
            Tell us about your project, goals, and timeline.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            
            {/* Profile Card */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ProfileCard
                avatarUrl="/profile-photo.jpg"
                name="Swarnadeep Maity"
                title="Founder & Lead Developer"
                handle="canvas-coder"
                status="Available for Projects"
                contactText="Contact"
                onContactClick={() => {
                  // Scroll to contact form when profile card contact button is clicked
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={styles.magicBentoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>What's your typical project timeline?</h3>
              </div>
              <div className={styles.cardContent}>
                <p>Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks, while design systems can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.</p>
              </div>
            </div>
            
            <div className={styles.magicBentoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Do you work with startups?</h3>
              </div>
              <div className={styles.cardContent}>
                <p>Absolutely! We love working with startups and growing businesses. We offer flexible engagement models and can scale our services to match your current needs and budget.</p>
              </div>
            </div>
            
            <div className={styles.magicBentoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>What technologies do you use?</h3>
              </div>
              <div className={styles.cardContent}>
                <p>We use modern, proven technologies including React, Next.js, TypeScript, and Tailwind CSS. We choose the best tools for each project based on requirements, performance needs, and long-term maintainability.</p>
              </div>
            </div>
            
            <div className={styles.magicBentoCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Do you provide ongoing support?</h3>
              </div>
              <div className={styles.cardContent}>
                <p>Yes! We offer ongoing support and maintenance packages. We can handle updates, bug fixes, and feature additions to ensure your project continues to perform optimally long after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals with creativity and technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              <Link href="/services">View Our Services</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400">
            © 2024 CANVAS CODER. All rights reserved. Ready to create something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
} 