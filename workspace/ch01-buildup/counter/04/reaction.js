const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const element = document.createElement(tag);
    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        element.setAttribute(attrName, value);
      }
    }
    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      }
      element.appendChild(child);
    }
    // 요소 노드 반환
    return element;
  },
};

export default reaction;
