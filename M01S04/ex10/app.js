var person = {
  name: 'Dana',
  surname: 'Danason',
  age: 33,
  petOwener: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steve',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carlson',
      age: 29,
    },
  ],
};

console.warn(`
Folosind obiectul person si forEach,
afiseaza skill-urile din pozitiile impare ale arrayului.
`);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
 Intre Dragos si Steven... "
`);

var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  //v2 concatenare
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.log(`
Folosind metoda reverse si apoi forEach,
 afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills.reverse().forEach(function (skill) {
  console.log(skill);
});
