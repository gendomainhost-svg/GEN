"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText, Video, ArrowRight, Mail } from "lucide-react";
import Section from "./Section";

type TopicFilter = "All" | "Governance" | "Efficiency" | "Innovation";

interface Insight {
  id: string;
  type: "article" | "webinar" | "case-study" | "whitepaper";
  title: string;
  topic: TopicFilter;
  date?: string;
  featured?: boolean;
}

const insights: Insight[] = [
  {
    id: "1",
    type: "article",
    title: "The Future of Institutional Efficiency in 2026",
    topic: "Efficiency",
    featured: true,
  },
  {
    id: "2",
    type: "webinar",
    title: "Implementing Change Management",
    topic: "Governance",
    date: "March 15, 2024",
  },
  {
    id: "3",
    type: "case-study",
    title: "Public Sector Reform in Emerging Markets",
    topic: "Innovation",
    date: "February 28, 2024",
  },
  {
    id: "4",
    type: "whitepaper",
    title: "The Hub-and-Network Model",
    topic: "Governance",
    date: "January 20, 2024",
  },
  {
    id: "5",
    type: "webinar",
    title: "Digital Transformation in Public Services",
    topic: "Innovation",
    date: "March 10, 2024",
  },
  {
    id: "6",
    type: "article",
    title: "Building Resilient Institutions",
    topic: "Efficiency",
    date: "February 15, 2024",
  },
];

const topics: TopicFilter[] = ["All", "Governance", "Efficiency", "Innovation"];

export default function InsightsHub() {
  const [activeTopic, setActiveTopic] = useState<TopicFilter>("All");
  const [email, setEmail] = useState("");

  const filteredInsights =
    activeTopic === "All"
      ? insights
      : insights.filter((insight) => insight.topic === activeTopic);

  const featuredInsight = filteredInsights.find((i) => i.featured) || filteredInsights[0];
  const recentInsights = filteredInsights.filter((i) => i.id !== featuredInsight.id);

  const getIcon = (type: string) => {
    switch (type) {
      case "webinar":
        return Video;
      case "case-study":
        return FileText;
      case "whitepaper":
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "webinar":
        return "Webinar";
      case "case-study":
        return "Case Study";
      case "whitepaper":
        return "Whitepaper";
      default:
        return "Article";
    }
  };

  return (
    <Section className="bg-white py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Insights & Knowledge Exchange
        </h2>
        <p className="text-xl text-secondary-DEFAULT max-w-3xl mx-auto">
          Conferences, executive forums, and webinars for peer learning and
          innovation exchange
        </p>
      </motion.div>

      {/* Filter by Topic */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setActiveTopic(topic)}
            className={`px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] ${
              activeTopic === topic
                ? "bg-primary-900 text-white shadow-lg scale-105"
                : "bg-primary-50 text-primary-900 hover:bg-primary-100 border border-primary-200"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Magazine Style Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Featured Article - Large */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-primary-700/50 group-hover:bg-primary-700/70 transition-all duration-300" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent-700 text-white text-xs font-semibold rounded-full mb-4">
                  Featured Article
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredInsight.title}
              </h3>
              <p className="text-white/90 mb-6">
                Exploring the latest trends and strategies in institutional
                excellence and operational efficiency
              </p>
              <button className="inline-flex items-center text-white font-semibold group-hover:text-accent-300 transition-colors">
                Read More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Recent Updates - List */}
        <div className="space-y-4">
          <AnimatePresence>
            {recentInsights.slice(0, 4).map((insight, index) => {
              const Icon = getIcon(insight.type);
              return (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-50 rounded-xl p-6 hover:bg-primary-100 transition-all border border-primary-200 hover:border-primary-300 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-100 transition-colors">
                      <Icon className="text-primary-700 group-hover:text-accent-700" size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="mb-2">
                        <span className="text-xs font-semibold text-accent-700">
                          {getTypeLabel(insight.type)}
                        </span>
                        {insight.date && (
                          <span className="text-xs text-secondary-DEFAULT ml-2">
                            {insight.date}
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-lg font-bold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
                        {insight.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Newsletter Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary-900 rounded-xl p-8 md:p-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-white/90 mb-6">
            Subscribe to receive insights on peer learning and innovation
            exchange
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg border border-primary-700 bg-primary-800 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            />
            <button className="bg-accent-700 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center min-h-[44px]">
              <Mail className="mr-2" size={20} />
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
