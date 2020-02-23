function deleteAuthToken() {
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
  // const auth = JSON.parse(getAuthToken());
  const auth = getAuthToken();
  // console.log(auth);
  if (auth) {
    return {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${auth}`,
    };
  }
  return {
    "Content-Type": "application/json",
  };
}
// export function authHeader() {
//   // return authorization header with jwt token
//   let user = JSON.parse(localStorage.getItem('user'));
//   if (user && user.token) {
//       return { 'Authorization': 'Bearer ' + user.token };
//   } else {
//       return {};
//   }
// }
async function request(url, headers = {}, method, body = {}) {
  const options = {
    method,
    headers: {
      ...getHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(baseUrl + url, options);
  if (response.status === 401) {
    throw new Error("401");
  }
  const data = response.json();
  data
    .then(json => {
      setAuthToken(json.token);
    })
    .catch(e => console.log(e));
  return data;
}

export const makeGet = async (url, headers, body) => request(url, headers, "GET", body);
export const makePost = async (url, headers, body) => request(url, headers, "POST", body);
