const sentence = "hello there from lighthouse labs";
/*setTimeout(() => {
    // print the char here
    for (const char of sentence) {
        process.stdout.write(char);
      }
  }, 1000);*/
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), time)
    time += 50;
  }
  setTimeout(() => process.stdout.write('\n'), time);