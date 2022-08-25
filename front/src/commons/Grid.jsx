import * as React from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from './Card';

const Grid = ({games}) => {
  return (
    <>
        {games.map((game, i)=>{
            return  <Link to={`/product/${game.name}`} style={{ textDecoration: 'none' }} id='card' key={i}>
                      <ActionAreaCard game={game} key={i}/>
                    </Link>
        })}
    </>
  )
}

export default Grid