import alunos from "@/data/anuario.json"
import AnuarioList from "@/components/Anuario/AnuarioList"

export default function Anuario() {
  return <AnuarioList alunos={alunos} />
}
