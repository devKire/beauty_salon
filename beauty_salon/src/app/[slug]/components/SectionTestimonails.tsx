"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SectionTestimonailsProps {
  contact: Pick<ContactInfo, "whatsappLink" | "facebookLink" | "instagramLink">;
  landingpage: Pick<LandingPage, "name" | "description">;
}

const testimonials = [
  {
    name: "Maria Silva",
    text: "Simplesmente apaixonada pelo resultado! O atendimento é excepcional e saio sempre renovada.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Ana Santos",
    text: "Melhor salão da região! Profissionais qualificados e ambiente acolhedor.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Carla Oliveira",
    text: "Meu cabelo nunca esteve tão bonito! Recomendo para todas as amigas.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const SectionTestimonails = ({
  contact,
  landingpage,
}: SectionTestimonailsProps) => {
  console.log({ contact, landingpage });
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
            O que dizem nossas clientes
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            A satisfação das nossas clientes é nossa maior recompensa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-8"
            >
              <div className="mb-4 flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-gray-700 italic">
                {`"${testimonial.text}"`}
              </p>
              <div className="flex items-center space-x-3">
                <Image
                  src={testimonial.image}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    Cliente {landingpage.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonails;
