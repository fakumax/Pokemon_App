import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  return (
    <div className='card'>
      <img className='card__img' src={props.img} alt='' />
      <div className='card-container'>
        <Link className='card__header-title' to={`/pokemon/${props.id}`}>
          <span>{props.name}</span>
        </Link>
        <span className='card__header-meta'>
          {props.types?.map((v) => v.name).join(' - ')}
        </span>
      </div>
    </div>
  );
};

export default Card;
