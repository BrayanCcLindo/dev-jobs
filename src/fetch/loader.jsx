import styled from "styled-components";

const SvgStyled = styled.svg`
  margin: auto;
  animation: time 2s linear infinite;

  @keyframes time {
    from {
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <SvgStyled
      stroke="#6771e3"
      fill="none"
      strokeWidth="4"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="5rem"
      width="5rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </SvgStyled>
  );
}

export default Loader;
