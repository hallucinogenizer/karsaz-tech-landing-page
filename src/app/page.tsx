"use client";

import { motion } from "framer-motion";
import { Scale, Users, Building2, ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import FloatingNavbar from "@/components/ui/floating-navbar";
import ServiceCard from "@/components/ui/service-card";
import GridBackground from "@/components/ui/grid-background";
import Spotlight from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
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
                Your Gateway to Pakistan's Tech Talent
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-900 dark:text-white mb-4"
              >
                It's our mission
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-700 dark:text-gray-300 text-4xl md:text-5xl lg:text-6xl mb-4"
              >
                to help your business
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-gray-700 dark:text-gray-300 text-4xl md:text-5xl lg:text-6xl mb-4"
              >
                open a tech hub in
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
              <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Let's get started then!
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 hover:scale-105">
                Learn More
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

      {/* Brand Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-950/20" />
        
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
                <span className="text-gray-600 dark:text-gray-400">shouldn't be a risk.</span>
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Setup Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
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
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Let's build something amazing together in Pakistan
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 bg-linear-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                Contact Us Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
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
