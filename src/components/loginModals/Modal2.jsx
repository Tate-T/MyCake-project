import Overlay from "./Overlay";
import TopBar from "./TopBar";
import LowerBar from "./LowerBar";
import styled from "styled-components";
import facebook from "../../imgs/Facebook.svg";
import google from "../../imgs/Google.svg";

const Modal = styled.div`
  width: 700px;
  padding: 40px;
  box-sizing: border-box;
  position: fixed;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  h5 {
    color: #011936;
    font-family: Verdana;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
  }
`;

const Form = styled.form`
  width: 620px;
  margin: 60px 0px;
  p {
    color: #84a6c2;
    font-family: Verdana;
    font-size: 14px;
    line-height: 1.71;
    margin-bottom: 10px;
  }
  div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    input {
      height: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1px solid #84a6c2;
      width: 482px;
      &::placeholder {
        color: #84a6c2;
      }
    }
    button {
      height: 100%;
      width: 123px;
      border-radius: 50px;
      background: #fdad6d;
      color: #5e2d07;
      font-family: Verdana;
      font-size: 16px;
      line-height: 1.2;
      transition: 300ms;
      &:hover {
        background: #f1a567;
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 60px;
    li {
        &:first-child {
            input {
                width: 100%;
                padding: 10px 20px;
                box-sizing: border-box;
                border-radius: 50px;
                border: 1px solid #84A6C2;
                margin-top: 10px;
                font-family: Verdana;
            }
        }
    }
  }
`;
const SocialsLogin = styled.div`
    width: 620px;
    height: 123px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    ul {
        height: 40px;
        display: flex;
        gap: 10px;
        img {
            width: 20px;
            height: 20px;
        }
        li {
            border-radius: 10px;
            background: #DCEBF8;
            width: 200px;
            height: 100%;
            display: flex;
            gap: 15px;
            justify-content: center;
            align-items: center;
            color: #43607C;
            font-family: Verdana;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.2;
            cursor: pointer;
            transition: 300ms;
            &:hover {
                background: #d1dfec;
            }
        }
    }
`;


export default function Modal2({ check, obj }) {
    const [setLoginModal, setSecondModal, setVerificationModal] = obj;
    if (check === "login") {
        return <Overlay>
            <Modal>
                <TopBar object={obj} text="Вхід" />
                <Form onSubmit={(e) => { e.preventDefault(); setVerificationModal({ hidden: true, type: true }); setSecondModal("")}}>
                    <h5>Номер телефону</h5>
                    <p>На вказаний номер вам прийде СМС-повідомлення з кодом</p>
                    <div>
                        <input type="tel" pattern="[+ 0-9]{17}" placeholder="+38 XXX XXX XX XX" required/>
                        <button type="submit">Надіслати</button>
                    </div>
                    
                </Form>
                <SocialsLogin>
                    <h5>Увійти за допомогою</h5>
                    <ul>
                        <li><img src={facebook} alt="facebook" />Facebook</li>
                        <li><img src={google} alt="google" />Google</li>
                    </ul>
                    <LowerBar text="У мене немає акаунту, треба зареєструватися" handleOnClick={() => {
                        setLoginModal(true); setSecondModal("");
                    }} />
                </SocialsLogin>
            </Modal>
        </Overlay>;
    }
    else if (check.includes("register")) {
        return <Overlay>
            <Modal>
                <TopBar object={obj} text="Реєстрація" />
                <Form onSubmit={(e) => { e.preventDefault(); setVerificationModal({ hidden: true, type: false }); setSecondModal("")}}>
                    <ul>
                        <li>
                            <h5>{check.includes("Customer") ? "Ім’я та прізвище" : "Ім’я або назва компанії"}</h5>
                            <input type="text" required />
                        </li>
                        <li>
                            <h5>Номер телефону</h5>
                            <p>На вказаний номер вам прийде СМС-повідомлення з кодом</p>
                            <div>
                                <input type="tel" pattern="[+ 0-9]{17}" placeholder="+38 XXX XXX XX XX" required/>
                                <button type="submit">Надіслати</button>
                            </div> 
                        </li>
                    </ul>  
                </Form>
                <SocialsLogin style={{height: "133px"}}>
                    <h5>Увійти за допомогою</h5>
                    <ul>
                        <li><img src={facebook} alt="facebook" />Facebook</li>
                        <li><img src={google} alt="google" />Google</li>
                    </ul>
                    <LowerBar inlineStyle={{marginTop: "10px"}} text="Я вже маю акаунт, хочу просто увійти" handleOnClick={() => {
                        setSecondModal("login");
                    }} />
                </SocialsLogin>
            </Modal>
        </Overlay>;
    }
}