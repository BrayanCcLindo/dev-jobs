import styled from "styled-components";
import { ParagraphStyled } from "../components/card-component";
import Button from "../components/button-component";

const FooterStyled = styled.div`
  width: 100%;
  background: #fff;
  .wrapper__footer {
    margin: auto;
    width: 738px;
    display: flex;
    justify-content: space-between;
    padding-block: 1rem;
  }
  .footer__title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-family: "Kumbh Sans", sans-serif;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <div className="wrapper__footer">
        <div className="footer__title">
          <h3>Senior Software Engineer</h3>
          <ParagraphStyled>Scoot</ParagraphStyled>
        </div>
        <Button variant="primary" text={"Apply Now"} />
      </div>
    </FooterStyled>
  );
}

export default Footer;
