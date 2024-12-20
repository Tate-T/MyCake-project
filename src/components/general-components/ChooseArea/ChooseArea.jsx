import styled from "styled-components";
import Icon from "../../../imgs/close.svg";
import ArrowRight from "../../../imgs/arrow-right.svg";
import areas from "./areas.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(3px);
`;
const AreaModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const CloseIcon = styled.img`
  width: 100%;
  background-color: transparent;
`;
CloseIcon.defaultProps = {
  src: Icon,
};

const AreaTitle = styled.h2`
  color: #011936;
  font-family: "Yeseva One";
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 40px;
`;

const AreasList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`;
const AreasItem = styled.li`
  width: 300px;
  padding: 5px 20px;
  border-radius: 30px;
  background: #dcebf8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AreasText = styled.p`
  color: #43607c;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 400;
  line-height: 171.429%;
`;

// const AreasArrowBtn = styled.button``;
const ArrowIcon = styled.img`
  width: 100%;
  background-color: transparent;
`;
ArrowIcon.defaultProps = {
  src: ArrowRight,
};

// const areas = [
//   "Вся Україна",
//   "Львівська",
//   "Вінницька",
//   "Миколаївська",
//   "Волинська",
//   "Одеська",
//   "Дніпропетровська",
//   "Полтавська",
//   "Донецька",
//   "Рівненська",
//   "Житомирська",
//   "Сумська",
//   "Закарпатська",
//   "Тернопільська",
//   "Запорізька",
//   "Харківська",
//   "Івано-Франківська",
//   "Херсонська",
//   "Київська",
//   "Хмельницька",
//   "Кіровоградська",
//   "Черкаська",
//   "Крим",
//   "Чернігівська",
//   "Луганська",
//   "Чернівецька",
// ];

export function ChooseArea({ closeAreaModal }) {
  const handleArea = (e) => {
    if (e.currentTarget === e.target) {
      return;
    }
    let text = "";
    switch (e.target.nodeName) {
      case "LI":
        text = e.target.children[0].textContent;
        break;
      case "IMG":
        console.log("img");
        text = e.target.parentNode.parentNode.children[0].textContent;
      case "BUTTON":
        console.log("btn");
        text = e.target.parentNode.children[0].textContent;
      default:
        break;
    }
    console.log(text);
    if (text !== "Київська") {
      toast.info("На жаль, у нас немає доставки у вашу область");
    } else {
      closeAreaModal();
    }
  };
  const [areasState, setAreasState] = useState(areas);
  return (
    <Overlay>
      <AreaModal>
        <CloseBtn type="button" onClick={closeAreaModal}>
          <CloseIcon />
        </CloseBtn>
        <AreaTitle>Оберіть область</AreaTitle>
        <AreasList onClick={handleArea}>
          {areasState.map((area) => (
            <AreasItem key={area.id} id={area.id}>
              <AreasText>{area.text}</AreasText>
              <button type="button">
                <ArrowIcon />
              </button>
            </AreasItem>
          ))}
        </AreasList>
      </AreaModal>
      <ToastContainer />
    </Overlay>
  );
}
