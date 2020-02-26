function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  window.location.reload();
}
function getAuthToken() {
  return localStorage.getItem("token");
}
function setAuthToken(token, id) {
  localStorage.setItem("token", token);
  localStorage.setItem("id", id);
}
const baseUrl = "http://localhost:8080";
function getHeaders() {
  const auth = getAuthToken();
  if (auth) {
    console.log(auth);
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + auth,
      // Accept: "application/json",
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
  console.log(options);

  const response = await fetch(baseUrl + url, options);
  const data = response.json();
  data
    .then(json => {
      console.log(json);
      if (useToken) {
        setAuthToken(json.token, json.user.id);
      }
      // console.log(json);
    })
    .catch(e => console.log(e));

  return data;
}

export const makeGet = async (url, headers, body, useToken) =>
  request(url, headers, "GET", body, useToken);
export const makePost = async (url, headers, body, useToken) =>
  request(url, headers, "POST", body, useToken);
export const makeDelete = async (url, headers, body) => request(url, headers, "DELETE", body);
export const makePut = async (url, headers, body, useToken) =>
  request(url, headers, "PUT", body, useToken);
export { logout };
