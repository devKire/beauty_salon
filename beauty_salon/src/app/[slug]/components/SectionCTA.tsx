"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  MessageCircle,
  Scissors,
  Sparkles,
  Twitter,
  Whatsapp,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface SectionCTAProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name">;
}

const SectionCTA = ({ contact, landingpage }: SectionCTAProps) => {
  return (
    <section className="bg-gradient-to-r from-rose-500 to-pink-500 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Pronta para se transformar?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-rose-100">
            Agende seu horário agora e descubra como podemos realçar sua beleza
            natural
          </p>
          <Link
            href={contact.whatsappLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-rose-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Agendar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTA;
