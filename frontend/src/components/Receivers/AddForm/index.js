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
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={(event) => setName(event.target.value)} placeholder={'John Doe'}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control value={address} onChange={(event) => setAddress(event.target.value)} placeholder={'user@mail.com'}/>
                    </Form.Group>
                </Form>
                <div className={'addformconfirm'}>
                    <Button onClick={addReceiver}>Add</Button>
                </div>
            </div>
        </div>
    )
}