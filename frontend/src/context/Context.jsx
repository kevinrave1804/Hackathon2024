import { createContext } from 'react'

export const ContextProvider = createContext();

function Context({ children }) {
    const [budgets, setBudgets] = useState([]);
    const [user, setUser] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [cost, setCost] = useState(0);

    return (
        <ContextProvider.Provider
            value={{
                budgets, setBudgets,
                user, setUser,
                category, setCategory,
                amount, setAmount,
                cost, setCost
            }}
        >
            {children}
        </ContextProvider.Provider>
    )
}

export default Context