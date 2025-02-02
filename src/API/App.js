function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}
function getAuthToken() {
  return localStorage.getItem("token");
}
function setAuthToken(token) {
  localStorage.setItem("token", token);
}
const baseUrl = "http://localhost:8080";
function getHeaders() {
  const auth = getAuthToken();
  if (auth) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth,
    };
  }
  return {
    "Content-Type": "application/json",
  };
}

async function request(url, headers = {}, method, body = {}, useToken = false) {
  const options = {
    method,
    headers: {
      ...getHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(baseUrl + url, options);

  const data = response.json();

  if (response.status / 100 !== 2) {
    // data.then(json => {
    throw new Error(data);
    // });
  }

  data
    .then(json => {
      if (useToken) {
        setAuthToken(json.token, json.user.id, json.user.isCompany, json.user.username);
      }
    })
    .catch(e => console.log(e));

  return data;
}

async function getRequest(url, headers = {}, method, body = {}, useToken = false) {
  const getOptions = {
    method,
    headers: {
      ...getHeaders(),
      ...headers,
    },
  };
  const response = await fetch(baseUrl + url, getOptions);
  const data = response.json();
  data.then(json => {
    if (useToken) {
      setAuthToken(json.token, json.user.id);
    }
  });
  // .catch(e => console.log(e));

  return data;
}
export const makeGet = async (url, headers, body, useToken) =>
  getRequest(url, headers, "GET", body, useToken);
export const makePost = async (url, headers, body, useToken) =>
  request(url, headers, "POST", body, useToken);
export const makeDelete = async (url, headers, body) => request(url, headers, "DELETE", body);
export const makePut = async (url, headers, body, useToken) =>
  request(url, headers, "PUT", body, useToken);
export { logout };
