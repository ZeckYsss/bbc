import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import logo from "@/assets/logo-bbcfibra.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <GridBackground />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-flex items-center gap-3"
      >
        <img src={logo} alt="BBC Fibra" className="h-16 md:h-24 lg:h-28 w-auto" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-secondary font-display tracking-[0.3em] mb-6"
      >
        LEVANDO A TECNOLOGIA ATÉ VOCÊ
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-display font-semibold mb-6 max-w-3xl mx-auto"
      >
        SEU PARCEIRO ESTRATÉGICO EM TI E TELECOM
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        Atendimento exclusivo para empresas (CNPJ). Atuamos como consultoria e intermediação junto às principais operadoras do mercado.
      </motion.p>

      <motion.a
        href="#contato"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="btn-glow inline-block text-lg"
      >
        SOLICITAR ORÇAMENTO
      </motion.a>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
