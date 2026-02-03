"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Program } from "@/app/data/programs";

interface ProgramCardProps {
  program: Program;
  index?: number;
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-primary-200 h-full flex flex-col"
    >
      <div className="flex-1">
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
              program.category === "Open"
                ? "bg-accent-100 text-accent-700"
                : "bg-primary-100 text-primary-700"
            }`}
          >
            {program.category === "Open" ? "Open Enrollment" : "Commissioned"}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">
          {program.title}
        </h3>

        <p className="text-secondary-DEFAULT leading-relaxed mb-6">
          {program.description}
        </p>

        <div className="space-y-3 mb-6">
          {program.duration && (
            <div className="flex items-center text-sm text-secondary-DEFAULT">
              <Clock className="mr-2 text-accent-700" size={16} />
              <span>{program.duration}</span>
            </div>
          )}
          {program.location && (
            <div className="flex items-center text-sm text-secondary-DEFAULT">
              <MapPin className="mr-2 text-accent-700" size={16} />
              <span>{program.location}</span>
            </div>
          )}
          <div className="flex items-center text-sm text-secondary-DEFAULT">
            <Users className="mr-2 text-accent-700" size={16} />
            <span>{program.targetAudience}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-primary-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {program.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-secondary-DEFAULT">
                <div className="w-1.5 h-1.5 bg-accent-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={`/contact?type=${program.category === "Open" ? "individual" : "institutional"}`}
        className="text-accent-700 font-semibold flex items-center group-hover:translate-x-2 transition-transform mt-auto pt-4"
      >
        Learn More
        <ArrowRight className="ml-2" size={18} />
      </Link>
    </motion.div>
  );
}
