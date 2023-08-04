// import { Link } from "react-router-dom";
import styled from "styled-components";

const CardComponentStyled = styled.div`
  padding: 1rem;
  background: var(--filter-bg);
  border-radius: 0.5rem;
  .business__logo {
    background-color: #c5c9f4;
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-top: -45px;
  }
  .business__logo img {
    object-fit: contain;
    border-radius: 1rem;
  }

  .card__title {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--title-text);
    text-decoration: none;
    outline-color: #6771e3;
    cursor: pointer;

    &:hover {
      color: #c5c9f4;
    }
  }
  .card__description {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 50px;
  }
  .card__decoration {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    content: "";
    background: #6e8098;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
export const ParagraphStyled = styled.p`
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #6e8098;
  white-space: nowrap;
  text-transform: capitalize;
`;
export const Subtitlestyled = styled.h4`
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5964e0;
  margin-top: 2rem;
`;

function CardComponent({
  logo,
  position,
  location,
  // slug,
  business,
  tags,
  date,
}) {
  return (
    <CardComponentStyled>
      <div className="business__logo">
        <img src={logo} alt="" width={45} height={45} />
      </div>
      <div className="card__content">
        <div className="card__description">
          <ParagraphStyled>{date}</ParagraphStyled>
          <span className="card__decoration"></span>
          <ParagraphStyled>{tags}</ParagraphStyled>
        </div>

        <h3 className="card__title" tabIndex={0}>
          {/* <Link className="card__title" to={`/${slug}`}> */}
          {position}
          {/* </Link> */}
        </h3>
        <ParagraphStyled>{business}</ParagraphStyled>
      </div>
      <Subtitlestyled>{location}</Subtitlestyled>
    </CardComponentStyled>
  );
}

export default CardComponent;
