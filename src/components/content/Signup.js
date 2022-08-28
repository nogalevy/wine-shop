import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { saveAll } from "../../actions/userData";
import {changeScreen} from '../../actions/screen';

export default function Signup(props) {
    const [step, setStep] = useState(1);
    const [confirm, setConfirm] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    function displayFields() {
        switch (step) {
            case 1:
                return <Step1
                    firstName={firstName} setFirstName={setFirstName}
                    lastName={lastName} setLastName={setLastName} />
            case 2:
                return <Step2
                    phone={phone} setPhone={setPhone}
                    address={address} setAddress={setAddress} />
            case 3:
                return <Step3
                    firstName={firstName} lastName={lastName}
                    phone={phone} address={address}
                    confirm={confirm} setConfirm={setConfirm}
                />
            default:
                return;
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
        if (!Object.values(userData).every(value => value)) {
            alert("missing some field");
        }
        dispatch(saveAll(userData));
        dispatch(changeScreen('shopping'))
    }

    return (
        <div className="signup-con">
            <h1>Sign up</h1>
            {displayFields()}
            {step > 1 && <button onClick={() => setStep(step - 1)}>back</button>}
            {step < 3 && <button onClick={() => setStep(step + 1)}>next</button>}
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