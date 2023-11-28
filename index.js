try {
  const [node, script, input_one] = process.argv;
  const time = new Date();
  console.log(time);
} catch(err) {
  console.error(err.message);
}
