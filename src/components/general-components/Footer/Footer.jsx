import styled from "styled-components";
import location from "../../../svg/location_pin.svg";
import yut from "../../../svg/Youtube_black.svg";
import inst from "../../../svg/Instagram.svg";
import { Container } from "../Container/Container.styled";
const Foooter = styled.footer`
  background: var(--Black, #011936);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  // width: 1920px;
  // width: max;
  display: flex;
  align-items: center;
  padding: 35px;
`;
const GlawText = styled.h2`
  color: var(--White, #fff);
  font-family: "Yeseva One";
  font-size: 35px;
  font-weight: 400;
  line-height: 120%;
`;

const Location = styled.div`
  gap: 10px;
  margin-top: 10px;

  display: flex;
  height: 40px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  background: var(--White, #fff);
`;
const TextInLocete = styled.p`
  color: var(--CTA-red-text, #8e4a4e);
  font-family: Verdana;
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
`;
const MediumText = styled.p`
  color: var(--White, #fff);
  font-family: Verdana;
  font-size: 18px;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  text-decoration-line: underline;
`;
const BoxesFlex = styled.div`
  background: var(--Black, #011936);
  display: flex;
  gap: 30px;
`;
const Boxes = styled.div`
  margin-right: 150px;
`;

const SvgLocation = styled.img`
  width: 24px;
  height: 24px;
`;
SvgLocation.defaultProps = {
  src: location,
};

const SvgInst = styled.img`
  width: 40px;
  height: 40px;
`;
SvgInst.defaultProps = {
  src: inst,
};
const SvgYutybe = styled.img`
  width: 40px;
  height: 40px;
`;
SvgYutybe.defaultProps = {
  src: yut,
};

const BtnPrav = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid var(--White, #fff);
  color: var(--White, #fff);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  background: var(--Black, #011936);
  width: 300px;
`;
const BtnInfo = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  background: #ffff;
  width: 300px;
  margin-top: 10px;
`;
const BoxesBtn = styled.div`
  margin-left: 100px;
`;
const TextInfoInst = styled.p`
  color: var(--White, #fff);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
const BoxTextInfoInst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  margin-left: 80px;
`;

const BtnSock = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const BoxesInst = styled.div`
  background: var(--Black, #011936);
  display: flex;
  gap: 15px;
`;

const Links = styled.a``;

const List = styled.ul`
display: flex;
align-items: center;
`;
export default function Footerr() {
  return (
    <>
      <Foooter>
        <Container>
          <List>
            <li>
              <Boxes>
                <GlawText>My Cake</GlawText>
                <Location>
                  <SvgLocation href={location} />
                  <TextInLocete>Вся Україна</TextInLocete>
                </Location>
              </Boxes>
            </li>
            <li>
              <BoxesFlex>
                <Links href="#">
                  <MediumText>Десерти</MediumText>
                </Links>
                <Links href="#">
                  <MediumText>Кращі кондитери</MediumText>
                </Links>
                <Links href="#">
                  <MediumText>Корисні статті</MediumText>
                </Links>
              </BoxesFlex>
            </li>
            <li>
              <BoxesBtn>
                <BtnPrav>Правила користування</BtnPrav>
                <BtnInfo>Форма зворотнього зв’язку</BtnInfo>
              </BoxesBtn>
            </li>
            <li>
              <BoxTextInfoInst>
                <TextInfoInst>© Mycake 2022</TextInfoInst>
                <TextInfoInst>All rights reserved</TextInfoInst>
                <BoxesInst>
                  <Links href="https://www.instagram.com/">
                    <SvgInst href={inst} />
                  </Links>
                  <Links href="https://www.youtube.com/">
                    <SvgYutybe href={yut} />
                  </Links>
                </BoxesInst>
              </BoxTextInfoInst>
            </li>
          </List>
        </Container>
      </Foooter>
    </>
  );
}
