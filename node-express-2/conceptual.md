### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
a way to securely send information between parties, often used for user authentication.

- What is the signature portion of the JWT?  What does it do?
The signature is part of the JWT that verifies the token hasn't been changed. It ensures the token is authentic.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, the payload is not encrypted, so it can be read if intercepted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
User logs in with credentials.
Server creates a JWT and sends it to the user.
User sends the JWT with future requests.
Server checks the JWT to allow access.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests: Test small parts of code.
Integration tests: Test how different parts work together.
End-to-end tests: Test the whole system like a user would.

- What is a mock? What are some things you would mock?
A mock is a fake version of something to simulate its behavior, like pretending to make a database call or API request during testing.

- What is continuous integration?
Continuous integration (CI) is the practice of frequently merging code into a shared repository and running automated tests to catch issues early.

- What is an environment variable and what are they used for?
An environment variable is a configuration setting that changes based on where the app is running.

- What is TDD? What are some benefits and drawbacks?
writing tests before writing code. Benefits: Fewer bugs, better design. Drawbacks: Slower at first, takes a lot more time.

- What is the value of using JSONSchema for validation?
It helps ensure data is correctly structured, preventing errors before processing it.

- What are some ways to decide which code to test?

Test critical or complex parts.
Test code prone to bugs.
Test code that's used a lot.

- What does `RETURNING` do in SQL? When would you use it?
RETURNING in SQL gets data back after INSERT, UPDATE, or DELETE. You use it to get affected rows without an extra query.

- What are some differences between Web Sockets and HTTP?
HTTP: Request-response, stateless (each request stands alone).
WebSockets: Persistent connection, allows real-time data exchange.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

Flask. Simple and great for small projects in Python.
