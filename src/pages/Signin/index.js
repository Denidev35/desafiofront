import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import logo from "../../assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function Signin() {
  function handleSubimit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubimit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>

        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
