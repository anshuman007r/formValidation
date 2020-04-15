export const getResponseBody = async res => {
  try {
    return await res.json();
  } catch (e) {
      return {e
        // message : res.ok ? 'success' : 'error'
      }
  }
};

export const resolveRequest = async res => {
  try {
    const output =  await getResponseBody(res);
    if(res.ok){
      const validResponse = {
        status: res.status,
        ...output,
      };

      return Promise.resolve(validResponse);
    }

    else {
        return Promise.reject({
          status: res.status,
          statusText: res.statusText,
          message: output.message,
        })
    }
  }catch (e) { 
      return Promise.reject({
        status: res.status,
        statusText: res.statusText
      });
  }
};

export const apiCall = (url = '', data = {})  => {
  return fetch(url, {
    method: data.method, // *GET, POST, PUT, DELETE, etc.
    credentials: data.credentials ? 'include': undefined,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer',
    },
    body: data.bodyData ? JSON.stringify(data.bodyData) : undefined,
  })
  // .then((res)=>{return res})
  // .then((data)=>console.log(data.body));
  .then(resolveRequest)
  .then((res)=>{return res})
  .catch((e)=>{return (e)});

  // .then(response => response);
  // .then(async(res) => {return await res.json()} ).then(console.log)
}