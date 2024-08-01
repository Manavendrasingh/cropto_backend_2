
const FetchData = async ()=>{
    const apiKey = 'dd679abb-a9fa-4651-9c83-9e5c9d417fa7';
    const url = 'https://api.livecoinwatch.com/coins/list';
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({"currency":"USD","sort":"rank","order":"ascending","offset":0,"meta":false})
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
      }

}
export default FetchData;