import { motion } from "framer-motion";
import problemImg from "@/assets/problem-person.jpg";

const ProblemSection = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-[#0b1d33] shadow-[0_0_40px_rgba(59,130,246,0.08)]"
        >
          {/* Imagem de fundo */}
          <img
            src={problemImg}
            alt="Profissional sobrecarregado com múltiplas cotações"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={900}
          />

          {/* Camadas para melhorar leitura */}
          <div className="absolute inset-0 bg-[#071423]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071423]/90 via-[#071423]/65 to-[#071423]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071423]/90 via-transparent to-[#071423]/40" />

          {/* Conteúdo */}
          <div className="relative z-10 min-h-[340px] md:min-h-[420px] flex items-center">
            <div className="w-full px-6 py-10 md:px-10 lg:px-14">
              <div className="max-w-3xl">
                <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-medium tracking-[0.2em] text-primary uppercase">
                  O problema
                </span>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-white">
                  Empresas gastam tempo com várias cotações,
                  <span className="block text-primary">
                    sobrecarregando a área de TI
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm md:text-lg leading-relaxed text-white/80">
                  Centralizamos todo esse processo para sua empresa, reduzindo
                  tempo e aumentando eficiência na tomada de decisão.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <p className="text-sm md:text-base text-white/90">
                      Menos tempo perdido com múltiplas operadoras
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <p className="text-sm md:text-base text-white/90">
                      Mais clareza para escolher a melhor solução
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* brilho sutil */}
          <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;