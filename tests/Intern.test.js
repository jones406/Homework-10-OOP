const Intern = require("../lib/Intern");

describe("Intern",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const school = "myschool"
            const intern = new Intern(name, id, email, school)
            expect(typeof(intern)).toEqual("object")
        })
    }) 
    
    describe("Name", () => {
        it("should return name", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const school = "myschool"
            const intern = new Intern(name, id, email, school)
            expect(intern.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const school = "myschool"
            const intern = new Intern(name, id, email, school)
            expect(intern.id).toEqual(id)
        })
    })
    
    describe("Email", () => {
        it("should return email", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const school = "myschool"
            const intern = new Intern(name, id, email, school)
            expect(intern.email).toEqual(email)
        })
    })
}) 