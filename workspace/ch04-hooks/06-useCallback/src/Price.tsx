import React from 'react';

interface PriceProps {
  data: {
    price: number;
    shippingFees: number;
    quantity: number;
    buyQuantity: number;
  };
  quantity: number;
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Price = ({ data, quantity, handleQuantityChange }: PriceProps) => {
  return (
    <div>
      <h2>수량 선택</h2>
      가격: {data.price.toLocaleString()}원<br />
      수량: <input type="number" min="1" max={data.quantity - data.buyQuantity} 
              value={quantity} onChange={handleQuantityChange} />
      (배송비는 5개당 {data.shippingFees.toLocaleString()}원씩 추가됩니다.)<br />
      상품 금액: {(data.price * quantity).toLocaleString()}원
    </div>
  );
};

export default Price;