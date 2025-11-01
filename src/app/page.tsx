"use client";

import { motion } from "framer-motion";
import { Scale, Users, Building2, ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import Image from "next/image";
import FloatingNavbar from "@/components/ui/floating-navbar";
import ServiceCard from "@/components/ui/service-card";
import GridBackground from "@/components/ui/grid-background";
import Spotlight from "@/components/ui/spotlight";

export default function Home() {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const siteUrl = 
    typeof window !== "undefined" 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_SITE_URL || "https://karsaz-tech.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Karsaz Tech",
    "description": "Your gateway to establishing a world-class tech hub in Pakistan. We provide comprehensive legal services, top-tier talent acquisition, and end-to-end office setup.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      // Add social media links when available
      // "https://www.linkedin.com/company/karsaz-tech",
      // "https://twitter.com/karsaztech",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "PK",
      "availableLanguage": ["en", "ur"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressLocality": "Pakistan"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tech Hub Setup Services",
    "provider": {
      "@type": "Organization",
      "name": "Karsaz Tech"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tech Hub Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Legal Services",
            "description": "Navigate Pakistani regulations with ease. We handle all legal complexities from entity formation to compliance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Top-Tier Talent Acquisition",
            "description": "Access Pakistan's best tech talent. We source, vet, and onboard exceptional professionals for your team."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "End-to-End Office Setup",
            "description": "From finding the perfect space to daily operations, we manage everything so you can focus on growth."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Karsaz Tech",
    "url": siteUrl,
    "description": "Transform global expansion from a risk into your unfair advantage. Establish a world-class software tech hub in Pakistan.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <FloatingNavbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <GridBackground />
        <Spotlight />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Gateway to Pakistan&apos;s Tech Talent
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-900 dark:text-white mb-4"
              >
                It&apos;s our mission
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-900 dark:text-white mb-4"
              >
                to help your business
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-gray-900 dark:text-white mb-4"
              >
                open a{" "}
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  tech hub
                </span>
                {" "}in
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
              >
                Pakistan
              </motion.div>
          </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Transform global expansion from a risk into your unfair advantage
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s get started then!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Section with Karachi Image */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/20" />
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1759323049966-8ae3fc89c0ce?q=80&w=1080"
            alt="Karachi Skyline"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-7xl md:text-9xl font-bold">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Karsaz
              </span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-200">
              Tech
            </h3>
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-600" />
              <Globe className="w-6 h-6 text-blue-600" />
              <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-600" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                We believe global expansion
                <br />
                <span className="text-gray-600 dark:text-gray-400">shouldn&apos;t be a risk.</span>
              </h2>
              <p className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                It should be an unfair advantage.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-8"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
                Our guiding philosophy
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto">
          {/* Featured Images Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=400"
                alt="Team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Collaborative Teams</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?q=80&w=400"
                alt="Modern office space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Modern Workspaces</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
                src="https://images.unsplash.com/photo-1631247022917-53f9af27d719?q=80&w=400"
                alt="Professional environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Professional Setup</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to establish and scale your tech presence in Pakistan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="COMPREHENSIVE LEGAL SERVICES"
              description="Navigate Pakistani regulations with ease. We handle all legal complexities from entity formation to compliance."
              icon={Scale}
              index={0}
            />
            <ServiceCard
              title="TOP-TIER TALENT ACQUISITION"
              description="Access Pakistan's best tech talent. We source, vet, and onboard exceptional professionals for your team."
              icon={Users}
              index={1}
            />
            <ServiceCard
              title="END-TO-END OFFICE SETUP"
              description="From finding the perfect space to daily operations, we manage everything so you can focus on growth."
              icon={Building2}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        
        {/* Background decorative images */}
        <div className="absolute right-0 top-1/4 w-1/3 h-64 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?q=80&w=400"
            alt="Tech team"
            fill
            className="object-cover rounded-l-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Our Promise
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Elevate your global presence by establishing a{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                world-class software tech hub
              </span>{" "}
              in Pakistan.
            </h2>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-200 dark:border-gray-800">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  We handle complexities such as{" "}
                  <span className="font-semibold text-blue-600">legal & financial services</span>,{" "}
                  <span className="font-semibold text-purple-600">talent acquisition</span>,{" "}
                  <span className="font-semibold text-pink-600">payroll</span> and{" "}
                  <span className="font-semibold text-blue-600">office & daily management</span>,
                  so you can focus on building your best product.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        {/* Side images */}
        <div className="absolute left-0 top-1/3 w-1/4 h-48 opacity-5 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38?q=80&w=400"
            alt="Office setup"
            fill
            className="object-cover rounded-r-3xl"
          />
        </div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              A Setup to{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Suit Your Needs
              </span>
            </h2>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-xl border border-gray-200 dark:border-gray-800">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you are an{" "}
                  <span className="font-semibold text-blue-600">early stage startup</span> or an{" "}
                  <span className="font-semibold text-purple-600">established business</span>, whether you need a{" "}
                  <span className="font-semibold text-pink-600">remote team</span> or an{" "}
                  <span className="font-semibold text-blue-600">office-based setup</span>, whether you need{" "}
                  <span className="font-semibold text-purple-600">contractors</span> or{" "}
                  <span className="font-semibold text-pink-600">employees</span>, we can get it done for you.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-5" />
        
        {/* Background pattern with team images */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=400"
                alt="Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1748256467077-c75ef01579aa?q=80&w=400"
                alt="Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1563481911853-c14860cd6947?q=80&w=400"
                alt="Professionals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Let&apos;s build something amazing together in Pakistan
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800">
                <form
                  action="https://formspree.io/f/mzzkkqlv"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Karsaz Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your gateway to establishing a world-class tech hub in Pakistan
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Legal Services</li>
                <li>Talent Acquisition</li>
                <li>Office Setup</li>
                <li>Payroll Management</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 Karsaz Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
