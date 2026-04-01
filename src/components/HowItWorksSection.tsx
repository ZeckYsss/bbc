import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GridBackground from "./GridBackground";

const steps = [
  { num: "01", title: "TRATATIVA INICIAL", desc: "ENTENDER A DEMANDA E AS NECESSIDADES ESPECÍFICAS DO CLIENTE." },
  { num: "02", title: "COTAÇÃO", desc: "ACIONAR AS OPERADORAS PARCEIRAS PARA SOLICITAR AS COTAÇÕES." },
  { num: "03", title: "ESTUDO DE VIABILIDADE", desc: "ACOMPANHAR O ESTUDO DE VIABILIDADE TÉCNICA PARA O SERVIÇO SOLICITADO." },
  { num: "04", title: "ORGANIZAÇÃO DAS PROPOSTAS", desc: "APÓS A VIABILIDADE, RECEBER E ORGANIZAR TODAS AS PROPOSTAS." },
  { num: "05", title: "APRESENTAÇÃO E DECISÃO", desc: "ENTREGAR TODAS AS PROPOSTAS PARA ANÁLISE E DECISÃO DO CLIENTE SOBRE QUAL OPERADORA CONTRATAR." },
  { num: "06", title: "FORMALIZAÇÃO DO PEDIDO", desc: "REALIZAR OS TRÂMITES DO PEDIDO JUNTO À OPERADORA ESCOLHIDA." },
];

const HowItWorksSection = () => (
  <section className="relative py-20 section-gradient overflow-hidden" id="como-funciona">
    <GridBackground />
    <div className="relative z-10 container mx-auto px-4">
      <SectionTitle className="text-center">COMO FUNCIONA</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {steps.map(({ num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glow-border rounded-xl p-6 bg-background/50 backdrop-blur-sm"
          >
            <span className="text-4xl font-display font-bold text-primary/30">{num}</span>
            <h3 className="font-display font-bold text-foreground text-lg mt-2 mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
