import './style.css'
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

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
            <div className={'addformbutton'}>
                <Button onClick={() => parent.changePage('list')} size={'sm'}>{'<'} Back to list</Button>
            </div>
            <div className={"text-center"}>
                <div className={'row justify-content-center'}>
                    <div className={'col-2'}>
                        <Form.Label>Name:</Form.Label>
                    </div>
                    <div className={'col-8'}>
                        <Form.Control value={name} onChange={(event) => setName(event.target.value)} placeholder={'John Doe'}/>
                    </div>
                </div>
                <br></br>
                <div className={'row justify-content-center'}>
                    <div className={'col-2'}>
                        <Form.Label>Email address:</Form.Label>
                    </div>
                    <div className={'col-8'}>
                        <Form.Control value={address} onChange={(event) => setAddress(event.target.value)} placeholder={'user@mail.com'}/>
                    </div>
                </div>
                <br></br>
                <div className={'addformconfirm'}>
                    <Button onClick={addReceiver}>Add</Button>
                </div>
            </div>
        </div>
    )
}