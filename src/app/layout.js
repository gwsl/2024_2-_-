
// layout.js는 선택이다.(RootLayout 제외)
// layout 이 필요없는 간단한 페이지에서는 생략 가능

// 페이지 전체의 공통 구조를 렌더링 할 때 사용

// 부모 컴포넌트
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{textAlign: "center"}}>
        <header style={{marginTop:"50pxs"}}>공통 헤더</header>
        {/* 자식컴포넌트가 렌더링 된다. */}
        {/* {children} */}
        {/* <footer style={{marginTop : "50px"}}>공통 푸터</footer> */}
        <h1>WEB</h1>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>ItemList(외부서버)</li>
          <li>Guestbook(Spring 서버)</li>
        </ol>
        {children}
        <ul>
          <li>Create</li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
