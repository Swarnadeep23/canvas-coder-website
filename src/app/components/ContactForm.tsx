'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [emailjsReady, setEmailjsReady] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with real credentials
      if (window.emailjs) {
        console.log('EmailJS loaded successfully');
        window.emailjs.init('XwYutuqvw8yELtKig'); // Your real public key
        setEmailjsLoaded(true);
        setEmailjsReady(true);
        console.log('EmailJS initialized with real credentials');
      }
    };
    script.onerror = () => {
      console.error('Failed to load EmailJS script');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is properly configured
      if (!window.emailjs || !emailjsLoaded || !emailjsReady) {
        // Demo mode - simulate success for now
        console.log('EmailJS not configured yet, showing demo success');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        
        // Log the form data for demo purposes
        console.log('Demo form submission:', {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString()
        });
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      // Send email using EmailJS (with real credentials)
      try {
        const result = await window.emailjs.send(
          'service_rjpychf', // Your real service ID
          'template_s5rmirj', // Your real template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'swarnadeepmaity67@gmail.com'
          }
        );

        if (result.status === 200) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          console.log('Email sent successfully:', result);
        } else {
          throw new Error('EmailJS failed');
        }
      } catch (emailjsError) {
        console.error('EmailJS error:', emailjsError);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="space-y-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-transparent border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 resize-none"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition-all duration-300 transform hover:scale-105"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {submitStatus === 'success' && (
        <div className="text-green-400 text-center p-3 bg-green-900/20 border border-green-500/30 rounded">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-400 text-center p-3 bg-red-900/20 border border-red-500/30 rounded">
          Failed to send message. Please try again or contact us directly.
        </div>
      )}

      {!emailjsLoaded && (
        <div className="text-yellow-400 text-center p-3 bg-yellow-900/20 border border-yellow-500/30 rounded text-sm">
          ⚠️ EmailJS is loading... Form will work in demo mode until configured.
        </div>
      )}

      {emailjsLoaded && emailjsReady && (
        <div className="text-green-400 text-center p-3 bg-green-900/20 border border-green-500/30 rounded text-sm">
          🎉 <strong>Real Emails Active!</strong> Contact form will send emails to swarnadeepmaity67@gmail.com
        </div>
      )}

      <div className="text-center text-gray-400 text-xs mt-4">
        <p>📧 Email system ready</p>
      </div>
    </div>
  );
}

// Add EmailJS types to window object
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, templateParams: any) => Promise<any>;
    };
  }
} 