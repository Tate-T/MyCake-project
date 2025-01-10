import styled from "styled-components";
import React, { useState } from "react";
import HeaderComp from "../../components/general-components/Header/Header.jsx";
import { Container } from "../../components/general-components/Container/Container.styled.js";
import { Logo } from "../../components/general-components/Logo/Logo.styled.js";
import Searchbar from "../../components/general-components/Searchbar/Searchbar.jsx";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import Footerr from "../../components/general-components/Footer/Footer.jsx";
import ListState from "../../components/general-components/upFooterListState/ListState.jsx";
import ListTopPip from "../../components/general-components/upUpFooterListBestCondeters/ListBestCoditers.jsx";
import cakeImg1 from "../../imgs/cakes/cake-1.jpg";
import cakeImg2 from "../../imgs/cakes/cake-2.jpg";
import cakeImg3 from "../../imgs/cakes/cake-3.jpg";
import cakeImg4 from "../../imgs/cakes/cake-4.jpg";
import cakeImg5 from "../../imgs/cakes/cake-5.jpg";
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

const HeaderLinkSpan = styled.a`
  font-family: "Verdana";
  color: rgb(0, 0, 0);
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

const SectionDesserts = styled.section`
  display: flex;
`;

const SearchDessertsBtn = styled.button`
  height: 50px;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid var(--CTA-yellow, #fdad6d);
  padding: 5px 30px;
  background-color: ${(props) => props.theme.colors.buttonsColor};
  font-family: Verdana;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
`;

const SearchDessertsInput = styled.input`
  height: 50px;
  width: 88%;
  padding: 0px 20px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid var(--Border, #dfdfdf);
  color: var(--Placeholder, #c2c2c2);
  font-family: Verdana;
  // display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const DessertsListBox = styled.div`
  margin-right: 20px;
  width: 242px;
  margin-top: 40px;
`;

const DessertsBox = styled.div`
  margin-top: 40px;
`;

const SearchDessertsBox = styled.div`
  margin-top: 40px;
  // border: 1px solid var(--Border, #DFDFDF);
`;

const DessertsRecipList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  width: 242px;
`;

const DessertsListItem = styled.li`
  display: flex;
  width: 252px;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin-top: 14px;
`;
const DessertsInput = styled.input`
  width: 30px;
  height: 20px;
  color: #43607c;
`;

const DessertsText = styled.p`
  color: var(--Black, #011936);
  font-family: Verdana;
  font-size: ${(props) => props.theme.text};
  font-weight: 400;
  line-height: 120%;
`;

const DessertsTitle = styled.h2`
  width: 201px;
  height: 60px;
  color: var(--Black, #011936);
  font-family: "Yeseva One";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 125% */
`;

const DessertsListTitle = styled.h2`
  color: var(--Black, #011936);
  font-family: Verdana;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
`;

const BtnLoading = styled.button`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--CTA-blue, #43607c);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  border-radius: 49px;
  border: 1px solid var(--CTA-blue-text, #84a6c2);
  padding: 5px 10px;
  width: 100%;
`;

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
  line-height: 120%;
  border-radius: 50px;
  border: 1px solid var(--CTA-yellow-border, #ffe2ca);
  background: var(--White, #fff);

  &:hover {
    color: var(--Black, #011936);
    font-weight: 700;
    background-color: #fdad6d;
  }
`;

const DessertsList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const DessertsItem = styled.li`
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 280px;
  flex-direction: column;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
`;

const DessertsImg = styled.img`
  width: 280px;
  height: 300px;
`;

const DessertsTextCurrency = styled.h2`
  margin-left: 15px;

  margin-top: 15px;
  margin-bottom: 10px;
  color: var(--CTA-red, #a63a50);
  font-family: Verdana;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
`;

const DessertsTextDescription = styled.p`
  margin-left: 15px;

  width: 250px;
  color: var(--Black, #011936);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const DessertsTextNumber = styled.p`
  margin-left: 15px;
  margin-bottom: 15px;
  margin-top: 5px;
  width: 142px;
  color: var(--CTA-blue-text, #84a6c2);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
`;

const DessertsListBtn = styled.ul`
  gap: 10px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const DessertsListItemBtn = styled.li`
  display: flex;
  flex-wrap: wrap;
`;

const DessertsBtn = styled.button`
  padding: 5px 20px;
  color: var(--CTA-red-text, #8e4a4e);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  border-radius: 40px;
  background: var(--Pink-BG, #fff2f2);
`;

export const Desserts = () => {
  const initialDesserts = [
    {
      id: 1,
      img: cakeImg2,
      price: "520 грн",
      description: "Весільний триярусний торт з фруктами та квітами",
      details: "4 варіанти начинок",
    },
    {
      id: 2,
      img: cakeImg3,
      price: "520 грн",
      description: "Бісквітний торт з ягодами",
      details: "4 варіанти начинок",
    },
    {
      id: 3,
      img: cakeImg4,
      price: "520 грн",
      description: "Ванільно-карамельний торт з печивом Орео",
      details: "4 варіанти начинок",
    },
    {
      id: 4,
      img: cakeImg5,
      price: "520 грн",
      description: "Торт рожевий з макарунами",
      details: "4 варіанти начинок",
    },
  ];

  const [desserts, setDesserts] = useState(initialDesserts);

  const loadMoreDesserts = () => {
    const newDesserts = [
      ...initialDesserts.map((dessert) => ({
        ...dessert,
        id: desserts.length + dessert.id,
      })),
    ];
    setDesserts((prevDesserts) => [...prevDesserts, ...newDesserts]);
  };

  return (
    <>
      <HeaderComp></HeaderComp>
      <Container>
        <Searchbar placeholder="Шоколадний торт з квітами" />
        <SectionDesserts>
          <DessertsBox>
            <DessertsList>
              {desserts.map((dessert) => (
                <DessertsItem key={dessert.id}>
                  <DessertsImg src={dessert.img} />
                  <DessertsTextCurrency>{dessert.price}</DessertsTextCurrency>
                  <DessertsTextDescription>
                    {dessert.description}
                  </DessertsTextDescription>
                  <DessertsTextNumber>{dessert.details}</DessertsTextNumber>
                </DessertsItem>
              ))}
            </DessertsList>
            <BtnLoading onClick={loadMoreDesserts}>
              Більше смаколиків
            </BtnLoading>
          </DessertsBox>
        </SectionDesserts>
      </Container>
    </>
  );
};
