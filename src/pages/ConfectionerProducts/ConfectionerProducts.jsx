import styled from "styled-components";
import { Container } from "../../components/general-components/Container/Container.styled.js";
import ListTopPip from "../../components/general-components/upUpFooterListBestCondeters/ListBestCoditers.jsx";
import ListState from "../../components/general-components/upFooterListState/ListState.jsx";
import { theme } from "../../theme.js";
import confectionerProducts from "../confectionerProducts.json";
import loadmore from "../../svg/loadmore.svg";
import Searchbar from "../../components/general-components/Searchbar/Searchbar.jsx";
import leftArrow from "../../svg/leftArrow.svg";
import rightArrow from "../../svg/rihtAroow.svg";
import Footerr from "../../components/general-components/Footer/Footer.jsx";
import Header from "../../components/general-components/Header/Header.jsx";

const NavCont = styled.div`
    display: flex;
    gap: ${theme.spacings(10)};
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 52px;
`;

const ConfectionerList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    button{
        display: flex;
        padding-left: 20px;
        align-items: center;
        border-radius: 50px;
        width: 280px;
        height: 40px;
        border: 1px solid rgb(200, 230, 255);
        background-color: #FFF;
        color: ${theme.colors.textColor};
        font-size: 18px;
        &[confectionerActive]{
            background: rgb(67, 96, 124);
            border: 0;
            font-weight: 700;
            color: ${theme.colors.additionalText};
        }
    }
`;

const Filters = styled.ul`
    display: flex;
    gap: 30px;
    flex-direction: column;
    font-family: 'Verdana';
    h2{
        font-size: ${theme.fontSizes.subtitle};
        width: 201px;
        color: ${theme.colors.titleColor};
        line-height: 30px;
    }
    li{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h3{
        font-size: ${theme.fontSizes.quote};
        color: ${theme.colors.titleColor};
        line-height: 24px;
    }
`
const Themes = styled.ul`
    display: flex;
    gap: 8px;
    flex-direction: column;
    li{
        gap: 10px;
        width: 252px;
        flex-direction: row;
        align-items: center;
        position: relative;
        height: 30px;
        padding-left: 40px;
        input{
            position: absolute;
            top: 3.75px;
            width: 22.5px;
            height: 22.5px;
            left: 3.75px;
            opacity: 0;
            z-index: 2;
            cursor: pointer;
            &:hover ~ div{
                border: 2.15px solid #262e7a;
            }
            &:checked ~ div:after {
                opacity: 1;
            }
        }
        div{
            position: absolute;
            width: 22.5px;
            height: 22.5px;
            box-sizing: border-box;
            top: 3.75px;
            left: 3.75px;
            border: 2.15px solid ${theme.colors.textColor};
            border-radius: 2.5px;
            transition: all 0.3s;
            &:after {
                content: "";
                position: absolute;
                opacity: 0;
                left: 6px;
                top: 1px;
                width: 5px;
                height: 10px;
                border: solid ${theme.colors.textColor};
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
                transition: all .3s;
            }
        }
        span{
            font-size: ${theme.fontSizes.text};
            color: ${theme.colors.titleColor};
            line-height: 24px;
        }
    }
`;

const ProductsPart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 1152px;
`;

const ConfectionerTitle = styled.h2`
    font-size: ${theme.fontSizes.title};
    line-height: 1.2;
    color: ${theme.colors.titleColor};
`;

const Types = styled.ul`
    display: flex;
    gap: 10px;
    button{
        padding: 0 20px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        background-color: #FFF2F2;
        font-size: ${theme.fontSizes.text};
        line-height: 1.2;
        color: #8E4A4E;
        position: relative;
        &::before{
            display: none;
            width: 5px;
            height: 10px;
            content: "";
            border: solid ${theme.colors.accentColor};
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            position: absolute;
            left: 27px;
            top: 13px;
        }
        div{
            display: none;
            border-radius: 50%;
            width: 16.67px;
            height: 16.67px;
            background-color: ${theme.colors.additionalText};
        }
        &[activeType="1"]{
            background-color: ${theme.colors.accentColor};
            color: ${theme.colors.additionalText};
            padding-left: 21.67px;
            gap: 11.67px;
            &::before{
                display: block;
            }
            div{
                display: block;
            }
        }
    }
`;

const Products = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 10px;
    li{
        border-radius: 5px;
        box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
        background-color: ${theme.colors.additionalText};
        padding: 315px 15px 15px;
        position: relative;
        width: 280px;
        height: 424px;
        box-sizing: border-box;
        font-family: 'Verdana';
    }
    img{
        width: 280px;
        height: 300px;
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
    }
    h4{
        font-size: ${theme.fontSizes.quote};
        color: ${theme.colors.accentColor};
        font-weight: 700;
        line-height: 1.2;
    }
    p{
        margin-top: 5px;
        font-size: ${theme.fontSizes.text};
        color: ${theme.colors.titleColor};
        line-height: 20px;
        height: 50px;
        display: flex;
        align-items: center;
    }
    span{
        font-size: ${theme.fontSizes.buttonsText};
        color: #84A6C2;
        line-height: 1.2;
    }
`;

const Loadmore = styled.button`
    width: 100%;
    border: 1px solid #84A6C2;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    gap: 15px;
    font-size: ${theme.fontSizes.text};
    color: ${theme.colors.textColor};
    line-height: 1.2;
    border-radius: 49px;
    img{
        width: 25px;
        height: 25px;
    }
`;

const Pages = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    width: 435px;
    height: 50px;
    button{
        background-color: transparent;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 24px;
            height: 24px;
        }
    }
    ul{
        display: flex;
        gap: 10px;
        li{
            height: 50px;
            font-size: ${theme.fontSizes.quote};
            font-family: 'Verdana';
            color: #5E2D07;
            line-height: 1.2;
            display: flex;
            align-items: end;
            justify-content: center;
            &[morePages="1"]{
                width: 25px;
            }
        }
        button{
            width: 50px;
            height: 50px;
            border: 1px solid rgb(255, 226, 202);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fontSizes.quote};
            font-family: 'Verdana';
            line-height: 1.2;
            color: #5E2D07;
            background: ${theme.colors.additionalText};
            &[activePage="1"]{
                background: rgb(253, 173, 109);
                font-weight: 700;
                color: ${theme.colors.titleColor};
            }
        }
    }
`;



const ConfectionerProducts = () => 
<>
    <Header />  
    <section>
        <Container>
            <Searchbar placeholder="Шоколадний торт з квітами" />
            <NavCont>
                <Navigation>
                <ConfectionerList>
                    <li>
                        <button>
                            Про кондитера
                        </button>
                    </li>
                    <li>
                        <button confectionerActive="1">
                            Товари
                        </button>
                    </li>
                </ConfectionerList>
                <Filters>
                    <li>
                        <h2>Шукаєш <br/> щось особливе?</h2>
                    </li>
                    <li>
                        <h3>Тематика</h3>
                        <Themes>
                            <li>
                                <input type="checkbox" />
                                <span>Для дівчат</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Для чоловіків</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Патріотичні</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Весільні</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>До дня народження</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Корпоративні</span>
                                <div></div>
                            </li>
                        </Themes>
                    </li>
                    <li>
                        <h3>Особливості</h3>
                        <Themes>
                            <li>
                                <input type="checkbox" />
                                <span>Класичні рецепти</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Без глютену</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Веганські</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Без цукру</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>З фруктами</span>
                                <div></div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>З квітами</span>
                                <div></div>
                            </li>
                        </Themes>
                    </li>
                </Filters>
                </Navigation>
                <ProductsPart>
                    <ConfectionerTitle>Інна Пономаренко</ConfectionerTitle>
                    <Types>
                        <li>
                            <button activeType="0"><div></div>Капкейки</button>
                        </li>
                        <li>
                            <button activeType="1"><div></div>Торти</button>
                        </li>
                        <li>
                            <button activeType="0"><div></div>Кейк-попси</button>
                        </li>
                        <li>
                            <button activeType="0"><div></div>Макаруни</button>
                        </li>
                        <li>
                            <button activeType="0"><div></div>Печиво</button>
                        </li>
                        <li>
                            <button activeType="0"><div></div>Цукерки</button>
                        </li>
                    </Types>
                    <Products>
                        {confectionerProducts.map(confectionerProduct => <li key={confectionerProduct.id}>
                            <img src={confectionerProduct.photo} alt={confectionerProduct.name} />
                            <h4>{confectionerProduct.price} грн</h4>
                            <p>{confectionerProduct.name}</p>
                            <span>{confectionerProduct.variants} варіанти начинок</span>
                        </li>)}
                    </Products>
                    <Loadmore>
                        <img src={loadmore} />
                        Більше смаколиків
                    </Loadmore>
                    <Pages>
                        <button>
                            <img src={leftArrow} />
                        </button>
                        <ul>
                            <li>
                                <button>
                                    1
                                </button>
                            </li>
                            <li>
                                <button>
                                    2
                                </button>
                            </li>
                            <li>
                                <button activePage="1">
                                    3
                                </button>
                            </li>
                            <li>
                                <button>
                                    4
                                </button>
                            </li>
                            <li morePages="1">
                                ...
                            </li>
                            <li>
                                <button>
                                    15
                                </button>
                            </li>
                        </ul>
                        <button>
                            <img src={rightArrow} />
                        </button>
                    </Pages>
                </ProductsPart>
            </NavCont>
            <ListTopPip></ListTopPip>
            <ListState></ListState>
        </Container>
    </section>
    <Footerr />    
</>
export default ConfectionerProducts;