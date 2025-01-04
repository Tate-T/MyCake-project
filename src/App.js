import { useState } from "react";
import Modal1 from "./components/loginModals/Modal1";
import Modal2 from "./components/loginModals/Modal2";
import Modal3 from "./components/loginModals/Modal3";
import ModalResp from "./components/loginModals/ModalResp";
import { Main } from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import { Desserts } from "./pages/Desserts/Desserts";
import { Confecioners } from "./pages/Confecioners/Confecioners";
import Articles from "./pages/Articles";
import { ArticlePage } from "./pages/Article/Article";
import InfoConfecoiners from "./pages/InfoConfecioners/InfoConfecioners";
import AboutConfectioner from "./pages/AboutConfectioner/AboutConfectioner";
import ConfectionerProducts from "./pages/ConfectionerProducts/ConfectionerProducts";
function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [secondModal, setSecondModal] = useState("");
  const [verificationModal, setVerificationModal] = useState({
    hidden: false,
    type: false,
  });
  const pack = [setLoginModal, setSecondModal, setVerificationModal];
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/desserts" element={<Desserts />}></Route>
        <Route path="/confecionres" element={<Confecioners />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/infoConfecoiners" element={<InfoConfecoiners />}></Route>
        <Route path="/confectioner">
          <Route path="products" element={<ConfectionerProducts />}></Route>
          <Route path="about" element={<AboutConfectioner />}></Route>
        </Route>
      </Routes>

      {/* <ModalResp/>
			<Main func={setLoginModal} />
			{loginModal ? <Modal1 obj={pack} /> : <></>}
			{secondModal === 'login' ? <Modal2 obj={pack} check="login" /> : <></>}
			{secondModal.includes('register') ? (
				<Modal2 obj={pack} check={secondModal} />
			) : (
				<></>
			)}
			{verificationModal.hidden ? (
				<Modal3
					textType={verificationModal.type ? 'Вхід' : 'Реєстрація'}
					obj={pack}
				/>
			) : (
				<></>
			)}
			{console.log(verificationModal)} */}
    </>
  );
}

export default App;
