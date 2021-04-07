export default function getData(fetchLink) {
  return fetch(fetchLink, {
    headers: new Headers({
      'Authorization': 'Bearer 2s2k2hv9lnmfj8ov1rmttv91l9q8vb',
      'Client-Id': 's48uvny0btj4xnmgv8gakjby24il18'
    })
  })
    .then(res => res.json())
}