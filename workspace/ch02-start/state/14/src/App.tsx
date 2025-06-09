import EditAddr from "@components/EditAddr"
import { useState } from "react"

function App() {
  const [user, setUser] = useState({
    "_id": 4,
    "email": "u1@market.com",
    "name": "데이지",
    "phone": "01044445555",
    "address": "서울시 강남구 논현동 222",
    "type": "user",
    "createdAt": "2025.05.25 21:08:14",
    "updatedAt": "2025.06.04 09:38:14",
    "extra": {
      "birthday": "11-30",
      "addressBook": [
        {
          "id": 1,
          "name": "회사",
          "value": "서울시 강동구 천호동 123"
        },
        {
          "id": 2,
          "name": "집",
          "value": "서울시 강동구 성내동 234"
        }
      ]
    }
  }); 

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id, e.target.value);

    const address = user.extra.addressBook.find(address => address.id === Number(e.target.id));
    address!.value = e.target.value;
    const newUser = {
      ...user
    };
    setUser(newUser);

  }
  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <p>
        이메일: u1@market.com<br/>
        이름: 무지<br/>
        전화번호: 01022223333<br/>
      </p>
      <ul>
        <li>회사: 서울시 강동구 천호동 123</li>
        <li>집: 서울시 강동구 성내동 234</li>
      </ul>
      <p>
        <EditAddr addressBook={ user.extra.addressBook } handleAddressChange={ handleAddressChange }/>
      </p>
    </>
  )
}

export default App
