import React from 'react';
import Axios from 'axios'
class Users extends React.Component{
    state = {
        users : []
    }
    getData = ()=>{
        Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((response)=>{        /* axios internally return 1 promise object */
            console.log(response.data)
            this.setState({users : response.data})
        }).catch((err)=>{
            console.log(err)
        });
    }
    render(){
        return (
            <>
                <h1>Users</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getData}>Click to Display...!</button>
                
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <table className='table table-hover'>
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ? 
                                        <>
                                            {
                                                this.state.users.map((user)=>{
                                                    return <tr>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                    </tr>
                                                })
                                            }
                                        </> : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Users