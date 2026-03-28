import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section className="relative py-20" id="contato">
    <div className="container mx-auto px-4 text-center">
      <SectionTitle>CONTATO</SectionTitle>
      <div className="max-w-2xl mx-auto mt-12">
        <div className="glow-border rounded-2xl p-8 md:p-12 bg-card/50 backdrop-blur-sm space-y-6">
          {[
            { icon: Phone, text: "+55 (11) 97174-0412", href: "tel:+5511971740412" },
            { icon: Mail, text: "comercial@canal-bbctec.com.br", href: "mailto:comercial@canal-bbctec.com.br" },
            { icon: Instagram, text: "bbcfibra.oficial", href: "https://instagram.com/bbcfibra.oficial" },
            { icon: Linkedin, text: "bbcfibra", href: "https://linkedin.com/company/bbcfibra" },
          ].map(({ icon: Icon, text, href }, i) => (
            <motion.a
              key={text}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 justify-center md:justify-start"
            >
              <Icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium">{text}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contato"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="btn-glow inline-block text-lg mt-10"
        >
          SOLICITAR ANÁLISE CONSULTIVA
        </motion.a>
      </div>
    </div>
  </section>
);

export default ContactSection;
