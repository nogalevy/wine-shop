import { useState } from "react";
import { useDispatch } from 'react-redux';
import { saveAll } from "../../actions/userData";
import { changeScreen } from '../../actions/screen';

const INPUT_TYPE = {
    FIRST: 'firstName',
    LAST: 'lastName',
    PHONE: 'phone',
    ADDRESS: 'address'
}

export default function Signup(props) {
    const [step, setStep] = useState(1);
    const [confirm, setConfirm] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();

    function validate(type, val) {
        switch (type) {
            case INPUT_TYPE.FIRST:
            case INPUT_TYPE.LAST:
                {
                    if (/^[a-zA-Z]+$/.test(val) && val.length > 1)
                        return true;
                    return false;
                }
            case INPUT_TYPE.PHONE:
                {
                    if (/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/.test(val))
                        return true;
                    return false;
                }
            case INPUT_TYPE.ADDRESS:
                {
                    if (val.length > 2)
                    return true;
                return false;
                }
            default:
                return true;
        }
    }

    function save() {
        let userData = {
            firstName,
            lastName,
            phone,
            address,
            signin: true
        }
        if (!Object.values(userData).every(value => value) || !confirm) {
            alert("missing some field");
        }
        else {
            dispatch(saveAll(userData));
            dispatch(changeScreen('shopping'));
        }
    }

    function handleNext() {
        switch (step) {
            case 1:
                if (!validate(INPUT_TYPE.FIRST, firstName) || !validate(INPUT_TYPE.LAST, lastName)) {
                    alert("one of the field is not valid")
                    return;
                }
                break
            case 2:
                if (!validate(INPUT_TYPE.PHONE, phone) || !validate(INPUT_TYPE.ADDRESS, address)) {
                    alert("one of the field is not valid");
                    return;
                }
                break
            default:
                break;
        }
        setStep(step + 1)
    }

    function displayFields() {
        switch (step) {
            case 1:
                return <Step1 firstName={firstName} setFirstName={setFirstName}
                    lastName={lastName} setLastName={setLastName} />
            case 2:
                return <Step2 phone={phone} setPhone={setPhone}
                    address={address} setAddress={setAddress} />
            case 3:
                return <Step3 firstName={firstName} lastName={lastName}
                    phone={phone} address={address}
                    confirm={confirm} setConfirm={setConfirm}
                />
            default:
                return;
        }
    }

    return (
        <div className="signup-con">
            <h1>Sign up</h1>
            {displayFields()}
            {step > 1 && <button onClick={() => setStep(step - 1)}>back</button>}
            {step < 3 && <button onClick={() => handleNext()}>next</button>}
            {step == 3 && <button onClick={save}>save</button>}
        </div>
    );
}

function Step1({ firstName, setFirstName, lastName, setLastName }) {
    return (
        <div>
            <div>
                <p>First name:</p>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="First name"></input>
            </div>
            <div>
                <p>Last name:</p>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Last name"></input>
            </div>
        </div>
    )
}

function Step2({ phone, setPhone, address, setAddress }) {
    return (
        <div>
            <div>
                <p>Phone:</p>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone"></input>
            </div>
            <div>
                <p>Address:</p>
                <input onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Address"></input>
            </div>
        </div >
    )
}

function Step3(props) {
    return (
        <div>
            <div>
                <h4>your details:</h4>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Phone: {props.phone}</p>
                <p>Address: {props.address}</p>
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={props.confirm}
                    onChange={() => props.setConfirm(!props.confirm)}
                />
                Confirm
            </label>
        </div>
    )
}