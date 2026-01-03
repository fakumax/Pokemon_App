import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

describe('Card', () => {
    test('renders Card component', () => {
      render(
        <BrowserRouter>
            <Card />
        </BrowserRouter>  
      );
    });
    test('Contains link and img', () => {
        render(
            <BrowserRouter>
                <Card />
            </BrowserRouter>  
          );
        expect(screen.getByRole('link')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    
    })
    // test('Show props properly', () => {
    //     const pokemon = {
    //         key =1,    
    //         id:1,
    //         name: "bulbasaur",
    //         img:"without image",
    //         types:[
    //             {"id": 4,"name": "fire"},{"id": 5,"name": "grass"}
    //             ]
    //     }
    //      const component =
    //     render(
    //         <BrowserRouter>
    //             <Card id={pokemon.id} key={pokemon.key} name={ pokemon.name} img= {pokemon.img} types= {pokemon.types}/>
    //         </BrowserRouter>  
    //       );
    //      expect(component.container).toHaveTextContent('bulbasaur')
    //      expect(component.container).toHaveTextContent('fire')
    //      expect(component.container).toHaveTextContent('grass')
             
    // })
});

