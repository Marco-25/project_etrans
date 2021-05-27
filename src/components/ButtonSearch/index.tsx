import React, { ButtonHTMLAttributes } from "react";
import ReactLoading from "react-loading";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonSearch: React.FC<ButtonProps> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ReactLoading type="spinningBubbles" height={31} width={31} />
      ) : (
        children
      )}
    </Container>
  );
};

export default ButtonSearch;
