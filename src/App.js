import { useState } from 'react';
import Card from './components/card';

function App() {
  //сделаем вид, что сдесь лежать карточки с useEffect
  const [cardsFromServ, setCardsFromServ] = useState([
    {
      isEmpty: true,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
    {
      isEmpty: false,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
    {
      isEmpty: false,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
    {
      isEmpty: false,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
    {
      isEmpty: false,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
    {
      isEmpty: false,
      manufacturer: 'Сказочное заморское яство',
      name: 'Нямушка',
      definition: 'с фуа-гра',
      description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
      num: 5,
      unit: 'КГ',
      activDesc: 'Филе из цыплят с трюфелями в бульоне.',
      buyDesc: 'Печалька, с курой закончился.',
    },
  ]);
  return (
    <>
      <body>
        <header>
          <h1 className="header">Ты сегодня покормил кота?</h1>
        </header>
        <div className="cards">
          {cardsFromServ.map((v, i) => (
            <Card
              key={i}
              isEmpty={v.isEmpty}
              manufacturer={v.manufacturer}
              name={v.name}
              definition={v.definition}
              description={v.description}
              num={v.num}
              unit={v.unit}
              activDesc={v.activDesc}
              buyDesc={v.buyDesc}
            />
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
