const args = process.argv.splice(2);


for (const time of args) {
  //Skips non numbers and negative numbers
  if (!Number.isInteger(parseInt(time)) || parseInt(time) < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, parseInt(time) * 1000); //converts number from ms to seconds

}