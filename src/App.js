//  API Noticias (https://newsapi.org/docs/endpoints/top-headlines)
//  http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=API_KEY
import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header/header';
import Formulario from './components/Formulario/formulario';
import ListadoNoticias from './components/ListadoNoticias/listadoNoticias';
// import PropTypes from 'prop-types';

function App() {

  //  Definir la categoría y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=648e4421dce04fa2970e04ed8608dc2a`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
      <Fragment>
        <Header titulo="Buscador de Noticias"/>

        <div className="container white">
          <Formulario guardarCategoria={guardarCategoria} />
          
          <ListadoNoticias noticias={noticias} />
        </div>
      </Fragment>
  );
}

export default App;
