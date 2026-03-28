import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Clock, Gift, Handshake, FolderOpen, Eye, Lightbulb } from "lucide-react";

const items = [
  { icon: Clock, title: "OTIMIZAÇÃO DO TEMPO", desc: "GARANTE A REDUÇÃO DO TEMPO GASTO PELO CLIENTE NA BUSCA POR SOLUÇÕES" },
  { icon: Gift, title: "CONSULTORIA GRATUITA", desc: "OFERECE UM SERVIÇO DE CONSULTORIA SEM CUSTO" },
  { icon: Handshake, title: "PARCERIA DIRETA", desc: "ATUA COM PARCERIA DIRETA COM TODAS AS OPERADORAS DO MERCADO" },
  { icon: FolderOpen, title: "CENTRALIZAÇÃO DE PROPOSTAS", desc: "PERMITE CENTRALIZAR TODAS AS PROPOSTAS EM UM SÓ LUGAR" },
  { icon: Eye, title: "TRANSPARÊNCIA", desc: "PROMOVE UM PROCESSO COM TOTAL TRANSPARÊNCIA" },
  { icon: Lightbulb, title: "INOVAÇÃO E SOLUÇÃO ADEQUADA", desc: "FOCA EM INOVAÇÃO E NA MELHOR SOLUÇÃO PARA O CLIENTE" },
];

const DifferentialsSection = () => (
  <section className="relative py-20">
    <div className="container mx-auto px-4 text-center">
      <SectionTitle>DIFERENCIAIS BBC FIBRA</SectionTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-base max-w-2xl mx-auto mt-4 mb-8 leading-relaxed"
      >
        Processo consultivo, focado na necessidade de cada empresa.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group glow-border rounded-xl p-8 hover:bg-card transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
