const request = require("supertest");
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json");
const endPointUrl = "/todos/";

describe(endPointUrl, () => {
    it("POST" + endPointUrl,
        async () => {
            const response = await request(app)
                .post(endPointUrl)
                .send(newTodo);

            //console.log("print the response: " + response.toString());
            expect(response.statusCode).toBe(201);
            expect(response.body.title).toBe(newTodo.title);
            expect(response.body.done).toBe(newTodo.done);
        });
});