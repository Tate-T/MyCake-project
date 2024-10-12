import styled from "styled-components";
import Overlay from "./Overlay";
import TopBar from "./TopBar";
import cookie from "../../imgs/Cookie.svg";
import cupcake from "../../imgs/Cupcake.svg";
import secondArrow from "../../imgs/right1.svg";
import firstArrow from "../../imgs/right2.svg";
import LowerBar from "./LowerBar";

const Modal = styled.div`
  width: 700px;
  height: 536px;
  padding: 40px;
  box-sizing: border-box;
  position: fixed;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;


const OptionsList = styled.ul`
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    cursor: pointer;
    transition: 300ms;
    border-radius: 10px;
    width: 620px;
    height: 153px;
    box-sizing: border-box;
    padding: 0px 40px;
    display: flex;
    flex-direction: row;
    > img {
      margin-top: 39px;
      margin-right: 30px;
      width: 75px;
      height: 75px;
    }
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        margin-left: auto;
        display: block;
      }
      div {
        width: 275px;
        margin-right: 125px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        h4 {
          font-family: Verdana;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.2;
        }
        p {
          font-family: Verdana;
          font-size: 14px;
          line-height: 1.71;
        }
      }
    }
    &:first-child {
      background-color: #dcebf8;
      > div {
        div {
          h4 {
            color: #43607c;
          }
          p {
            color: #43607c;
          }
        }
      }
      &:hover {
        background-color: #d0dfed;
      }
    }
    &:last-child {
      background-color: #ffe2ca;
      > div {
        div {
          h4 {
            color: #5e2d07;
          }
          p {
            color: #5e2d07;
          }
        }
      }
      &:hover {
        background-color: #eed2bb;
      }
    }
  }
`;

const Modal1 = ({ obj }) => {
  const [setLoginModal, setSecondModal] = obj;
    return (
      <Overlay>
        <Modal>
          <TopBar object={obj} text="Реєстрація" />
          <OptionsList>
            <li onClick={() => { setSecondModal("registerCustomer");  setLoginModal(false)}}>
              <img src={cookie} alt="cookie" />
              <div>
                <div>
                  <h4>Покупець</h4>
                  <p>Хочу купувати, дарувати та їсти</p>
                </div>
                <img src={firstArrow} alt="arrow" />
              </div>
            </li>
            <li onClick={() => { setSecondModal("registerProducer"); setLoginModal(false)}}>
              <img src={cupcake} alt="cookie" />
              <div>
                <div>
                  <h4>Кондитер</h4>
                  <p>Хочу випікати, прикрашати та продавати</p>
                </div>
                <img src={secondArrow} alt="arrow" fill="red" />
              </div>
            </li>
          </OptionsList>
          <LowerBar text="Я вже маю акаунт, хочу просто увійти" handleOnClick={() => { setSecondModal("login"); setLoginModal(false)}} />
        </Modal>
      </Overlay>
    );
};

export default Modal1;