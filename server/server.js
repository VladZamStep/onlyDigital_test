const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isLoginAuthenticated({ userEmail, pwd }) {
    return (
        userdb.users.findIndex(
            (user) => user.userEmail === userEmail && user.pwd === pwd
        ) !== -1
    );
}

server.post("/api/auth/login", (req, res) => {
    const { userEmail, pwd } = req.body;
    if (!isLoginAuthenticated({ userEmail, pwd })) {
        const status = 401;
        const message = "Incorrect User or Password";
        res.status(status).json({ status, message });
        return;
    }
    const access_token = createToken({ userEmail, pwd });
    res.status(200).json({ access_token });
})


server.listen(8080, () => {
    console.log('JSON Server is running')
})