import React from "react";
import { useForm } from "react-hook-form";
import "./CharacterProfile.scss";


const CharacterProfile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="character-profile">
      <form
        className="character-profile_info"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="character-profile_name">
          <label>Nombre del personaje</label>
          <input type="text" name=""></input>
        </div>
        <select className="character-profile_gender">
          <option selected disabled hidden>
            Elige tu género
          </option>
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
          <option value="other">Otro</option>
        </select>
        <div className="character-profile_story">
          <label>Historia del personaje</label>
          <textarea type="text" name="" className="character-profile_story-box">
            Escribe de dónde viene tu personaje
          </textarea>
        </div>
        <div className="character-image">
          <img src="" alt="" />
        </div>
      </form>
      <div className="quiz-me">
        <h3 className="quiz-me_intro">
          La historia de Poniente la escriben los ganadores… y la estudian los
          Maestres. Durante el cumpleaños del rey Robert, los más sabios de las
          principales casas de los Siete Reinos se reunirán para hacer gala de
          su saber. ¿Te crees más inteligente que ellos? ¡Haz este quiz para
          poner a prueba tus conocimientos y saber si estás preparado para el
          Concilio de Maestres!
        </h3>
        <button className="quiz-me_btn" onClick={() => window.location.href="/quiz"}>Empezar Quiz</button>
      </div>
    </div>
  );
};

export default CharacterProfile;
