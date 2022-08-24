import * as React from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from './Card';

const Grid = ({games}) => {
  return (
    <div id='grid'>
        {games.map((game, i)=>{
            return  <Link to={`/product/${game.name}`} style={{ textDecoration: 'none' }} id='card' key={i}>
                      <ActionAreaCard game={game} key={i}/>
                    </Link>
        })}
    </div>
  )
}

export default Grid