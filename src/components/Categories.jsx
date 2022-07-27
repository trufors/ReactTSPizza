import React from 'react';

export const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  let arrayCategories = categories.map((category, index) => (
    <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>
      {category}
    </li>
  ));

  return (
    <div className="categories">
      <ul>{arrayCategories}</ul>
    </div>
  );
};
