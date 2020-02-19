import React from 'react';
import axios from 'axios';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            postdata: { full_name: '', email: '', phone: '' }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type, value) {
        let postdata = this.state.postdata;
        postdata[type] = value;
        console.log(postdata)
        this.setState({ postdata });
    }

    handleSubmit = async () => {        
        const headers = {
            'Content-Type': 'application/json',
        }
        /*
        let data = {
            full_name: 'Finn',
            email: 'Williams',
            phone: '917415667977'
        };
        */
        //let postdata = JSON.stringify(data);
        fetch('http://localhost:9000/api/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "full_name": 'Finn',
                "email": 'shivankpal@gmail.com',
                "phone":"91741567977"
            }
        });
        /*
        await axios.post('http://localhost:9000/api/add',
            postdata,
            {
                headers: headers
            }
        ).then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
        })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });
            */
    }

    render() {
        return (
            <div className="Tablebox">
                <p className="Label">Contact Us:</p>
                <div className="Formbox">
                    <div className="Formrow">
                        <label>Full Name:</label>
                        <input type="text" name="full_name" value={this.state.full_name} onChange={(event) => this.handleChange('full_name', event.target.value)} />
                    </div>
                    <div className="Formrow">
                        <label>EMail:</label>
                        <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange('email', event.target.value)} />
                    </div>
                    <div className="Formrow">
                        <label>Phone:</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={(event) => this.handleChange('phone', event.target.value)} />
                    </div>
                    <div className="Formrow">
                        <button onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;