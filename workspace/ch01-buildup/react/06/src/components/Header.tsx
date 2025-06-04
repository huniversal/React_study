  function Header(){
    return (
      <header>
        <h1>05 Todo List - React 기능 추가 gnswlw</h1>
        <p>파일 경로: <span id="filepath">{ `ch${document.URL.split('/ch')[1]}index.html` }</span></p>
      </header>
    );
  }
  export default Header;