import { useState } from "react";
import Modal1 from "./components/loginModals/Modal1";
import Modal2 from "./components/loginModals/Modal2";
import Modal3 from "./components/loginModals/Modal3";
import ModalResp from "./components/loginModals/ModalResp";
import Articles from "./pages/Articles";
import { Main } from "./pages/main/Main";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [secondModal, setSecondModal] = useState("");
  const [verificationModal, setVerificationModal] = useState({ hidden: false, type: false });
  const pack = [setLoginModal, setSecondModal, setVerificationModal];
    return <>

      {/* <ModalResp/> */}
      <Main func={ setLoginModal } />
      {loginModal ? <Modal1 obj={pack} /> : <></>}
      {secondModal === "login" ? <Modal2 obj={pack} check="login" /> : <></>}
      {secondModal.includes("register") ? <Modal2 obj={pack} check={secondModal} /> : <></>}
      {verificationModal.hidden ? <Modal3 textType={verificationModal.type ? "Вхід" : "Реєстрація"} obj={pack} /> : <></>}
      {console.log(verificationModal)}

    </>
  
}


export default App;
