// src/App.jsx

import { useState, useEffect } from "react";

import "./styles/app.css";

import Header from "./components/header";
import Footer from "./components/footer";
import ListPsicologo from "./components/list-psicologo";
import calendarIcon from "./assets/svg/calendar.svg";


function App() {
  // STATES
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // CARREGAR DADOS DO LOCAL STORAGE
  useEffect(() => {
    const usuarioSalvo = JSON.parse(
      localStorage.getItem("usuario")
    );

    if (usuarioSalvo) {
      setNome(usuarioSalvo.nome);
      setEmail(usuarioSalvo.email);
      setSenha(usuarioSalvo.senha);
    }
  }, []);

  // CADASTRAR
  function cadastrar() {
    const usuario = {
      nome,
      email,
      senha,
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

    alert("Cadastro realizado!");
  }

  // EDITAR
  function editarCadastro() {
    const usuarioAtualizado = {
      nome,
      email,
      senha,
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuarioAtualizado)
    );

    alert("Cadastro atualizado!");
  }

  // REMOVER
  function removerCadastro() {
    localStorage.removeItem("usuario");

    setNome("");
    setEmail("");
    setSenha("");

    alert("Cadastro removido!");
  }

  return (
    <>
      {/* SESSÃO VERDE */}
      <div className="container">
        <Header />

        <main className="hero">
          <div className="hero-text">
            <h2>Agende agora sua consulta</h2>

            <p>
              Diversos profissionais a sua
              disposição.
            </p>
          </div>

          <div className="box">
            <div className="top-inputs">
              <button className="buttom-input">
                Presencial
              </button>

              <button className="buttom-input">
                Online
              </button>
            </div>

            <div className="bottom-inputs">
              <ListPsicologo />

              <div className="calendar-input">
                <input type="date" />

                <img
                  src={calendarIcon}
                  alt="Calendário"
                  className="calendar-icon"
                />
              </div>

              <button className="button-search">
                Buscar
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* SESSÃO BRANCA */}
      <section className="white-section">
        <div className="cadastro-container">
          <div className="cadastro-box">
            <h2>Crie sua conta</h2>

            <p>
              Cadastre-se para agendar
              consultas com mais facilidade.
            </p>

            <div className="cadastro-inputs">
              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) =>
                  setNome(e.target.value)
                }
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) =>
                  setSenha(e.target.value)
                }
              />

              <button
                className="button-cadastro"
                onClick={cadastrar}
              >
                Cadastrar
              </button>

              <button
                className="button-cadastro"
                onClick={editarCadastro}
              >
                Editar cadastro
              </button>

              <button
                className="button-cadastro remove"
                onClick={removerCadastro}
              >
                Remover cadastro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <Footer />
    </>
  );
}

export default App;