import { ListWrap, ConfItem, ConfAvatar, ConfCakeItemWrap, ConfInfo, ConfCakeItemImg, ConfAvatarButtonList, ConfAvatarName, ConfAvatarComments, ConfAvatarInfo, ConfSubInfo, ConfCakeItem, ConfAvatarImg, ConfCakeList, ConfBtnList, ConfViewBtn, ConfNextBtn } from "./ConfectionersList.styled";
import { Container } from "../Container/Container.styled";
import ArrowLeft from '../../../imgs/arrow-left.png';
import ArrowRight from '../../../imgs/arrow-right.png';
import userImg from '../../../imgs/StatePng/TopPip1.png'
import productImg1 from '../../../imgs/cakes/cake-2.jpg'
import productImg2 from '../../../imgs/cakes/cake-1.jpg'
import productImg3 from '../../../imgs/cakes/cake-3.jpg'
import productImg4 from '../../../imgs/cakes/cake-4.jpg'

export function ConfectionersList() {
    return (
        <>
            <Container>
                <ListWrap>
                    <ConfItem>
                        <ConfAvatar>
                            <ConfAvatarImg><img src={userImg} /></ConfAvatarImg>
                            <ConfAvatarName>Інна Пономаренко</ConfAvatarName>
                            <ConfAvatarComments>23 відгуки</ConfAvatarComments>
                            <ConfAvatarInfo>Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...</ConfAvatarInfo>
                            <ConfAvatarButtonList>
                                <button>Торти</button>
                                <button>Цукерки</button>
                                <button>+3</button>
                            </ConfAvatarButtonList>
                        </ConfAvatar>
                        <ConfInfo>
                            <ConfSubInfo>
                                <h2>Інна Пономаренко</h2>
                                <ConfBtnList>
                                    <ConfViewBtn>Переглянути всі</ConfViewBtn>
                                    <div>
                                        <ConfNextBtn><img src={ArrowLeft}></img></ConfNextBtn>
                                        <ConfNextBtn><img src={ArrowRight}></img></ConfNextBtn>
                                    </div>
                                </ConfBtnList>
                            </ConfSubInfo>
                            <ConfCakeList>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg1} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Весільний триярусний торт з фруктами та квітами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg2} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Бісквітний торт з ягодами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg3} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Ванільно-карамельний торт з печивом Орео</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg4} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Торт рожевий з макарунами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                            </ConfCakeList>
                        </ConfInfo>
                    </ConfItem>
                    <ConfItem>
                        <ConfAvatar>
                            <ConfAvatarImg><img src={userImg} /></ConfAvatarImg>
                            <ConfAvatarName>Інна Пономаренко</ConfAvatarName>
                            <ConfAvatarComments>23 відгуки</ConfAvatarComments>
                            <ConfAvatarInfo>Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...</ConfAvatarInfo>
                            <ConfAvatarButtonList>
                                <button>Торти</button>
                                <button>Цукерки</button>
                                <button>+3</button>
                            </ConfAvatarButtonList>
                        </ConfAvatar>
                        <ConfInfo>
                            <ConfSubInfo>
                                <h2>Інна Пономаренко</h2>
                                <ConfBtnList>
                                    <ConfViewBtn>Переглянути всі</ConfViewBtn>
                                    <div>
                                        <ConfNextBtn><img src={ArrowLeft}></img></ConfNextBtn>
                                        <ConfNextBtn><img src={ArrowRight}></img></ConfNextBtn>
                                    </div>
                                </ConfBtnList>
                            </ConfSubInfo>
                            <ConfCakeList>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg1} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Весільний триярусний торт з фруктами та квітами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg2} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Бісквітний торт з ягодами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg3} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Ванільно-карамельний торт з печивом Орео</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg4} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Торт рожевий з макарунами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                            </ConfCakeList>
                        </ConfInfo>
                    </ConfItem>
                    <ConfItem>
                        <ConfAvatar>
                            <ConfAvatarImg><img src={userImg} /></ConfAvatarImg>
                            <ConfAvatarName>Інна Пономаренко</ConfAvatarName>
                            <ConfAvatarComments>23 відгуки</ConfAvatarComments>
                            <ConfAvatarInfo>Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...</ConfAvatarInfo>
                            <ConfAvatarButtonList>
                                <button>Торти</button>
                                <button>Цукерки</button>
                                <button>+3</button>
                            </ConfAvatarButtonList>
                        </ConfAvatar>
                        <ConfInfo>
                            <ConfSubInfo>
                                <h2>Інна Пономаренко</h2>
                                <ConfBtnList>
                                    <ConfViewBtn>Переглянути всі</ConfViewBtn>
                                    <div>
                                        <ConfNextBtn><img src={ArrowLeft}></img></ConfNextBtn>
                                        <ConfNextBtn><img src={ArrowRight}></img></ConfNextBtn>
                                    </div>
                                </ConfBtnList>
                            </ConfSubInfo>
                            <ConfCakeList>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg1} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Весільний триярусний торт з фруктами та квітами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg2} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Бісквітний торт з ягодами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg3} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Ванільно-карамельний торт з печивом Орео</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg4} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Торт рожевий з макарунами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                            </ConfCakeList>
                        </ConfInfo>
                    </ConfItem>
                    <ConfItem>
                        <ConfAvatar>
                            <ConfAvatarImg><img src={userImg} /></ConfAvatarImg>
                            <ConfAvatarName>Інна Пономаренко</ConfAvatarName>
                            <ConfAvatarComments>23 відгуки</ConfAvatarComments>
                            <ConfAvatarInfo>Кондитер IV разряда и автор «Школа юного кондитера» Рекордсмен книги рекордов...</ConfAvatarInfo>
                            <ConfAvatarButtonList>
                                <button>Торти</button>
                                <button>Цукерки</button>
                                <button>+3</button>
                            </ConfAvatarButtonList>
                        </ConfAvatar>
                        <ConfInfo>
                            <ConfSubInfo>
                                <h2>Інна Пономаренко</h2>
                                <ConfBtnList>
                                    <ConfViewBtn>Переглянути всі</ConfViewBtn>
                                    <div>
                                        <ConfNextBtn><img src={ArrowLeft}></img></ConfNextBtn>
                                        <ConfNextBtn><img src={ArrowRight}></img></ConfNextBtn>
                                    </div>
                                </ConfBtnList>
                            </ConfSubInfo>
                            <ConfCakeList>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg1} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Весільний триярусний торт з фруктами та квітами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg2} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Бісквітний торт з ягодами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg3} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Ванільно-карамельний торт з печивом Орео</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                                <ConfCakeItem>
                                    <ConfCakeItemImg><img src={productImg4} /></ConfCakeItemImg>
                                    <ConfCakeItemWrap>
                                        <h2>520 грн</h2>
                                        <h3>Торт рожевий з макарунами</h3>
                                        <p>4 варіанти начинок</p>
                                    </ConfCakeItemWrap>
                                </ConfCakeItem>
                            </ConfCakeList>
                        </ConfInfo>
                    </ConfItem>
                </ListWrap>
            </Container>
        </>
    );
}