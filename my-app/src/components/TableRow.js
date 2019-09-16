import React, { Component } from 'react';
import EditContact from './EditContact';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      isModified:false
     
    
    };
  }
  deleteContact =()=>{


    axios.delete("http://localhost:8000/delete_contact/" + this.props.obj._id)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

            this.setState({
              isModified:true,
              
          });




  }
  
  render() {
    return (
      this.state.isModified ? <Redirect to="/index"/>:
        <tr>
          <td>
            {this.props.obj._id}
           </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.telephone}
          </td>
          <div className="form-group">
          
   


             <Link to={`/EditContact/${this.props.obj._id}`}>
             <input type="submit" value="Edit " className="btn btn-primary" />
            

           </Link>
           
           <input type="submit" value="Delete " className="btn btn-primary"
           onClick={this.deleteContact} />
           
            




          
            
                        
                    </div>
        </tr>
    );
  }
}

export default TableRow;