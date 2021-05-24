import React, { useCallback, useRef } from "react";
import { Container, Content, AnimationContent } from "./styles";
import { FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { FormHandles } from "@unform/core";

import Logo from "../../assets/logo_7112.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useToast } from "../../hooks/ToastContext";
import { Link, useHistory } from "react-router-dom";

interface SignFormData {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          username: Yup.string().required("Usuário é obrigatório"),
          password: Yup.string().required("Senha é obrigatório."),
        });

        await schema.validate(data, { abortEarly: false });

        // await signIn({
        //   username: data.user,
        //   password: data.password,
        // });
        if (data.user !== "marco" && data.password !== "123456") {
          throw new Error();
        }

        history.push("/telemetry");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description: "Usuario e/ou senha incorreto.",
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContent>
          <img src={Logo} alt="GoBarber" width="150" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Faça seu Login </h1>
            <Input
              name="username"
              icon={FiUser}
              type="text"
              placeholder="Usuário"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <Link to="forgot">Esqueci minha senha</Link>
          </Form>
        </AnimationContent>
      </Content>
    </Container>
  );
};

export default SignIn;
