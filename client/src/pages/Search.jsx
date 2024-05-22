import React from 'react'

export default function Search() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form className="flex flex-col gap-8">
                    <div className="flex items-center gap-2 ">
                        <label className='whitespace-nowrap font-semibold'>Término de Búsqueda</label>
                        <input type="text"
                            id='searchTerm'
                            placeholder='Buscar...'
                            className='border rounded-lg p-3 w-full'
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Tipo:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="all" className="w-5" />
                            <span>Alquiler y Venta</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="rent" className="w-5" />
                            <span>Alquiler</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="sale" className="w-5" />
                            <span>Venta</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="offer" className="w-5" />
                            <span>Oferta</span>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold'>Comodidades:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="parking" className="w-5" />
                            <span>Estacionamiento</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="furnished" className="w-5" />
                            <span>Amueblado</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className='font-semibold'>Clasificar:</label>
                        <select id="sort_order"
                            className="border rounded-lg p-3"
                        >
                            <option>Precio de mayor a menor</option>
                            <option>Precio de menor a mayor</option>
                            <option>El último</option>
                            <option>Más antiguo</option>
                        </select>
                    </div>
                    <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">Buscar</button>
                </form>
            </div>
            <div className="">
                <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5'>Listado de Resultados:</h1>
            </div>
        </div>
    )
}
