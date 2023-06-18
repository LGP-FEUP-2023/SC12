import { Linking } from 'react-native';

const handleDeepLink = ({event}) => {
    if (event === undefined) return;
    const url = event.url;
    const { path, queryParams } = Linking.parse(url);
  
    const { padel_company_id, padel_court_id } = queryParams;
  
    const joinCourtUrl = `https://MEM4PRO/ID_PLACEHOLDER/join_court/${padel_company_id}/${padel_court_id}`;
  
    let matchId = fetch('https://{endpoint}/match', {
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
    });

    return matchId;


export {
    handleDeepLink
}
  