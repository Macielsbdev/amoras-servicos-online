// ...existing code...
import React, { useState } from "react";
import Drawer from "./Drawer";
// ...existing code...

export default function Servicos() {
    const [openService, setOpenService] = useState<string | null>(null);

    return (
        <section id="servicos" className="py-20 bg-white/5">
            
            <h2 className="text-3xl font-bold text-center tgext-white mb-10">Nossos Serviços</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">

                <div
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenService("scanner")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenService("scanner"); }}
                  aria-label="Abrir detalhes Scanner"
                >
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Scanner</h3>
                    <p className="text-gray-700">Digitalização de Documentos</p>
                
                </div>

                <div
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenService("impressao")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenService("impressao"); }}
                  aria-label="Abrir detalhes Impressões"
                >
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Impressões</h3>
                    <p className="text-gray-700">Documentos e Trabalhos</p>
                </div>

                <div
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenService("plastificacao")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenService("plastificacao"); }}
                  aria-label="Abrir detalhes Plastificação"
                >
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Plastificação</h3>
                    <p className="text-gray-700">Proteção Para os Seus Documentos</p>
                </div>

                <div
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenService("curriculo")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenService("curriculo"); }}
                  aria-label="Abrir detalhes Currículo"
                >
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Currículo</h3>
                    <p className="text-gray-700">Currículos Profissionais</p>
                </div>

                 <div
                  className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenService("web")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpenService("web"); }}
                  aria-label="Abrir detalhes Web"
                >
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Web</h3>
                    <p className="text-gray-700">Construção de Páginas Web e Pequenos Sites</p>
                </div>
            </div>

            <Drawer open={!!openService} onClose={() => setOpenService(null)} title={openService ?? ""}>
              <div className="text-gray-700">
                {openService === "scanner" && (
                  <>
                    <p className="font-semibold">Scanner — Digitalização de Documentos</p>
                    <p className="mt-3">Alta qualidade de digitalização.</p>
                    <p className="mt-3 font-semibold">Preço a partir de R$ 1,00 por página.</p>
                  </>
                )}
                {openService === "impressao" && (
                  <>
                    <p className="font-semibold">Impressões — Documentos e Trabalhos</p>
                    <p className="mt-3">Colorido e preto e branco.</p>
                    <p className="mt-3 font-semibold">Preço a partir de R$ 0,50 por página.</p>
                  </>
                )}
                {openService === "plastificacao" && (
                  <>
                    <p className="font-semibold">Plastificação</p>
                    <p className="mt-3">Proteção em vários tamanhos.</p>
                    <p className="mt-3 font-semibold">Preço a partir de R$ 3,00 por folha.</p>
                  </>
                )}
                {openService === "curriculo" && (
                  <>
                    <p className="font-semibold">Currículo</p>
                    <p className="mt-3">Formatação e impressão profissional.</p>
                    <p className="mt-3 font-semibold">Preço a partir de R$ 10,00.</p>
                  </>
                )}
                {openService === "web" && (
                  <>
                    <p className="font-semibold">Web — Páginas e Sites</p>
                    <p className="mt-3">Sites simples e landing pages.</p>
                    <p className="mt-3 font-semibold">Orçamento a partir de R$ 300,00.</p>
                  </>
                )}
                <div className="mt-6">
                  <button onClick={() => setOpenService(null)} className="px-4 py-2 bg-purple-600 text-white rounded-md">Fechar</button>
                </div>
              </div>
            </Drawer>
            
        </section>
    )
}
// ...existing code...