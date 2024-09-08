import TopBar from "./TopBar";
import LowerBar from "./LowerBar";
import Overlay from "./Overlay";
import styled from "styled-components";

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
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color:#011936;
    font-family: Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  button {
    height: 40px;
    width: 250px;
    border-radius: 50px;
    background: #fdad6d;
    color: #5e2d07;
    font-family: Verdana;
    font-size: 16px;
    line-height: 1.2;
    transition: 300ms;
    margin-top: 10px;
    &:hover {
      background: #f1a567;
    }
    
    
  }
  ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
        li {
            width: 40px;
            height: 50px;
            input {
                width: 100%;
                height: 100%;
                border-radius: 5px;
                border: 1px solid #84A6C2;
                box-sizing: border-box;
                padding: 8px 15px;
                font-family: Verdana;
                &::-webkit-inner-spin-button {
                  appearance: none;
                }
            }
        }
    }
`;

export default function Modal3({textType, obj}) {
    return <Overlay>
        <Modal>
            <TopBar object={obj} text={textType} />
            <Form onSubmit={(e) => {e.preventDefault(); obj.setState({verificationModal: {hidden: false}})}}>
                <div>
                    <p>Введіть код з повідомлення</p>
                    <ul>
                        <li><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                        <li><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                        <li style={{marginRight: "20px"}}><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                        <li><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                        <li><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                        <li><input required type="text" maxLength="1" onInput={(elem) => {if(isNaN(elem.target.value)) {elem.target.value = ""}}} /></li>
                    </ul>
                </div>
                <div>
                    <LowerBar text="Надіслати повторно" />
                    <button type="submit">Підтвердити</button>
                </div>
            </Form>
        </Modal>
    </Overlay>
}