function main() {
  const numberMemmbers = parseFloat(prompt("Enter the number of group members"));

  let taba = 6;
  let sharm = 15;
  let hurgada = 25;

  if (Number.isInteger(numberMemmbers) === true && numberMemmbers > 0) {

    if (numberMemmbers <= taba) {
      let question = confirm('There are empty seats in Taba. Do you want to add?');
      if (question == true) {
        alert('You add to Taba group');
        taba = taba - numberMemmbers;
        console.log(`Free Places in Taba: ${taba}`);
        return;
      }
    }

    if (numberMemmbers <= sharm) {
      let question = confirm('There are empty seats in Sharm. Do you want to add?');
      if (question == true) {
        alert('You add to Sharm group');
        sharm = sharm - numberMemmbers;
        console.log(`Free Places in Sharm: ${sharm}`);
        return;
      }
    }

    if (numberMemmbers <= hurgada) {
      let question = confirm('There are empty seats in Hurgada. Do you want to add?');
      if (question == true) {
        alert('You add to Hurgada group');
        hurgada = hurgada - numberMemmbers;
        console.log(`Free Places in Hurgada: ${hurgada}`);
        return;
      }
    }

    alert('There are no seats!');

  } else {
    alert('Incorrect value!');
  }
}

main();
