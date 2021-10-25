const Employee = require("../lib/Employee");

describe("Employee",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const employee = new Employee(name, id, email)
            expect(typeof(employee)).toEqual("object")
        })
    }) 
    
    //UPDATE THESE!!!
    describe("Name", () => {
        it("should return a name", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const employee = new Employee(name, id, email)
            expect(employee.name).toEqual(name)
        })
    })
    describe("Id", () => {
        it("should return an id", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const employee = new Employee(name, id, email)
            expect(employee.id).toEqual(id)
        })
    })
    describe("Email", () => {
        it("should return an email", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const employee = new Employee(name, id, email)
            expect(employee.email).toEqual(email)
        })
    })
}) 