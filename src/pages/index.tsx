import Contato from "../components/Contato"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Servicos from "../components/Servicos"
import Sobre from "../components/Sobre"

export default function Home() {
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600"
    >
      <Header />

      {/* Sessão Hero */}
      <section id="inicio" className="flex justify-center items-center min-h-screen">
        <Hero />
      </section>

      {/* Sessão Serviços */}
      <section id="servicos" className="flex justify-center items-center min-h-screen">
        <Servicos />
      </section>

      {/* Sessão Contato */}
      <section id="contato" className="flex justify-center items-center min-h-screen">
        <Contato />
      </section>
      
      {/* Sessão Sobre */}
      <section id="sobre" className="flex justify-center items-center min-h-screen">
        <Sobre />
      </section>

      <Footer />
    </div>
  );
}