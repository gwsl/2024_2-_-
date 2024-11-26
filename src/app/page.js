import Image from "next/image";
import img01 from "/public/images/coffee-blue.jpg"
// page.js는 필수이다. (생략 불가)
// 각 경로(/, /about, /content ..) 마다 페이지를 렌더링하려면
// 해당 경로의 page.js 파일이 반드시 필요하다.


// 자식컴포넌트
export default function Home() {
  return (
    // 해당 내용은 부모컴포넌트의 props => {children} 에 삽입된다.
    <>
    
    </>
  );
}
