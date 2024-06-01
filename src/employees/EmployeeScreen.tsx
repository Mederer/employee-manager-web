import EmployeeCard from "./EmployeeCard";

function EmployeeScreen() {
    return (
        <div className="flex justify-center w-full m-auto flex-col">
            <br />
            <div className="flex flex-col items-center">
                <EmployeeCard />
            </div>
        </div>
    );
}

export default EmployeeScreen;