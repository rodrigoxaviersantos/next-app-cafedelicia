import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "./Footer"; // Importando componente Footer

const Card = ({ title, image, description, link }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
    <Link href={`/categoria/${link}`}>
      <p>Ver detalhes</p>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Adicionando links para fontes do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>Cappuccino</h1>
      <p>Aproveite seu café antes de sua atividade</p>
      <div className={styles.cardsContainer}>
        <Card
          title="Leite quente"
          image="/product1.png"
          description="Leite quente com menos açúcar"
          link="produto1"
        />
        <Card
          title="Moccacinno"
          image="/product2.png"
          description="Moccacinno Quente"
          link="produto2"
        />
      </div>
      <Footer /> {/* componente Footer */}
    </div>
  );
}
