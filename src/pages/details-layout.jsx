import styled from "styled-components";

const DetailsLayoutStyled = styled.div`
  margin: auto;
  width: 738px;
`;

function DetailsLayout({ children }) {
  return <DetailsLayoutStyled>{children}</DetailsLayoutStyled>;
}

export default DetailsLayout;
