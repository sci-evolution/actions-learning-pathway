const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = core.getInput("input_one");
  //console.log(`Hello ${nameToGreet}!`);

  const time = new Date();
  //core.setOutput("time", time);
  core.setOutput("TESTING OUTPUT");
} catch(err) {
  core.setFailed(err.message);
}
