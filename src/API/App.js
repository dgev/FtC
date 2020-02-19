function deleteAuthToken() {
  localStorage.removeItem('token');
  window.location.reload();
}
function getAuthToken() {
  return localStorage.getItem('token');
}
function getHeaders() {
  const auth = getAuthToken();
  if (!auth) {
    return {};
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth}`,
  };
}

async function request(url, headers = {}, method = 'GET', body = {}) {
  const options = {
    method,
    headers: {
      ...getHeaders(),
      ...headers,
    },
    body,
  };
  //   const response = await fetch(url, options);
  //   if (response.status === 401) {
  //     throw new Error('401');
  //   }
  //   const data = response.json();
  //   return data;
}

export const makeGet = async (url, headers, body) => request(url, headers, body);
export const makePost = async (url, headers, body) => request(url, headers, body, 'POST');
