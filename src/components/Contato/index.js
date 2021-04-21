import React from 'react';
import styles from './Contato.module.css';
import foto from '../../img/contato.jpg';
import Head from '../Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>gabriel@pecci.com.br</li>
          <li>99999-9999</li>
          <li>Rua Qualquer, 60 - Sorocaba | SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
