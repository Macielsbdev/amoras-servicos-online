import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-purple-900/95 backdrop-blur-sm shadow-lg">
      <div className="flex justify-between items-center px-4 py-2 md:py-3 container mx-auto">
        {/* Logo - menor em mobile */}
<Image
  src="/asamoras.jpg"
  alt="Logo Amoras"
  width={250}
  height={250}
  className="w-16 h-16 md:w-40 md:h-40 rounded-full object-cover" 
  /* Removi o scale-150 e aumentei o tamanho base para w-40 h-40 */
/>
        
        {/* Menu - esconder em telas pequenas */}
        <nav className="hidden md:flex gap-10">
          <Link 
            href="/#inicio" 
            className="text-white hover:text-pink-200 transition"
          >
            Início
          </Link>
          <Link 
            href="/#servicos" 
            className="text-white hover:text-pink-200 transition"
          >
            Serviços
          </Link>
          <Link 
            href="/#contato" 
            className="text-white hover:text-pink-200 transition"
          >
            Contato
          </Link>
          <Link 
            href="/#sobre" 
            className="text-white hover:text-pink-200 transition"
          >
            Sobre
          </Link>
        </nav>

        {/* Menu mobile - visível apenas em telas pequenas */}
        <nav className="flex md:hidden gap-4 text-sm">
         <Link href="/#inicio" scroll={true} className="text-white">Início</Link>
         <Link href="/#servicos" scroll={true} className="text-white">Serviços</Link>
         <Link href="/#contato" scroll={true} className="text-white">Contato</Link>
         <Link href="/#sobre" scroll={true} className="text-white">Sobre</Link>

        </nav>
      </div>
    </header>
  );
}