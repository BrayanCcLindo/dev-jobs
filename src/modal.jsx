import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import Button from "./components/button-component";
import { useState } from "react";

const ModalContentStyled = styled.div`
  .modal__filter {
    background: var(--filter-bg);
    color: #19202d;
    outline-color: #6771e3;
    border: none;
    padding: 16px 16px 16px 40px;
    background-image: url("../public/Images/location.svg");
    background-repeat: no-repeat;
    background-position: left 15px center;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    width: 100%;
    cursor: pointer;
  }
  label {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
  }
  .button__container {
    width: 100%;
    border: none;
    background: none;
    outline-color: #6771e3;
  }
  .set__filter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-top: 1px solid #f2f2f2;
  }
  .input__wrapper {
    display: flex;
    gap: 1rem;
  }
`;

const ShowfilterOptionStyled = styled.div`
  background: var(--filter-bg);
  margin-top: 0.25rem;
  padding-left: 30px;
  border-radius: 0.5rem;
  position: absolute;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow-x: hidden;
  color: var(--text-color);
  position: absolute;
  top: 70px;
  left: 0;
  overflow-y: auto;
  max-height: 200px;
  width: -webkit-fill-available;
`;

const ListOptionStyled = styled.button`
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

function ListOptions({ text, setSelectedOption, setFowFilter }) {
  return (
    <ListOptionStyled
      onClick={(event) => {
        setSelectedOption(event.target.innerText);
        setFowFilter(false);
      }}
    >
      {text}
    </ListOptionStyled>
  );
}
function ModalContent({
  selected,
  locations,
  selectedOption,
  setSelectedOption,
  data,
}) {
  const [showfilter, setFowFilter] = useState(false);
  return (
    <ModalContentStyled>
      <button
        onClick={(event) => {
          event.preventDefault();
          setFowFilter(!showfilter);
        }}
        className="modal__filter"
      >
        {selected}{" "}
      </button>
      <ShowfilterOptionStyled>
        {showfilter &&
          locations?.map((country) => {
            return (
              <>
                <ListOptions
                  key={country}
                  text={country}
                  SelectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  showfilter={showfilter}
                  data={data}
                  setFowFilter={setFowFilter}
                />
              </>
            );
          })}
      </ShowfilterOptionStyled>
      <form action="" className="set__filter">
        <div className="input__wrapper">
          <input type="checkbox" id="filter" />
          <label htmlFor="filter">Full Time Only</label>
        </div>
        <Dialog.Close asChild>
          <button className="button__container">
            <Button text={"Search"} variant="primary" />
          </button>
        </Dialog.Close>
      </form>
    </ModalContentStyled>
  );
}

const ModalStyled = styled.div``;

function Modal({
  selected,
  locations,
  selectedOption,
  setSelectedOption,
  data,
}) {
  return (
    <ModalStyled>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">
            <img src="../public/Images/filter.svg" alt="" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <ModalContent
              selected={selected}
              locations={locations}
              SelectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              data={data}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ModalStyled>
  );
}
export default Modal;
