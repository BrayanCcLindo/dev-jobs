import styled from "styled-components";

const CardsLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 4rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function CardsLayout({ children }) {
  return <CardsLayoutStyled>{children}</CardsLayoutStyled>;
}

export default CardsLayout;
