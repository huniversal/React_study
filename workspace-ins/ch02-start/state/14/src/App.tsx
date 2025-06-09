import EditAddress from "@components/EditAddress";
import { useState } from "react";

function App() {
  const [ user, setUser ] = useState({
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

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id, event.target.value);

    const address = user.extra.addressBook.find(address => address.id === Number(event.target.id));
    address!.value = event.target.value;
    const newUser = {
      ...user
    };

    setUser(newUser);
  };

  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <p>
        이메일: { user.email }<br/>
        이름: { user.name }<br/>
        전화번호: { user.phone }<br/>
      </p>
      <ul>
        { user.extra?.addressBook?.map(address => <li key={ address.id }>{ address.name }: { address.value }</li>) }
      </ul>

      <p>
        <EditAddress addressBook={ user.extra.addressBook } handleAddressChange={ handleAddressChange } />
      </p>
    </>
  );
}

export default App
