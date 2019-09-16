import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
        people: [],
       
      
      };
    }
    componentDidMount(){
     
      axios.get("http://localhost:8000/get_contact" )
      .then(response => {
        this.setState({ people: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.people.map(function(object, i){
            return <TableRow obj={object} key={i}
            
            
            
            />;
        });
    }

    
    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Telephone</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
               
              </tbody>
             

            </table>
        </div>
      );
    }
  }