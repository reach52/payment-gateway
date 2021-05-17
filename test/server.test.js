const chai = require("chai");
const request = require("supertest");
const http = require("chai-http");
const server = require("../server");
const config = require("config");
const mongoose = require("mongoose");
const mongoDBURL = require("config").get("mongoURL");
const { MongoMemoryServer } = require("mongodb-memory-server");

const expect = chai.expect;
let con, db, mongoServer;

before(async () => {
  mongoServer = new MongoMemoryServer();
  con = await mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = mongoose.connection;
});

after(async () => {
  if (con) con.connection.close();

  if (mongoServer) await mongoServer.stop();
});

describe("Mongo Database", () => {
  it("Should start mongo server", async () => {
    expect(db).to.be.eql(mongoose.connection);
  });
});

describe("Server", () => {
  it("Should exist", () => {
    expect(server).to.be.a("function");
  });

  it("Should have a running port", async () => {
    expect(server.port).to.equal(config.get("port"));
  });
});
