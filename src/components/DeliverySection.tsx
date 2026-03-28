import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Zap, BarChart3, Users, ShieldCheck } from "lucide-react";

const items = [
  { icon: Zap, title: "COTAÇÕES RÁPIDAS" },
  { icon: BarChart3, title: "COMPARATIVO DE CUSTO-BENEFÍCIO" },
  { icon: Users, title: "ATENDIMENTO PERSONALIZADO" },
  { icon: ShieldCheck, title: "CONSULTORIA GARANTIDA" },
];

const DeliverySection = () => (
  <section className="relative py-20">
    <div className="container mx-auto px-4 text-center">
      <SectionTitle>O QUE ENTREGAMOS</SectionTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-base max-w-3xl mx-auto mt-4 mb-8 leading-relaxed"
      >
        Ajudamos sua empresa a escolher a melhor solução, com análise comparativa entre operadoras, sem vínculo direto com uma única fornecedora.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {items.map(({ icon: Icon, title }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group glow-border rounded-xl p-8 hover:bg-card transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg">{title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverySection;
