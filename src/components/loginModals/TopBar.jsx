import styled from "styled-components";
import close from "../../imgs/close.svg";

const TopBarC = styled.div`
  width: 620px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  h3 {
    color: #011936;
    font-family: "Yeseva One";
    font-size: 30px;
    line-height: 1.2;
    font-weight: 400;
  }
  img {
    cursor: pointer;
    width: 36px;
    height: 36px;
  }
`;

export default function TopBar({ text, object }) {
    return (
      <TopBarC>
        <h3>{text}</h3>
        <img src={close} alt="close" onClick={() => {object.setState({loginModal: false, secondModal: "", verificationModal: {hidden: false}})}}/>
      </TopBarC>
    );
}