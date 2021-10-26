const Engineer = require("../lib/Engineer");

describe("Engineer",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const githubUsername = "engineerlady"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(typeof(engineer)).toEqual("object")
        })
    }) 
    
    describe("Name", () => {
        it("should return name", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const githubUsername = "engineerlady"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return id", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const githubUsername = "engineerlady"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.id).toEqual(id)
        })
    })
    
    describe("Email", () => {
        it("should return email", () => {
            const name = "Brooke"
            const id = "5"
            const email = "myemail@email.com"
            const githubUsername = "engineerlady"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.email).toEqual(email)
        })
    })
}) 