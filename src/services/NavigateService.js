import React from "react";
import {useNavigate} from "react-router-dom";

function useNavigatePage() {
    const navigate = useNavigate();

    const goToPage = () => {
        navigate('/page')
        console.log("test");
    };
    return goToPage;

}
export default useNavigatePage;