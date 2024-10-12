// import { HeaderComp } from "../../components/general-components/Header/Header";
// import Searchbar from "../../components/general-components/Searchbar/Searchbar";
// import aboutConfectionerImg from "../../imgs/aboutConfectionerImg.jpg";
// import styled from "styled-components";
// import Footerr from "../../components/general-components/Footer/Footer";
// const safeArr = [];
// function createUniqueId() {
//   const id = "id" + Math.random().toString(16).slice(2);
//   if (safeArr.includes(id)) {
//     createUniqueId();
//   } else {
//     safeArr.push(id);
//     return id;
//   }
// }

// const BtnList = styled.ul`
//   display: block;
//   margin-left: 30px;
// `;

// const BtnListItem = styled.li``;

// const ListItemContent = styled.button`
//   width: 280px;
//   height: 40px;
//   padding: 5px 20px 5px 20px;
//   gap: 10px;
//   border-radius: 50px;
//   border: 1px 0px 0px 0px;
//   opacity: 0px;
//   border: 2px solid #c8e6ff;
//   background-color: white;
//   color: #43607c;
//   font-family: Verdana;
//   font-size: 18px;
//   font-weight: 400;
//   line-height: 21.6px;
//   text-align: left;
//   margin-bottom: 10px;

//   &:hover {
//     opacity: 0.8;
//     background: #43607c;
//     color: white;
//     font-family: Verdana;
//     font-size: 18px;
//     font-weight: 700;
//     line-height: 21.6px;
//     text-align: left;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const SearchbarContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const MainContentContainer = styled.div`
//   display: flex;
//   align-items: flex-start;
//   width: 1500px;
// `;

// const MainContent = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 40px;
// `;

// const UserPic = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 5px;
//   margin-right: 50px;
// `;

// const City = styled.p`
//   color: var(--CTA-blue-text, #84a6c2);
//   font-family: Verdana;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%;
//   margin-bottom: 5px;
// `;

// const UserName = styled.h2`
//   color: var(--Black, #011936);
//   font-family: "Yeseva One";
//   font-size: 35px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 42px */
//   margin-bottom: 20px;
// `;

// const ContactBtn = styled.button`
//   display: flex;
//   height: 40px;
//   width: 268px;
//   padding: 10px 30px;
//   justify-content: center;
//   align-items: center;
//   gap: 15px;
//   border-radius: 50px;
//   background: var(--CTA-red, #a63a50);
//   color: var(--White, #fff);
//   font-family: Verdana;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 120%; /* 19.2px */
// `;

// const InfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ConfectionerInfo = styled.p`
//   color: var(--CTA-blue, #43607c);
//   font-family: Verdana;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px; /* 171.429% */
//   align-self: stretch;
//   margin-top: 50px;
//   height: 200px;
//   margin-right: 40px;
//   margin-left: 40px;
// `;

// const ReviewsContainer = styled.div`
//   display: block;
//   margin-left: 40px;
// `;

// const ReviewsTitle = styled.h2`
//   color: var(--Black, #011936);
//   font-family: "Yeseva One";
//   font-size: 35px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 42px */
// `;

// const Reviews = styled.ul`
//   list-style: none;
// `;

// const ReviewsItem = styled.li`
//   margin-top: 40px;
// `;

// const ReviewerInfoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const ItemName = styled.h3`
//   color: var(--CTA-blue, #43607c);
//   font-family: Verdana;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 120%; /* 21.6px */
// `;

// const ItemDate = styled.p`
//   color: var(--CTA-blue-text, #84a6c2);
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 16.8px */
// `;

// const ItemTitle = styled.h4`
//   color: var(--CTA-red, #a63a50);
//   font-family: Inter;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 16.8px */
//   margin-top: 10px;
// `;

// const ItemContent = styled.p`
//   margin-top: 20px;
//   color: var(--CTA-blue, #43607c);
//   font-family: Inter;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px; /* 150% */
//   align-self: stretch;
// `;

// const LoadMoreButton = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 40px;
//   align-self: stretch;
//   color: var(--CTA-blue, #43607c);
//   font-family: Inter;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 19.2px */
//   border-radius: 49px;
//   border: 1px solid var(--CTA-blue-text, #84a6c2);
//   background-color: white;
//   padding: 5px 5px;
//   width: 1120px;
//   justify-content: center;
//   margin-left: 40px;
//   margin: 40px 40px;
// `;

// const Pagination = styled.ul`
//   display: flex;
//   gap: 10px;
//   align-items: center;
//   justify-content: center;
//   width: 290px;
//   height: 50px;
//   margin: 0 auto 50px auto;

//   li {
//     color: #5e2d07;
//     font-family: "Roboto";
//     font-size: 18px;
//     font-weight: 400;
//     line-height: 1.2;
//     box-sizing: border-box;
//     border-radius: 50px;
//     border: 1px solid #ffe2ca;
//     background: #fff;
//     display: flex;
//     width: 50px;
//     height: 50px;
//     padding: 5px 10px;
//     justify-content: center;
//     align-items: center;
//     transition: 350ms;
//     cursor: pointer;

//     &:hover {
//       font-weight: 700;
//       background: #d0d0d0;
//     }
//   }
// `;

// const LeftArrow = styled.div`
//   font-weight: 900;
//   cursor: pointer;
// `;

// const RightArrow = styled.div`
//   font-weight: 900;
//   cursor: pointer;
// `;

// const Goods = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-bottom: 174px;
// `;

// const Good = styled.div`
// margin-top: 80px;
//   display: flex;
//   align-items:center;
//   justify-content: space-between;
//   margin-bottom: 24px;
// `;

// const GoodBtnContainer = styled.div`
// display:flex;
// align-items:center;
// `;

// const GoodTitle = styled.h2`
// color: var(--Black, #011936);
// font-family: "Yeseva One";
// font-size: 35px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 42px */
// `;

// const GoodBtn = styled.button`
// color: var(--CTA-blue, #43607C);
// font-family: Verdana;
// font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: 24px; /* 171.429% */
// display: flex;
// height: 35px;
// padding: 5px 20px;
// justify-content: center;
// align-items: center;
// gap: 10px;
// margin-right:20px;
// border-radius: 30px;
// background: var(--blue-bg-border, #DCEBF8);
// `;

// const GoodLeftArrow = styled.div`
// margin-right:15px;
// font-weight: 900;
//   cursor: pointer;
// `;

// const GoodRightArrow = styled.div`
// font-weight: 900;
//   cursor: pointer;
// `;

// const GoodList = styled.ul`
//   display: flex;
//   gap: 18px;
// `;

// const GoodItem = styled.li`
//   display: flex;
//   width: 280px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;
//   border-radius: 5px;
//   background: var(--White, #fff);
//   box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
// `;

// const GoodItemImg = styled.img`
//   width: 280px;
//   height: 300px;
//   flex-shrink: 0;
//   border-radius: 5px;
// `;

// const GoodItemPrice = styled.h4`
//   color: var(--CTA-red, #a63a50);
//   font-family: Verdana;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 120%; /* 21.6px */
//   margin-top: 10px;
//   margin-bottom: 5px;
//   margin-left: 15px;
// `;

// const GoodItemContent = styled.p`
//   flex: 1 0 0;
//   color: var(--Black, #011936);
//   font-family: Verdana;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 20px; /* 125% */
//   margin-left: 15px;
// `;

// const GoodItemOptions = styled.p`
//   margin-left: 15px;
//   margin-bottom: 15px;
//   color: var(--CTA-blue-text, #84a6c2);
//   font-family: Verdana;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 120%; /* 16.8px */
// `;

// const aboutConfectioner = () => {
//   return (
//     <>
//       <HeaderComp />
//       <Container>
//         <SearchbarContainer>
//           <Searchbar placeholder="Шоколадний торт з квітами" />
//         </SearchbarContainer>
//         <MainContentContainer>
//           <BtnList>
//             <BtnListItem>
//               <ListItemContent>Про кондитера</ListItemContent>
//             </BtnListItem>
//             <BtnListItem>
//               <ListItemContent>Товари</ListItemContent>
//             </BtnListItem>
//           </BtnList>
//           <div style={{ display: "block" }}>
//             <MainContent>
//               <UserPic src={aboutConfectionerImg} />
//               <InfoContainer>
//                 <City>Київ</City>
//                 <UserName>Інна Пономаренко</UserName>
//                 <ContactBtn>Переглянути контакти</ContactBtn>
//               </InfoContainer>
//             </MainContent>
//             <ConfectionerInfo>
//               Вже понад 10 років удосконалюю свої навички. З 2011 по 2017 –
//               засновник бренду Марципан у Вінниці зі штатом 35 осіб. Я була
//               шеф-кондитером 3 ресторанів. А також, одним із перших кондитерів,
//               який ввів у моду кенді бари в Чорнозем'ї та спільно з партнерами
//               придумали коробки квіти та макаронів – ідея яка розлетілася по
//               всьому світу. Також, я та моя команда займаємося організацією та
//               запуском кондитерських виробництв. Маю великий досвід за плечима.
//               За 10 років роботи я створила тисячі та тисячі тортів. Пройшовши
//               великий шлях від домашнього кондитера до бренд-шефа, я з великою
//               радістю та впевненістю ділюся з учнями своїми знаннями від випічки
//               тортів та тістечок до масштабних весільних тортів.
//             </ConfectionerInfo>
//             <ReviewsContainer>
//               <ReviewsTitle>Відгуки</ReviewsTitle>
//               <Reviews>
//                 <ReviewsItem>
//                   <ReviewerInfoContainer>
//                     <ItemName>Анна Щедріна</ItemName>
//                     <ItemDate>15.11.2020</ItemDate>
//                   </ReviewerInfoContainer>
//                   <ItemTitle>Торт “Червоний оксамит”</ItemTitle>
//                   <ItemContent>
//                     Замовляли на мій День народження мусовий торт із маракуєю та
//                     залишилися дуже задоволені. Тортик вийшов дуже смачний, з
//                     приємною кислинкою за рахунок маракуї та неймовірно ніжною
//                     та легкою текстурою. Начинка, на мій смак, просто шикарна:
//                     желе маракуйї, бісквіт, хрусткий шар та мус із манго та
//                     маракуйї.
//                   </ItemContent>
//                 </ReviewsItem>
//                 <ReviewsItem>
//                   <ReviewerInfoContainer>
//                     <ItemName>Олександр Ольцев</ItemName>
//                     <ItemDate>15.11.2020</ItemDate>
//                   </ReviewerInfoContainer>
//                   <ItemTitle>Торт весільний з фруктами</ItemTitle>
//                   <ItemContent>
//                     Супер десерти для дому та хореки. Чарівні круасани. Торти,
//                     кейки та мусові десерти - це кохання
//                   </ItemContent>
//                 </ReviewsItem>
//                 <ReviewsItem>
//                   <ReviewerInfoContainer>
//                     <ItemName>Тарас Коломієць</ItemName>
//                     <ItemDate>15.11.2020</ItemDate>
//                   </ReviewerInfoContainer>
//                   <ItemTitle>Торт для дня народження з квітами, 5 кг</ItemTitle>
//                   <ItemContent>
//                     Найсмачніші торти та тістечка, казкові еклери. У захваті від
//                     десертів. Кондитера - чарівниці, доставка завжди на
//                     найвищому рівні!!!!! Всій сім'єю обожнюємо Вашу кондитерську
//                     , дякую за вашу працю і смакоти!! :3
//                   </ItemContent>
//                 </ReviewsItem>
//               </Reviews>
//             </ReviewsContainer>
//             <LoadMoreButton>Більше відгуків</LoadMoreButton>
//             <Pagination>
//               <LeftArrow>&#x3c;</LeftArrow>
//               <li key={createUniqueId()}>1</li>
//               <li key={createUniqueId()}>2</li>
//               <li
//                 key={createUniqueId()}
//                 style={{ fontWeight: "700", background: "#FDAD6D" }}
//               >
//                 3
//               </li>
//               <li key={createUniqueId()}>4</li>
//               <li key={createUniqueId()}>5</li>
//               <RightArrow>&#x3e;</RightArrow>
//             </Pagination>
//           </div>
//         </MainContentContainer>
//         <Goods>
//           <Good>
//             <GoodTitle>Торти</GoodTitle>
//             <GoodBtnContainer>
//             <GoodBtn>Переглянути всі</GoodBtn>
//             <GoodLeftArrow>&#x3c;</GoodLeftArrow>
//             <GoodRightArrow>&#x3e;</GoodRightArrow>
//             </GoodBtnContainer>
//           </Good>
//           <GoodList>
//             <GoodItem>
//               <GoodItemImg src={cakeImg1} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Торт “Літнє бажання” з шоколадом та макарунами
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg2} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Весільний триярусний торт з фруктами та квітами
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg3} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>Бісквітний торт з ягодами</GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg4} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Ванільно-карамельний торт з печивом Орео
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg5} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>Торт рожевий з макарунами</GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//           </GoodList>
          
//           <Good>
//             <GoodTitle>Капкейки</GoodTitle>
//             <GoodBtnContainer>
//             <GoodBtn>Переглянути всі</GoodBtn>
//             <GoodLeftArrow>&#x3c;</GoodLeftArrow>
//             <GoodRightArrow>&#x3e;</GoodRightArrow>
//             </GoodBtnContainer>
//           </Good>
//           <GoodList>
//             <GoodItem>
//               <GoodItemImg src={cakeImg1} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Торт “Літнє бажання” з шоколадом та макарунами
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg2} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Весільний триярусний торт з фруктами та квітами
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg3} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>Бісквітний торт з ягодами</GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg4} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>
//                 Ванільно-карамельний торт з печивом Орео
//               </GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//             <GoodItem>
//               <GoodItemImg src={cakeImg5} />
//               <GoodItemPrice>520 грн</GoodItemPrice>
//               <GoodItemContent>Торт рожевий з макарунами</GoodItemContent>
//               <GoodItemOptions>4 варіанти начинок</GoodItemOptions>
//             </GoodItem>
//           </GoodList>
          
//         </Goods>
//       </Container>
//       <Footerr></Footerr>
//     </>
//   );
// };

// export default aboutConfectioner;
