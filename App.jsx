// src/App.jsx

import "./styles/App.css";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* SESSÃO VERDE */}
      <div className="container">
        <Header />

        <main className="hero">
          <div className="hero-text">
            <h2>Agende agora sua consulta</h2>

            <p>Diversos profissionais a sua disposição.</p>
          </div>

          <div className="search-box">
            <div className="top-inputs">
              <input type="text" />

              <input type="text" />
            </div>

            <div className="bottom-inputs">
              <input type="text" />

              <input type="text" />

              <button>Buscar</button>
            </div>
          </div>
        </main>
      </div>

      {/* SESSÃO BRANCA */}
      <section className="white-section"></section>

      {/* RODAPÉ */}
      <Footer />
    </>
  );
}

export default App;