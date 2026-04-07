import { useParams } from "react-router-dom"

export default function EditarProdutos() {

  //Realizando um destructuring para pegar o id da url:
  const { id } = useParams();
  console.log(`ID do produto a ser editado: ${id}`);


  return (
    <main>
        <h1>Editar Produtos</h1>
        <p>ID do produto: {id}</p>
    </main>
  )
}
 