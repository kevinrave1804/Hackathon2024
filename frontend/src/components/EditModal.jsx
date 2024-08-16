import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function EditModal({ open, setOpen }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        {/* Titulo */}
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Editar presupuesto
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Aqui puedes editar los campos que consideres necesarios.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Formulario Edicion */}
                        <div>
                            <section className="bg-gray-100">
                                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                        <form action="#" className="space-y-4">
                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                                                    Usuario
                                                </label>
                                                <input
                                                    type="text"
                                                    id="user"
                                                    // value={user}
                                                    // onChange={(e) => setUser(e.target.value)}
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
                                                    // value={category}
                                                    // onChange={(e) => setCategory(e.target.value)}
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
                                                    // value={amount}
                                                    // onChange={(e) => setAmount(e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                                    placeholder="Ingresa el monto"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                                                    Gastos
                                                </label>
                                                <input
                                                    type="text"
                                                    id="user"
                                                    // value={user}
                                                    // onChange={(e) => setUser(e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                                                    placeholder="Ingresa el nombre del usuario"
                                                    required
                                                />
                                            </div>

                                            {/* Botones */}

                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                <button
                                                    type="submit"
                                                    onClick={() => setOpen(false)}
                                                    className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 sm:ml-3 sm:w-auto"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    type="button"
                                                    data-autofocus
                                                    onClick={() => setOpen(false)}
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Botones */}

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
