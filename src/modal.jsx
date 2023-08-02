import Button from "./components/button-component";
import { FilterByLocation } from "./header";
import ModalStyled from "./toogle-modal";

function Modal() {
  return (
    <ModalStyled>
      <FilterByLocation dp="flex" />
      <div className="icon__check__fullTime">
        <div className="icon__check" tabIndex={0}>
          <img src="../public/Images/check.svg" alt="" />
        </div>
        <span className="checkBox">Full Time Only</span>
      </div>
      <Button text="Search" variant="primary" />
    </ModalStyled>
  );
}

export default Modal;
