import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  const url = 'https://ranekapi.origamid.dev/json/api/produto';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Ranek | Produtos" description="Ranek | Produtos" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto?.id}>
          <h1 className={styles.nome}>{produto?.nome}</h1>
          <img src={produto?.fotos[0]?.src} alt={produto?.fotos[0]?.titulo} />
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
