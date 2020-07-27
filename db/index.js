const jsonServer = require("json-server");

const faker = require("faker");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.listen(port, () => {
	console.log("JSON Server is running");
});

const data = {
	contacts: [],
};

const getUser = () => {
	// Create 500 users
	data["contacts"] = [];
	for (let i = 0; i < 500; i++) {
		data.contacts.push({
			name: faker.name.firstName(),
			address: faker.address.streetAddress(),
			phone: faker.phone.phoneNumberFormat(),

			// id: casual.uuid,
		});
	}
	return data;
};

server.get("/contacts", (request, response) => {
	if (request.method === "GET") {
		response.status(200).jsonp(getUser());
	}
});

// node index.js to start
