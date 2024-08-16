import React from 'react'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import TablaPresupuesto from '../components/TablaPresupuesto';
import { ContextProvider } from '../context/Context';

function Presupuesto() {
    const context = useContext(ContextProvider);

    // const { budgets, setBudgets, user, setUser, category, setCategory, amount, setAmount, cost, setCost } = context;
    const [budgets, setBudgets] = useState([]);
    const [user, setUser] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [cost, setCost] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:27017/api/datos')
            .then(response => {
                console.log(response.data); // Trabaja con los datos aquí
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBudget = {
            id: budgets.length + 1,
            user: user,
            category: category,
            amount: parseFloat(amount),
        };

        setBudgets([...budgets, newBudget]);
        setUser("");
        setCategory("");
        setAmount("");
        setCost(0);
    };

    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-2'>

                {/* Agregar presupuesto */}
                <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Agregar Presupuestos</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                                Usuario
                            </label>
                            <input
                                type="text"
                                id="user"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="Ingresa el nombre del usuario"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                Categoría
                            </label>
                            <input
                                type="text"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="Ingresa la categoría"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                Monto del Presupuesto
                            </label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="Ingresa el monto"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-300"
                        >
                            Guardar Presupuesto
                        </button>
                    </form>
                </div>

                {/* Editar presupuesto */}
                <div>
                    <TablaPresupuesto data={budgets} />
                </div>
            </div>
        </div>
    );
}

export default Presupuesto