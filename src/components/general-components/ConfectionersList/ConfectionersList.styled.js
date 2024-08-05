import styled from "styled-components";

export const ListWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`;

export const ConfItem = styled.div`
    display: flex;
`;

export const ConfAvatar = styled.div`
    width: 280px;
    height: 479px;
    padding: 20px;
    text-align: center;
    align-items: center;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 2px 10px 0px rgba(67, 96, 124, 0.25);
`;

export const ConfInfo = styled.div`
    display: flex;
    width: 1150px;
    height: 479px;
    flex-direction: column;
    row-gap: 20px;
`;

export const ConfSubInfo = styled.div`
    display: flex;
    height: 35px;
    justify-content: space-between;
    align-items: center;

    h2{
        color: #011936;
        font-family: "Yeseva One";
        font-size: 24px;
        font-weight: 400;
        line-height: 1.2;
    }
`;

export const ConfBtnList = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;

    div{
        display: flex;
    }
`;

export const ConfViewBtn = styled.button`
    width: 158px;
    height: 35px;
    padding: 5px, 20px;
    border-radius: 30px;
    background: #DCEBF8;
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
`;

export const ConfNextBtn = styled.button`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const ConfCakeList = styled.div`
    height: 424px;
    display: flex;
    column-gap: 10px;
`;

export const ConfCakeItem = styled.div`
    display: flex;
    width: 280px;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 2px 5px 0px rgba(67, 96, 124, 0.15);
`;

export const ConfAvatarImg = styled.div`
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #FFE1E1;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;

export const ConfAvatarName = styled.h2`
    color: #43607C;
    font-family: Verdana;
    font-size: 18px;
    font-weight: 700;
    line-height: 2.1;
`;

export const ConfAvatarComments = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: #A63A50;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    text-decoration-line: underline;
    margin-bottom: 20px;
`;

export const ConfAvatarInfo = styled.p`
   color: #43607C;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 22px;
`;

export const ConfAvatarButtonList = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    button{
        margin-left: auto;
        margin-right: auto;
        padding: 2px 10px;
        gap: 30px;
        border-radius: 30px;
        background: #FFF2F2;
        color: #A63A50;
        font-family: Verdana;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.7;
    }
`;

export const ConfCakeItemImg = styled.div`
   width: 280px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 5px;
`;

export const ConfCakeItemWrap = styled.div`
    display: flex;
    padding: 0px 10px 15px 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 114px;

    h2{
        color: #A63A50;
        font-family: Verdana;
        font-size: 18px;
        font-weight: 700;
        line-height: 2.1;
    }
    h3{
        color: #011936;
        font-family: Verdana;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
    }
    p{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #84A6C2;
        font-family: Verdana;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.6;
    }
`;