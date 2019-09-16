import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);


        this.onChange = this.onChange.bind(this);

        this.state = {
            //  champId: props.match.params.id ,
            people: [],
            name: '',
            email: '',
            telephone:'',
            isModified:false
        }

    }

    onChange= e =>{

        this.setState({

            [e.target.name]:e.target.value

        });
        



    };

    componentDidMount(){
       
        axios.get("http://localhost:8000/get_contact/" + this.props.id)
        
        .then(res=>this.setState({
            ...res.data
           
            
        }));


    }

    onEditContact =()=>{

        axios.put("http://localhost:8000/modify_contact/"+this.props.id,{
            name:this.state.name,
            email:this.state.email,
            telephone:this.state.telephone
        });
        

       
            
        this.setState({
            isModified:true,
            
        });


    };

    onChangeName(n) {
        this.setState({
            name: n.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeTel(t) {
        this.setState({
            telephone: t.target.value
        });
    }
    render() {
       
        return (
            
            this.state.isModified ? <Redirect to="/index"/>:
            <div style={{marginTop: 50}}>
                <h3>Edit Contact</h3>
                <div className="form-group">
                        <label>  Name:  </label>
                        <input type="text" className="form-control"
                        // value={this.state.name}
                         onChange={this.onChangeName}
                        
                        />
                    </div>

                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" className="form-control"
                        //   value={this.state.email}
                        onChange={this.onChangeEmail}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone : </label>
                        <input type="text" className="form-control"
                        // value={this.state.telephone}
                        onChange={this.onChangeTel}
                        
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Contact" className="btn btn-primary"
                        onClick={this.onEditContact}
                        
                        />
                    </div>



            </div>
        );
    }
}

export default EditContact;