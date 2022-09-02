// nested destructuring

const users= [
    {id:101, uname:"Rahul", sal:45000},
    {id:102, uname:"Sonia", sal:55000},
    {id:103, uname:"Priyanka", sal:65000},
]

console.log(users);

const [{uname:user1uName,id}, , {sal:user3sal}] = users;            //only destructing user101's name and user103's sal        uname is updated to user1uName
console.log(user1uName);  
console.log(id);                        
console.log(user3sal); 

                                   
