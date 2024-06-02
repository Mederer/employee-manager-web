import { Employee } from "./types";

interface EmployeeCardProps {
    employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
    return (
        <div className="w-full bg-slate-300 shadow rounded p-2 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <h1 className="my-2 font-semibold">{`${employee.firstName} ${employee.lastName}`}</h1>
            <hr className="border-black mx-1" />
            <p className="my-2">Lorem ipsum dolor</p>
        </div>
    );
}

export default EmployeeCard;