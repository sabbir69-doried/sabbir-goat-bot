const login = require("fca-unofficial");
const fs = require("fs");

const config = require("./config.json");
const appState = require("./appstate.json");

login({ appState }, (err, api) => {
  if (err) return console.log("Login Error:", err);

  console.log("✅ Bot Online");

  api.listenMqtt((err, event) => {
    if (err) return console.log(err);

    if (event.type === "message") {
      if (event.body === "hi") {
        api.sendMessage("Hello 😎 I am Sabbir Bot", event.threadID);
      }
    }
  });
});
