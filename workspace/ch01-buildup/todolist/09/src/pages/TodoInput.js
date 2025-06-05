import Reaction from "../reaction.js"
  function TodoInput(props){
  // 추가 버튼 클릭 이벤트 핸들러
    const handleAdd = () => {
      console.log('추가 버튼 클릭');
      let inputElem = document.querySelector('.todoinput > input');   
      if(inputElem.value.trim() !== ''){
        props.addItem(inputElem.value.trim());
        inputElem.value = '';

        setTimeout(() => {
          const inputAgain = inputElem = document.querySelector('.todoinput > input'); 
          inputAgain.focus();
        })
      }

      inputElem.focus();
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (e) => {
    console.log('keydown', e);
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };
  return(
    Reaction.createElement('div', { class: 'todoinput' },
      Reaction.createElement('input', { 
        type: 'text', 
        onkeydown: (e) => handleAddKeydown(e)
      }),
      Reaction.createElement('button', { 
        type: 'button', 
        onclick: handleAdd
      }, '추가')
    )
  )
}

export default TodoInput;