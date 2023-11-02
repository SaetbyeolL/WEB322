const fs = require("fs");
const http = require("http");
const https = require("https");

const HTTP_PORT = process.env.PORT || 8080;
const HTTPS_PORT = 4433;
const WEEK10ASSETS = "./week10-assets/";
const WEEK12ASSETS = "./week12-assets/";
const SSL_KEY_FILE = WEEK12ASSETS + "server.key";
const SSL_CRT_FILE = WEEK12ASSETS + "server.crt";

// read in the contents of the HTTPS certificate and key
const https_options = {
    key: fs.readFileSync(__dirname + "/" + SSL_KEY_FILE),
    cert: fs.readFileSync(__dirname + "/" + SSL_CRT_FILE)
};