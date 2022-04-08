import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Test Otaku</h1>
          <div className="content__image">
            <img src="https://i.postimg.cc/tCtPs7RQ/image-inicio.jpg" />
          </div>
          <h2>Demuestra cuánto sabes de animes en este quizz</h2>
          <p>¡Buena suerte!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
