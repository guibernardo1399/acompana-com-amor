import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, ClipboardList, GraduationCap, MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as aulas particulares.";

const services = [
  {
    icon: BookOpen,
    title: "Reforço Escolar",
    desc: "Apoio nas disciplinas em que o aluno apresenta maior dificuldade, com foco na compreensão dos conteúdos.",
    audience: "Alunos do ensino fundamental com dificuldade em matérias específicas.",
    benefits: ["Melhora nas notas", "Maior confiança", "Compreensão real do conteúdo"],
  },
  {
    icon: Users,
    title: "Acompanhamento Pedagógico",
    desc: "Orientação completa do processo de aprendizagem, identificando pontos fortes e áreas de melhoria.",
    audience: "Crianças que precisam de suporte contínuo no desenvolvimento escolar.",
    benefits: ["Desenvolvimento integral", "Identificação precoce de dificuldades", "Evolução constante"],
  },
  {
    icon: ClipboardList,
    title: "Auxílio em Tarefas Escolares",
    desc: "Ajuda na organização e execução das tarefas de casa, desenvolvendo autonomia e responsabilidade.",
    audience: "Alunos que têm dificuldade em organizar e completar tarefas escolares.",
    benefits: ["Organização", "Autonomia", "Rotina de estudos saudável"],
  },
  {
    icon: GraduationCap,
    title: "Preparação para Provas",
    desc: "Revisão focada dos conteúdos para avaliações, com técnicas de estudo eficientes.",
    audience: "Alunos que precisam melhorar o desempenho em avaliações escolares.",
    benefits: ["Melhor desempenho em provas", "Técnicas de estudo", "Redução da ansiedade"],
  },
];

const Servicos = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Nossos Serviços</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça as soluções pedagógicas que oferecemos para o desenvolvimento do seu filho.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container space-y-12">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">{s.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <p className="text-sm font-semibold text-foreground mb-2">Para quem é indicado:</p>
              <p className="text-sm text-muted-foreground mb-4">{s.audience}</p>
            </div>
            <div className={`bg-muted rounded-xl p-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="font-semibold text-foreground mb-4">Benefícios:</p>
              <ul className="space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ficou interessado?</h2>
        <p className="text-primary-foreground/80 mb-8">Entre em contato e agende uma aula experimental.</p>
        <Button variant="whatsapp" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Servicos;
