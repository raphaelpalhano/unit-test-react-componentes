import { Dropdown } from '../components/dropdown/Dropdown'
import {render, fireEvent, waitFor, screen, userEvent} from './libs/base-libs'

/**
 * @Funcionalidades
 * 1. Dropdown vai começar fechado
 * 2. Exibir as opções de produto ao ser clicado
 * 3. Fechar o dropdown ao selecionar o item, exibir o valor selecionado
 * */ 

describe('Dropdown de listas de camas', () => {
    
    const title = 'Camas';
    const options = ['Sofa cama', 'Cama com mola', 'Cama de solteiro', 'Cama de Casal']

    test('Validando que o dropdown de lista de camas inicializa fechado',  () => {
        render(
        <Dropdown title= {title}
        options={options}
        onSelect={() => {}}
        />
        );

        expect(screen.queryByText('Sofa cama')).not.toBeInTheDocument(); 
    });
});