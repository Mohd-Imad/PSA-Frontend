import React, { Component } from 'react'

class ContactDetails extends Component {
  render() {
    let {} = this.props;
    return (
      <div>
        <h1>Contact Details</h1>
{/*         <pre>{JSON.stringify(this.props)}</pre>
 */}    <div className="card ">
          {/* <div className="card-header bg-info text-white"><h3>Contact Details</h3></div> */}
          <div className="card-header bg-info">
            <div className="align-center">
              <img src={this.props.selContact.image} width="150px" alt="" />
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item"><b> ID : </b>{this.props.selContact.id}</li>
              <li className="list-group-item"><b> Name : </b>{this.props.selContact.firstName + " " + this.props.selContact.lastName}</li>
              <li className="list-group-item"><b> Email : </b>{this.props.selContact.email}</li>
              <li className="list-group-item"><b> Age : </b>{this.props.selContact.age}</li>
              <li className="list-group-item"><b> Gender : </b>{this.props.selContact.gender}</li>
              <li className="list-group-item"><b> Blood Group : </b>{this.props.selContact.bloodGroup}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDetails