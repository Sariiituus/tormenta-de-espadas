import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import { API } from "../../shared/Api/Api";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/auth/auth.actions";

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    API.post("users", data).then((res) => {
      console.log('usuario registrado', res);
      dispatch(loginUser(res.data));
    })
  };

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
              <div className="form-list">
                <div className="form-list__row">
                  <label>Nombre</label>
                  <input
                    type="text"
                    {...register("userName", {
                      required: true,
                      minLength: 4,
                      maxLength: 16,
                    })}
                  />
                  {errors.name?.type === "required" && ( alert ("Nombre es un campo obligatorio"))}
                  {errors.name?.type === ("minLength", "maxLength") && ( alert ("Nombre debe tener un mínimo de 4 y máximo 16 caracteres"))}
                  {/* {errors.name?.type === "maxLength" && ( alert ("Nombre debe tener un mínimo de 4 y máximo 16 caracteres"))} */}
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
                  {errors.age?.type === "required" && ( alert ("Edad es un campo obligatorio"))}
                  {errors.age?.type === "min" && ( alert ("La edad mínima debe ser 18 años"))}
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
                  {errors.email?.type === "required" && ( alert ("El campo email es obligatorio"))}
                  {/* {errors.email?.type === 'pattern' && <span>El campo email es erróneo</span>} */}
                </div>
                <div className="form-list__row form-list__row--inline">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/i,
                    })}
                  />
                  {errors.password?.type === "required" && ( alert ("La contraseña es un campo obligatorio"))}
                  {errors.password?.type === "required" && ( alert ("La contraseña debe tener una longitud mínima de 8 caracteres y máxima de 15, una letra mayúscula, una miniscula, un número y al menos un carácter especial ($@$!%*?&#.)")
                  )}
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
                  {errors.house?.type === "required" && ( alert ("Debes elegir una casa"))}
                </div>
                <div className="form-list__row form-list__row--inline">
                    <label>Número telefonico</label>
                    <input type="text" {...register("phone")} />
                </div>
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
