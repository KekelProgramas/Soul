import "../styles/header.css";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Soul" className="logo-img" />

        <h1>Soul</h1>
      </div>

      <nav className="menu">
        <a href="#" className="active">
          home
        </a>

        <a href="#">clinicas</a>

        <a href="#">psicologos</a>

        <a href="#">entrar</a>

        <a href="#">registrar</a>
      </nav>
    </header>
  );
}