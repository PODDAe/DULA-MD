const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "VTFiSDRL#O9n3w7N4BPh5cijkDixKdAElgEIWeYmOAni4IWzjKxc",
  MONGODB: process.env.MONGODB || "Enter your mongoDB public URL",
  OWNER_NUM: process.env.OWNER_NUM || "94752978237",
};
