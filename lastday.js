// alert("Hey I am connected")


// // create a function
// // that will identify html elements by their ID's
// // and the function will turn the element into an emoji

// const emojiChanger = (id) => {
//     if(id === 'granny-smith') {
//     document.getElementById(id).innerHTML = '🍎'
//   } else if(id === 'golden-delicious') {
//     document.getElementById(id).innerHTML = '🦄'
//   }
// }

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// Yes. The class is constructing an object that has a parameter (name) that is waiting to receive a value, cohort is hard-coded with Alpha as well as year is hard-coded with 2022. So var learnStudent is creating a new instance of that object and passes a argument of "George" which console.log as a Learn { student: 'George', cohort: 'Alpha', year: 2022 }

// Parameter is the placeholder within the function and argument is the actual value that is passed into the function
// method is the function within an object
// filter also normally returns a shorter length array