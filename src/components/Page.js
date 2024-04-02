import {useNavigate} from "react-router-dom";

function Page() {

    const navigate = useNavigate();
    const backToApp = () => {
        navigate('/')
    }

    return (
        <div>
            <h3>this is page</h3>
            <button onClick={backToApp}>back to app</button>
        </div>
    )
}

export default Page;