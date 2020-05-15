const siteUrl = 'https://co19-backend.herokuapp.com';

export default function graphQLRequest(
  variables,
  method,
  apiMethod,
  token,
  id,
) {
  var init =
    apiMethod == 'GET'
      ? {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
          },
        }
      : {
          method: apiMethod,
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? token : '',
          },
          body: JSON.stringify(variables),
        };
  return fetch(siteUrl + method, init)
    .then((res) =>
      res.json().then((data) => {
        var apiData = {
          status: res.status,
          data: data,
        };
        return apiData;
      }),
    )
    .catch((err) => {
      console.log('err', err);
      var apiData = {
        status: 900,
        data: 'Please check your internet connection.',
      };
      return apiData;
    });
}
