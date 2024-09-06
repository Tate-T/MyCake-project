import { Component } from "react";
import styled from "styled-components";

const FeedbackBackdrop = styled.div`
  overflow: hidden;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #0000003e;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
`;

const FeedbackBox = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 700px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  padding: 40px;
`;

const FeedbackTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  line-height: 120%;
`;

const FeedbackFormStyled = styled.form`
  margin-top: 40px;
`;

const FeedbackInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const FeedbackInputTitle = styled.h3`
  color: #43607c;
  font-family: Verdana;
  font-size: 16px;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
`;

const FeedbackInput = styled.input`
  border-radius: 50px;
  border: 1px solid #dfdfdf;
  padding: 8px 20px;
  width: 360px;
  margin-left: auto;
`;

const FeedbackInputAdditional = styled.p`
  color: #84a6c2;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.42px;
  max-width: 220px;
  margin-top: 5px;
`;

const FeedbackTextarea = styled.textarea`
  display: flex;
  width: 360px;
  height: 160px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #dfdfdf;
  margin-left: auto;
`;

const SendAppeal = styled.button`
  height: 40px;
  /* padding: 10px 30px; */
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50px;
  background: #a63a50;
  color: #fff;
  font-family: Verdana;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  margin-top: 40px;
`;

const DeclineAppeal = styled.button`
  height: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #84a6c2;
  background: #fff;
  margin-top: 10px;
`;

const FeedbackCloseModal = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  border: none;
`;

class FeedbackForm extends Component {
  state = {
    hidden: true,
  };

  openModal = () => {
    this.setState({ hidden: false });
  };

  closeModal = () => {
    this.setState({ hidden: true });
  };

  render() {
    const { hidden } = this.state;
    return (
      hidden === false && (
        <FeedbackBackdrop>
          <FeedbackBox>
            <FeedbackTitle>Форма зворотнього зв’язку</FeedbackTitle>
            <FeedbackCloseModal type="button" onClick={this.closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_5831_2357)">
                  <path
                    d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
                    fill="#84A6C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5831_2357">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </FeedbackCloseModal>
            <FeedbackFormStyled>
              <FeedbackInputBox>
                <FeedbackInputTitle>Ім’я та прізвище</FeedbackInputTitle>
                <FeedbackInput placeholder="Анна Василенко" />
              </FeedbackInputBox>
              <FeedbackInputBox
                style={{
                  marginTop: "20px",
                }}
              >
                <div>
                  <FeedbackInputTitle>Пошта</FeedbackInputTitle>
                  <FeedbackInputAdditional>
                    Напишіть пошту, на яку ви очікуєте отримати відповідь
                  </FeedbackInputAdditional>
                </div>
                <FeedbackInput />
              </FeedbackInputBox>
              <FeedbackInputBox
                style={{
                  marginTop: "40px",
                  alignItems: "flex-start",
                }}
              >
                <FeedbackInputTitle>Текст звернення</FeedbackInputTitle>
                <FeedbackTextarea />
              </FeedbackInputBox>
              <SendAppeal type="button">Відправити звернення</SendAppeal>
              <DeclineAppeal type="button">Скасувати</DeclineAppeal>
            </FeedbackFormStyled>
          </FeedbackBox>
        </FeedbackBackdrop>
      )
    );
    // return (
    //   <FeedbackBackdrop>
    //     <FeedbackBox>
    //       <FeedbackTitle>Форма зворотнього зв’язку</FeedbackTitle>
    //       <FeedbackCloseModal>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="30"
    //           height="30"
    //           viewBox="0 0 30 30"
    //           fill="none"
    //         >
    //           <g clip-path="url(#clip0_5831_2357)">
    //             <path
    //               d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
    //               fill="#84A6C2"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_5831_2357">
    //               <rect width="30" height="30" fill="white" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </FeedbackCloseModal>
    //       <FeedbackFormStyled>
    //         <FeedbackInputBox>
    //           <FeedbackInputTitle>Ім’я та прізвище</FeedbackInputTitle>
    //           <FeedbackInput placeholder="Анна Василенко" />
    //         </FeedbackInputBox>
    //         <FeedbackInputBox
    //           style={{
    //             marginTop: "20px",
    //           }}
    //         >
    //           <div>
    //             <FeedbackInputTitle>Пошта</FeedbackInputTitle>
    //             <FeedbackInputAdditional>
    //               Напишіть пошту, на яку ви очікуєте отримати відповідь
    //             </FeedbackInputAdditional>
    //           </div>
    //           <FeedbackInput />
    //         </FeedbackInputBox>
    //         <FeedbackInputBox
    //           style={{
    //             marginTop: "40px",
    //             alignItems: "flex-start",
    //           }}
    //         >
    //           <FeedbackInputTitle>Текст звернення</FeedbackInputTitle>
    //           <FeedbackTextarea />
    //         </FeedbackInputBox>
    //         <SendAppeal type="button">Відправити звернення</SendAppeal>
    //         <DeclineAppeal type="button">Скасувати</DeclineAppeal>
    //       </FeedbackFormStyled>
    //     </FeedbackBox>
    //   </FeedbackBackdrop>
    // );
  }
}

export default FeedbackForm;
