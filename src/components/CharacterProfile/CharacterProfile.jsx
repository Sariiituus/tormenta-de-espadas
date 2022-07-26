import React from "react";
import { useForm } from "react-hook-form";
import "./CharacterProfile.scss";
import { useNavigate } from "react-router-dom";

const CharacterProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let navigate = useNavigate();

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
          <input
            type="text"
            name=""
            {...register("character", {
              required: true,
              minLength: 3,
              maxLength: 9,
            })}
          />
          {errors.character?.type === "required" && (
            <span>Se requiere nombre de personaje</span>
          )}
          {errors.character?.type === "maxLength" && (
            <span>El nombre debe tener menos de 10 caracteres</span>
          )}
          {errors.character?.type === "minLength" && (
            <span>El nombre debe tener más de 2 caracteres</span>
          )}
        </div>
        <select
          defaultValue="Elige tu género"
          className="character-profile_gender"
          {...register("gender", {
            required: true,
          })}
        >
          <option value="female">Mujer</option>
          <option value="male">Hombre</option>
          <option value="other">Otro</option>
        </select>
        <div className="character-profile_story">
          <label>Historia del personaje</label>
          <textarea
            type="text"
            {...register("story", {
              required: true,
              minLength: 200,
              maxLength: 1000,
            })}
            className="character-profile_story-box"
          />
          {errors.story?.type === "maxLength" && (
            <span>El límite de escritura es de 1000 caracteres</span>
          )}
          {errors.story?.type === "minLength" && (
            <span>La historia debe tener como mínimo 200 caracteres</span>
          )}
        </div>
        <div className="character-image">
          <img src="" alt="" />
        </div>
        <input type="submit" value="Guardar" />
      </form>
      <div className="quiz-me">
        <h3 className="quiz-me_intro">
          La historia de Poniente la escriben los ganadores… y la estudian los
          Maestres. Durante el cumpleaños del rey Robert, los más sabios de los
          Siete Reinos se reunirán para hacer gala de su saber. ¿Te crees más
          inteligente que ellos? ¡Descubre con este quiz si estás preparado para
          el Concilio de Maestres!
        </h3>
        <button className="quiz-me_btn" onClick={() => navigate("/quiz")}>
          Empezar Quiz
        </button>
      </div>
    </div>
  );
};

export default CharacterProfile;
