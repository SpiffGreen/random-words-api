const serveJS = require("serve-dot-js");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5000;

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "words.json"), { encoding: "utf-8" }));

function handleDataRequest(req, res) {
    let num = null;
    if(num = req.query.number) {
       res.send(res, data.data.splice(0, num));
    } else {
        res.send(res, data.data[0]);
    }
    data.data = data.data.sort((a, b) => 0.5 - Math.random());
}

serveJS
    .get("/", (req, res) => res.send(res, "Welcome to Random Words API.<br> Visit <i>'/data'</i> for random data, use <i>'/data?number=10'</i> for 10 words"))
    .get("/data", handleDataRequest)
    .listen(PORT, () => console.log(`Server Started on port ${PORT}`));