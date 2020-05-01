const JWTToken = 'f1dd5dd4-6173-472d-9812-f2d834f94af6-0d2eb2cb-0f96-4a38-bff8-e013807270bd';

// REGISTER POST REQUEST
function registerUser() {
  axios.post('https://virtserver.swaggerhub.com/v1b3m/Pelard-N/1.0.0/user/register',
    {headers: {"Authorization" : `Bearer ${JWTToken}`}},
    {data: {
      firstName: 'henry',
      lastName: 'henry',
      userName: 'henry',
      password:'12345',
      phoneNumber: '12345',
      email: 'henry@gmail.com'
    }
  })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err));
}

// LOGIN POST REQUEST
function loginUser() {
  axios.post('https://virtserver.swaggerhub.com/v1b3m/Pelard-N/1.0.0/user/login',
    {headers: {"Authorization" : `Bearer ${JWTToken}`}},
    {data: {
      userName: 'henry',
      password:'12345'
    }
  })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err));
}


//REGISTERD USERS GET REQUEST
function registeredUser() {
  axios.get('https://virtserver.swaggerhub.com/v1b3m/Pelard-N/1.0.0/user/register?_limit=5',{ headers: {"Authorization" : `Bearer ${JWTToken}`}})
  .then(res=>showOutput(res.data))
  .catch(err=>console.log(err));
}

//LOGGED IN USERS GET REQUEST
function logedinUser() {
  axios.get('https://virtserver.swaggerhub.com/v1b3m/Pelard-N/1.0.0/user/login?_limit=5',{ headers: {"Authorization" : `Bearer ${JWTToken}`}})
  .then(res=>showOutput(res.data))
  .catch(err=>console.log(err));
}

// PUT/PATCH REQUEST
function updateUser() {
  console.log('UPDATE Request');
}

// DELETE REQUEST
function removeUser() {
  console.log('DELETE Request');
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('register').addEventListener('click', registerUser);
document.getElementById('login').addEventListener('click', loginUser);
document.getElementById('registered').addEventListener('click', registeredUser);
 document.getElementById('logedin').addEventListener('click', logedinUser);
// document.getElementById('post').addEventListener('click', addUser);
// document.getElementById('update').addEventListener('click', updateUser);
// document.getElementById('delete').addEventListener('click', removeUser);
// document.getElementById('sim').addEventListener('click', getData);
// document.getElementById('headers').addEventListener('click', customHeaders);
// document
//   .getElementById('transform')
//   .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);
