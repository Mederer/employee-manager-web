import { Route, Routes } from "react-router-dom"
import EmployeeScreen from "./employees/EmployeeScreen"
import CreateEmployeeScreen from "./employees/CreateEmployeeScreen"
import Layout from "./components/layout/Layout"
import HomeScreen from "./components/HomeScreen"

function App() {

    return (
        <div className="bg-slate-100 min-h-screen">
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomeScreen />} />
                    <Route path="/employees" element={<EmployeeScreen />} />
                    <Route path="/employees/create" element={<CreateEmployeeScreen />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
