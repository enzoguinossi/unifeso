import { AnuarioEntry } from "@/types/anuario"
import Image from "next/image"

type Props = {
  aluno: AnuarioEntry
}

export default function AnuarioCard({ aluno }: Props) {
  return (
    <div className="border rounded-lg p-4 text-center bg-white shadow hover:shadow-md transition">
      {/* Foto do aluno */}
      <Image
        src={aluno.fotoUrl}
        alt={`Foto de ${aluno.nome}`}
        width={100}
        height={100}
        className="mx-auto rounded-full mb-2"
      />

      {/* Nome */}
      <h3 className="font-semibold">{aluno.nome}</h3>

      {/* Descrição */}
      <p>{aluno.bio}</p>

      {/* Links de redes sociais */}
      <div className="flex justify-center gap-4 mt-2">
        {aluno.linkedin && (
          <a
            href={aluno.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${aluno.nome}`}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.787-1.75-1.756s.784-1.756 1.75-1.756 1.75.787 1.75 1.756-.784 1.756-1.75 1.756zm13.5 11.268h-3v-5.604c0-1.337-.026-3.065-1.868-3.065-1.868 0-2.154 1.46-2.154 2.97v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.6 2.001 3.6 4.601v5.594z" />
            </svg>
          </a>
        )}

        {aluno.instagram && (
          <a
            href={aluno.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${aluno.nome}`}
            className="hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </a>
        )}

        {aluno.github && (
          <a
            href={aluno.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${aluno.nome}`}
            className="hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.804 5.628-5.475 5.921.43.37.823 1.096.823 2.21 0 1.596-.015 2.884-.015 3.276 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
