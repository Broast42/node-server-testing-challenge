const express = require("express")

const server = express()

const PORT = process.env.PORT || 8888

server.use(express.json())

//routes

server.get("/", (req, res) => {
	res.json({
		message: "Welcome server is running."
	})
})

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

if (!module.parent) {
	server.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}`)
	})
}

module.exports = server