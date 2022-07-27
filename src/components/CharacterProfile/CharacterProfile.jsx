import React from "react";
import { useForm } from "react-hook-form";
import "./CharacterProfile.scss";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/Api/Api";

const CharacterProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);    
      API.post("characters", data).then((res) => {
        console.log('usuario registrado', res);
    })
  };

  return (
    <div className="character-profile">
      <div className="character-creator">
        <form
          className="character-profile_info"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="character-profile_name">
            <label className="title-small">Nombre</label>
            <input
              type="text"
              name="name"
              {...register("character", {
                required: true,
                minLength: 3,
                maxLength: 19,
              })}
            />
            {errors.character?.type === "required" && (
              <span>Se requiere nombre de personaje</span>
            )}
            {errors.character?.type === "maxLength" && (
              <span>El nombre debe tener menos de 20 caracteres</span>
            )}
            {errors.character?.type === "minLength" && (
              <span>El nombre debe tener más de 2 caracteres</span>
            )}
          </div>
          <div className="character-profile_image">
            <label className="title-small">Imagen</label>
            <input type="text" name="image" />
          </div>
          
          <div className="character-profile_age">
              <label className="title-small">Sexo</label>
              <select className="search_categories"
                {...register("gender", {
                  required: true,
                })}
              >
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
              </select>
          </div>
          

          <div className="character-profile_age">
            <label className="title-small">Edad</label>
            <input
              type="number"
              {...register("age", {
                required: true,
              })}
            />
          </div>
          <div className="character-profile_class">
            <label className="title-small">Clase</label>
            <select
              defaultValue="Elige tu clase"
              className="character-profile_class"
              {...register("class", {
                required: true,
              })}
            >
              <option value="combatiente">Combatiente</option>
              <option value="negociador">Negociador</option>
              <option value="sabio">Sabio</option>
            </select>
          </div>
          <div className="character-profile_story">
            <label className="title-small">Historia del personaje</label>
            <textarea
              type="text"
              {...register("story", {
                required: true,
                minLength: 200,
                maxLength: 500,
              })}
              className="character-profile_story-box"
            />
            {errors.story?.type === "maxLength" && (
              <span>El límite de escritura es de 500 caracteres</span>
            )}
            {errors.story?.type === "minLength" && (
              <span>La historia debe tener como mínimo 200 caracteres</span>
            )}
          </div>
          <input type="submit" value="Guardar" className="button-6"/>
        </form>

        <div className="info-right-side">

          <div className="character-profile_card">
            <div class="character-profile_card-info">
              <h3>Nombre: <span className="character-profile_card-choice">{watch("character")}</span></h3>
              <h3>Sexo: <span className="character-profile_card-choice">{watch("gender")}</span></h3>
              <h3>Clase: <span className="character-profile_card-choice">{watch("class")}</span></h3>
              <h3>Edad: <span className="character-profile_card-choice">{watch("age")}</span></h3>
              <h3>Historia : <span className="character-profile_card-choice">{watch("story")}</span></h3>
                <button className="button-6">Descarga</button>
            </div>

            <div className="character-profile_card-picture">
              <img
                  src={watch("image")}
                  alt="avatar"
                  class="character-profile_card-main"
                />
            </div>
          </div>

          <div className="quiz-me">

            <div className="into-and-pic">
              <h3 className="quiz-me_intro">
              La historia de Poniente la escriben los ganadores… y la estudian los
              Maestres. Durante el cumpleaños del rey Robert, los más sabios de los
              Siete Reinos se reunirán para hacer gala de su saber. ¿Te crees más
              inteligente que ellos? ¡Descubre con este quiz si estás preparado para
              el Concilio de Maestres!
              </h3>
              <img className='squid-shield' src='./assets/icons/squid-shield-half.png' alt='' />
            </div>
            

            <button className="button-7" onClick={() => navigate("/quiz")}>
            Empezar Quiz
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
