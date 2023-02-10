 let classList=["rashida","james","roman","lisa","omair","lukas"]
const classroom= {hasTeachingAssistant, classList}
function getStudents(classroom){
let teacher, teachingStudent,students;
if(hasTeachingAssistant){
   [teacher, teachingStudent, ...students]=classList;
}else{
    [teacher, ...students ]=classList;
}
return students
}
