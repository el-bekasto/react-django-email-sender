import SendEmailForm from "./components/SendEmailForm";
import TopMenu from "./components/TopMenu";
import Receivers from "./components/Receivers";
import AboutUs from "./components/AboutUs";
import {Component} from "react";
import DRFApi from "./drf";
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'main'
        }
        this.drf = new DRFApi('http://127.0.0.1:8000/api/v1/')
        this.getComponent = this.getComponent.bind(this)
        this.changePage = this.changePage.bind(this)
    }

    changePage (page) {
        this.setState({page: page})
    }

    getComponent () {
        if (this.state.page === 'main') {
            return <SendEmailForm />
        } else if (this.state.page === 'receivers') {
            return <Receivers parent={this}/>
        } else if (this.state.page === 'aboutus') {
            return <AboutUs />
        }
    }
    render () {
      return (
          <div className="App">
              <TopMenu app={this}/>
              <br></br>
              {this.getComponent()}
          </div>
      );
  }
}

export default App;
