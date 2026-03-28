import { motion } from "framer-motion";
import problemImg from "@/assets/problem-person.jpg";

const ProblemSection = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="relative rounded-2xl overflow-hidden glow-border">
        <img
          src={problemImg}
          alt="Profissional sobrecarregado com múltiplas cotações"
          className="w-full h-64 md:h-96 object-cover opacity-40"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center p-6"
        >
          <div className="bg-foreground/95 rounded-xl px-8 py-6 md:px-16 md:py-10 max-w-3xl text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-background leading-tight mb-4">
              EMPRESAS GASTAM TEMPO COM VÁRIAS COTAÇÕES SOBRECARREGANDO A ÁREA DE TI
            </h2>
            <p className="text-base md:text-lg text-background/80 leading-relaxed">
              Centralizamos todo esse processo para sua empresa, reduzindo tempo e aumentando eficiência na tomada de decisão.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
