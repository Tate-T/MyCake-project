import { Component } from "react";
import Modal1 from "./components/loginModals/Modal1";
import Modal2 from "./components/loginModals/Modal2";
import Modal3 from "./components/loginModals/Modal3";
import ModalResp from "./components/loginModals/ModalResp";
import { Main } from "./pages/main/Main";

class App extends Component {
  state = {
    loginModal: false,
    secondModal: "",
    verificationModal: { hidden: false, type: false },
  }
  render() {
    return <>
      <ModalResp/>
      {/* <Main /> */}
      {/* {this.state.loginModal ? <Modal1 obj={this} /> : <></>}
      {this.state.secondModal === "login" ? <Modal2 obj={this} check="login" /> : <></>}
      {this.state.secondModal.includes("register") ? <Modal2 obj={this} check={this.state.secondModal} /> : <></>}
      {this.state.verificationModal.hidden ? <Modal3 textType={this.state.verificationModal.type ? "Вхід" : "Реєстрація"} obj={this} /> : <></>} */}
    </>
  }
}


export default App;
