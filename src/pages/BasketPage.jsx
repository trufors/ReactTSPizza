import React from 'react';
import BasketFull from './BasketFull';
import BasketEmpty from './BasketEmpty';
import { useSelector } from 'react-redux';

const BasketPage = () => {
  const item = useSelector((state) => state.backetReducer.items);

  return <>{item.length !== 0 ? <BasketFull item={item} /> : <BasketEmpty />}</>;
};
export default BasketPage;
