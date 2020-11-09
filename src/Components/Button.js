import { render } from '@testing-library/react';
import React from 'react';
import Poke from './Poke';
import { Link } from '@reach/router';

function Button() {
    return (
        <div className= "pokebutt">
            <button onClick={Link}><Link to = "/poke">Fetch Pokemon</Link></button>
        </div>
    )
}

export default Button

