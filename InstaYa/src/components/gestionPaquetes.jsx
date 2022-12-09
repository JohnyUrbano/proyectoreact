import { useState } from 'react'

function GestionPaquetes() {
  const [count, setCount] = useState(0)

  return (
    <div className="container" id='GestionPaquetes'>

    <p className='titulo'>Gestión de paquetes - Listado de órdenes</p>
        <div className='row'>
            <div className='col'>
                <table className='table'>
                    <thead className='table-primary'>
                        <tr>
                            <th># Servicio</th>
                            <th>Fecha</th>
                            <th>Ciudad de entrega</th>
                            <th>Dirección de entrega</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <a href="/actualizar">1</a></td>
                            <td>22/11/2022</td>
                            <td>Barranquilla</td>
                            <td>Cra 1 #13-45</td>
                            <td>Entregado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <p align="right"><a align="right" href="/crear"><button type="button" class="btn btn-primary">Crear orden</button></a></p>
    </div>
  )
}

export default GestionPaquetes
