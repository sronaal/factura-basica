import { useForm } from "react-hook-form";
import { Tabla } from "./tabla";
import { useState } from "react";
import { Factura } from "./factura";
import '../App.css'



export function Formulario() {

   
    const [tabla, setTabla] = useState([]);
    


    let { register, handleSubmit} = useForm();

    const onSubmit = (data, e) => {


        
        setTabla([...tabla, data]);
        
    };

    const handleDelete = (index) => {
        const newTabla = [...tabla];
        newTabla.splice(index, 1);
        setTabla(newTabla);
    };




    return (
        <div className="caja container p-4 ">
            <div className="card">
                <div className="card-header text-center">
                    <h2>Formulario</h2>
                </div>
                <div className="card-body">
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-6 form-group">
                            <label htmlFor="numeroFactura">Numero Factura</label>
                            <input
                                {...register("numeroFactura")}
                                className="form-control"
                                type="text"
                                placeholder="Ingrese el numero de la factura" />
                        </div>

                        <div className="col-6 form-group">
                            <label htmlFor="nombreCliente">Nombre cliente</label>
                            <input
                                {...register("nombreCliente")}
                                className="form-control"
                                type="text"
                                placeholder="Ingrese el nombre del cliente" />
                        </div>

                        <div className="col-6 form-group">
                            <label htmlFor="Cedula">Cedula</label>
                            <input
                                {...register("Cedula")}
                                className="form-control"
                                type="number"
                                placeholder="Numero cedula" />
                        </div>

                        <div className="col-6 form-group">
                            <label htmlFor="telefono">Telefono</label>
                            <input
                                {...register("telefono")}
                                className="form-control"
                                type="tel"
                                placeholder="Telefono" />
                        </div>

                        <div className="col-12 form-group">
                            <input
                                {...register("correo")}
                                className="form-control"
                                type="email"
                                placeholder="correo" />
                        </div>

                        <div className="col-6 form-group">
                            <input
                                {...register("idProducto")}
                                className="form-control"
                                type="number"
                                placeholder="ID Producto" />
                        </div>

                        <div className="col-6 form-group">
                            <input
                                {...register("descripcion")}
                                className="form-control"
                                type="text"
                                placeholder="Descripción" />
                        </div>

                        <div className="col-6 form-group">
                            <input
                                {...register("valorUnitario")}
                                className="form-control"
                                type="number"
                                placeholder="Valor unitario" />
                        </div>

                        <div className="col-6 form-group">
                            <input
                                {...register("cantidad")}
                                className="form-control"
                                type="number"
                                placeholder="Cantidad" />
                        </div>

                        <button  className="btn btn-success btn-block">Agregar Producto</button>
                    </form>
                </div>

                <br />
                <br />
                <Tabla  datos={tabla} onDelete={handleDelete}/>
                <Factura factura={tabla}/>
                 <br/>
            </div>
           
        </div>
    );
}
