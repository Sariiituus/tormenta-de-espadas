import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const Form = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const addPhone = watch("addPhone");

  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__featured">
            <div className="modal__circle"></div>
          </div>
          <div className="modal__content">
            <h2>Comienza tu aventura</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-list">
                <div className="form-list__row">
                  <label>Nombre</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                      minLength: 4,
                      maxLength: 16,
                    })}
                  />
                  {errors.name?.type === "required" && (<p>Nombre es un campo obligatorio</p>)}
                  {errors.name?.type === "minLength" && (<p>Nombre debe tener un mínimo de 4 y máximo 16 caracteres</p>)}
                  {errors.name?.type === "maxLength" && (<p>Nombre debe tener un mínimo de 4 y máximo 16 caracteres</p>)}
                </div>
                <div className="form-list__row">
                  <label>Edad</label>
                  <input
                    type="text"
                    {...register("age", {
                      required: true,
                      min: 18,
                    })}
                  />
                  {errors.age?.type === "required" && (<p>Edad es un campo obligatorio</p>)}
                  {errors.age?.type === "min" && (<p>La edad mínima debe ser 18 años</p>)}
                </div>
                <div className="form-list__row">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      //  pattern: ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p>El campo email es obligatorio</p>
                  )}
                  {/* {errors.email?.type === 'pattern' && <p>El campo email es erróneo</p>} */}
                </div>
                <div className="form-list__row form-list__row--inline">
                  <label>Contraseña</label>
                  <input
                    type="text"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/i,
                    })}
                  />
                  {errors.password?.type === "required" && (<p>La contraseña es un campo obligatorio</p>)}
                  {errors.password?.type === "required" && (<p>La contraseña debe tener una longitud mínima de 8 caracteres y máxima de 15, una letra mayúscula, una miniscula, un número y al menos un carácter especial ($@$!%*?&#.)</p>
                  )}
                </div>
                <div className="form-list__row form-list__row--inline">
                  <label>Confirmar Contraseña</label>
                  <input
                    type="text"
                    {...register("re-password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/i,
                    })}
                  />
                  {errors.password?.type === "required" && (<p>Confirmar copntraseña es un campo obligatorio</p>)}
                  {errors.password?.type === "required" && (<p>Confirmar copntraseña debe tener una longitud mínima de 8 caracteres y máxima de 15, una letra mayúscula, una miniscula, un número y al menos un carácter especial ($@$!%*?&#.)</p>)}
                  {errors.password?.type === "required" && (<p>Confirmar copntraseña debe coincidir con el campo contraseña</p>)}
                </div>
                <div className="form-list__row form-list__row--inline">
                  <label>Elige tu casa</label>
                  <select
                    {...register("house", {
                      required: true,
                    })}
                  >
                    <option value="">Seleciona tu casa</option>
                    <option value="Stark">Stark</option>
                    <option value="Lannister">Lannister</option>
                    <option value="Greyjoy">Greyjoy</option>
                    <option value="Martell">Martell</option>
                  </select>
                  {errors.house?.type === "required" && (
                    <p>Debes elegir una casa</p>
                  )}
                </div>
                <div className="form-list__row form-list__row--agree">
                  <label>¿Deseas incluir número telefonico?</label>
                  <input type="checkbox" {...register("addPhone")} />
                </div>
                {addPhone && (
                  <div className="form-list__row form-list__row--inline">
                    <label>Número telefonico</label>
                    <input type="text" {...register("phone")} />
                  </div>
                )}
              </div>
              <input type="submit" value="Registarse" className="button"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
