import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Network Infrastructure',
    description: 'Enterprise-grade networking solutions with 99.99% uptime guarantee',
    icon: '🌐'
  },
  {
    title: 'API Integration',
    description: 'Seamless API integration services with comprehensive documentation',
    icon: '🔌'
  },
  {
    title: 'Information Services',
    description: 'Real-time data processing and analytics solutions',
    icon: '📊'
  },
  {
    title: 'Security Solutions',
    description: 'Advanced cybersecurity and threat protection services',
    icon: '🔒'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge networking and information solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 