import styled from "styled-components";
import { Header } from "../../components/general-components/Header/Header.styled";
import { Container } from "../../components/general-components/Container/Container.styled";
import { Logo } from "../../components/general-components/Logo/Logo.styled";
import Chat from "../../imgs/chat.svg";
import Login from "../../imgs/login.svg";
import Position from "../../imgs/position.svg";
import Banner from "../../imgs/article-banner.jpeg";
import Footerr from "../../components/general-components/Footer/Footer";
import ArrowLeft from "../../imgs/sm-arrow-left.svg";
import ArrowRight from "../../imgs/sm-arrow-right.svg";
import Article1 from "../../imgs/StatePng/photoState.png";
import Article2 from "../../imgs/StatePng/photoState4.png";

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
const Article = styled.section`
  padding-top: 40px;
  padding-bottom: 111px;
`;

const ArticleInput = styled.input`
  border: 1px solid rgb(223, 223, 223);
  border-radius: 5px 0px 0px 5px;
  padding: 10px 20px 10px 20px;
`;

const ArticleBtn = styled.button`
  border: 1px solid rgb(253, 173, 109);
  border-radius: 0px 5px 5px 0px;
  background-color: rgb(253, 173, 109);
`;

const ArticleBanner = styled.img`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
`;

const ArticleTitle = styled.h2`
  color: rgb(67, 96, 124);
  font-size: 35px;
  font-weight: 400;
  line-height: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
ArticleBanner.defaultProps = {
  src: Banner,
};
const ArticleBlock = styled.div`
  gap: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;
const ArticleText = styled.p`
  color: rgb(67, 96, 124);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  font-family: "Verdana";
  text-align: left;
  &:nth-of-type(2) {
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;
const ArticleBoldText = styled.span`
  font-weight: 700;
`;

const ArticlesList = styled.ul`
  gap: 40px;
  display: flex;
  margin-top: 40px;
`;

const ArticlesItem = styled.li`
  width: 480px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px rgba(67, 96, 124, 0.25);
  &:last-child div  {
    justify-content: flex-end;
    padding-left: 0;
    padding-right: 20px;
  }
`;
const ArticlesWrapper = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 20px;
  padding-left: 20px;
  outline: 1px solid red;
  /* width: 100%; */
`;
const ArticlesText = styled.p`
  color: rgb(67, 96, 124);
  font-family: Verdana;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  display: block;
`;
const ArticlesSubtitle = styled.h3`
  color: rgb(67, 96, 124);
  font-family: Verdana;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  display: inline;
  padding-left: 24px;
  /* margin-top: 20px; */
`;
const ArticlesIcon = styled.img`
  margin-right: 10px;
  width: 24px;
  display: inline;
  &:nth-of-type(2) {
    margin-left: 10px;
  }
`;
ArticlesIcon.defaultProps = {
  src: ArrowLeft,
};

const ArticlesImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
ArticlesImg.defaultProps = {
  src: Article1,
};
export const ArticlePage = () => {
  return (
    <>
      <Header>
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
      <Article>
        <Container>
          <ArticleInput />
          <ArticleBtn />
          <ArticleBlock>
            <ArticleBanner />
            <ArticleTitle>
              Як приготувати справжній французький круасан
            </ArticleTitle>
            <ArticleText>
              Круасани на сніданок – це класика. Що може бути смачніше за свіжий
              гарячий невагомий круасан? Гурман підготував для тебе рецепт
              справжнього французького круасана. ДИВИСЬ: Оладки на сніданок:
              ТОП-5 кращих рецептів Рецепт круасана <br />
              - 20 г свіжих дріжджів (або 5 гр сухих) <br />
              - 500 г білого хлібного борошна
              <br />
              - 10 г солі
              <br />
              - 50 г цукру
              <br />
              - 1 велике яйце
              <br />
              - 125 г холодного молока
              <br />
              - 125 г води
              <br />
              - 200 г несолоного вершкового масла (з холодильника)
              <br />
              - 1 яйце, збите з щіпкою солі, для глазурі
              <br />
            </ArticleText>
            <ArticleText>
              Як приготувати: Добре розітри дріжджі в борошні, додай сіль і
              цукор. Слідом додай яйце, молоко та воду - ретельно перемішай до
              однорідної маси й виміси тісто 3-4 хвилини. Сформуй кулю і зроби
              хрестоподібний надріз зверху; злегка присип форму для тіста
              борошном і відправ у неї тісто не менше, ніж на 2 години, а краще
              на всю ніч (12 годин) постав форму в холодильник, накривши її
              плівкою.
            </ArticleText>
            <ArticleText>
              Посипавши злегка робоче місце борошном, виклади на нього виросле
              тісто. Розгорни його в місці надрізу в 4 сторони й злегка
              розкачай. Намагайся витримати квадратну форму. Розгорни тісто
              ромбом і в його середину виклади вершкове масло товщиною близько 1
              см. Масло попередньо розкачай на папері від упаковки масла,
              накривши плівкою. Закрий масло рештою тіста з боків ромба та
              починай розгортати до 60-70 см, звертаючи увагу на товщину шару -
              вона повинна бути рівномірною по всій площі. За час розкочування
              тіста підніми й злегка повертай (не перевертаючи) його кілька
              разів. Склади тісто в три шари, зробивши позначку на верхньому
              шарі. Поклади тісто в пакет і відправ його на 20-30 хвилин у
              холодильник. Діставши тісто з холодильника, виклади його позначкою
              догори і короткою стороною до себе. Розкачай у прямокутник і знову
              склади його в три рази; відправ на відпочинок у холодильник на
              20-30 хвилин. Повторюємо процедуру ще один раз – загалом 3 рази!
              Після третьої "заморозки" розкачай тісто в прямокутник 30х75 см і
              завтовшки 4 мм. Гострим ножем підрівняй краї, шар розділи на 2
              частини уздовж і почни вирізати трикутники розміром 15х15х9 см.
              Основу надріж, щоб при випічці круасан вигнувся і набув своєї
              знаменитої форми. Формуй круасан, починаючи скручувати його з
              основи. Глазуруй круасан яєчною сумішшю з сіллю та дай підійти 2
              години. Намаж ще раз глазур'ю круасан. Намагайся змазувати круасан
              тільки по верхньому шару, не чіпаючи листкових боків, щоб уникнути
              їх склеювання. Розігрій духовку до 220-230 градусів за Цельсієм.
              Випікай круасан 18-20 хвилин до золотавого кольору. Остуди на
              решітці. <br /> <ArticleBoldText>Смачного!</ArticleBoldText>
            </ArticleText>
            <ArticlesList>
              <ArticlesItem>
                <ArticlesWrapper>
                  <ArticlesIcon />
                  <ArticlesText>Попередня стаття</ArticlesText>
                </ArticlesWrapper>
                <ArticlesImg />
                <ArticlesSubtitle>Кращі кондитерські Києва</ArticlesSubtitle>
              </ArticlesItem>
              <ArticlesItem>
                <ArticlesWrapper>
                  <ArticlesText>Наступна стаття</ArticlesText>
                  <ArticlesIcon src={ArrowRight} />
                </ArticlesWrapper>
                <ArticlesImg src={Article2} />
                <ArticlesSubtitle>Рецепти шоколаду без цукру</ArticlesSubtitle>
              </ArticlesItem>
            </ArticlesList>
          </ArticleBlock>
        </Container>
      </Article>
      <Footerr></Footerr>
    </>
  );
};
