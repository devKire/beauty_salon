"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SectionHeroProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "description">;
}

const SectionHero = ({ contact, landingpage }: SectionHeroProps) => {
  console.log({ contact, landingpage });
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-rose-500" />
              <span className="font-medium text-rose-600">
                Transforme sua beleza
              </span>
            </div>
          </div>

          <h1 className="text-5xl font-bold md:text-7xl">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              {landingpage.name}
            </span>
            <br />
            <span className="text-3xl text-gray-800 md:text-5xl">
              Salão de Beleza
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            {landingpage.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#cta"
              className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl"
            >
              <span>Agendar Horário</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="border-b-2 border-transparent pb-1 text-lg font-semibold text-gray-700 transition-colors hover:border-rose-600 hover:text-rose-600"
            >
              Ver Serviços
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
