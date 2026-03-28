import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import teamImg from "@/assets/team-professional.jpg";
import { Target, Zap, Eye, Shield, TrendingUp } from "lucide-react";

const values = [
  { icon: Shield, label: "COMPROMETIMENTO" },
  { icon: Zap, label: "PROATIVIDADE" },
  { icon: TrendingUp, label: "AGILIDADE" },
  { icon: Target, label: "EFICIÊNCIA" },
  { icon: Eye, label: "TRANSPARÊNCIA" },
];

const AboutSection = () => (
  <section className="relative py-20 section-gradient" id="quem-somos">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>QUEM SOMOS</SectionTitle>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            BBC FIBRA COMO CANAL PARCEIRO E AUTORIZADO DE DIVERSAS OPERADORAS
          </p>
          <p className="text-base text-muted-foreground/80 mb-6 leading-relaxed">
            Não somos um provedor de internet. A BBC Fibra atua como parceira e intermediadora entre empresas e operadoras, oferecendo consultoria especializada para encontrar a melhor solução em telecom e TI.
          </p>
          <div className="glow-border rounded-xl p-6 mb-8">
            <h3 className="text-primary font-display font-bold text-xl mb-2">MISSÃO</h3>
            <p className="text-foreground font-display text-lg">
              SIMPLIFICAR, AGILIZAR E DAR CONFIANÇA
            </p>
          </div>
          <h3 className="text-primary font-display font-bold text-xl mb-4">VALORES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {values.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden glow-border">
            <img
              src={teamImg}
              alt="Equipe profissional BBC Fibra"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-[60px]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
