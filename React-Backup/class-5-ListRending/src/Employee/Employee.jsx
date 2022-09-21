import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props);
            console.log("First Execution ---- constructor");
            this.state = {
            employees : [{"id":1,"name":"Blakelee","email":"bmoorcraft0@google.nl","gender":"Female","age":33},
            {"id":2,"name":"Royal","email":"rreany1@wikimedia.org","gender":"Male","age":34},
            {"id":3,"name":"Roxie","email":"rflude2@boston.com","gender":"Female","age":22},
            {"id":4,"name":"Chandler","email":"cshutt3@comsenz.com","gender":"Male","age":36},
            {"id":5,"name":"Cristal","email":"ceppson4@mtv.com","gender":"Female","age":27},
            {"id":6,"name":"Estele","email":"elambertson5@merriam-webster.com","gender":"Female","age":9},
            {"id":7,"name":"Glenna","email":"ggrasser6@vimeo.com","gender":"Female","age":23},
            {"id":8,"name":"Benyamin","email":"bramberg7@whitehouse.gov","gender":"Male","age":9},
            {"id":9,"name":"Pieter","email":"pfazan8@qq.com","gender":"Male","age":25},
            {"id":10,"name":"Gerry","email":"gbaelde9@123-reg.co.uk","gender":"Female","age":31},
            {"id":11,"name":"Damaris","email":"dlavillea@nhs.uk","gender":"Female","age":42},
            {"id":12,"name":"Belicia","email":"byoleb@wordpress.org","gender":"Female","age":31},
            {"id":13,"name":"Cathryn","email":"csegerc@e-recht24.de","gender":"Female","age":3},
            {"id":14,"name":"Janis","email":"jlidingtond@godaddy.com","gender":"Female","age":29},
            {"id":15,"name":"Dollie","email":"dgreenliese@godaddy.com","gender":"Genderfluid","age":8},
            {"id":16,"name":"Verne","email":"vvogeleinf@cbslocal.com","gender":"Male","age":31},
            {"id":17,"name":"Marcel","email":"mtosspellg@va.gov","gender":"Male","age":36},
            {"id":18,"name":"Niven","email":"nlostyh@weebly.com","gender":"Male","age":28},
            {"id":19,"name":"Jessee","email":"jwhyffeni@wix.com","gender":"Male","age":31},
            {"id":20,"name":"Karlyn","email":"knotleyj@washington.edu","gender":"Female","age":3},
            {"id":21,"name":"Dottie","email":"djasikk@walmart.com","gender":"Bigender","age":31},
            {"id":22,"name":"Layla","email":"lwhistonl@blogtalkradio.com","gender":"Female","age":34},
            {"id":23,"name":"Donny","email":"dhannahm@dion.ne.jp","gender":"Male","age":42},
            {"id":24,"name":"Katrine","email":"klinekern@imageshack.us","gender":"Female","age":11},
            {"id":25,"name":"Fraze","email":"fdreweso@geocities.jp","gender":"Male","age":26},
            {"id":26,"name":"Minnie","email":"mmyderscoughp@hubpages.com","gender":"Female","age":32},
            {"id":27,"name":"Sholom","email":"strimq@stanford.edu","gender":"Male","age":4},
            {"id":28,"name":"Wynn","email":"wmistryr@surveymonkey.com","gender":"Female","age":18},
            {"id":29,"name":"Paulette","email":"pemnoneys@smh.com.au","gender":"Female","age":16},
            {"id":30,"name":"Bobine","email":"bdilkst@hubpages.com","gender":"Female","age":37},
            {"id":31,"name":"Rebbecca","email":"rsuteru@dailymail.co.uk","gender":"Female","age":28},
            {"id":32,"name":"Luz","email":"ljefferyv@51.la","gender":"Female","age":21},
            {"id":33,"name":"Lovell","email":"lphilipsohnw@alexa.com","gender":"Male","age":44},
            {"id":34,"name":"Erena","email":"emarsayx@youtube.com","gender":"Female","age":26},
            {"id":35,"name":"Baily","email":"bmattsony@wiley.com","gender":"Bigender","age":34},
            {"id":36,"name":"Vladamir","email":"vseymerz@trellian.com","gender":"Male","age":21},
            {"id":37,"name":"Kate","email":"khannabus10@cbc.ca","gender":"Female","age":38},
            {"id":38,"name":"Dominick","email":"dbauer11@mysql.com","gender":"Male","age":41},
            {"id":39,"name":"Kerr","email":"kdefond12@ebay.co.uk","gender":"Male","age":39},
            {"id":40,"name":"Nonie","email":"njune13@eventbrite.com","gender":"Female","age":10},
            {"id":41,"name":"Rhiamon","email":"rboate14@moonfruit.com","gender":"Female","age":17},
            {"id":42,"name":"Dan","email":"dvandenbroek15@noaa.gov","gender":"Male","age":21},
            {"id":43,"name":"Ulric","email":"ubilling16@amazonaws.com","gender":"Male","age":5},
            {"id":44,"name":"Robbie","email":"rlongstaff17@gravatar.com","gender":"Female","age":26},
            {"id":45,"name":"Gilly","email":"gpriestley18@w3.org","gender":"Female","age":32},
            {"id":46,"name":"Shoshana","email":"sheggison19@newsvine.com","gender":"Female","age":5},
            {"id":47,"name":"Nancey","email":"nbulger1a@moonfruit.com","gender":"Female","age":25},
            {"id":48,"name":"Rube","email":"rpyle1b@goo.gl","gender":"Male","age":3},
            {"id":49,"name":"Chic","email":"cbales1c@prweb.com","gender":"Male","age":31},
            {"id":50,"name":"Misha","email":"mtweede1d@myspace.com","gender":"Polygender","age":3}]
        }
    }
    render(){
        console.log("Second Execution ---- render()");
        return <div className="container mt-3">
            <div className="row">
                <div className="col-md-10">
                    <div className="table table-stripped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>SL. NO</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>{    
                                this.state.employees.map((emp,index)=>{
                                    return <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.age}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Employee