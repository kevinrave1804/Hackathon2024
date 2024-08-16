import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Presupuesto from './pages/Presupuesto'
import Transacciones from './pages/Transacciones'

const AppRoutes = () => {
  const sampleTransactions = [
    {
      idTransaction: 1,
      userId: "USR001",
      categoryId: "CAT001",
      expenseId: "EXP001",
      expenseAmount: 250.75,
      budgetId: "BUD001",
      budgetAmount: 1000.00,
      date: "2024-08-01",
    },
    {
      idTransaction: 2,
      userId: "USR002",
      categoryId: "CAT002",
      expenseId: "EXP002",
      expenseAmount: 500.00,
      budgetId: "BUD002",
      budgetAmount: 2000.00,
      date: "2024-08-02",
    },
    {
      idTransaction: 3,
      userId: "USR003",
      categoryId: "CAT003",
      expenseId: "EXP003",
      expenseAmount: 125.50,
      budgetId: "BUD003",
      budgetAmount: 1500.00,
      date: "2024-08-03",
    },
    {
      idTransaction: 4,
      userId: "USR004",
      categoryId: "CAT004",
      expenseId: "EXP004",
      expenseAmount: 75.00,
      budgetId: "BUD004",
      budgetAmount: 500.00,
      date: "2024-08-04",
    },
    {
      idTransaction: 5,
      userId: "USR005",
      categoryId: "CAT005",
      expenseId: "EXP005",
      expenseAmount: 300.00,
      budgetId: "BUD005",
      budgetAmount: 2500.00,
      date: "2024-08-05",
    },
  ];


  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/presupuesto', element: <Presupuesto /> },
    { path: '/transacciones', element: <Transacciones transactions={sampleTransactions} /> },
    { path: '/login', element: <Login /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
