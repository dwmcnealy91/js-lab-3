// JAVASCRIPT LAB 3
//1.
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2019-04-22",
    passed: true,
  },
];
//2.
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
  };
  if (newSubmission.score >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
}

// addSubmission(submissions, "Derek", 85, "2022-02-23");
// addSubmission(submissions, "Donovan", 15, "2022-02-23");

//3.
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
  console.log();
}
// deleteSubmissionByIndex(submissions, 1);

//4.
function deleteSubmissionByName(array, name) {
  let foundIndex = array.findIndex(function (people) {
    return people.name === name;
  });
  // console.log('foundIndex', foundIndex);
  array.splice(foundIndex, 1);
  console.log(submissions);
}
// deleteSubmissionByName(submissions, "Jack");

//5.
function editSubmission(array, index, score) {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
  //   console.log(submissions);
}

// editSubmission(submissions, 3, 15);

//6.
function findSubmissinByName(array, name) {
  let foundName = array.find(function (people) {
    return people.name === name;
  });
  console.log(foundName);
}

// findSubmissinByName(submissions, "Jack");

//7.
function findLowestScore(array) {
  let lowestScore = 100;
  array.forEach(function (people) {
    if (people.score < lowestScore) {
      lowestScore = people.score;
    }
  });
  //   return lowestScore;***
  console.log(lowestScore);
}
// console.log(findLowestScore(submissions));***
// findLowestScore(submissions);

//8.
function findAverageScore(array) {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  return sum / array.length;
}
// console.log(findAverageScore(submissions));

//9.
function filterPassing(array) {
  let filteredArray = array.filter(function (thisValue) {
    return thisValue.passed === true;
  });
  return filteredArray;
}
// console.log(filterPassing(submissions));

//10.
function filter90AndAbove(array) {
  return array.filter(function (thisValue) {
    return thisValue.score >= 90;
  });
}
// console.log(filter90AndAbove(submissions));
