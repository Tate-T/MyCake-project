import styled from "styled-components";
const LowerBarC = styled.a`
  cursor: pointer;
  color: #84a6c2;
  font-family: Verdana;
  font-size: 14px;
  line-height: 1.71;
  text-decoration-line: underline;
`;

export default function LowerBar({ text, handleOnClick, inlineStyle }) {
    return (
        <LowerBarC style={inlineStyle} onClick={handleOnClick}>{text}</LowerBarC>
    );
}