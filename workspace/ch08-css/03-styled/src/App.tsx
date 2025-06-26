import Button from "@/components/ui/Button";

function App(){
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button type="button">그냥 버튼</Button>
      <Button type="button" variant="cancel"bg="blue" color="white">취소 버튼</Button>
      <Button type="submit" variant="confirm"bg="yellow" color="black">submit 버튼</Button>

    </>
  );
}

export default App;