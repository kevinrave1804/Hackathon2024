import { useState } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

function TablaPresupuesto({ data }) {
    const [openEditable, setOpenEditable] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)

    return (
        <div className="overflow-x-auto mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gestionar Presupuestos</h2>

            {/* Tabla de gestion */}
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Usuario</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Categoria</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Presupuesto</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gastos</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Editar</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Eliminar</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {data.map(budget => {
                        return (
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{budget.user}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{budget.category}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{budget.amount.toFixed(2)}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{budget.cost}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer">
                                    <PencilIcon
                                        color='blue'
                                        width={20}
                                        onClick={() => {
                                            setOpenEditable(true)
                                        }} />
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700 cursor-pointer">
                                    <TrashIcon
                                        color='red'
                                        width={20}
                                        onClick={() => {
                                            setOpenDelete(true)
                                        }} />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            {/* Modal Editar */}
            <EditModal open={openEditable} setOpen={setOpenEditable} />

            {/* Modal Eliminar */}
            <DeleteModal open={openDelete} setOpen={setOpenDelete} />
        </div>
    )
}

export default TablaPresupuesto