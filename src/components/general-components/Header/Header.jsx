import { Header } from "../../components/general-components/Header/Header.styled";
import { Container } from "../../components/general-components/Container/Container.styled";
import { Logo } from "../../components/general-components/Logo/Logo.styled";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import styled from "styled-components";

const LocationBtn = styled.button`
  border-radius: 36px;
  background-color: rgb(255, 242, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px 5px 20px;
  margin-left: 30px;
`;

const HeaderList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.a`
  font-family: "Verdana";
  color: rgb(1, 25, 54);
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
`;

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

const ChatIcon = styled.img`
  margin-right: 30px;
  margin-left: auto;
  width: 25px;
`;
ChatIcon.defaultProps = {
  src: Chat,
};

const LoginIcon = styled.img`
  width: 25px;
  margin-right: 12.5px;
`;
LoginIcon.defaultProps = {
  src: Login,
};

const PositionIcon = styled.img`
  width: 14px;
  margin-right: 15px;
`;
PositionIcon.defaultProps = {
  src: Position,
};
const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const Header1 = () => {
  return (
    <Header>
      <Container>
        <HeaderWrapper>
          <Logo>MyCake</Logo>
          <LocationBtn type="button">
            <PositionIcon />
            Вся Україна
          </LocationBtn>
          <HeaderList>
            <li>
              <HeaderLink>Десерти</HeaderLink>
            </li>
            <li>
              <HeaderLink>Кращі кондитери</HeaderLink>
            </li>
            <li>
              <HeaderLink>Корисні статті</HeaderLink>
            </li>
          </HeaderList>

          <HeaderBlock>
            <ChatIcon />
            <LoginIcon />
            Увійти
          </HeaderBlock>
        </HeaderWrapper>
      </Container>
    </Header>
  );
};

export default Header1;