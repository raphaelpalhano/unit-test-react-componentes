import { Dropdown } from '../components/dropdown/Dropdown'
import {render, screen, userEvent, fireEvent} from './libs/base-libs'

/**
 * @Funcionalidades
 * 1. Dropdown vai começar fechado
 * 2. Exibir as opções de produto ao ser clicado
 * 3. Fechar o dropdown ao selecionar o item, exibir o valor selecionado
 * */ 

describe('Dropdown de listas de camas', () => {
    
    const title = 'Camas';
    const options = ['Sofa cama', 'Cama com mola', 'Cama de solteiro', 'Cama de Casal']

    beforeEach(() => {
        render(
            <Dropdown title= {title}
            options={options}
            onSelect={() => {}}
            />
            );
    })

    test('Validando que o dropdown de lista de camas inicializa fechado',  () => {
       
        expect(screen.queryByText(options[0])).not.toBeInTheDocument(); 
    });

    test('Mostrar as opções de cama ao clicar no dropdown', () => {
        
        userEvent.click( screen.getByText('Camas'));
        expect(screen.getByText(options[0])).toBeInTheDocument(); 

    })
});