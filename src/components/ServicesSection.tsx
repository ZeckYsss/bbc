import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GridBackground from "./GridBackground";
import {
  Globe, ArrowRightLeft, Cloud, Shield, Wifi,
  Phone, PhoneCall, Smartphone, Printer, Laptop, Radio
} from "lucide-react";

const services = [
  { icon: Globe, label: "CONECTIVIDADE / INTERNET DEDICADA" },
  { icon: ArrowRightLeft, label: "PONTO A PONTO / MPLS" },
  { icon: Cloud, label: "BANDA LARGA / BACKUP NA NUVEM" },
  { icon: Shield, label: "SEGURANÇA / SD-WAN" },
  { icon: Radio, label: "ANTI-DDOS / FIREWALL" },
  { icon: Wifi, label: "SMART WI-FI" },
  { icon: Phone, label: "VOZ / PABX NA NUVEM" },
  { icon: PhoneCall, label: "SIP TRUNK / R2 / ISDN" },
  { icon: Smartphone, label: "TELEFONIA MÓVEL" },
  { icon: Printer, label: "LOCAÇÃO / IMPRESSORAS" },
  { icon: Laptop, label: "NOTEBOOK" },
];

const ServicesSection = () => (
  <section className="relative py-20 section-gradient overflow-hidden" id="solucoes">
    <GridBackground />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <SectionTitle>NOSSAS SOLUÇÕES</SectionTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-base max-w-3xl mx-auto mb-4 leading-relaxed"
      >
        Atuamos na intermediação dessas soluções junto às operadoras parceiras, sempre focando na melhor escolha para sua empresa.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg max-w-3xl mx-auto mb-4"
      >
        TEMOS PARCERIA DIRETA COM GRANDES OPERADORAS EM TODO TERRITÓRIO BRASILEIRO PARA ATENDIMENTO NA ÁREA DE TI/TELECOM SENDO ELES:
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {services.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="glow-border rounded-xl p-5 bg-background/50 backdrop-blur-sm flex flex-col items-center gap-3 hover:bg-card transition-all duration-300"
          >
            <Icon className="w-8 h-8 text-primary" />
            <span className="font-display font-semibold text-foreground text-xs sm:text-sm text-center">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
