import React, { Component } from 'react';
import axios from 'axios';
class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onAddContact = this.onAddContact.bind(this);

        this.state = {
            name: '',
            email: '',
            telephone:''
        }
    }
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

    onChange=(e)=>{

        this.setState({

            [e.target.name]:e.target.value

        })
        



    }
    

onAddContact=()=>{
    // const url = `http://localhost:8000/get_contact`;
    // console.log(url);
axios.post("http://localhost:8000/new_contact",{

    name:this.state.name,
    email:this.state.email,
    telephone:this.state.telephone

})
 .then(res=>alert("contact add"))
// .then(res=>axios.get("http://localhost:8000/get_contact")
// .then(res=>this.props.updateContactList(res.data))

//)
.catch(err=>alert(err));

}


updateContactList=(value)=>{


    this.setState({

      people:value

    })



  }



    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Contact</h3>
                <form>
                    <div className="form-group">
                        <label>  Name:  </label>
                        <input type="text" className="form-control"
                        value={this.state.name} 
                         onChange={this.onChangeName}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input type="text" className="form-control"
                        value={this.state.email} 
                        onChange={this.onChangeEmail}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone : </label>
                        <input type="text" className="form-control"
                        value={this.state.telephone} 
                        onChange={this.onChangeTel}
                        
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Contact" className="btn btn-primary"
                        onClick={()=>this.onAddContact()}
                        
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Create 