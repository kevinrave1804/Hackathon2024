import React, { useState } from 'react'
import Navbar from './Navbar';

function Transacciones({ transactions }) {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-8  text-white rounded-lg shadow-lg mt-10">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Transacciones</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-800 rounded-lg">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left font-bold">ID Transacción</th>
                                <th className="px-4 py-2 text-left font-bold">ID Usuario</th>
                                <th className="px-4 py-2 text-left font-bold">ID Categoría</th>
                                <th className="px-4 py-2 text-left font-bold">ID Gasto</th>
                                <th className="px-4 py-2 text-left font-bold">Monto Gasto</th>
                                <th className="px-4 py-2 text-left font-bold">ID Presupuesto</th>
                                <th className="px-4 py-2 text-left font-bold">Monto Presupuesto</th>
                                <th className="px-4 py-2 text-left font-bold">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.idTransaction} className="border-b border-gray-700 hover:bg-gray-700 transition duration-300">
                                    <td className="px-4 py-2">{transaction.idTransaction}</td>
                                    <td className="px-4 py-2">{transaction.userId}</td>
                                    <td className="px-4 py-2">{transaction.categoryId}</td>
                                    <td className="px-4 py-2">{transaction.expenseId}</td>
                                    <td className="px-4 py-2">${transaction.expenseAmount.toFixed(2)}</td>
                                    <td className="px-4 py-2">{transaction.budgetId}</td>
                                    <td className="px-4 py-2">${transaction.budgetAmount.toFixed(2)}</td>
                                    <td className="px-4 py-2">{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Transacciones