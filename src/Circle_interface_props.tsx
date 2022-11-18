import styled from "styled-components";
import { useState } from "react";

// interface를 통해 각종 데이터 타입을 정의하기
// interface를 하나로 합쳐도 됨 (obj의 데이터가 같으니까!)

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// props의 선택사항 표시법 : 뒤에 물음표(?)만 붙여주기
// interface CircleProps {
//   bgColor: string;
//   borderColor?: String;
// }

// ContainerProps를 참조하여 내부에서 사용이 가능하도록 설정
// const Container = styled.div<CircleProps>`
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

// props의 선택사항 표시법 : 뒤에 물음표(?)만 붙여주기
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1);
  setCounter(2);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
