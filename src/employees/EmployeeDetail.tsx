import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Employee } from "./types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteEmployeeMutation } from "../services/employeeManagerApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface EmployeeDetailProps {
    employee: Employee;
}

function EmployeeDetail({ employee }: EmployeeDetailProps) {
    const [deleteEmployee, result] = useDeleteEmployeeMutation();
    const navigate = useNavigate();

    const handleDelete = () => {
        console.log(`Deleting employee with ID ${employee.id}`);
        deleteEmployee(employee.id);
    }

    useEffect(() => {
        if (result.isSuccess) {
            console.log("Employee deleted successfully");
            navigate("/employees");
        }
    }, [navigate, result]);

    return <div className="bg-slate-300 p-2 w-full rounded shadow grid grid-cols-1 gap-4 relative">
        <div>
            <div className="font-bold">ID</div>
            <div>
                {employee.id}
            </div>
        </div>
        <div>
            <div className="font-bold">First Name</div>
            <div>
                {employee.firstName}
            </div>
        </div>
        <div>
            <div className="font-bold">Last Name</div>
            <div>
                {employee.lastName}
            </div>
        </div>
        <FontAwesomeIcon onClick={handleDelete} icon={faTrash} className="absolute right-0 top-0 mr-4 mt-4 text-red-500 cursor-pointer" size="lg" />
    </div>
}

export default EmployeeDetail;