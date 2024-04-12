import styled from "styled-components";

export const theme = {
  main: "#252525",
  transitionDuration: "0.3s",
};

export const InputField = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  box-sizing: border-box;
  border: unset;
  color: white;
  padding: 8px;

  &:focus + label {
    transform: translate(0, -17px) scale(0.8);
  }

  &:focus-visible {
    border: unset;
    outline: unset;
  }
`;

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 100%;
  height: 36px;
  position: relative;
  border-radius: 3px;
`;

export const InputLabel = styled.label`
  display: block;
  transition: ${(props) => props.theme.transitionDuration};
  color: #959090;
  font-size: 10pt;
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const Container = styled.div`
  display: flow-root;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  position: relative;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  background: blue;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: unset;
  cursor: pointer;
`;

export const Page = styled.div``;
