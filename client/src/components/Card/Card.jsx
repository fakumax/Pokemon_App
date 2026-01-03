import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  return (
    <Link to={`/pokemon/${props.id}`} className='card-link'>
      <div className='card'>
        <img className='card__img' src={props.img} alt='' />
        <div className='card-container'>
          <div className='card__header-title'>
            <span>{props.name}</span>
          </div>
          <span className='card__header-meta'>
            {props.types?.map((v) => v.name).join(' - ')}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
