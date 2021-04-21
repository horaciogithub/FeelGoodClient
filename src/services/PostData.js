export function PostData(type, userData) {

    let BaseUrl = 'http://localhost:8000/api/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer '
            },

            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })

            .catch((error) => {
                reject("Fallo de conexión " + error)
            })
    })
}