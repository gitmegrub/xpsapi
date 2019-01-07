var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.status(200).send("- - -  node - express - api - - -");
	})
}

module.exports = appRouter;