import "./app.css";
import React from "react";
import { login } from "./utils/index.js";
import { useForm, SubmitHandler } from "react-hook-form";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

type FormInputs = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInputs>();

  return (
    <div className="wrapper">
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className="row">
          <label htmlFor={"email"}>Email:</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            {...register("email", { required: true, minLength: 0 })}
          />
        </div>

        <div className="row">
          <label htmlFor={"password"}>Password:</label>
          <input
            id={"password"}
            type={"password"}
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
    
        <div className="button">
          <button disabled={!isValid}>Login</button>
        </div>
      </form>
    </div>
  );

  function submit(e) {
    login(e.email, e.password)
      .then(() => {
        alert("login success");
      })
      .catch(() => {
        alert("login failed");
      })
  }
}
