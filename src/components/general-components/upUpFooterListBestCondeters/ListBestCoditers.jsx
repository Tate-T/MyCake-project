import styled from "styled-components";
import topImg1 from "../../../../src/imgs/StatePng/TopPip1.png";
import topImg2 from "../../../../src/imgs/StatePng/TopPip2.png";
import topImg3 from "../../../../src/imgs/StatePng/TopPip3.png";
const GlawBox = styled.div`

margin-bottom: 80px;
margin-top:80px;
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
const Boxes = styled.div`

`;
const BoxesFlexInfo = styled.div`
margin-left: auto;
display:flex;
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

const InfoCardBox = styled.div`

display: flex;
padding: 15px;
justify-content: center;
align-items: center;
gap: 25px;
border-radius: 5px;
background: var(--White, #FFF);
box-shadow: 0px 2px 10px 0px rgba(67, 96, 124, 0.25);
`;
const InfoBox = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`;
const TitleInfo = styled.h2`
color: var(--CTA-blue, #43607C);
font-family: Verdana;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 120%;
margin-bottom:5px;
`;


const VidgugInfo = styled.p`
color: var(--CTA-red, #A63A50);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 16.8px */
text-decoration-line: underline;
`;
const Img = styled.img`
width: 180px;
height: 180px;`



const KoditerInfo = styled.p`
color: var(--CTA-blue, #43607C);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin-top: 20px;
`;

const CookingIfo = styled.div`
display: flex;
padding: 2px 10px;
justify-content: center;
align-items: center;
gap: 30px;
border-radius: 30px;
background: var(--Pink-BG, #FFF2F2);

`;
const BoxesFlexCoocing = styled.div`
margin-top:22px;
gap:15px;
  display: flex;
  align-items: center;  
`;
const CoocTetx = styled.p`
color: var(--CTA-red, #A63A50);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
`;
export default function ListTopPip() {
  return (
    <>
    <GlawBox>
      <BoxesFlex>
        <GlawTxtState>Кращі кондитери</GlawTxtState>
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
    <InfoCardBox>
    <Img src={topImg1} alt="info" />
    <InfoBox>
<TitleInfo>Інна Пономаренко</TitleInfo>
<VidgugInfo>23 відгуки</VidgugInfo>
<KoditerInfo>Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...</KoditerInfo>
<BoxesFlexCoocing>
<CookingIfo>
<CoocTetx>Торти</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>Цукерки</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>+3</CoocTetx>
</CookingIfo>

</BoxesFlexCoocing>



    </InfoBox>
    </InfoCardBox>

</li>
<li>
    <InfoCardBox>
    <Img src={topImg3} alt="info" />
    <InfoBox>
<TitleInfo>Home Bakery</TitleInfo>
<VidgugInfo>59 відгуки</VidgugInfo>
<KoditerInfo>Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...</KoditerInfo>
<BoxesFlexCoocing>
<CookingIfo>
<CoocTetx>Торти</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>Капкейки</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>+3</CoocTetx>
</CookingIfo>

</BoxesFlexCoocing>



    </InfoBox>
    </InfoCardBox>

</li>
<li>
    <InfoCardBox>
    <Img src={topImg2} alt="info" />
    <InfoBox>
<TitleInfo>Іванна Марченко</TitleInfo>
<VidgugInfo>15 відгуки</VidgugInfo>
<KoditerInfo>Кондитер IV розряду та автор «Школа юного кондитера» Рекордсмен книги рекордів...</KoditerInfo>
<BoxesFlexCoocing>
<CookingIfo>
<CoocTetx>Макаруни</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>Капкейки</CoocTetx>
</CookingIfo>
<CookingIfo>
<CoocTetx>+3</CoocTetx>
</CookingIfo>

</BoxesFlexCoocing>



    </InfoBox>
    </InfoCardBox>

</li>

      </Ul>
    </GlawBox>
    </>
  );
}







