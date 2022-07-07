function solve1(input) {
  // (%[A-Z][a-z]+%)(<[A-Za-z]+>)(?<count>\|[\d]+\|)([\d]+(?<price>\.[\d]+)?\$)
  let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[\w]+)>([^\|\$%\.]+)?\|(?<count>[\d]+)\|([^\|\$%\.\d]+)?(?<price>[\d]+(\.[\d]+)?)\$/;      // v poslednata mexdinna grupa wkliu4vame i \d
  let income = 0;

  let line = input.shift();
  while (line !== 'end of shift') {
    let validLine = regex.exec(line);
    if (validLine) {
      let totalPrice = Number(validLine.groups.count) * Number(validLine.groups.price);
      income += totalPrice;
      console.log(`${validLine.groups.name}: ${validLine.groups.product} - ${totalPrice.toFixed(2)}`);
    }

    line = input.shift();
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

//     with match()
function solve(input) {
  // (%[A-Z][a-z]+%)(<[A-Za-z]+>)(?<count>\|[\d]+\|)([\d]+(?<price>\.[\d]+)?\$)
  let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[\w]+)>([^\|\$%\.]+)?\|(?<count>[\d]+)\|([^\|\$%\.\d]+)?(?<price>[\d]+(\.[\d]+)?)\$/;
  let income = 0;

  let line = input.shift();
  while (line !== 'end of shift') {
    let validLine = line.match(regex);
    if (validLine) {
      let totalPrice = Number(validLine.groups.count) * Number(validLine.groups.price);
      income += totalPrice;
      console.log(`${validLine.groups.name}: ${validLine.groups.product} - ${totalPrice.toFixed(2)}`);
    }

    line = input.shift();
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}

solve1([
  '%InvalidName%<Croissant>|2|10.3$',
  '%Peter%<Gum>1.3$',
  '%Maria%<Cola>|1|2.4',
  '%Valid%<Valid>valid|10|valid20$',
  'end of shift'
])
