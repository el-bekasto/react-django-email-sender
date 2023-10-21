import List from './List'
import {Component} from "react";
import AddForm from "./AddForm";
import './style.css'
import DRFApi from "../../drf";

export default class Receivers extends Component {
    constructor(parent) {
        super(parent);
        this.state = {
            page: 'list',
            receivers: this.props.parent.drf.receivers
        }
        this.drf = this.props.parent.drf;
        this.drf.getReceivers();
        this.changePage = this.changePage.bind(this);
        this.addReceiver = this.addReceiver.bind(this);
    }
    addReceiver (name, address) {
        this.props.parent.drf.addReceiver(name, address);
        this.setState({receivers: this.props.parent.drf.receivers})
        this.changePage('list');
    }
    changePage (page) {
        this.setState({page: page})
    }
    getComponent () {
        if (this.state.page === 'list') {
            return <List parent={this}/>
        } else if (this.state.page === 'form') {
            return <AddForm parent={this}/>
        }
    }

    render () {
        return (
            <div className={"receivers"}>
                {this.getComponent()}
            </div>
        )
    }
}