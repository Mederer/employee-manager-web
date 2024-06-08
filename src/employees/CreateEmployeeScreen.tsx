import ScreenTitle from "../components/ScreenTitle";
import CreateEmployeeForm from "./CreateEmployeeForm";

function CreateEmployeeScreen() {
    return <div>
        <ScreenTitle title={"Create Employee"} />
        <CreateEmployeeForm className="mt-8" />
    </div>
}

export default CreateEmployeeScreen;