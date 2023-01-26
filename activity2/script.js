//------------------------problem 2-----------------------
// Write a function generateSortedList(arr) which takes in an array and creates a sorted list on the webpage
/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */

/*
function generateSortedList(arr) {
  // 00. get the parent element;
  const list = document.getElementById("sorted-list");
  //1.get the array(arr) => already given;
  //2. sort the array ;
  arr.sort((a, b) => {
    return a - b;
  });
  // console.log(arr); // working;

  //3. create a list function;or use loop like this-

  for (var i = 0; i < arr.length; i++) {
    let e = document.createElement("li");
    // 4.pass every element of the array through the list function;
    e.textContent = arr[i];
    list.append(e);
  }
  // console.log(list); // working
  // return list; // farak nhi padta isme ;
  
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
generateSortedList([1, 2, 3]); // Display a list -> 1 , 2 , 3
generateSortedList([]);
*/

function generateSortedList(arr) {
  //1.sort the array
  arr.sort((a, b) => a - b);

  //2.get the parent element
  const parentElement = document.getElementById("sorted-list");

  //3.for each of the parent elements
  arr.forEach((element) => {
    //3.1 create <li> element
    const li = document.createElement("li");
    //3.2 put arr[i] inside li
    li.textContent = element;
    //3.3 append the li into parent.(ul)
    parentElement.append(li);
  });
}
generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
generateSortedList([1001, 200, 3]); // Display a list -> 1 , 2 , 3
generateSortedList([]);
