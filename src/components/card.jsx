import { useState } from 'react';
import cat from '../assets/imgs/Photo.png';
const Card = ({
  isEmpty,
  manufacturer,
  name,
  definition,
  num,
  unit,
  description,
  activDesc,
  buyDesc,
}) => {
  //active empty
  const [isChosen, setIsChosen] = useState(false);
  const [joke, setJoke] = useState(false);
  console.log(buyDesc);
  return (
    <div
      className="cards__container"
      onMouseOver={() => {
        setJoke(true);
      }}
      onMouseOut={() => {
        setJoke(false);
      }}>
      <div
        className={
          isEmpty
            ? 'cards__card empty '
            : `cards__card ${isChosen ? 'cards__card active ' : 'cards__card'}`
        }
        onClick={() => {
          if (!isEmpty) setIsChosen(!isChosen);
        }}>
        <h2 className={isChosen && joke ? 'cards__manufacturer active' : `cards__manufacturer`}>
          {isChosen && joke ? 'Котэ не одобряет?' : `${manufacturer}`}
        </h2>
        <h3 className="cards__name">{name}</h3>
        <div className="cards__definition">{definition}</div>
        <ul className="cards__description">
          {description.map((v, i) => (
            <li key={i} className="cards__descItem">
              {v}
            </li>
          ))}
        </ul>
        <img alt="pet" className="cards__img" src={cat} />
        <h3 className="cards__weigth">
          <div className="cards__num">{num} </div>
          <div className="cards__unit">{unit}</div>
        </h3>
      </div>
      {isEmpty ? (
        <div className="cards__justBuy">{buyDesc}</div>
      ) : isChosen ? (
        <div className="cards__justBuy">{activDesc}</div>
      ) : (
        <div className="cards__justBuy">
          Чего сидишь? Порадуй котэ,
          <span
            className={
              isEmpty
                ? 'cards__buy empty '
                : `cards__buy ${isChosen ? 'cards__buy active ' : 'cards__buy'}`
            }
            onClick={() => {
              setIsChosen(!isChosen);
            }}>
            купи.
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;
