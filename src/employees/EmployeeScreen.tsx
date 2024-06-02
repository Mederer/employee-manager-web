import ScreenTitle from "../components/ScreenTitle";
import { useGetEmployeesQuery } from "../services/employeeManagerApi";
import EmployeeList from "./EmployeeList";
import LoadingSpinner from "../components/LoadingSpinner";

function EmployeeScreen() {
    const { data, isError, isLoading } = useGetEmployeesQuery();

    return (
        <div className="flex justify-center w-full m-auto flex-col">
            <ScreenTitle title={"Employees"} />
            <div className="flex flex-col items-center mt-4">
                {isLoading
                    ? <LoadingSpinner />
                    : isError
                        ? <p>Error</p>
                        : <EmployeeList employees={data || []} />}
            </div>
        </div>
    );
}

export default EmployeeScreen;