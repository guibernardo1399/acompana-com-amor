import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Users, Star, Heart, CheckCircle2,
  MessageCircle, ClipboardList, GraduationCap, ArrowRight, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";
import pedagogaImg from "@/assets/pedagoga.jpg";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma aula experimental.";

const problems = [
  "Dificuldade na escola",
  "Falta de atenção nas aulas",
  "Baixo rendimento nas provas",
  "Dificuldade com lição de casa",
];

const solutions = [
  "Aulas personalizadas para cada aluno",
  "Método adaptado ao ritmo de aprendizado",
  "Acompanhamento contínuo do progresso",
  "Ambiente acolhedor e motivador",
];

const services = [
  { icon: BookOpen, title: "Reforço Escolar", desc: "Apoio nas disciplinas com maior dificuldade." },
  { icon: Users, title: "Acompanhamento Pedagógico", desc: "Orientação completa do processo de aprendizagem." },
  { icon: ClipboardList, title: "Auxílio em Tarefas", desc: "Ajuda na organização e execução das tarefas escolares." },
  { icon: GraduationCap, title: "Preparação para Provas", desc: "Revisão focada para melhorar o desempenho em avaliações." },
];

const diferenciais = [
  { icon: Heart, text: "Atendimento individual" },
  { icon: Star, text: "Metodologia personalizada" },
  { icon: Users, text: "Foco no desenvolvimento do aluno" },
  { icon: BookOpen, text: "Ambiente acolhedor" },
];

const steps = [
  { num: "1", title: "Contato", desc: "Entre em contato pelo WhatsApp ou formulário." },
  { num: "2", title: "Avaliação", desc: "Avaliação das necessidades do aluno." },
  { num: "3", title: "Plano de Ensino", desc: "Criação de um plano personalizado." },
  { num: "4", title: "Acompanhamento", desc: "Acompanhamento contínuo do progresso." },
];

const testimonials = [
  { name: "Maria S.", text: "Meu filho melhorou muito nas notas depois das aulas. Recomendo demais!", stars: 5 },
  { name: "João P.", text: "A professora é muito dedicada e paciente. Minha filha adora as aulas.", stars: 5 },
  { name: "Ana L.", text: "O acompanhamento personalizado fez toda a diferença no aprendizado.", stars: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-foreground">
                Aulas Particulares para Melhorar o{" "}
                <span className="text-primary">Desempenho Escolar</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Acompanhamento personalizado para o desenvolvimento do seu filho. Metodologia adaptada ao ritmo de cada aluno.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar Aula
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/servicos">Conhecer Serviços</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <img
                src={heroImg}
                alt="Criança estudando feliz com livros e materiais educativos"
                width={800}
                height={640}
                className="rounded-2xl shadow-xl max-w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema + Solução */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Seu filho enfrenta dificuldades na escola?
              </h2>
              <ul className="space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in-up-delay-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                Nós podemos ajudar!
              </h2>
              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-padding section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Nossos Serviços</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a pedagoga */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src={pedagogaImg}
                alt="Foto da pedagoga"
                width={400}
                height={500}
                loading="lazy"
                className="rounded-2xl shadow-lg max-w-[320px] w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Sobre a Pedagoga</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Apaixonada por educação, com experiência em ensino particular e acompanhamento pedagógico de crianças do ensino fundamental.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Acredito que cada criança tem um ritmo único de aprendizado e merece uma atenção individualizada para alcançar seu potencial.
              </p>
              <Button variant="outline" asChild>
                <a href="/sobre">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Nossos Diferenciais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <div key={d.text} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Como Funciona</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">O Que Dizem Sobre Nós</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm border">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Agende uma Aula Experimental</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Dê o primeiro passo para melhorar o desempenho escolar do seu filho. Entre em contato e conheça nosso método.
          </p>
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
};

export default Index;
