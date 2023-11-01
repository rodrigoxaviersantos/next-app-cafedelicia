// pages/categoria/[id].js
import { useRouter } from "next/router";
import { products } from "../../utils/data"; // Importando dados do produtos
import styles from "../../styles/Detalhes.module.css";

const CategoriaDetalhes = () => {
  const router = useRouter();
  const { id } = router.query;

  // Verificando se o produto com o ID fornecido existe nos dados
  const produto = products[id];

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  const { title, description, price, image } = produto;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <img src={image} alt={title} />
      <p className={styles.description}>{description}</p>
      <p>Preço: R${price.toFixed(2)}</p>
      <button onClick={() => router.push("/")}>Voltar</button>
    </div>
  );
};

export default CategoriaDetalhes;
