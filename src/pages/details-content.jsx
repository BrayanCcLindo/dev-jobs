import styled from "styled-components";
import Button from "../components/button-component";
import { ParagraphStyled, Subtitlestyled } from "../components/card-component";

const DetailsContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 48px;
  background: white;
  margin-bottom: 50px;
  border-radius: 0.5rem;

  .card__decoration {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    content: "";
    background: #6e8098;
  }
  .heading__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title__job {
    font-family: "Kumbh Sans", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .card__description {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
const TopContentStyled = styled.div`
  transform: translateY(-50%);
  background: white;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  .img__container {
    background-color: peru;
    min-height: 140px;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    img {
      object-fit: cover;
    }
  }
  .title__business {
    width: 100%;
    padding: 20px 40px;
    font-family: "Kumbh Sans", sans-serif;
  }
  .button__container {
    padding: 20px 40px 20px 0;
    min-width: 187px;
    display: flex;
    justify-content: flex-end;
  }
`;
const DescriptionContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
  }
  li {
    font-family: "Kumbh Sans", sans-serif;
    color: #6e8098;
    margin-bottom: 0.5rem;
  }
`;

function DetailsContent({ date, company, logo, position, jobLocation, description }) {
  return (
    <>
      <TopContentStyled>
        <div className="img__container">
          <img width={45} height={45}
            src={logo}
            alt="Logo-principal-de-la-compañia"
          />
        </div>
        <div className="title__business">
          <h3>{company}</h3>
          <ParagraphStyled>{`example.com/${company}`}</ParagraphStyled>
        </div>
        <div className="button__container">
          <Button variant="secondary" text="Compani Site" />
        </div>
      </TopContentStyled>
      <DetailsContentStyled>
        <div className="heading__details">
          <div className="title__job">
            <div className="card__description">
              <ParagraphStyled>{date}</ParagraphStyled>
              <span className="card__decoration"></span>
              <ParagraphStyled>Full Time</ParagraphStyled>
            </div>
            <h2>{position}</h2>
            <Subtitlestyled> {jobLocation} </Subtitlestyled>
          </div>
          <Button variant="primary" text="Apply Now" />
        </div>
        <div className="description__job">
          <DescriptionContentStyled>
            {description}
          </DescriptionContentStyled>

        </div>

      </DetailsContentStyled>
    </>
  );
}



export default DetailsContent;
