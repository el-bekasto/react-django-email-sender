import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

export default function SendEmailForm () {
    const [inputSubject, setSubject] = useState('');
    const [inputBody, setBody] = useState('')

    function changeSubject (event) {
        setSubject(event.target.value)
    }
    function changeBody (event) {
        setBody(event.target.value)
    }

    function sendButton () {
        const opt = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    'subject': inputSubject,
                    'body': inputBody
                }
            )
        }
        fetch('http://127.0.0.1:8000/api/v1/send', opt)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <div className={'send-form'}>
            <div className={"text-center"}>
                <Form>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder={"About last weekend..."} onChange={changeSubject}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as={'textarea'} rows={7} placeholder={'Dear John Doe...'} onChange={changeBody}/>
                    </Form.Group>
                </Form>
                <Button variant={"primary"} onClick={sendButton}>Send</Button>
            </div>
        </div>
    )
}