import React, { useState } from "react";
import styled from "styled-components";
import Overlay from "./Overlay";

const ContainerResp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = styled.div`
  width: 700px;
  height: 492px;
  padding: 40px;
  box-sizing: border-box;
  position: fixed;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const CloseModalBtn = styled.button`
  display: flex;
  width: 30px;
  color: #84a6c2;
  background-color: #fff;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const RespTitle = styled.h1`
  color: var(--Black, #011936);
  font-family: "Yeseva One";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 36px */
  margin-bottom: 40px;
`;

const RespGoodInput = styled.input`
  display: flex;
  margin-bottom: 40px;

  height: 40px;
  width: 620px;
  padding: 10px 20px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  border-radius: 50px;
  background: var(--Grey-BG, #f9f9f9);
`;

const ResponseTitle = styled.h2`
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  width: 220px;
`;

const RespText = styled.p`
  color: var(--CTA-blue-text, #84a6c2);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.42px;
  width: 620px;
  margin-bottom: 10px;
`;

const Response = styled.input`
  display: flex;
  height: 80px;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid var(--Border, #dfdfdf);
  width: 620px;
  margin-bottom: 40px;
`;

const SendRespBtn = styled.button`
  display: flex;
  height: 40px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  border-radius: 50px;
  background: var(--CTA-red, #a63a50);
  color: var(--White, #fff);
  font-family: Verdana;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  margin-bottom: 5px;

  width: 620px;
`;

const CloseSending = styled.button`
  display: flex;
  height: 40px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  width: 620px;

  gap: 10px;
  align-self: stretch;
  border-radius: 50px;
  border: 1px solid var(--CTA-blue-text, #84a6c2);
  background: var(--White, #fff);
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

const ModalResp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Відкрити модалку</button>
      {isOpen && (
        <Overlay>
          <Modal>
            <ContainerResp>
              <RespTitle>Відгук</RespTitle>
              <CloseModalBtn onClick={handleCloseModal}>&#x2715;</CloseModalBtn>
            </ContainerResp>

            <RespGoodInput placeholder='Торт "Червоний оксамит"' />
            <ResponseTitle>Відгук</ResponseTitle>
            <RespText>
              Опишіть ваші враження від товару, комунікацій з продавцем, процесу
              покупки, тощо
            </RespText>
            <Response />
            <SendRespBtn>Відправити відгук</SendRespBtn>
            <CloseSending onClick={handleCloseModal}>Скасувати</CloseSending>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default ModalResp;
