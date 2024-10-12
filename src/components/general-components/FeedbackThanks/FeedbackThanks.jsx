import styled from "styled-components";
import Icon from "../../../imgs/close.svg";
import Success from "../../../imgs/success.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(3px);
`;
const FeedbackThanksModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  width: 700px;
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

const SuccessIcon = styled.img`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 93px;
  margin-bottom: 2px;
`;
SuccessIcon.defaultProps = {
  src: Success,
  alt: "success",
};

const FeedbackThanksTitle = styled.h2`
  color: #43607c;
  text-align: center;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
  margin-top: 20px;
`;
const FeedbackThanksText = styled.p`
  color: #43607c;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: Verdana;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 128%;
  max-width: 343px;
`;
const FeedbackThanksButton = styled.button`
  display: block;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #a63a50;
  margin-top: 30px;
  color: #fff;
  font-family: Verdana;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
`;

export function FeedbackThanks() {
  return (
    <Overlay>
      <FeedbackThanksModal>
        <CloseBtn type="button">
          <CloseIcon />
        </CloseBtn>
        <SuccessIcon />
        <FeedbackThanksTitle>Дякуємо за звернення!</FeedbackThanksTitle>
        <FeedbackThanksText>
          Ми постараємося відповісти вам як можна скоріше
        </FeedbackThanksText>
        <FeedbackThanksButton type="button">Зрозуміло</FeedbackThanksButton>
      </FeedbackThanksModal>
    </Overlay>
  );
}
