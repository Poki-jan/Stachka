import React from 'react';
import { Item } from '../../../templates/item';

export function DeliverysItemAll(delivery:any)
{
    var items = [];
    for (let i = 0; i < delivery.length; i++) 
    {
      items.push(Deliverys(delivery[i].img,delivery[i].title,delivery[i].price, delivery[i].unit, delivery[i].id))
    }
    return  items
}

export function Deliverys(img:any, name:any, price:any, unit:any, id:any) { 
    var deliverysItem = [];
    for (let index = 0; index < 4; index++) {
      deliverysItem.push(<Item key={deliverysItem.toString()} unit={unit} image={img} name={name} price={price} id={id}/>)
    }
    return deliverysItem;
  }