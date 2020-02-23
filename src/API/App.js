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
  const auth = getAuthToken();
  if (!auth) {
    return {
      "Content-Type": "application/json",
    };
  }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth}`,
  };
}

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
  setAuthToken(data.token);
  return data;
}

export const makeGet = async (url, headers, body) => request(url, headers, "GET", body);
export const makePost = async (url, headers, body) => request(url, headers, "POST", body);
