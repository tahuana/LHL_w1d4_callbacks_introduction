// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (arr, index) { if (arr === "Waldo") actionWhenFound(index) });
}

function actionWhenFound(index) {
    console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

