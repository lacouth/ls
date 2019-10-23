let contacts = {
    name: "Timothy",
    age: 35,
    address: {
        street: "1 main st",
        city: "Montreal",
    },
    interests: ["cooking", "biking","dancing"]
}

console.log(JSON.stringify(contacts))
console.log(JSON.parse(JSON.stringify(contacts)))
console.log(contacts.address)
contacts.interests.push("skating")
console.log(contacts.interests)
contacts.sexo = "M";
console.log(contacts)
contacts.sexo = undefined
console.log(contacts)