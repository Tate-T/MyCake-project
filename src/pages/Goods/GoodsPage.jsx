import styled from "styled-components";
import { Header } from "../../components/general-components/Header/Header.styled";
import { Container } from "../../components/general-components/Container/Container.styled";
import { Logo } from "../../components/general-components/Logo/Logo.styled";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import Footerr from "../../components/general-components/Footer/Footer";
import ListState from "../../components/general-components/upFooterListState/ListState";
import ListTopPip from "../../components/general-components/upUpFooterListBestCondeters/ListBestCoditers";
import Searchbar from "../../components/general-components/Searchbar/Searchbar.jsx";

// !cakes imgs
import cakeImg1 from "../../imgs/cakes/cake-1.jpg";
import cakeImg2 from "../../imgs/cakes/cake-2.jpg";
import cakeImg3 from "../../imgs/cakes/cake-3.jpg";
import cakeImg4 from "../../imgs/cakes/cake-4.jpg";
import cakeImg5 from "../../imgs/cakes/cake-5.jpg";

// !cupcakes imgs
import cupcakeImg1 from "../../imgs/cupcakes/cupcake-1.jpg";
import cupcakeImg2 from "../../imgs/cupcakes/cupcake-2.jpg";
import cupcakeImg3 from "../../imgs/cupcakes/cupcake-3.jpg";
import cupcakeImg4 from "../../imgs/cupcakes/cupcake-4.jpg";
import cupcakeImg5 from "../../imgs/cupcakes/cupcake-5.jpg";

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

const SectionGoods = styled.section`
display: flex;

`


const GoodsListBox = styled.div`
margin-right: 20px;
width: 222px;
margin-top: 40px;
// border: 1px solid var(--Border, #DFDFDF);
`;

const GoodsBox = styled.div`
width: 1200px;
margin-top: 40px;
// border: 1px solid var(--Border, #DFDFDF);
`;



const GoodsRecipList = styled.ul`
margin-top: 30px;
display: flex;
flex-wrap: wrap;

width: 242px;
`;





const GoodsListItem = styled.li`
display: flex;
width: 252px;
align-items: center;
gap: 10px;
list-style: none;
margin-top: 14px;
`;
const GoodsInput = styled.input`
width: 15px;

border: 1px solid ${(props) => props.theme.colors.textColor};
`;

const GoodsText = styled.p`

color: var(--Black, #011936);
font-family: Verdana;
font-size: ${(props) => props.theme.text};
font-weight: 400;
line-height: 120%;
`;

const GoodsTitle = styled.h2`
width: 201px;
height: 60px;
color: var(--Black, #011936);
font-family: "Yeseva One";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 125% */

`;

const GoodsListTitle = styled.h2`

color: var(--Black, #011936);
font-family: Verdana;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */

`;

const BtnLoading = styled.button`
gap: 15px;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
color: var(--CTA-blue, #43607C);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 19.2px */
border-radius: 49px;
border: 1px solid var(--CTA-blue-text, #84A6C2);
padding: 5px 10px;
width: 1180px;
margin-left: 20px;
`

const LoadingList = styled.ul`
justify-content: center;
align-items: center;
width: 435px;
gap: 10px;
margin-right: auto;
margin-left: auto;
margin-top: 40px;
display: flex;
flex-wrap: wrap;
`;

const LoadingBtn = styled.button`
border-radius: 50px;
background-color: transparent;
width: 50px;
height: 50px;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 120%; /
border-radius: 50px;
border: 1px solid var(--CTA-yellow-border, #FFE2CA);
background: var(--White, #FFF);
`;

const GoodsList = styled.ul`
margin-top: 30px;
display: flex;
flex-wrap: wrap;


`;

const GoodsItem = styled.li`
gap: 10px;
margin-left: 20px;
    margin-bottom: 20px;
width: 280px;
flex-direction: column;
border-radius: 5px;
background: var(--White, #FFF);
box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
`;

const GoodsImg = styled.img`
width: 280px;
height: 300px;
`;

const GoodsTextCurrency = styled.h2`
margin-left: 15px;

margin-top: 15px;
margin-bottom: 10px;
color: var(--CTA-red, #A63A50);
font-family: Verdana;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 21.6px */

`;

const GoodsTextDescription = styled.p`
margin-left: 15px;
height: 50px;
width: 250px;
color: var(--Black, #011936);
font-family: Verdana;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /*
`;

const GoodsTextNumber = styled.p`
margin-left: 15px;
margin-bottom: 15px;

width: 142px;
color: var(--CTA-blue-text, #84A6C2);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 16.8px */
`;

const GoodsListBtn = styled.ul`
gap: 10px;
margin-left: 20px;
display: flex;
flex-wrap: wrap;


`;
const GoodsListItemBtn = styled.li`

display: flex;
flex-wrap: wrap;
`;

const GoodsBtn = styled.button`
justify-content: center;
align-items: center;

gap: 10px;

display: flex;
padding: 5px 20px;
color: var(--CTA-red-text, #8E4A4E);
font-family: Verdana;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 19.2px */
border-radius: 40px;
background: var(--Pink-BG, #FFF2F2);

`;

export const GoodsPage = () => {

  return (
    <>
      <Header >
        <Container>
          <HeaderWrapper>
            <Logo>MyCake</Logo>
            <LocationBtn>
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


      <Container>

        <Searchbar>
          <input type="text" placeholder="Шоколадний торт з квітами" />
          <button type="button">Шукати</button>
        </Searchbar>


        <SectionGoods>
          <GoodsListBox>
            <GoodsTitle>Шукаєш щось особливе?</GoodsTitle>

            <GoodsRecipList>
              <GoodsListTitle>Тематика</GoodsListTitle>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Для дівчат</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Для дівчат</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Для чоловіків</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Патріотичні</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Весільні</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>До дня народження</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Корпоративні</GoodsText>
              </GoodsListItem>
            </GoodsRecipList>
            <GoodsRecipList>
              <GoodsListTitle>Особливості</GoodsListTitle>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Класичні рецепти</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Без глютену</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Веганські</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>Без цукру</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>З фруктами</GoodsText>
              </GoodsListItem>
              <GoodsListItem>
                <GoodsInput type="checkbox" />
                <GoodsText>З квітами</GoodsText>
              </GoodsListItem>
            </GoodsRecipList>

          </GoodsListBox>

          <GoodsBox>

            <GoodsListBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button">Капкейки</GoodsBtn>
              </GoodsListItemBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button" style={{ color: "white", background: "#A63A50" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_5810_8835)">
                      <path d="M9.99984 1.66602C5.39984 1.66602 1.6665 5.39935 1.6665 9.99935C1.6665 14.5993 5.39984 18.3327 9.99984 18.3327C14.5998 18.3327 18.3332 14.5993 18.3332 9.99935C18.3332 5.39935 14.5998 1.66602 9.99984 1.66602ZM8.33317 14.166L4.1665 9.99935L5.3415 8.82435L8.33317 11.8077L14.6582 5.48268L15.8332 6.66602L8.33317 14.166Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5810_8835">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Торти
                </GoodsBtn>
              </GoodsListItemBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button">Кейк-попси</GoodsBtn>
              </GoodsListItemBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button">Макаруни</GoodsBtn>
              </GoodsListItemBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button">Печиво</GoodsBtn>
              </GoodsListItemBtn>
              <GoodsListItemBtn>
                <GoodsBtn type="button">Цукерки</GoodsBtn>
              </GoodsListItemBtn>
            </GoodsListBtn>





            <GoodsList>
              <GoodsItem>
                <GoodsImg src={cakeImg2} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Весільний триярусний торт з фруктами та квітами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg3} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Бісквітний торт з ягодами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg4} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Ванільно-карамельний торт з печивом Орео</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg5} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Торт рожевий з макарунами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg1} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Торт “Літнє бажання” з шоколадом та макарунами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg5} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Чорні капкейки з шоколадом та печивом</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg3} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Капкейки з карамеллю 3 шт</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg4} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Капкейки з ніжним кремом</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg5} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Торт рожевий з макарунами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg2} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Весільний триярусний торт з фруктами та квітами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg2} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Оригінальні капкейки з кремом та печивом</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg1} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Пасхальні капкейки шоколадні та ванільні</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg1} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Торт “Літнє бажання” з шоколадом та макарунами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg4} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Капкейки з ніжним кремом</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg5} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Чорні капкейки з шоколадом та печивом</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cupcakeImg3} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Капкейки з карамеллю 3 шт</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg3} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Бісквітний торт з ягодами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg4} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Ванільно-карамельний торт з печивом Орео</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg2} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Весільний триярусний торт з фруктами та квітами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
              <GoodsItem>
                <GoodsImg src={cakeImg5} />
                <GoodsTextCurrency>520 грн</GoodsTextCurrency>
                <GoodsTextDescription>Торт рожевий з макарунами</GoodsTextDescription>
                <GoodsTextNumber>4 варіанти начинок</GoodsTextNumber>
              </GoodsItem>
            </GoodsList>

            <BtnLoading type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 26" fill="none">
                <g clip-path="url(#clip0_5801_95)">
                  <path d="M14.5833 13C14.5833 11.8542 13.6458 10.9167 12.5 10.9167C11.3542 10.9167 10.4167 11.8542 10.4167 13C10.4167 14.1458 11.3542 15.0833 12.5 15.0833C13.6458 15.0833 14.5833 14.1458 14.5833 13ZM12.5 3.625C7.32292 3.625 3.125 7.82292 3.125 13H0L4.16667 17.1667L8.33333 13H5.20833C5.20833 8.96875 8.46875 5.70833 12.5 5.70833C16.5312 5.70833 19.7917 8.96875 19.7917 13C19.7917 17.0312 16.5312 20.2917 12.5 20.2917C10.9271 20.2917 9.46875 19.7812 8.27083 18.9375L6.79167 20.4375C8.375 21.6458 10.3542 22.375 12.5 22.375C17.6771 22.375 21.875 18.1771 21.875 13C21.875 7.82292 17.6771 3.625 12.5 3.625Z" fill="#43607C" />
                </g>
                <defs>
                  <clipPath id="clip0_5801_95">
                    <rect width="25" height="25" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              Більше смаколиків
            </BtnLoading>

            <LoadingList>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_5801_7076)">
                  <path d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z" fill="#011936" />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7076">
                    <rect width="24" height="24" rx="12" transform="matrix(-1 0 0 1 24 0)" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <li>
                <LoadingBtn type="button">1</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button">2</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button" style={{ fontWeight: "700", background: "#FDAD6D" }}>3</LoadingBtn>
              </li>
              <li>
                <LoadingBtn type="button">4</LoadingBtn>
              </li>
              <li>
                ...
              </li>
              <li>
                <LoadingBtn type="button">15</LoadingBtn>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_5801_7093)">
                  <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#011936" />
                </g>
                <defs>
                  <clipPath id="clip0_5801_7093">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </LoadingList>
          </GoodsBox>
        </SectionGoods>
      </Container>
      <Container><ListTopPip></ListTopPip></Container>
      <Container><ListState></ListState></Container>
      <Footerr></Footerr>
    </>
  )
};
