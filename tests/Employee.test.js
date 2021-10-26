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
    
    describe("Name", () => {
        it("should return name", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.id).toEqual(id)
        })
    })
    
    describe("Email", () => {
        it("should return email", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const employee = new Employee(name, id, email)
            expect(employee.email).toEqual(email)
        })
    })
}) 