import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const Form = () => {
  const { register, formState: {errors}, watch, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  const addPhone = watch('addPhone');

  return (
    <div className="app">
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Nombre</label>
                <input type="text" {...register('name',{
                    required: true,
                    minLength: 4,
                    maxLength: 16
                })}/>
                {errors.name?.type === 'required' && <p>Nombre es un campo obligatorio</p>}
                {errors.name?.type === 'minLength' && <p>Nombre debe tener un mínimo de 4 y máximo 16 caracteres</p>}
                {errors.name?.type === 'maxLength' && <p>Nombre debe tener un mínimo de 4 y máximo 16 caracteres</p>}
                </div>
                <div>
                <label>Edad</label>
                <input type="text" {...register('age', {
                    required: true,
                    min: 18,
                })}/>
                {errors.age?.type === 'required' && <p>Edad es un campo obligatorio</p>}
                {errors.age?.type === 'min' && <p>La edad mínima debe ser 18 años</p>}
                </div>
                <div>
                <label>Email</label>
                <input type="email" {...register('email', {
                    required: true,
                    //  pattern: ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$
                })}/>
                {errors.email?.type === 'required' && <p>El campo email es obligatorio</p>}
                {/* {errors.email?.type === 'pattern' && <p>El campo email es erróneo</p>} */}
                </div>
                <div>
                <label>Contraseña</label>
                <input type="password" {...register('password', {
                    required: true,
                    // pattern: /^[A-Za-z]+$/i
                })}/>
                {errors.email?.type === 'required' && <p>La contraseña es un campo obligatorio</p>}
                </div>
                <div>
                <label>Repetir Contraseña</label>
                <input type="password" {...register('repassword')}/>
                </div>
                <div>
                <label>Elige tu casa</label>
                <select {...register('house', {
                    required: true 
                })}>
                    <option value="">Seleciona tu casa</option>
                    <option value="Stark">Stark</option>
                    <option value="Lannister">Lannister</option>
                    <option value="Greyjoy">Greyjoy</option>
                    <option value="Martell">Martell</option>
                </select>
                {errors.house?.type === 'required' && <p>Debes elegir una casa</p>}
                </div>
                <div>
                <label>¿Deseas incluir número telefonico?</label>
                <input type="checkbox" {...register('addPhone')}/>
                </div>
                {addPhone && (
                    <div>
                        <label>Número telefonico</label>
                        <input type="text" {...register('phone')} />
                    </div>
                )}
                <input type="submit" value="Registarse" />
            </form>
        </div>
    </div>
  );
};

export default Form;