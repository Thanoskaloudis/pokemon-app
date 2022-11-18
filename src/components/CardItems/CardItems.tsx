import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import { ICardItem, ICardItems } from './CardItems.model';
import './CardItems.scss';

export const CardItems = (props: ICardItems) => {
  const [showingItems, setshowingItems] = useState<ICardItem[]>([]);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    setshowingItems(props.items);
  }, [props])

  const updateQuery = (query: string) => {
    setQuery(query.trim());

    if(query === "") {
      setshowingItems(props.items);
    } else {
      setshowingItems(
        props.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ))
    }
  };
  
  return (
    <div className="cards">
        <div className="cards--top">
          <input
            className="cards--top__search"
            type="text"
            placeholder="Search Pokemon"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
      </div>
      {showingItems.map((cardItem) => (
        <div className="cards--item" key={cardItem.name} data-testid='card'>
            <Card name={cardItem.name} url={cardItem.url} image={cardItem.image}/>
        </div>
      ))}
    </div>
  );
}
