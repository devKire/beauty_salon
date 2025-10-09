"use client";

import { ContactInfo, LandingPage } from "@prisma/client";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterProps {
  contact: Pick<
    ContactInfo,
    "whatsappLink" | "facebookLink" | "instagramLink" | "email" | "phone"
  >;
  landingpage: Pick<LandingPage, "name" | "description">;
}

const Footer = ({ contact, landingpage }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 p-2">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">{landingpage.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {landingpage.description}
            </p>
            <div className="flex space-x-4">
              {contact.instagramLink && (
                <Link
                  href={contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-rose-400"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              )}
              {contact.facebookLink && (
                <Link
                  href={contact.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-rose-400"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              )}
              <Link
                href={contact.whatsappLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-rose-400"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#hero"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#cta"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-rose-400" />
                <span className="text-sm text-gray-400">
                  Endereço disponível no WhatsApp
                </span>
              </li>
              {contact.phone && (
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 flex-shrink-0 text-rose-400" />
                  <span className="text-sm text-gray-400">{contact.phone}</span>
                </li>
              )}
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-rose-400" />
                <span className="text-sm text-gray-400">{contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Horários</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-rose-400" />
                <div className="text-sm text-gray-400">
                  <div>Segunda - Sexta</div>
                  <div className="text-white">9h às 19h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-rose-400" />
                <div className="text-sm text-gray-400">
                  <div>Sábado</div>
                  <div className="text-white">8h às 17h</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-rose-400" />
                <div className="text-sm text-gray-400">
                  <div>Domingo</div>
                  <div className="text-white">Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {landingpage.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
