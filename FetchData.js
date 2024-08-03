import 'dotenv/config'

const FetchData = async ()=>{
    const url_cropto = 'https://api.livecoinwatch.com/coins/list';
    const url_stock = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.API_STOCK}`
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_CROPTO
      },
      body: JSON.stringify({"currency":"USD","sort":"rank","order":"ascending","offset":0,"meta":false})
    };
    
    try {
        const response = await fetch(url_cropto, options);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
      }

}
export default FetchData;