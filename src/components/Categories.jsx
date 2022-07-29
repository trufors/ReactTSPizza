import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
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
