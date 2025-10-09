"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Crown, Gem,Heart, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Só executa no cliente
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simula um progresso de carregamento
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Redireciona após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        router.push("/bellavita");
      }, 800);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [router]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push("/bellavita");
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-6"
        >
          {/* Background Elements - Flores e elementos delicados */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-32 w-32 animate-pulse rounded-full bg-rose-200 blur-3xl"></div>
            <div className="absolute right-1/3 bottom-1/3 h-40 w-40 animate-pulse rounded-full bg-pink-200 blur-3xl delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 h-24 w-24 animate-pulse rounded-full bg-purple-200 blur-2xl delay-500"></div>
          </div>

          {/* Flores flutuantes */}
          {windowSize.width > 0 && windowSize.height > 0 && (
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * windowSize.width,
                    y: Math.random() * windowSize.height,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  {i % 3 === 0 ? (
                    <Heart className="h-4 w-4 fill-rose-300 text-rose-300" />
                  ) : i % 3 === 1 ? (
                    <Sparkles className="h-3 w-3 text-pink-300" />
                  ) : (
                    <Gem className="h-3 w-3 text-purple-300" />
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Conteúdo Principal */}
          <div className="z-10 max-w-2xl text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-2xl shadow-rose-400/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Crown className="h-12 w-12 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Heart className="h-5 w-5 fill-rose-400 text-rose-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-6xl font-bold text-transparent md:text-7xl"
            >
              Bella Vita
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-3 text-2xl font-light text-rose-700 md:text-3xl"
            >
              Onde sua beleza
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8 text-3xl font-semibold text-rose-800 md:text-4xl"
            >
              Se Torna Arte
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-rose-600"
            >
              Descubra a experiência única de um salão que cuida de você com
              carinho, profissionalismo e as melhores técnicas de beleza.
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 2 }}
              className="mx-auto mb-8 max-w-sm"
            >
              <div className="h-2 overflow-hidden rounded-full bg-rose-200">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-2 text-sm text-rose-600"
              >
                Preparando sua experiência de beleza... {progress}%
              </motion.p>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              onClick={handleSkip}
              className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white/80 px-8 py-4 text-rose-600 backdrop-blur-sm transition-all duration-300 hover:border-rose-400 hover:bg-white hover:text-rose-700 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Entrar Agora</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-rose-500"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Tratamentos Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-rose-400 text-rose-400" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="h-4 w-4" />
                <span>Produtos Exclusivos</span>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-8 text-xs text-rose-400/60"
            >
              <p>Realçando sua beleza natural desde 2010</p>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-rose-50 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
