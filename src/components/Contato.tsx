export default function Contato() {
  return (
    <section id="contato">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
        
        <p className="text-lg leading-relaxed font-semibold">
          WhatsApp:{' '}
          <a 
            href="https://wa.me/5585997307254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 hover:underline transition"
          >
            (85) 99730 7254
          </a>
        </p>
        
        <p className="text-lg leading-relaxed font-semibold">
          Email:{' '}
          <a 
            href="mailto:amoras.expressoes@gmail.com"
            className="text-white hover:text-blue-500 hover:underline transition"
          >
            amoras.expressoes@gmail.com
          </a>
        </p>
        
        <p className="mt-4 text-lg font-semibold">
          Horário: Segunda à Sexta, 9h às 18h Sábado de 9h às 12h
        </p>
      </div>
    </section>
  );
}