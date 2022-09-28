import React, { Component } from 'react'
import Axios from 'axios'
class Employees extends Component {
    state = {
        employees : {}
    }
    componentDidMount(){
        Axios.get('https://dummyjson.com/users').then((resp)=>{this.setState({employees : resp.data})}).catch((err)=>{})
    }
  render() {
    return (
      <div>
        {
            Object.keys(this.state.employees).length > 0 ? 
            <>
                <pre>{JSON.stringify(this.state.employees)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className='table table-hover'>
                                <thead className='bg-danger text-white'>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                        <th>Blood Group</th>
                                        <th>Hair Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.users.map((user)=>{
                                            return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                                <td><img src={user.image} width="50px" alt="" /></td>
                                                <td>{user.bloodGroup}</td>
                                                <td>{user.hair.color}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </> : null
        }
      </div>
    )
  }
}

export default Employees