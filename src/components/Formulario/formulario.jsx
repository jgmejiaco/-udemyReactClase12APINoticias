import React from 'react';
import styles from './formulario.module.css';
import useSelect from '../../Hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sport', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]

    //  Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //  Submit al form, pasar categoría a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
// eslint-disable-next-line
export default Formulario;
