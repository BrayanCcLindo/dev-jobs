import styled, { css } from "styled-components";

const ButtonComponentStyled = styled.button`
  border: none;
  padding-inline: 20px;
  padding-block: 16px;
  border-radius: 0.5rem;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  width: inherit;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  ${({ $variant }) => {
    if ($variant === "primary") {
      return css`
        background-color: #6771e3;
        color: #eeeffc;
        /* margin: auto; */

        &:hover,
        &:focus {
          background: #c5c9f4;
        }
      `;
    }
    if ($variant === "secondary") {
      return css`
        background-color: #eeeffc;
        color: #5964e0;
        &:hover,
        &:focus {
          background: #c5c9f4;
        }
      `;
    }
  }}
`;
function Button({ variant, text, onclick }) {
  return (
    <ButtonComponentStyled onClick={onclick} $variant={variant}>
      {text}
    </ButtonComponentStyled>
  );
}

export default Button;
