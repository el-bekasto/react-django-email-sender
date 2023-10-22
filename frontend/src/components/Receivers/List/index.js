import './style.css'
import {Component, useState} from "react";
import Table from 'react-bootstrap/Table'
import ListTable from "./ListTable";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class List extends Component {
    constructor(parent) {
        super(parent);
        this.state = {
            action: '',
            selected: {
                1: false,
                4: false,
                5: false
            }
        }
        this.check = this.check.bind(this)
        this.addClick = this.addClick.bind(this)
    }
    check (event) {
        let newval = this.state.selected;
        newval[event.target.value] = !newval[event.target.value];
        this.setState({selected: newval})
    }
    addClick () {
        this.props.parent.changePage('form');
    }
    render () {
        return (
            <div className={"list"}>
                <div className={'addreceiver'}>
                    <Button onClick={this.addClick} size={'sm'}>+ Add receiver</Button>
                </div>
                <div className={'listform'}>
                    <Form.Group>
                        <Form.Label>Action:</Form.Label>
                        <Form.Select aria-label={"Action:"}>
                            <option style={{display: "none"}}>--- choose action ---</option>
                            <option value={'delete'}>Delete selected</option>
                            <option value={'disable'}>Disable selected</option>
                        </Form.Select>
                        <Button style={{marginLeft: "10px"}} variant={"secondary"} className={"action-submit"} onClick={() => console.log(this.state.action)}>
                            Submit
                        </Button>
                    </Form.Group>
                    <ListTable receivers={this.props.parent.drf.receivers}></ListTable>
                </div>
            </div>
        )
    }
}