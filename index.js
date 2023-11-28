const core = require("@actions/core");
const github = require("@actions/github");

try {
  const nameToGreet = core.getInput("input_one");
  console.log(`Hello ${nameToGreet}!`);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch(err) {
  core.setFailed(err.message);
}
