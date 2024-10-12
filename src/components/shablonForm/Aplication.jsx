import { useState } from 'react'
import galch from './Circle_Check.svg'
import styled from 'styled-components'
import svg from './xrestec.svg'
const CloseApp = styled.img`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 40px;
	right: 40px;
`
CloseApp.defaultProps = {
	src: svg,
}
const ImgGalc = styled.img`
	width: 93px;
	height: 93px;
`
ImgGalc.defaultProps = {
	src: galch,
}
const ButtonLast = styled.button`
	color: var(--CTA-blue, #43607c);
	font-family: Verdana;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
	display: flex;
	padding: 10px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	align-self: stretch;
	border-radius: 50px;
	border: 1px solid var(--CTA-blue-text, #84a6c2);
	background: var(--White, #fff);
`
const ButtonNext = styled.button`
	color: var(--White, #fff);
	font-family: Verdana;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
	display: flex;
	padding: 10px 30px;
	justify-content: center;
	align-items: center;
	gap: 15px;
	align-self: stretch;
	border-radius: 50px;
	background: var(--CTA-red, #a63a50);
`
const BoxBtn = styled.div`
	gap: 10px;
	display: flex;
`
const TitleTxt = styled.h1`
	color: var(--CTA-blue, #43607c);
	text-align: center;
	font-family: Verdana;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
`
const BoxUp = styled.div``
const GlawBox = styled.div`
	display: flex;
	width: 700px;
	padding: 40px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	border-radius: 10px;
	background: var(--White, #fff);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* border: solid; */
`
const FeedbackBackdrop = styled.div`
	overflow: hidden;
	opacity: 1;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	background-color: #0000003e;
	backdrop-filter: blur(5px);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 11;
`
const AplicationSucc = () => {
	const [hideen, setHideen] = useState(false)
	const closeModal = () => {
		setHideen(true)
	}
	return (
		hideen === false && (
			<FeedbackBackdrop>
				<GlawBox>
					<BoxUp>
						<ImgGalc></ImgGalc>
						<CloseApp onClick={closeModal}></CloseApp>
					</BoxUp>
					<TitleTxt>Ваша заявка відправлена</TitleTxt>
					<BoxBtn>
						<ButtonLast onClick={closeModal}>Назад до шаблонів</ButtonLast>
						<ButtonNext onClick={closeModal}>Написати продавцю</ButtonNext>
					</BoxBtn>
				</GlawBox>
			</FeedbackBackdrop>
		)
	)
}
export default AplicationSucc
