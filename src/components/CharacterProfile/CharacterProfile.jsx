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

<<<<<<< HEAD
let navigate = useNavigate();
=======
  let navigate = useNavigate();
>>>>>>> profil-opt

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="character-profile">
      <div>
        <form
          className="character-profile_info"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="character-profile_name">
            <label>Nombre</label>
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
          <div className="character-profile_image">
            <label>Imagen</label>

            <input type="text" name="image" />
          </div>
          <div className="character-profile_gender">
            <label>Sexo</label>
            <select
              {...register("gender", {
                required: true,
              })}
            >
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
            </select>
          </div>
          <div className="character-profile_age">
            <label>Edad</label>
            <input
              type="number"
              {...register("age", {
                required: true,
              })}
            />
          </div>
          <div className="character-profile_class">
            <label>Clase</label>
            <select
              defaultValue="Elige tu clase"
              className="character-profile_class"
              {...register("class", {
                required: true,
              })}
            >
              <option value="fighter">Combatiente</option>
              <option value="negociator">Negociador</option>
              <option value="sage">Sabio</option>
            </select>
          </div>
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
              <span>El límite de escritura es de 700 caracteres</span>
            )}
            {errors.story?.type === "minLength" && (
              <span>La historia debe tener como mínimo 200 caracteres</span>
            )}
          </div>
          <input type="submit" value="Guardar" />
        </form>

        <div class="character-profile_card"></div>
      </div>

      <div className="quiz-me">
        <h3 className="quiz-me_intro">
          La historia de Poniente la escriben los ganadores… y la estudian los
          Maestres. Durante el cumpleaños del rey Robert, los más sabios de los
          Siete Reinos se reunirán para hacer gala de su saber. ¿Te crees más
          inteligente que ellos? ¡Descubre con este quiz si estás preparado para
          el Concilio de Maestres!
        </h3>
<<<<<<< HEAD
        <button
          className="quiz-me_btn"
          onClick={() => navigate('/quiz')}
        >
=======
        <button className="quiz-me_btn" onClick={() => navigate("/quiz")}>
>>>>>>> profil-opt
          Empezar Quiz
        </button>
      </div>
    </div>
  );
};

export default CharacterProfile;
