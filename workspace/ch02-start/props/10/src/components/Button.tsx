interface ButtonProps {
  children: string; // 버튼 내부 텍스트
  color?: string; // 버튼 배경색
  textColor?: string; // 글자색 
  onClick: (event: React.MouseEvent) => void; // 버튼 클릭 시 실행할 함수
}

function Button ({ children, color, textColor, onClick: handleClick }:ButtonProps) {
  return (
    <button 
      type="button" 
      onClick={ handleClick } 
      style={{ backgroundColor: color, color: textColor }}
      className="rounded-button"
    >{ children }</button>
  );
}

export default Button;