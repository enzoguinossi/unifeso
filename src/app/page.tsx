"use client"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="text-center py-24 px-4">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Turma ADS</h1>
        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#sobre" className="btn-primary">
            Começar
          </a>
          <a href="#projetos" className="btn-navbar">
            Ver Projetos
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Sobre a Turma</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Projetos da Turma
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at lacus ac velit ornare lobortis.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at lacus ac velit ornare lobortis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-700 mb-6">
          Quer entrar em contato com a turma? Preencha o formulário abaixo:
        </p>
        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Seu nome"
            className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
          <textarea
            placeholder="Mensagem"
            className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
          />
          <button type="submit" className="btn-primary">
            Enviar
          </button>
        </form>
      </section>
    </main>
  )
}
