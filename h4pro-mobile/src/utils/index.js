import { Linking } from 'react-native';

const join_court = ({event}) => {
    if (event === undefined) return;
    const url = event.url;
    const { path, queryParams } = Linking.parse(url);
  
    const { padel_company_id, padel_court_id } = queryParams;
  
    const joinCourtUrl = `https://MEM4PRO/ID_PLACEHOLDER/join_court/${padel_company_id}/${padel_court_id}`;
  
    let matchId = fetch(joinCourtUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': accessToken,
      },
      body: JSON.stringify({
        courtId: data,
        timestamp: gettime(),
      }),
    }.then(response => response.json())
    .then(json => {
      return json.matchId;
    })
    .catch(error => {
      console.error(error);
    }));

    return matchId;
}

const leave_court = ({matchId}) => {
  let ret_val = fetch('https://{endpoint}/leave_match/' + matchId, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorizantion': accessToken,
      },
      body: JSON.stringify({
        timestamp: gettime(),
      }),
    }.then(response => response.json())
    .then((json) => {
      return true;
    })
    .catch(error => {
      console.error(error);
      return false
    }));

  return ret_val;
}


const login = () => {
  let userToken = fetch('https://{endpoint}/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }.then(response => response.json())
    .then(json => {
      return json.token;
    })
    .catch(error => {
      console.error(error);
      return "error";
    }));

  return userToken;
}

const logout = () => {
  let userToken = fetch('https://{endpoint}/logout', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }.then(response => response.json())
    .then(() => {
      return true;
    })
    .catch(error => {
      console.error(error);
      return false;
    }));

  return userToken;
}

export {
  join_court,
  leave_court,
  login,
  logout,
}
  