const request = require("supertest");
const server = require("../server");
const chai = require("chai");

const expect = chai.expect;

describe("Module", () => {
  describe("GET /", () => {
    it("Should respond with 200", (done) => {
      request(server)
        .get("/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
  });
});
