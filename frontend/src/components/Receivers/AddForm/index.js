import './style.css'
import {useState} from "react";

export default function AddForm ({parent}) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    function addReceiver () {
        if (name !== '' && address !== '') {
            parent.addReceiver(name, address);
        }
    }

    return (
        <div className={"addformblock"}>
            <button onClick={() => parent.changePage('list')} className={"list"}>{'<'} Back to list</button>
            <div className={"addform"}>
                <div className={"inputs"}>
                    <div className={"name"}>
                        <div>Name:</div>
                        <input className={'addform'} name={"nameinput"} value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <br></br>
                    <div className={"address"}>
                        <div>Address:</div>
                        <input name={"addressinput"} value={address} onChange={(event) => setAddress(event.target.value)}/>
                    </div>
                </div>
                <br></br>
                <button onClick={addReceiver} className={"add"}>Add</button>
            </div>
        </div>
    )
}