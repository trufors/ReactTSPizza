import React from 'react';
import Skeleton from '../components/Skeleton/Skeleton';
import * as axios from 'axios';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import { useSelector } from 'react-redux';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(false);
  let categoryId = useSelector((state) => state.filterReducer.categoryId);
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const list = useSelector((state) => state.filterReducer.list);
  const listName = useSelector((state) => state.filterReducer.listName);

  const sortArr = [
    { name: 'популярности', filter: 'rating' },
    { name: 'цене', filter: 'price' },
    { name: 'алфавиту', filter: 'title' },
  ];

  React.useEffect(() => {
    setisLoading(true);
    axios
      .get(`https://62e14cb7e8ad6b66d846be2f.mockapi.io/items?${category}&sortBy=${list}`)
      .then((response) => {
        setItems(response.data);
        setisLoading(false);
      });
  }, [category, list, listName]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort sortArr={sortArr} listName={listName} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? <Skeleton /> : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
export default Home;
