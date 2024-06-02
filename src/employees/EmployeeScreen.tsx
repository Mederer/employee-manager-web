import { useGetEmployeesQuery } from "../services/employeeManagerApi";
import EmployeeList from "./EmployeeList";

function EmployeeScreen() {
    const { data, isError, isLoading } = useGetEmployeesQuery();

    return (
        <div className="flex justify-center w-full m-auto flex-col">
            <h1 className="text-2xl font-bold mb-4">Employees</h1>
            <div className="flex flex-col items-center">
                {isLoading
                    ? <p>Loading...</p>
                    : isError
                        ? <p>Error</p>
                        : <EmployeeList employees={data || []} />}
            </div>
        </div>
    );
}

export default EmployeeScreen;