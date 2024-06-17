const Students = {
    'name': 'Student_name',
    'id': '123@id',
    'email': 'student@email.com',
    'address': {
        'zipCode': '1324124',
        'street': '5th',
        'city': 'Noida'
    }
}
const { name, id, email, address } = Students  // yha pe name nam ka property ko name name ke variable me store karta hai
console.log(name, id, email, address)

const { name: studentName, id: studentId, email: studentEmail, address: studentAddress } = Students
// yaha name name ke proprety ko studentName ke variable me store karta hai
console.log(studentName, studentId, studentEmail, studentAddress)

const fruits = [
    'Banana',
    'Apple', 
    'Mango', 
    'Kiwi', 
    'Orange', 
    'Pineapple', 
    'Watermelon',
    'Blueberry',
    'Papaya',
]
const [ , , fruit1 ] = fruits
console.log(fruit1)

const {3: fruit2, 6: fruit3} = fruits
console.log(fruit2, fruit3)
