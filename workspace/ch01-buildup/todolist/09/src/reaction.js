let _root;
// root : 앱 전체를 붙일 장소
let _stateValue;
// stateValue : 저장할 데이터 

const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);
    // 속성 추가
    if (props) {
      for (const attrName in props) {
        // 객체의 모든 속성 반복
        const value = props[attrName];
        // props는 HTML 속성들이 들어있는 객체
        if (attrName.toLowerCase().startsWith("on")) {
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
          // onClick 같은 속성이면 클릭 이벤트로 등록
          // 그 외에는 일반 속성으로 붙여줌
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }
    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        // 함수인 경우, 함수를 실행해서 반환된 값을 자식으로 추가
        child = child();
      } 

      if(Array.isArray(child)) {
        child.forEach(c => elem.appendChild(c));
      } else {
        elem.appendChild(child);
      }
    }
    // 요소 노드 반환
    return elem;
  },

  // 루트 노드를 관리하는 객체를 생성해서 반환
  // Reaction.createRoot(document.getElementById('root')).render(App);
  createRoot: (rootNode) => {
    let _appComponent;
    return _root = {
      // 루트 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        _appComponent = _appComponent ?? appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      },
    };
  },

  // 상태값(데이터)을 관리하는 객체를 생성해서 반환
  useState: (initialValue) => {
    // 최초 호출되었을 경우에만 초기값을 지정하고 이후에 다시 호출되는 경우에는 이전 값을 유지한다.
    _stateValue = _stateValue ?? initialValue;
    // ?? : null 병합 연산자 : 왼쪽 값이 null 또는 undefined인 경우 오른쪽 값을 반환한다.

    // 상태값을 수정하는 함수
    function setValue(newValue) {
      const oldValue = _stateValue; // 이전 상태값
      _stateValue = newValue; // 새로운 상태값

      // 상태값이 변경된 경우라면 리렌더링 된다.
      // Object.is(a, b) : a와 b가 동일한지 비교하는 함수
      // 원시형 타입일때는 값만 다르면 false가 되므로 render() 호출됨
      // 객체일때 객체 내부의 속성값이 바뀌었다고 해도 같은 메모리 주소를 가지고 있으면 true가 되므로 render() 호출 안됨
      if (!Object.is(oldValue, newValue)) {
        // 루트 노드의 render 함수를 호출해서 컴포넌트를 다시 렌더링한다.
        _root.render();
      }
    }
    // const [count, setCount] = Reaction.useState(0);
    // 상태값과 상태값을 수정하는 함수를 배열로 반환한다.
    return [_stateValue, setValue];
  },
};
export default reaction;
