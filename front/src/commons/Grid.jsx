import * as React from 'react';
import { Link } from 'react-router-dom';
import ActionAreaCard from './Card';

const Grid = ({games}) => {
  return (
    <>
        {games.map((game, i)=>{
            return  <div key={i}><Link to={`/product/${game.id}`} style={{ textDecoration: 'none' }} id='link'  key={i}>
                      <ActionAreaCard game={game} key={i}/>
                    </Link></div>
        })}
    </>
  )
}

export default Grid