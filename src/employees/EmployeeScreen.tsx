import EmployeeCard from "./EmployeeCard";

function EmployeeScreen() {
    return (
        <div className="flex justify-center w-6/12  m-auto flex-col">
            <h1 className="mt-4 font-bold hover:skew-x-12 hover:translate-x-3
             transition-all text-2xl mx-auto hover:-rotate-6">
                Employee Screen
            </h1>
            <br />
            <div className="flex flex-col items-center">
                <EmployeeCard />
            </div>
        </div>
    );
}

export default EmployeeScreen;