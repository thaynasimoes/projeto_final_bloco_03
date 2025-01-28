import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutosProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutosProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{produto.nome}</h4>
          <p>{produto.descricao}</p>
          <p>Categoria: {produto.categoria?.nome}</p>
          <p>Quantidade: {produto.quantidade_estoque}</p>
        </div>
      </div>
      <div className="flex">
        <Link
          to=""
          className="w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${produto.id}`}
          className="text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
