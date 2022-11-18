import React, { useEffect, useState } from 'react'
import { ICardItem, ICardItems } from './CardItems.model';
import './CardItems.scss';

export const CardItems = (props: ICardItems) => {
  const [showingItems, setshowingItems] = useState<ICardItem[]>([]);
  
  useEffect(() => {
    setshowingItems(props.items);
    console.log(props.items)
  }, [props])
  
  return (
    <div className="cards">
      {showingItems.map((cardItem) => (
        <div className="cards--item" key={cardItem.name} data-testid='card'>
          {cardItem.name}
        </div>
      ))}
    </div>
  );
}
