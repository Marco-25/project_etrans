import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  background: #312e38;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #fff;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      text-align: center;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#F4EDE8")};
      }
    }
  }
`;

// export const Background = styled.div`
//   flex: 1;
//   background: url(${SignInBackground}) no-repeat;
//   background-size: 50%;
//   background-position: 50% 50%;
//   border-left:1px solid #ccc;
// `;
