import styled from "styled-components";
import stateImg1 from "../../../../src/imgs/StatePng/photoState.png";
import stateImg2 from "../../../../src/imgs/StatePng/photoState1.png";
import stateImg3 from "../../../../src/imgs/StatePng/photoState2.png";
import stateImg4 from "../../../../src/imgs/StatePng/photoState3.png";
import stateImg5 from "../../../../src/imgs/StatePng/photoState4.png";
const GlawBox = styled.div`
  margin-bottom: 80px;
  margin-top: 80px;
`;

const Ul = styled.ul`
  display: flex;
  line-style: none;
  gap: 18px;
`;
const BoxesFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Boxes = styled.div``;
const BoxesFlexInfo = styled.div`
  // position: absolute;
  // right: 205px;
  display: flex;
  margin-left: auto;
`;
const GlawTxtState = styled.h2`
  color: var(--Black, #011936);
  font-family: "Yeseva One";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

const BtnAllPoregl = styled.button`
  display: flex;
  height: 35px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: var(--blue-bg-border, #dcebf8);
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const StateArrowBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const StateCardBox = styled.div`
  display: flex;
  width: 280px;
  padding-bottom: 15px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 2px 10px 0px rgba(67, 96, 124, 0.25);
`;

const StateCardTitle = styled.h2`
  width: 248px;
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
const StateCardSubtitle = styled.p`
  width: 248.4px;
  color: var(--CTA-blue, #43607c);
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;


export default function ListState() {
  return (
    <>
    <GlawBox>

      <BoxesFlex>
        <GlawTxtState>Статті</GlawTxtState>
        <BoxesFlexInfo>
          <BtnAllPoregl>Переглянути всі</BtnAllPoregl>

          <StateArrowBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_5811_8201)">
                <path
                  d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z"
                  fill="#43607C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5811_8201">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </StateArrowBtn>
          <StateArrowBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_5811_8201)">
                <path
                  d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
                  fill="#43607C"
                />
              </g>
              <defs>
                <clipPath id="clip0_5811_8201">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </StateArrowBtn>
        </BoxesFlexInfo>
      </BoxesFlex>

      <Ul>
        <li>
          <StateCardBox>
            <img src={stateImg1} alt="state" />

            <StateCardTitle>Кращі кондитерські Києва</StateCardTitle>
            <StateCardSubtitle>
              Ми знаємо, де у Києві готують і подають смачні десерти та фірмові
              булочки, шоколадні цукерки ручної роботи, а також де можна купити
              натуральний шоколад. І вам розкажемо...
            </StateCardSubtitle>
          </StateCardBox>
        </li>
        <li>
          <StateCardBox>
            <img src={stateImg2} alt="state" />

            <StateCardTitle>
              Як приготувати справжній французький круасан
            </StateCardTitle>
            <StateCardSubtitle>
              Всі, хто любить круасани, мріють одного разу опинитися в маленькій
              французькій пекарні з гарячим круасаном в руках. Чи це не чудово?
              Ті, хто там побу...
            </StateCardSubtitle>
          </StateCardBox>
        </li>

        <li>
          <StateCardBox>
            <img src={stateImg3} alt="state" />

            <StateCardTitle>
              Рецепти найсмачніших макарунів з незвичними смаками
            </StateCardTitle>
            <StateCardSubtitle>
              Вишукане і неймовірно смачне французьке печиво «Макаронів» за
              класичним рецептом готується на основі мигдальної муки. Н...{" "}
            </StateCardSubtitle>
          </StateCardBox>
        </li>

        <li>
          <StateCardBox>
            <img src={stateImg4} alt="state" />

            <StateCardTitle>Малинове безе в домашніх умовах</StateCardTitle>
            <StateCardSubtitle>
              Безе, або меренга - це класичний французький десерт з запеченого
              білкового крему. Неймовірно ніжний, м'який всередині і трохи
              хрусткий зов...
            </StateCardSubtitle>
          </StateCardBox>
        </li>
        <li>
          <StateCardBox>
            <img src={stateImg5} alt="state" />

            <StateCardTitle>Рецепти шоколаду без цукру</StateCardTitle>
            <StateCardSubtitle>
              Розглянемо популярні способи приготування домашнього шоколаду.
              Його головна особливість — можливість комбінування різних
              продуктів...
            </StateCardSubtitle>
          </StateCardBox>
        </li>
      </Ul>
    </GlawBox>
    </>
  );
}
