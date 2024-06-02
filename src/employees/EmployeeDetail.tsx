import { Employee } from "./types";

interface EmployeeDetailProps {
    employee: Employee;
}

function EmployeeDetail({ employee }: EmployeeDetailProps) {
    return <div className="bg-slate-300 p-2 w-full rounded shadow grid grid-cols-1 gap-4">
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
    </div>
}

export default EmployeeDetail;