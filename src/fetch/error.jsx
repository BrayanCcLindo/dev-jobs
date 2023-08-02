import styled from "styled-components";

const ErrorStyled = styled.div`
  grid-area: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ErrorMessage = styled.h3`
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #6771e3;
  text-align: center;
`;

function Error() {
  return (
    <ErrorStyled>
      <svg
        stroke="#6771e3"
        fill="#6771e3"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="3rem"
        width="3rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
      </svg>
      <ErrorMessage>Ups! Something wrong. Try again later</ErrorMessage>
    </ErrorStyled>
  );
}

export default Error;
