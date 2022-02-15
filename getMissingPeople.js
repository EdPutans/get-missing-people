function getParticipants() {
  const nodes = document.querySelectorAll('.participants-item__display-name');
  const userNames = [];

  nodes.forEach(node => {
    userNames.push(node.innerText);
  });

  return userNames;
}

const allStudents = [
  // populate with student names
]

function getMissingPeople() {
  const present = getParticipants().map(item => item.toLowerCase())
  const missing = allStudents.filter(student => !present.find(presentPerson =>
    presentPerson.includes(student.toLowerCase())
  ));

  return missing;
}

console.log("Missing People:", getMissingPeople().join(', '))