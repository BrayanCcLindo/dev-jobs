import styled from "styled-components";
import Button from "./button-component";

const SectionWrapperStyled = styled.section`
  max-width: 1118px;
  margin: auto;
  padding: 1rem;
  margin-top: 8rem;
  padding-bottom: 3rem;
`;
const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
`;

function SectionWrapper({ children }) {
  return <SectionWrapperStyled>{children}</SectionWrapperStyled>;
}

export function ButtonWrapper() {
  return (
    <ButtonWrapperStyled>
      <Button
        text="Load More"
        variant="primary"
        onclick={(event) => {
          event.preventDefault();
          console.log(event, "event");
        }}
      />
    </ButtonWrapperStyled>
  );
}

export default SectionWrapper;
