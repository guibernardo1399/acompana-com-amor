import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Star, BookOpen, Users, ArrowRight } from "lucide-react";
import pedagogaImg from "@/assets/pedagoga.jpg";

const Sobre = () => (
  <Layout>
    <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Sobre Mim</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça um pouco mais sobre minha trajetória e minha paixão pela educação.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={pedagogaImg}
              alt="Pedagoga Cecilya - Tia Ceci"
              width={400}
              height={500}
              loading="lazy"
              className="rounded-2xl shadow-lg max-w-[360px] w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">Minha História</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou a Cecilya, pedagoga apaixonada pelo desenvolvimento infantil e pela transformação que a educação pode proporcionar na vida de cada criança. Conhecida carinhosamente como Tia Ceci pelos meus alunos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com experiência em aulas particulares, estimulação infantil e acompanhamento pedagógico, desenvolvi uma metodologia que respeita o ritmo individual de cada aluno, criando um ambiente seguro e estimulante para o aprendizado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meu objetivo é que cada aluno não apenas melhore suas notas, mas que desenvolva amor pelo conhecimento e confiança em sua capacidade de aprender.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Minha Forma de Ensino</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Empatia", desc: "Entender as dificuldades de cada aluno com carinho e paciência." },
            { icon: Star, title: "Personalização", desc: "Adaptar o método ao perfil e ritmo de cada criança." },
            { icon: BookOpen, title: "Prática", desc: "Atividades práticas e lúdicas para fixar o aprendizado." },
            { icon: Users, title: "Parceria", desc: "Trabalhar junto com os pais para o melhor resultado." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 shadow-sm border text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container text-center">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Quer conhecer melhor meu trabalho?</h2>
        <Button variant="hero" size="lg" asChild>
          <a href="/contato">
            Entre em Contato <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Sobre;