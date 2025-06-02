import Reaction from "../reaction.js"

function Header(){
  return(
    Reaction.createElement('header', null,
      Reaction.createElement('h1', null, 'Todo List - 08 상태(데이터) 변경시 화면 리렌더링 :)'),
      Reaction.createElement('p', null, '파일 경로: ',
        Reaction.createElement('span', { id: 'filepath' }, `ch${location.href.split('/ch')[1]}index.html`)))
  );
}

export default Header;