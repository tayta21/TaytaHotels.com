import React, { Component } from 'react';
import '../login.css';
import '../App.css'
import Header from './header';
import Footer from './footer';
import AdminPage from './adminpage'
import LoginSccreen from './loginscreen';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logedIn: true,
        }
    }
    handleShow = () => {
        this.setState({ logedIn: false })
    }
    handleShowtwo = () => {
        this.setState({ logedIn: true })
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                {this.state.logedIn ?
                    <div style={{ width: '100vw', height: '78vh', display: 'grid', backgroundColor: '#f0e5f6' }}>
                        <LoginSccreen handleShow={this.handleShow} />
                    </div>
                    :
                    <div>
                        <AdminPage handleShowtwo={this.handleShowtwo} />
                    </div>
                }

                <div>

                    <Footer />
                </div>



            </div>
        );
    }

}

export default Login;