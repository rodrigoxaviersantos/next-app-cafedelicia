// components/Footer.js
import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {" "}
      <p>&copy; 2023 Café Delícia. Todos os direitos reservados.</p>
      <div className={styles.contactInfo}>
        <p>Endereço: Rua do Café, 123</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: info@cafedelicia.com</p>
      </div>
    </footer>
  );
};

export default Footer;
