import { Route, Routes } from "react-router-dom"
import EmployeeScreen from "./employees/EmployeeScreen"
import CreateEmployeeScreen from "./employees/CreateEmployeeScreen"

function App() {

    return (
        <div className="bg-slate-100 min-h-screen">
            <Routes>
                <Route path="/" element={<EmployeeScreen />} />
                <Route path="/create" element={<CreateEmployeeScreen />} />
            </Routes>
        </div>
    )
}

export default App
