import { useEffect, useState } from "react";
import { useCreateEmployeeMutation } from "../services/employeeManagerApi";
import { useNavigate } from "react-router-dom";

interface CreateEmployeeFormProps {
    className?: string;
}

function CreateEmployeeForm({ className }: CreateEmployeeFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [createEmployee, { isSuccess }] = useCreateEmployeeMutation();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(
            `Creating employee with first name ${firstName} and last name ${lastName}`,
        );
        createEmployee({ firstName, lastName });
    };

    useEffect(() => {
        if (isSuccess) {
            console.log("Employee created successfully");
            setFirstName("");
            setLastName("");
            navigate("/employees");
        }
    }, [navigate, isSuccess]);

    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-[1fr_5fr]">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-[1fr_5fr]">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700"
                        >
                            Create Employee
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateEmployeeForm;
