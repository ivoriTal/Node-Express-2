** Document your bugs here **
 FAIL  __tests__/routes.test.js (146.472s)
  POST /auth/register
    × should allow a user to register in (46ms)
    × should not allow a user to register with an existing username (15029ms)
  POST /auth/login
    × should allow a correct username/password to log in (10028ms)
  GET /users
    × should deny access if no token provided (10016ms)
    × should list all users (10016ms)
  GET /users/[username]
    × should deny access if no token provided (10019ms)
    × should return data on u1 (10028ms)
  PATCH /users/[username]
    × should deny access if no token provided (10031ms)
    × should deny access if not admin/right user (10010ms)
    × should patch data if admin (10014ms)
    × should disallowing patching not-allowed-fields (10024ms)
    × should return 404 if cannot find (10029ms)
  DELETE /users/[username]
    × should deny access if no token provided (10017ms)
    × should deny access if not admin (10030ms)
    × should allow if admin (10022ms)

  ● POST /auth/register › should allow a user to register in

    error: database "bankly_test" does not exist

      at Parser.parseErrorMessage (node_modules/pg-protocol/src/parser.ts:369:69)
      at Parser.handlePacket (node_modules/pg-protocol/src/parser.ts:188:21)
      at Parser.parse (node_modules/pg-protocol/src/parser.ts:103:30)
      at Socket.<anonymous> (node_modules/pg-protocol/src/index.ts:7:48)

  ● POST /auth/register › should not allow a user to register with an existing username

    Connection terminated unexpectedly

      196 |
      197 | afterEach(async function() {
    > 198 |   await db.query("DELETE FROM users");
          |   ^
      199 | });
      200 |
      201 | afterAll(function() {

      at node_modules/pg/lib/client.js:526:17
      at Object.<anonymous> (__tests__/routes.test.js:198:3)

  ● POST /auth/register › should not allow a user to register with an existing username

    Connection terminated unexpectedly

      196 |
      197 | afterEach(async function() {
    > 198 |   await db.query("DELETE FROM users");
          |   ^
      199 | });
      200 |
      201 | afterAll(function() {

      at node_modules/pg/lib/client.js:526:17
      at Object.<anonymous> (__tests__/routes.test.js:198:3)

  ● POST /auth/register › should not allow a user to register with an existing username

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● POST /auth/register › should not allow a user to register with an existing username

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      57 |   });
      58 |
    > 59 |   test("should not allow a user to register with an existing username", async function() {
         |   ^
      60 |     const response = await request(app)
      61 |       .post("/auth/register")
      62 |       .send({

      at Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:85:20)
      at Suite.<anonymous> (__tests__/routes.test.js:59:3)
      at Object.<anonymous> (__tests__/routes.test.js:39:1)

  ● POST /auth/register › should not allow a user to register with an existing username

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● POST /auth/login › should allow a correct username/password to log in

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● POST /auth/login › should allow a correct username/password to log in

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users › should list all users

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users › should list all users

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 401

      103 |       .get("/users")
      104 |       .send({ _token: tokens.u1 });
    > 105 |     expect(response.statusCode).toBe(200);
          |                                 ^
      106 |     expect(response.body.users.length).toBe(3);
      107 |   });
      108 | });

      at Object.<anonymous> (__tests__/routes.test.js:105:33)

  ● GET /users › should list all users

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users/[username] › should return data on u1

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● GET /users/[username] › should return data on u1

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 401

      118 |       .get("/users/u1")
      119 |       .send({ _token: tokens.u1 });
    > 120 |     expect(response.statusCode).toBe(200);
          |                                 ^
      121 |     expect(response.body.user).toEqual({
      122 |       username: "u1",
      123 |       first_name: "fn1",

      at Object.<anonymous> (__tests__/routes.test.js:120:33)

  ● GET /users/[username] › should return data on u1

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should deny access if not admin/right user

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should deny access if not admin/right user

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should patch data if admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should patch data if admin

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 401

      146 |       .patch("/users/u1")
      147 |       .send({ _token: tokens.u3, first_name: "new-fn1" }); // u3 is admin
    > 148 |     expect(response.statusCode).toBe(200);
          |                                 ^
      149 |     expect(response.body.user).toEqual({
      150 |       username: "u1",
      151 |       first_name: "new-fn1",

      at Object.<anonymous> (__tests__/routes.test.js:148:33)

  ● PATCH /users/[username] › should patch data if admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should disallowing patching not-allowed-fields

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should disallowing patching not-allowed-fields

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should return 404 if cannot find

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● PATCH /users/[username] › should return 404 if cannot find

    expect(received).toBe(expected) // Object.is equality

    Expected: 404
    Received: 401

      169 |       .patch("/users/not-a-user")
      170 |       .send({ _token: tokens.u3, first_name: "new-fn" }); // u3 is admin
    > 171 |     expect(response.statusCode).toBe(404);
          |                                 ^
      172 |   });
      173 | });
      174 |

      at Object.<anonymous> (__tests__/routes.test.js:171:33)

  ● PATCH /users/[username] › should return 404 if cannot find

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should deny access if no token provided

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should deny access if not admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should deny access if not admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should allow if admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

  ● DELETE /users/[username] › should allow if admin

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 401

      190 |       .delete("/users/u1")
      191 |       .send({ _token: tokens.u3 }); // u3 is admin
    > 192 |     expect(response.statusCode).toBe(200);
          |                                 ^
      193 |     expect(response.body).toEqual({ message: "deleted" });
      194 |   });
      195 | });

      at Object.<anonymous> (__tests__/routes.test.js:192:33)

  ● DELETE /users/[username] › should allow if admin

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.

      at mapper (node_modules/jest-jasmine2/build/queue_runner.js:41:52)

Test Suites: 1 failed, 1 total
Tests:       15 failed, 15 total
Snapshots:   0 total
Time:        147.149s
Ran all test suites.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.