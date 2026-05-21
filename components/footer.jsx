import logo from "../assets/img/logo.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Soul" className="footer-logo-img" />

        <h1>Soul</h1>
      </div>

      <nav className="footer-menu">
        <a href="#">home</a>

        <a href="#">clinicas</a>

        <a href="#">psicologos</a>

        <a href="#">entrar</a>

        <a href="#">registrar</a>
      </nav>

      <p className="footer-copy">
        © 2026 Soul. Todos os direitos reservados.
      </p>
    </footer>
  );
}