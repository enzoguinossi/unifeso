import { AnuarioEntry } from "@/types/anuario"
import AnuarioCard from "./AnuarioCard"

type Props = {
  alunos: AnuarioEntry[]
}

export default function AnuarioList({ alunos }: Props) {
  return (
    <div className="flex items-center gap-6">
      {alunos.map((aluno) => (
        <AnuarioCard key={aluno.nome} aluno={aluno} />
      ))}
    </div>
  )
}
