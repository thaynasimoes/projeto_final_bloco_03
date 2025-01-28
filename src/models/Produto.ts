import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade_estoque: BigInteger;
  categoria: Categoria | null;
}