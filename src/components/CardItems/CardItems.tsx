import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import { ICardItem, ICardItems } from './CardItems.model';
import './CardItems.scss';

export const CardItems = (props: ICardItems) => {
  const [showingItems, setshowingItems] = useState<ICardItem[]>([]);
  
  useEffect(() => {
    setshowingItems(props.items);
  }, [props])
  
  return (
    <div className="cards">
      {showingItems.map((cardItem) => (
        <div className="cards--item" key={cardItem.name} data-testid='card'>
            <Card name={cardItem.name} url={cardItem.url} image={cardItem.image}/>
        </div>
      ))}
    </div>
  );
}
