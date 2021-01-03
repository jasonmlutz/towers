const Game = require("./towers");
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question('tower height? ', heightString => {
  let height = parseInt(heightString)
  let g = new Game(height);
  g.run(reader, completion, height);

  function completion() {
    reader.question('play again? y or no: ', restartGame => {
      if (restartGame === "y") {
        reader.question('tower height? ', heightString => {
          let height = parseInt(heightString);
          let g = new Game(height);
          g.run(reader, completion, height);
        })
      } else {
        reader.close();
      }
    });
  };
});
