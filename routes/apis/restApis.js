/**
 * For this test, we will be using the gorest.co.in API to test every REST method. DO NOT POST ANY
 * ACTUAL DATA TO THIS API WHEN CREATING A SPOOFED USER ACCOUNT
 *
 * 
 *
 * You can use https://www.postman.com to test what the API should be returning.
 */
const axios = require('axios');

async function createUser(user) {
  try {
    // Use Axios to call POST to the /users API, return the posted data if success
  } catch (error) {
    // Return an error
  }
}

async function getUsers() {
  try {
    // Use Axios to call GET to the /users API, return the data if success
  } catch (error) {
    // Return an error
  }
}

async function getUser(user) {
  try {
    // Use Axios to call GET to the /users API, return the data if success
  } catch (error) {
    // Return an error
  }
}

async function editUser(user) {
  try {
    // Use Axios to call PUT to the /users API, return the posted data if success
  } catch (error) {
    // Return an error
  }
}

async function deleteUser(user) {
  try {
    // Use Axios to call DELETE to the /users API, return success
  } catch (error) {
    // Return an error
  }
}

module.exports = { createUser, editUser, deleteUser, getUser, getUsers};
