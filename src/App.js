import { Dropdown } from "./components/dropdown/Dropdown";
import React, { useState } from 'react';

function App() {


  const [selectedProduct, setselectedProduct] = useState(null);  

  return ( 
    <div className="App">
      

    <Dropdown
     title="Camas"
     options={['Sofa cama', 'Cama com mola', 'Cama de solteiro', 'Cama de Casal']}
     onSelect={setselectedProduct}
    />

    {selectedProduct && <div>Produto selecionado: {selectedProduct}</div>}

    </div>
    
  )
}

export default App;
