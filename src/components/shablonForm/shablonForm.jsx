import { React, Component } from 'react'
import sty from './shablonModals.module.css'
import svg from './xrestec.svg'
import stilka from './strilka.svg'
import pen from './mode_edit.svg'
import styled from 'styled-components'
const SvgLocation = styled.img`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 40px;
	right: 40px;
`
SvgLocation.defaultProps = {
	src: svg,
}
const SvgPen = styled.img`
	width: 24px;
    height: 24px;;
`
SvgPen.defaultProps = {
	src: pen,
}
const SvgStrilrf = styled.img`
	width: 20px;
    height: 20px;;

`
SvgStrilrf.defaultProps = {
	src: stilka,
}
const TitleName = styled.h1`
	color: var(--Black, #011936);
	font-family: 'Yeseva One';
	font-size: 30px;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
`
const BoxNum = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const ItemBoxNum = styled.li`
	display: flex;
	align-items: center;
`
const TextNumName = styled.h2`
	width: 220px;
	color: var(--CTA-blue, #43607c);
	font-family: Verdana;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%;
`
const InputNameNum = styled.input`
	color: var(--CTA-blue, #43607c);
	font-family: Verdana;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	display: flex;
	height: 40px;
	padding: 0px 20px;
	align-items: center;
	gap: 20px;
	flex: 1 0 0;
	border-radius: 50px;
	background: var(--Grey-BG, #f9f9f9);
`
const CheckBox = styled.input`
	width: 20px;
	height: 20px;
`
const AddPOslug = styled.button`
	margin-right: 25px;
	color: var(--CTA-blue, #43607c);
	font-family: Verdana;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 171.429% */

	display: flex;
	height: 40px;
	padding: 10px 20px;
	align-items: center;
	gap: 20px;
	border-radius: 50px;
	background: var(--Grey-BG, #f9f9f9);
`
const NoNUm = styled.button`
margin-top: 10px;
	display: flex;
	height: 40px;
	padding: 2px 10px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 40px;
	border: 1px solid var(--Pink-hover, #ffe1e1);
	color: var(--CTA-red, #a63a50);
	font-family: Verdana;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 120%;
    background-color: white;
`
const FeedbackTextarea = styled.textarea`
	display: flex;
	width: 360px;
	height: 100px;
	padding: 10px 20px;
	border-radius: 20px;
	border: 1px solid #dfdfdf;
	margin-left: auto;
`

const Linia = styled.div`
	width: 620px;
	height: 1px;
	background: #dfdfdf;
`
const TextKg = styled.p`
	color: var(--Black, #011936);
font-family: Verdana;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%;
margin-left:15px;
`
class shablonModal extends Component {
	state = {
		hiden: true,
	}

	closeModal = () => {
		this.setState({ hiden: true })
		// console.log(this.state.hiden)
        // console.log(document.getElementById("name").value)
        // console.log(document.getElementById("num").value)
        //    console.log(document.getElementById("kg").value)
        // console.log(document.getElementById("nachinka").value)
        // console.log(document.getElementById("addbobam").value)
	}
	openModal = () => {
		this.setState({ hiden: false })
		// console.log(this.state.hiden)
	}

	render() {
		const { hiden } = this.state
		return (
            hiden === false && (
			<div className={sty.boxModal}>
                <button onClick={() => this.closeModal()}>
                
                <SvgLocation href={svg} alt="awd" />
                </button>
				
				<TitleName>Торт “Червоний оксамит”</TitleName>
				<BoxNum>
					<ItemBoxNum>
						<TextNumName>Ім’я та прізвище</TextNumName>
						<InputNameNum id="name" placeholder="name" />
					</ItemBoxNum>
					<ItemBoxNum>
						<TextNumName>Номер телефону</TextNumName>
						<InputNameNum id="num" placeholder="number" />
					</ItemBoxNum>
				</BoxNum>
				<Linia></Linia>
				<BoxNum>
					<ItemBoxNum>
						<TextNumName>Вага</TextNumName>
						<InputNameNum id="kg" placeholder="kg" /><TextKg>kg</TextKg>
					</ItemBoxNum>
					<ItemBoxNum>
						<TextNumName>Начинка</TextNumName>
						<InputNameNum id="nachinka" placeholder="начинка" />
					</ItemBoxNum>
					<ItemBoxNum>
						<TextNumName>Додаткові послуги</TextNumName>
						<AddPOslug>Прикраси з мастики</AddPOslug>
						<AddPOslug>Живі квіти</AddPOslug>
					</ItemBoxNum>
					<ItemBoxNum>
						<div>
							<TextNumName>Додаткові побажання</TextNumName>
							<NoNUm>
								<CheckBox type="checkbox"></CheckBox> 
                                Не телефонуйте мені
							</NoNUm>
						</div>

						<FeedbackTextarea id="addbobam"></FeedbackTextarea>
					</ItemBoxNum>
				</BoxNum>
                <div>
                    <div className={sty.boxBtn}>
                        <button className={sty.btnRedag}>
                        <SvgPen href={pen}/> Редагувати
                        </button>
                        <button className={sty.btnOgolosh}>
                        Сторінка оголошення<SvgStrilrf href={stilka}/>
                        </button>
                    </div>
                    <button onClick={()=> this.closeModal()} className={sty.btnLast}>
                    Надіслати заявку
                        </button>
                </div>
			</div>)
		)
	}
}

export default shablonModal;
