import { useNavigate } from "react-router-dom";
import CardProdutos from "../cardprodutos/CardProdutos";
import { useState, useContext, useEffect } from "react";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaProdutos() {

    const navigate = useNavigate();

    const [produtos, setProdutos] = useState<Produto[]>([]);

   

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos)

        } catch (error: any){}
    }


    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {produtos.map((produto) => (
                    <CardProdutos key={produto.id} produto={produto} />
                ))}

            </div>
        </>
    );
}

export default ListaProdutos;