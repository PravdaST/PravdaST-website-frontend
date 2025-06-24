import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      toast({
        title: "Съобщението е изпратено!",
        description: "Ще се свържем с вас в най-скоро време.",
      });
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setSubmitStatus('success');
    } catch (error) {
      toast({
        title: "Грешка при изпращане", 
        description: "Моля опитайте отново по-късно.",
        variant: "destructive"
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Свържете се с <span className="text-[#ECB628]">нас</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Готови сме да обсъдим как можем да помогнем за растежа на вашия бизнес
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Изпратете съобщение</CardTitle>
                <CardDescription className="text-gray-300">
                  Попълнете формата и ще се свържем с вас в рамките на 24 часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Име*</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-600 border-slate-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email*</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-600 border-slate-500 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Компания</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-white">Интересуваща услуга</Label>
                    <Input
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="bg-slate-600 border-slate-500 text-white"
                      placeholder="SEO, Clientomat, Sales Engine, друго..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Съобщение*</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-600 border-slate-500 text-white min-h-[120px]"
                      placeholder="Разкажете ни за вашия проект..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold"
                  >
                    {isSubmitting ? "Изпраща се..." : "Изпрати съобщение"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="w-5 h-5 text-[#ECB628] mr-2" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">София, България</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="w-5 h-5 text-[#ECB628] mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">info@pravdagency.eu</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="w-5 h-5 text-[#ECB628] mr-2" />
                    Работно време
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Понеделник - Петък: 9:00 - 18:00</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}