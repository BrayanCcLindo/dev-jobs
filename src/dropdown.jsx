import { useState } from "react";
import styled from "styled-components";

const FilterStyled = styled.button`
  background: var(--filter-bg);
  color: #19202d;
  outline-color: #6771e3;
  border: none;
  padding: 32px 32px 32px 56px;
  background-image: url("../Images/location.svg");
  background-repeat: no-repeat;
  background-position: left 24px center;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  display: ${(props) => props.$dp ?? "none"};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const OptionListStyled = styled.button`
  width: 100%;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  padding-inline-start: 30px;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  color: var(--placeHolder);
  &:hover {
    background: #f2f2f2;
  }
`;

const ContainerLsitOption = styled.div`
  background: var(--filter-bg);
  margin-top: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 100%;
  max-width: 100%;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow-x: hidden;
  color: var(--text-color);
  position: absolute;
  top: 70px;
  left: 0;
  overflow-y: auto;
  max-height: 200px;
`;
const DropDownContainerStyled = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    & button {
      color: var(--placeHolder);
    }
  }
`;

function FilterByLocation({
  dp,
  selected,
  SelectedOption,
  setSelectedOption,
  data,
  locations,
}) {
  const [showList, setShowList] = useState(false);
  return (
    <DropDownContainerStyled>
      <FilterStyled
        $dp={dp}
        onClick={(event) => {
          event.preventDefault();
          setShowList(!showList);
        }}
      >
        {selected}
      </FilterStyled>
      <ContainerLsitOption>
        {/* <OptionListStyled value="ilter by location...">
          Filter by location...
        </OptionListStyled> */}
        {showList &&
          locations?.map((country) => {
            return (
              <>
                <OptionList
                  key={country}
                  text={country}
                  SelectedOption={SelectedOption}
                  setSelectedOption={setSelectedOption}
                  setShowList={setShowList}
                  data={data}
                />
              </>
            );
          })}
      </ContainerLsitOption>
    </DropDownContainerStyled>
  );
}

export function OptionList({ text, setSelectedOption, setShowList }) {
  return (
    <OptionListStyled
      onClick={(event) => {
        setSelectedOption(event.target.innerText);
        setShowList(false);
      }}
    >
      {text}
    </OptionListStyled>
  );
}

export default FilterByLocation;
