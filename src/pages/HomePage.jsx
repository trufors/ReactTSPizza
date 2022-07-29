import React from 'react';
import Skeleton from '../components/Skeleton';
import * as axios from 'axios';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [status, setStatus] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://62e14cb7e8ad6b66d846be2f.mockapi.io/items').then((response) => {
      setItems(response.data);
      setStatus(false);
    });
  }, []);

  let pizzasArray = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status && <Skeleton />}
        {pizzasArray}
      </div>
    </div>
  );
};
export default Home;
