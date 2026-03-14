const nums = [1, 2, 3, 4, 5, 6]

const squres = nums.map(num => num * num);
console.log(squres)

// const names=["alice","bob","charlie","daniel"]
// const newNames=names.map(name=>{
//      return name[0].toUpperCase()+name.slice(1);
// })
// console.log(newNames)

const names = ["Bulbasour", "Charmander", "Squirtle", "Pikachu"]
const newNames = names.map(name => {
//     return name="<p>"+name+"</p>";
return `<p>${name}</p>`
})
console.log(newNames)

