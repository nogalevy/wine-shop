import { useState } from "react";


export default function Signup(props) {
    const [step, setStep] = useState(1);

    function displayFields() {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            default:
                return;
        }
    }

    return (
        <div className="signup-con">
            <h1>Sign up</h1>
            {displayFields()}
            {step > 1 && <button onClick={()=>setStep(step-1)}>back</button>}
            {step < 3 && <button onClick={()=>setStep(step+1)}>next</button>}
        </div>
    );
}

function Step1() {
    return (
        <div>
            <div>first name</div>
            <div>last name</div>
        </div>
    )
}


function Step2() {
    return (
        < div >
            <div>phone</div>
            <div>address</div>
        </div >
    )
}


function Step3() {
    return (
        <div>
            <div>confirm</div>
            <div>summary</div>
        </div>
    )
}