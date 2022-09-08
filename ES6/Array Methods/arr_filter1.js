let students = [{name:"ABC", reg_no:101, gender:"male"},
                {name:"PQR", reg_no:101, gender:"female"},
                {name:"MNO",reg_no:101, gender:"male"},
                {name:"XYZ", reg_no:101, gender:"male"}]

let new_students = students.filter((student)=>{
    if(student.gender == "female"){
        return student;
    }
})
console.log('Before Filtering');
console.log(students);
console.log('After Filtering')
console.log(new_students);
