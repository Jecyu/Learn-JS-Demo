self.addEventListener('message', function(e) {
  console.log(e.data);
  self.postMessage('Jecyu knows' + e.data);
})