import Childcard1 from "@/components/Childcard1"
import Childcard2 from "@/components/Childcard2"
import Childcard3 from "@/components/Childcard3"
import Parentcard from "@/components/Parentcard"

export default function Home() {
  return (
    <main>
      <Parentcard />
      <Childcard1 />
      <Childcard2 />
      <Childcard3 />
    </main>


  )
}
