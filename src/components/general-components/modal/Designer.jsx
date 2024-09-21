import styled from "styled-components";

const Box = styled.div`
  list-style: none;
  margin-left: auto;  
  margin-right: auto;
  border-radius: 10px;
  /* left: auto;  
  right: auto;
  position: fixed; */
  border: 2px solid black;
  width: 700px;
    form {
        margin-left: auto;  
        margin-right: auto;
        background: white;
        width: 650px;
        
    }
`;

const StartSection = styled.div`
display: flex;
margin-top: 40px;
  /* margin-bottom: 25px; */
  div {
    margin-right: 350px;
    background: transparent;
    /* border: 2px; */
    width: 300px;
    h2 {
        color: var(--Black, #011936);
font-family: "Yeseva One";
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
    }

    p {
        color: var(--CTA-blue-text, #84A6C2);
font-family: Verdana;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 24px */
    }
  }
  button {
    background: transparent;
    margin-left: auto;
    /* margin-left: 25px; */
  }
`;

const CakeCreateSection = styled.div`
       margin-top: 40px;
    border-bottom: 1px solid #DFDFDF;
    border-radius: 1px;
    
`;

const UserSection = styled.div`
    margin-top: 40px;
    border-bottom: 1px solid #DFDFDF;
    border-radius: 1px;
    ul {
        li {
            margin-top: 10px;
            gap: 30px;
            display: flex;

            input {
                gap: 20px;
flex: 1 0 0;
                color: var(--CTA-blue, #43607C);
                font-family: Verdana;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                padding: 10px 20px;
                height: 40px;
                padding: 10px 20px;
                border-radius: 50px;
                border: 1px solid var(--Border, #DFDFDF);
            }

            p {
                width: 220px;
                color: var(--Black, #011936);
                font-family: Verdana;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; 
            }
        }
        margin-bottom: 40px;
    }
`;


const BoxMCeke = styled.div`
    
        align-items: center;
        display: flex;
        P {
            margin-left: 15px;
            color: var(--Black, #011936);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
        }
        input {
            margin-left: auto;
            gap: 20px;
flex: 0.6 0 0;
                color: var(--CTA-blue, #43607C);
                font-family: Verdana;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                padding: 10px 20px;
                height: 40px;
                padding: 10px 20px;
                border-radius: 50px;
                border: 1px solid var(--Border, #DFDFDF);
        }
        h2 {
           width: 120px;
color: var(--Black, #011936);
font-family: Verdana;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin-right: 30px;         }
    
`;

const CreateCake = styled.ul`

margin-top: 40px;
    li {
        margin-top: 40px;
        ul {
            li {
                 margin-top: 5px;
                button {
           
            text-align: left;
            width: 300px;
            background: transparent;
            display: flex;
padding: 8px 20px;
align-items: center;
gap: 15px;
align-self: stretch;
border-radius: 20px;
border: 1px solid var(--Border, #DFDFDF);
        }
            }
        }
       
        display: flex;
        div {
            
            width: 290px;
            margin-right: 30px;
            p {
                align-self: stretch;
color: var(--CTA-blue-text, #84A6C2);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
            }

            h2 {
                width: 220px;
color: var(--Black, #011936);
font-family: Verdana;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%; 
            }
        }
    }
`;


const FormComent = styled.form`
align-items: center;
margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    h2 {
        width: 220px;
        margin-right: 30px;
        align-self: stretch;
color: var(--Black, #011936);
font-family: Verdana;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 120%; 

    }
input {
    margin-right: 15px;
    margin-top: 40px;
    width: 15px;
height: 15px;
flex-shrink: 0;
}

div {
    margin-top: 40px;
    p {
        color: var(--CTA-blue, #43607C);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
    }
}
    textarea {
        margin-left: 30px;
        display: flex;
width: 370px;
padding: 10px 20px;
align-items: flex-start;
gap: 20px;
border-radius: 20px;
border: 1px solid var(--Border, #DFDFDF);
    }
button {
    margin-top: 40px;
    color: var(--White, #FFF);
font-family: Verdana;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 120%; 
    width: 100%;
    height: 40px;
padding: 10px 30px;
justify-content: center;
align-items: center;
gap: 15px;
align-self: stretch;
border-radius: 50px;
background: var(--CTA-red, #A63A50);
}
`;

const SaveBtn = styled.button`
margin-top: 5px;
 width: 100%;
height: 40px;
padding: 10px 20px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 50px;
border: 1px solid var(--CTA-blue-text, #84A6C2);
background: var(--White, #FFF);
margin-bottom: 40px;
`;

export const Desinger = () => {
    return (
        <>
            <Box>
                <form>
                    <StartSection>
                        <div>
                            <h2>Конструктор</h2>
                            <p>Торт “Червоний оксамит”</p>
                        </div>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <g clip-path="url(#clip0_5820_6751)">
                                    <path d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z" fill="#84A6C2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5820_6751">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </StartSection>

                    <UserSection>
                        <ul>
                            <li>
                                <p>Ім’я</p>
                                <input type="text" placeholder="Aнна Пономаренко" />
                            </li>
                            <li>
                                <p>Номер телефону</p>
                                <input type="tel" placeholder="+56 085 345 76 34" />
                            </li>
                        </ul>
                    </UserSection>

                    <CakeCreateSection>
                        <BoxMCeke>
                            <h2>Вага</h2>
                            <input type="number" placeholder="2" />
                            <p>кг</p>
                        </BoxMCeke>
                        <CreateCake>
                            <li>
                                <div>
                                    <h2>Начинка</h2>
                                    <p>Оберіть 1 варіант</p>
                                </div>

                                <ul>
                                    <li>
                                        <button type="button">Бісквітна з манговим мусом із дзеркальною глазуррю</button>
                                    </li>
                                    <li>
                                        <button type="button">Бісквітна з лохиновим конфітюром</button>
                                    </li>
                                    <li>
                                        <button type="button">Шоколадний бісквіт з крем-чізом, горіховим праліне і велюровим покриттям</button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div>
                                    <h2>Додаткові послуги</h2>
                                    <p>Можна обрати декілька варіантів</p>
                                </div>

                                <ul>
                                    <li>
                                        <button type="button">Прикраси з мастики</button>

                                    </li>
                                    <li>
                                        <button type="button">Шоколадні сфери</button>

                                    </li>
                                    <li>
                                        <button type="button">Живі квіти</button>

                                    </li>
                                    <li>
                                        <button type="button">Святкова упаковка</button>

                                    </li>
                                    <li>
                                        <button type="button">Фото на торті</button>

                                    </li>
                                </ul>
                            </li>
                        </CreateCake>
                    </CakeCreateSection>


                    <FormComent>
                        <h2>Додаткові побажання</h2>
                        <textarea rows="10"></textarea>
                        <input type="checkbox" />
                        <div>
                            <h2>Не телефонуйте мені</h2>
                            <p>Хочу спілкуватися тільки в чаті Mycake</p>
                        </div>

                        <button type="submit">Надіслати заявку</button>

                    </FormComent>
                    <SaveBtn type="button">Зберегти шаблон</SaveBtn>
                </form>
            </Box >
        </>
    );
};
