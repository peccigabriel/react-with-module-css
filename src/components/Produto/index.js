import React, { useEffect, useState } from 'react';
import styles from './Produto.module.css';
import Head from '../Head';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const url = `https://ranekapi.origamid.dev/json/api/produto/${id}`;

  useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError(`Ocorreu um erro: ${erro}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
  }, [id]);

  if (loading) return <div className="loading" />;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto?.nome}`}
        description={`Ranek | Produto: ${produto?.nome}`}
      />

      <div>
        {produto.fotos.map((foto) => (
          <img key={foto?.src} src={foto?.src} alt={foto?.titulo} />
        ))}
      </div>

      <div>
        <h1>{produto?.nome}</h1>
        <span className={styles.preco}>R$ {produto?.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
