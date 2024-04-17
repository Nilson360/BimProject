const apiToken = 'BBUS-2oSuiE5GRqZM1JKPjOxBpZZFYShRyB';
const deviceId ='661f8ac47ea13d2d1578cb3f';
const apiUrl = 'https://industrial.api.ubidots.com/api/v2.0/devices/${deviceId}';


function getDataDevice(){
    fetch(apiUrl,{
        method: 'GET',
        headers: {
            'X-Auth-Token': apiToken
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error));
}

console.log('Coucou')