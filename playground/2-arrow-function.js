//Normal function

// const square = function (x) {
//     return x * x
// }


//Arrow function
// const square = (x) => { 
//     return x * x
// }

//Short-hand arrow function
// const square = (x) => x * x

// console.log(square(2))


//Arrow function as a method does not work, need standard function
// const event = {
//     name : 'Birthday Party',
//     printGuestList : function () {
//         console.log('Guest list for' + this.name)
//     }
// }

//more concised syntax
const event = {
    name : 'Birthday Party',
    guestList : ['Ing-ing', 'Jen', 'Daniel'],
    printGuestList () {
        console.log('Guest list for' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        }

        )
    }
}

event.printGuestList()

//Arrow functions don't bind their own value which makes them poor candidates for method and good for everything else