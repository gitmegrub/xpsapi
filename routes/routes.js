var faker = require("faker");

var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.status(200).send("- - -  node - express - api - - -");
	})

	//user
	app.get("/user", function(req, res) {
		var data = ({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			userName: faker.internet.userName(),
			email: faker.internet.email()
		});
		res.status(200).send(data);
	});

	//users by id
	app.get("/users/:uid", function(req, res) {
		var users = [];
		var uid = req.params.uid;

		if (isFinite(uid) && uid > 0) {
			for (i = 0; i <= uid-1; i++) {
				users.push({
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					userName: faker.internet.userName(),
					email: faker.internet.email()
				});
			}

			res.status(200).send(users);
		} else {
			res.status(400).send({ message: 'parameter must be > 0 '});
		}
	})
}

module.exports = appRouter;