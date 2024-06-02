import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoadingSpinner() {
    return <FontAwesomeIcon size="xl" icon={faSpinner} className="animate-spin" />;
}

export default LoadingSpinner;