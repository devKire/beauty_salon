"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { Award, Heart, Users } from "lucide-react";
import React from "react";

interface SectionStatsProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name">;
}

const stats = [
  { number: "10+", label: "Anos de Experiência", icon: Award },
  { number: "5000+", label: "Clientes Satisfeitas", icon: Users },
  { number: "98%", label: "Satisfação", icon: Heart },
];

const SectionStats = ({ contact, landingpage }: SectionStatsProps) => {
  console.log({ contact, landingpage });
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 transition-transform group-hover:scale-110">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mb-2 text-4xl font-bold text-gray-800">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
