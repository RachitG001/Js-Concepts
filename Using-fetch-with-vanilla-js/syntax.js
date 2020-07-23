// The Fetch API is used to make Ajax requests, such as calling an API or
// fetching a remote resource or HTML file from a server.

// Objective - Let’s say you wanted to get a list of posts from the API using the
// https://jsonplaceholder.typicode.com/posts endpoint.

// Fetch expects a url & returns a promise.

// Fetch doesn't do error handling. You have to manually catch errors using response properties.

const url = "https://jsonplaceholder.typicode.com/posts";

const fetch = require("isomorphic-fetch");

// Get request
function getData() {
  fetch(url)
    .then((response) => {
      // The Fetch API uses streams. We need to convert it to json.
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // The API call was successful!
      console.log("success!", data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
getData();

// Post request
function postData() {
  fetch(url, {
    method: "POST",
    body:
      "title=" +
      encodeURIComponent("My awesome new article") +
      "&body=" +
      encodeURIComponent("This is the text of my article"),
  })
    .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}
postData();

// if you need to include headers in your request
// fetch(url, {
// 	method: 'POST',
// 	body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article'),
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// 	referrer: 'no-referrer'
// })
