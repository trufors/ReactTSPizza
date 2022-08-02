import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/reducers/filterSlice';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const dispatch = useDispatch();
  const onClickCategory = (index) => {
    setActiveIndex(index);
    dispatch(setCategoryId(index));
    console.log(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  let arrayCategories = categories.map((category, index) => (
    <li
      key={index}
      onClick={() => onClickCategory(index)}
      className={activeIndex === index ? 'active' : ''}>
      {category}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{arrayCategories}</ul>
    </div>
  );
};
export default Categories;
