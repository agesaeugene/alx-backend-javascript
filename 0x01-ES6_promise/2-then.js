export default function handleResponseFromAPI(promise) {
  const xhr = { status: 200, body: 'success' };

  return promise
    .then(() => xhr)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
