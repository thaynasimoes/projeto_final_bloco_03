import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto"

function Home() {
    return (
        <>
            <div className="bg-rose-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                        Aqui sua saúde sempre encontra a dose certa de cuidado.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalProduto />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5861/5861619.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaProdutos />
        </>
    )
}

export default Home