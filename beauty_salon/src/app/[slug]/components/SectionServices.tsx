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

interface SectionServicesProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name">;
}

const services = [
  {
    title: "Cortes & Penteados",
    description: "Cortes modernos e penteados elegantes para todas as ocasiões",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: "A partir de R$ 80",
  },
  {
    title: "Coloração",
    description: "Transforme seu visual com nossas técnicas de coloração",
    image:
      "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: "A partir de R$ 120",
  },
  {
    title: "Tratamentos",
    description:
      "Hidratação, botox capilar e reconstrução para cabelos saudáveis",
    image:
      "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: "A partir de R$ 100",
  },
  {
    title: "Manicure & Pedicure",
    description: "Cuidados completos para suas unhas com produtos de qualidade",
    image:
      "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=500",
    price: "A partir de R$ 60",
  },
];

const SectionServices = ({ contact, landingpage }: SectionServicesProps) => {
  return (
    <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Oferecemos uma gama completa de serviços de beleza para você se
            sentir radiante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-rose-600">
                    {service.price}
                  </span>
                  <Link
                    href="#cta"
                    className="flex items-center space-x-1 font-medium text-rose-600 transition-transform group-hover:translate-x-1 hover:text-rose-700"
                  >
                    <span>Agendar</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
