import EmployeeCard from "./EmployeeCard";
import { Employee } from "./types";

interface EmployeeListProps {
    employees: Employee[];
}
function EmployeeList({ employees }: EmployeeListProps) {

    return <div>
        <ul className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
            {employees.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </ul>
    </div>
}

export default EmployeeList;