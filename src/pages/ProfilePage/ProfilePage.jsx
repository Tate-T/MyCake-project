import React from "react";
import {
    PageContainer,
    Header,
    Logo,
    NavLinks,
    ProfileContainer,
    Sidebar,
    SidebarItem,
    ProfileDetails,
    Section,
    ProgressBlock,
    Footer,
} from "./ProfilePage.styled";

const ProfilePage = () => {
    return (
        <PageContainer>
            <Header>
                <Logo>MyCake</Logo>
                <NavLinks>
                    <a href="#">Десерти</a>
                    <a href="#">Кращі кондитери</a>
                    <a href="#">Корисні статті</a>
                </NavLinks>
            </Header>

            <ProfileContainer>
                <Sidebar>
                    <SidebarItem>
                        <h3>Загальне</h3>
                        <button>Заявки</button>
                        <button>Відгуки</button>
                    </SidebarItem>

                    <SidebarItem>
                        <h3>Категорії</h3>
                        <button>Торти</button>
                        <button>Макаруни</button>
                        <button>Капкейки</button>
                        <button>Додати категорію</button>
                    </SidebarItem>
                </Sidebar>

                <ProfileDetails>
                    <Section>
                        <h2>
                            Фото <span>Змінити фото</span>
                        </h2>
                        <p>Додайте своє фото або логотип компанії.</p>
                    </Section>

                    <Section>
                        <h2>
                            Загальне <span>Редагувати</span>
                        </h2>
                        <p>Ім'я кондитера або назва кондитерської</p>
                        <p>Опис</p>
                    </Section>

                    <Section>
                        <h2>
                            Контакти <span>Редагувати</span>
                        </h2>
                        <ul>
                            <li>Адреса: Київ, Гречка 15</li>
                            <li>Номер телефону: +380 55 555 55 34</li>
                            <li>Пошта: mail@example.com</li>
                        </ul>
                    </Section>

                    <Section>
                        <h2>
                            Доставка <span>Редагувати</span>
                        </h2>
                        <ul>
                            <li>Самовивіз, Київ</li>
                            <li>Виїзна доставка, 150 грн</li>
                        </ul>
                    </Section>

                    <Section>
                        <h2>
                            Оплата <span>Редагувати</span>
                        </h2>
                        <p>Передплата 50%</p>
                    </Section>

                    <Section>
                        <h2>
                            Соціальні мережі <span>Редагувати</span>
                        </h2>
                        <ul>
                            <li>Instagram: www.instagram.com</li>
                            <li>Facebook: www.facebook.com</li>
                        </ul>
                    </Section>

                    <ProgressBlock>
                        <p>Ваш профіль заповнений на 83%</p>
                        <p>Розкажіть про себе ще, щоб бути цікавішими користувачам.</p>
                        <button>Заповнити поле "Опис"</button>
                    </ProgressBlock>
                </ProfileDetails>
            </ProfileContainer>

            <Footer>
                <p>© MyCake 2022. All rights reserved.</p>
                <nav>
                    <a href="#">Правила користування</a>
                    <a href="#">Форма зворотного зв'язку</a>
                </nav>
            </Footer>
        </PageContainer>
    );
};

export default ProfilePage;