import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Baby, GraduationCap, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5591984832468?text=Olá! Gostaria de saber mais sobre as aulas particulares.";

const services = [
  {
    icon: BookOpen,
    title: "Aulas Individualizadas para o Ensino Fundamental",
    desc: "Aulas particulares com atenção individualizada, focadas nas necessidades específicas de cada aluno do ensino fundamental.",
    audience: "Alunos do ensino fundamental que precisam de suporte individual para acompanhar os conteúdos escolares.",
    benefits: ["Melhora nas notas", "Maior confiança", "Compreensão real do conteúdo"],
  },
  {
    icon: Baby,
    title: "Estimulação na Educação Infantil",
    desc: "Atividades de estimulação para crianças na fase da educação infantil, promovendo o desenvolvimento cognitivo, motor e socioemocional.",
    audience: "Crianças na educação infantil que precisam de estímulos adequados para o desenvolvimento.",
    benefits: ["Desenvolvimento cognitivo", "Estímulo motor e criativo", "Preparação para a alfabetização"],
  },
  {
    icon: GraduationCap,
    title: "Reforço Escolar e Revisão para Provas",
    desc: "Apoio nas disciplinas com maior dificuldade e revisão focada dos conteúdos para período de provas e avaliações.",
    audience: "Alunos que precisam melhorar o desempenho em avaliações e reforçar conteúdos específicos.",
    benefits: ["Melhor desempenho em provas", "Técnicas de estudo", "Redução da ansiedade"],
  },
  {
    icon: Sparkles,
    title: "Atividades Personalizadas",
    desc: "Criação de atividades e materiais pedagógicos personalizados, adaptados ao perfil e ritmo de aprendizado de cada aluno.",
    audience: "Alunos que precisam de um material diferenciado para fixar o aprendizado.",
    benefits: ["Material sob medida", "Aprendizado lúdico", "Engajamento do aluno"],
  },
];

const Servicos = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Nossos Serviços</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça as soluções pedagógicas que a Tia Ceci oferece para o desenvolvimento do seu filho.
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