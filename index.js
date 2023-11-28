try {
  const [node, script, input_one] = process.argv;
  const time = new Date().toTimeString();
  const output = `Hello ${input_one}! Right now its ${time}!`;
  console.log(output);
} catch(err) {
  console.error(err.message);
}
