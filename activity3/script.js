//---------------problem 3 -----------------------
/**
 * Get an array of Github usernames
 * Print these usernames as a list on the screen
 */

/*

async function getGithubUsernames(){
  //1. get api Response;
  //2. get the username array;
  //3. return the username array;
}
function displayValuesAsList(values) {
  
   //* get the parent element
   //* forEach element in the "values"
   //* *create a <li> element with the text as the value
   //* *append the <li> element to the parent element.
   
}
async function main(){

}

*/

const GITHUB_API = "https://api.github.com/users";
// fetch(GITHUB_API);
/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */

async function getGithubUsernames(url) {
  //1.get the api response;
  let res = await fetch(url); //promise
  let dataArray = await res.json();
  // console.log(dataArray) //array of objects

  // 2. get the userName Array in a new array;
  const userNameArray = dataArray.map((dataobject) => {
    return dataobject.login; //console array .
    // return { name: dataobject.login, id: dataobject.id };  //console array of obejcts.
  });
  // console.log(userNameArray);
  return userNameArray;
  // or
  // let userNameArray = new Array(dataArray.length);
  // for (var i = 0; i < dataArray.length; i++) {
  //   userNameArray[i] = dataArray[i].login;
  // }
  // console.log(userNameArray);
}
// getGithubUsernames(GITHUB_API);

/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} array
 */

function displayValuesAsList(array) {
  //* get the parent element
  let parent = document.getElementById("usernames-list");
  //* forEach element in the "values"
  array.forEach((element) => {
    //* *create a <li> element with the text as the value
    const li = document.createElement("li");
    li.textContent = element;
    //* *append the <li> element to the parent element.
    parent.append(li);
  });
}

async function main() {
  const usersArray = await getGithubUsernames(GITHUB_API);
  // console.log(usersArray);//yha se ek array mil gaya
  // displayValuesAsList(usernamesArray);
  return displayValuesAsList(usersArray); // return likhne ki khass jarurat nhi h ;
}
main();
