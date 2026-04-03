import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as aulas particulares.";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", telefone: "", idade: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) {
      toast({ title: "Preencha os campos obrigatórios", variant: "destructive" });
      return;
    }
    const msg = `Olá! Meu nome é ${form.nome}. Telefone: ${form.telefone}.${form.idade ? ` Idade do aluno: ${form.idade}.` : ""}${form.mensagem ? ` ${form.mensagem}` : ""}`;
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, "_blank");
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ nome: "", telefone: "", idade: "", mensagem: "" });
  };

  return (
    <Layout>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Entre em Contato</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas e agende uma aula experimental.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome *</Label>
                  <Input id="nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome completo" maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(00) 00000-0000" maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="idade">Idade do aluno (opcional)</Label>
                  <Input id="idade" value={form.idade} onChange={(e) => setForm({ ...form, idade: e.target.value })} placeholder="Ex: 8 anos" maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} placeholder="Conte-nos como podemos ajudar..." rows={4} maxLength={1000} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Outras Formas de Contato</h2>
              <div className="space-y-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-whatsapp/10 hover:bg-whatsapp/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(00) 00000-0000</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">(00) 00000-0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">contato@pedagoga.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localização</p>
                    <p className="text-sm text-muted-foreground">Sua cidade, Estado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
