import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContianer}>
        <div className={styles.footerText}>© 2025 Cosmic</div>
      </div>
    </footer>
  );
};

export default Footer;
