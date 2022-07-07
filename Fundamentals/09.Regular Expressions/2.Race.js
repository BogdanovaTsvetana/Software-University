function solve(input) {
  let participants = input.shift().split(', ');
  let racers = {}
  participants.forEach(p => {
    racers[p] = 0;
  });

  let line = input.shift();
  while (line !== 'end of race') {
    let regexL = /[A-Za-z]+/g;
    let namePerson = line.match(regexL).join('');

    if (racers.hasOwnProperty(namePerson)) {
      let digits = line.match(/\d/g);
      digits.forEach(d => {
        racers[namePerson] += Number(d);
      });

    }

    line = input.shift();
  }

  let entries = Object.entries(racers).sort((a, b) => b[1] - a[1])
  console.log(`1st place: ${entries[0][0]}`)
  console.log(`2nd place: ${entries[1][0]}`)
  console.log(`3rd place: ${entries[2][0]}`)
}

solve([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race'
])
