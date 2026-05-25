import { useState } from "react";

import ArrowDown from "../assets/svg/arrow-downward.svg";

import "../styles/list-psicologo.css";

function ListPsicologo() {
  const [mostrarPsicologos, setMostrarPsicologos] = useState(false);

  const psicologos = [
    "Dra. Ana Clara",
    "Dr. João Pedro",
    "Dra. Mariana Silva",
    "Dr. Lucas Souza",
    "Dra. Fernanda Lima",
  ];

  return (
    <div className="dropdown">
      <button
        className="psicologo-button"
        onClick={() => setMostrarPsicologos(!mostrarPsicologos)}
      >
        Psicólogos

        <img
          src={ArrowDown}
          alt="Seta para baixo"
          className="arrow-icon"
        />
      </button>

      {mostrarPsicologos && (
        <ul className="lista-psicologos">
          {psicologos.map((psicologo, index) => (
            <li key={index}>{psicologo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListPsicologo;