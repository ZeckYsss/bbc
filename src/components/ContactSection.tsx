import { useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

declare global {
  interface Window {
    WidgetWhatsConfig?: {
      userId: number;
      accountId: number;
      funnelId: number | null;
      sequenceId: number | null;
      whatsappNumber: string;
      companyName: string;
      whatsappMessage: string;
      entity: string;
      deal: boolean;
      fields: Array<{
        name: string;
        label: string;
        type: string;
        required: boolean;
        customField: boolean;
      }>;
    };
  }
}

const contacts = [
  { icon: Phone, text: "+55 (11) 97174-0412", href: "tel:+5511971740412" },
  { icon: Mail, text: "comercial@canal-bbctec.com.br", href: "mailto:comercial@canal-bbctec.com.br" },
  { icon: Instagram, text: "bbcfibra.oficial", href: "https://instagram.com/bbcfibra.oficial" },
  { icon: Linkedin, text: "bbcfibra", href: "https://linkedin.com/company/bbcfibra" },
];

const AGENDOR_SCRIPT_ID = "agendor-whatsapp-widget-script";

const ContactSection = () => {
  useEffect(() => {
    window.WidgetWhatsConfig = {
      userId: 36840,
      accountId: 26911,
      funnelId: null,
      sequenceId: null,
      whatsappNumber: "+5511971740412",
      companyName: "BBCFibra.com.br",
      whatsappMessage: "Olá, vai ser um prazer atendê-lo, qual é o seu nome por gentileza?",
      entity: "organization",
      deal: false,
      fields: [
        {
          name: "name",
          label: "Nome",
          type: "text",
          required: true,
          customField: false,
        },
        {
          name: "email",
          label: "E-mail",
          type: "email",
          required: true,
          customField: false,
        },
        {
          name: "whatsapp",
          label: "WhatsApp",
          type: "text",
          required: true,
          customField: false,
        },
        {
          name: "cnpj",
          label: "CNPJ",
          type: "cnpj",
          required: true,
          customField: false,
        },
      ],
    };

    const existingScript = document.getElementById(AGENDOR_SCRIPT_ID);
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = AGENDOR_SCRIPT_ID;
    script.src = "https://widgets.agendor.com.br/whatsapp.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Se quiser manter o widget global no site inteiro, pode remover este cleanup.
      // Aqui deixei apenas para evitar duplicação em montagens/desmontagens.
    };
  }, []);

  const handleOpenAgendorWidget = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Tenta abrir o widget que o script da Agendor renderizar/inserir.
    const possibleTriggers = [
      '[data-agendor-whatsapp]',
      '.agendor-whatsapp-widget',
      '.agendor-widget-whatsapp',
      '.agendor-widget',
      '#agendor-whatsapp-widget',
    ];

    for (const selector of possibleTriggers) {
      const element = document.querySelector(selector) as HTMLElement | null;
      if (element) {
        element.click();
        return;
      }
    }

    // Fallback: abre o WhatsApp direto caso o widget ainda não tenha carregado.
    window.open("https://wa.me/5511971740412", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20" id="contato">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle>CONTATO</SectionTitle>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="glow-border rounded-2xl p-6 md:p-12 bg-card/50 backdrop-blur-sm space-y-6">
            {contacts.map(({ icon: Icon, text, href }, i) => (
              <motion.a
                key={text}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="grid grid-cols-[24px_1fr] items-center gap-3 text-left text-muted-foreground hover:text-primary transition-colors duration-300 max-w-md mx-auto md:mx-0"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium break-words">{text}</span>
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://wa.me/5511971740412?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20análise%20consultiva.%0A%0A*Nome:*%20%0A*Empresa:*%20%0A*CNPJ:*%20%0A*Telefone:*%20%0A*Mensagem:*%20"
            target="_blank"
            rel="noopener noreferrer"
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
};

export default ContactSection;