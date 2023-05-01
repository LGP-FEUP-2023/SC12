const handleDeepLink = ({event}) => {
    if (event === undefined) return;
    const url = event.url;
    const { path, queryParams } = Linking.parse(url);
  
    const { padel_company_id, padel_court_id } = queryParams;
  
    const joinCourtUrl = `https://MEM4PRO/ID_PLACEHOLDER/join_court/${padel_company_id}/${padel_court_id}`;
  
    fetch(joinCourtUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data;
    })
    .catch(error => {
      console.log(error)
      return -1;
    });
  };


export {
    handleDeepLink
}
  