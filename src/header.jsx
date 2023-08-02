import styled from "styled-components";
import Button from "./components/button-component";
import FilterByLocation from "./dropdown";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./pages/home";
import { useLocation } from "react-router-dom";

const DarkmodeButton = styled.input`
  width: 3rem;
  height: 1.5rem;
  border-radius: 3rem;
  position: relative;
  background-color: white;
  transition: 0.2s linear;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #5964e0;
    top: 15%;
    left: 5px;
    transition: 0.3s;
  }

  &:focus:before {
  }
  &:checked::before {
    transform: translateY(50%);
    transform: translateX(130%);
    transition: 0.3s;
  }
`;
const LightDarkModeSectionStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStyled = styled.div`
  background-image: url("https://mcornale-devjobs-web-app.netlify.app/static/media/bg-pattern-header.f3307602.svg");
  width: 100%;
  height: 161px;

  background-position: 0 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .filter__location {
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
  .logo {
    object-fit: contain;
  }
  .header__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1118px;
    padding-block-start: 32px;
    padding-inline: 20px;
    margin: auto;
    position: relative;
  }
  .mainHeader__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .mainHeader__bottom {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    max-width: 1118px;
    transform: translateY(50%);
    background: var(--filter-bg);
  }
  .filter__title {
    position: relative;
    border-inline-end: 1px solid #e5e5e5;
    background-color: var(--filter-bg);
  }
  .filter__title input {
    border: none;
    width: 100%;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    outline-color: #6771e3;
    padding: 32px 32px 32px 56px;
    background: var(--filter-bg);
  }
  .filter__title input::placeholder {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: var(--placeHolder);
  }
  .filter__title img {
    position: absolute;
    top: calc(50% - 0.5em);
    left: 1.5rem;
  }

  .checkBox {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 17px;
    white-space: nowrap;
    color: var(--text-color);
  }

  .filter__time {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-inline-start: 1px solid #e5e5e5;
    padding: 0.5rem;
  }

  .icon__check {
    background: #f2f2f2;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline-color: #6771e3;
    display: none;
  }
  .icon__check__fullTime {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .mainHeader__bottom {
      grid-template-columns: 1.5fr 1fr 1fr;
    }
    .icon__check {
      display: flex;
    }
  }
`;

function Header() {
  const { pathname } = useLocation();
  const [mode, setMode] = useState("light");

  const nextMode = mode === "light" ? "dark" : "light";
  console.log(mode);
  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  return (
    <HeaderStyled>
      <div className="header__wrapper">
        <div className="mainHeader__top">
          <img
            className="logo"
            src="https://mcornale-devjobs-web-app.netlify.app/static/media/logo.8c0b6449.svg"
            alt=""
          />
          <LightDarkModeSectionStyled>
            <img src="../public/Images/light-mode.svg" alt="" />
            <DarkmodeButton
              type="checkbox"
              onClick={() => {
                setMode(nextMode);
              }}
            ></DarkmodeButton>
            <img src="../public/Images/dark-mode.svg" alt="" />
          </LightDarkModeSectionStyled>
        </div>
        {pathname === "/" && <Filters />}
      </div>
    </HeaderStyled>
  );
}

const getLocations = (jobs) => {
  let locations = [];
  jobs?.forEach((job) => {
    if (!locations.includes(job.location)) {
      locations.push(job.location);
    }
  });
  return locations.filter(Boolean);
};

export function Filters() {
  const {
    searchValue,
    setSearchValue,
    data,
    setFilterJobs,
    selectedOption,
    setSelectedOption,
  } = useContext(AppContext);
  const locations = getLocations(data);
  const [isMobile, setIsMobile] = useState(false);
  const handleMediaQueryChange = (mediaQuery) => {
    setIsMobile(mediaQuery.matches);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <form
      className="mainHeader__bottom"
      onSubmit={(event) => {
        event.preventDefault();
        const jobsResults = data
          .filter((job) => {
            const noTildes = (text) => {
              return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            };
            const TodoTextLC = noTildes(job.position.toLowerCase());
            const searchTextLC = noTildes(searchValue.toLowerCase());
            return TodoTextLC.includes(searchTextLC);
          })
          .filter((job) => {
            return job.location === selectedOption;
          });
        setFilterJobs(jobsResults);
      }}
    >
      <div className="filter__title">
        <img src="../public/Images/search.svg" alt="" />
        <input
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="Search"
          value={searchValue}
          placeholder="Filter by title, companies, expertise…"
        />
      </div>
      <FilterByLocation
        dp="none"
        selected={!selectedOption ? "Filter by location..." : selectedOption}
        SelectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        data={data}
        locations={locations}
      />
      <div className="filter__time">
        <div className="icon__check__fullTime">
          <div className="icon__check" tabIndex={0}>
            <img src="../public/Images/check.svg" alt="" />
          </div>
          {/* <label htmlFor="fullTime">
            <input type="checkbox" id="fullTime" />
            Aqui
          </label> */}
          <span className="checkBox">
            {isMobile ? (
              <img src="../public/Images/filter.svg" alt="" />
            ) : (
              "Full Time Only"
            )}
          </span>
        </div>
        <Button
          text={
            isMobile ? (
              <img src="../public/Images/search-mobile.svg" alt="" />
            ) : (
              "Search"
            )
          }
          variant="primary"
        />
      </div>
    </form>
  );
}

export default Header;
