import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      height: 50px;
      border-radius: 4px;
      margin-bottom: 10px;
      border: 0;
      padding: 0 15px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 18px;
      }
    }

    span {
      color: #D44059
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      height: 50px;
      border-radius: 4px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-weight: bold;
      margin: 5px 0 0;
      font-size: 18px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#f94d6a")};
      }
    }

    a {
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
      color: #fff;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
