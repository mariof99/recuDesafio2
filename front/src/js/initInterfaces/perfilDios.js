import '../../styles.scss';

import * as bootstrap from 'bootstrap';

import {rellenarTablaCaracteristicas} from "../caracteristicas/caracteristicasComponentes";
import {rellenarModalCaracter√≠sticas} from "../caracteristicas/caracteristicasComponentes";
import {validacion} from '../caracteristicas/validarCaracteristicas';

const resolverEnOrden = async() => {
    await rellenarTablaCaracteristicas();
    await rellenarModalCaracter√≠sticas();
    validacion();
}

resolverEnOrden();
