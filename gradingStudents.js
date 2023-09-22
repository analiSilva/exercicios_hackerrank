let grades = [73, 67, 38, 33]

function gradingStudents(grades) {
    let newGrades = []

    for(var i = 0; i < grades.length; i++){
        if(grades[i] <= 40){
            newGrades.push(grades[i])
        }if(grades[i] > 40){
            
            newGrades.push(grades[i])
        }
        
    }
    return newGrades

}

console.log(gradingStudents(grades))