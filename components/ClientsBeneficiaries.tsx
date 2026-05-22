"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  Briefcase,
  DollarSign,
  Factory,
  Globe2,
} from "lucide-react";
import Section from "./Section";

const clients = [
  {
    name: "Government Ministries, Agencies & Public Institutions",
    icon: Landmark,
    color: "from-accent-50 to-white",
    iconColor: "text-accent-700",
  },
  {
    name: "Legislative & Oversight Bodies",
    icon: Building2,
    color: "from-primary-50 to-white",
    iconColor: "text-primary-700",
  },
  {
    name: "Service-Oriented Private Organizations",
    icon: Briefcase,
    color: "from-accent-50/80 to-white",
    iconColor: "text-accent-600",
  },
  {
    name: "Financial Institutions & Infrastructure Operators",
    icon: DollarSign,
    color: "from-primary-100/50 to-white",
    iconColor: "text-primary-600",
  },
  {
    name: "Manufacturing & Logistics Organizations",
    icon: Factory,
    color: "from-accent-50 to-primary-50",
    iconColor: "text-accent-700",
  },
  {
    name: "NGOs & International Institutions",
    icon: Globe2,
    color: "from-white to-accent-50/60",
    iconColor: "text-accent-600",
  },
];

export default function ClientsBeneficiaries() {
  return (
    <Section className="bg-primary-50 py-16 md:py-24 line-pattern">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          Clients & Beneficiaries
        </motion.span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-3">
          Who We Serve
        </h2>
        <p className="text-lg text-secondary-DEFAULT max-w-3xl mx-auto">
          Our programs are designed for institutions that serve large and diverse
          populations and seek measurable performance improvement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {clients.map((client, index) => {
          const Icon = client.icon;
          return (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className={`flex items-center space-x-4 bg-gradient-to-br ${client.color} bg-white rounded-xl p-5 border border-primary-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 cursor-default`}
            >
              <motion.div
                className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon className={client.iconColor} size={24} />
              </motion.div>
              <span className="text-primary-900 font-medium text-sm">
                {client.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
