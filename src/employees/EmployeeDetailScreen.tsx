import { useNavigate, useParams } from "react-router-dom";
import ScreenTitle from "../components/ScreenTitle";
import { useGetEmployeeQuery } from "../services/employeeManagerApi";
import EmployeeDetail from "./EmployeeDetail";
import LoadingSpinner from "../components/LoadingSpinner";

function EmployeeDetailScreen() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetEmployeeQuery(id!, { skip: !id });

    if (!id) {
        navigate("/employees");
    }

    return (
        <div>
            <ScreenTitle title={"Employee Detail"} />
            <div className="flex flex-col items-center mt-4">
                {isLoading
                    ? <LoadingSpinner />
                    : isError
                        ? <p>Error</p>
                        : <EmployeeDetail employee={data!} />}
            </div>
        </div>
    );
}

export default EmployeeDetailScreen;