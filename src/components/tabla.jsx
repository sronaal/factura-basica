/* eslint-disable jsx-a11y/scope */
export function Tabla({datos,onDelete}) {

    
    return (

        <>

            <div className="tabla">

                <div
                    className="table-responsive">
                    <table className="table table-striped table-hover table-borderless table-primary align-middle">
                        <thead className="table-light">

                            <tr>
                                <th>ID Producto</th>
                                <th>Descripción </th>
                                <th>Valor Unitario</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        {
                            <tbody className="table-group-divider">
                                {
                                    datos.map((datos, i) =>

                                        <tr className="table" key={i}>
                                            <td>{datos.numeroFactura}</td>
                                            <td>{datos.descripcion}</td>
                                            <td>{datos.valorUnitario}</td>
                                            <td>{datos.cantidad}</td>
                                            <td>{datos.valorUnitario*datos.cantidad}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => onDelete(i)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        }
                        <tfoot>

                        </tfoot>
                    </table>
                </div>

            </div>


        </>
    )
}