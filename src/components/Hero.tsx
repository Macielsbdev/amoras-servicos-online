// src/components/Hero.tsx

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className='flex flex-col justify-start items-center text-center min-h-screen pt-40 md:pt-48 px-4'>    
    <div className="max-w-2xl space-y-6"> 
        <h1 className="text-4xl  md:text-6xl font-extrabold text-white leading-tight">
            Amoras <br /> 
            <span className='font-semibold'>
                Impressões Online
            </span> 
                
            
        </h1>
        <p className="text-white">
            Currículo, Impressões, Scanner, Plastificação.
        </p>
        <Link 
            href="#servicos" scroll={false}
            className="mt-4 inline-block bg-pink-600 text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300 shadow-xl"
        >
            Ver Serviços
        </Link>        

    </div>

    <p className='mt-10'>Bendiga, minha alma, o SENHOR, e tudo o que há em mim bendiga o seu santo nome. 
        <br />(Salmo 103)</p>

    </section>


  );
}