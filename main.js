if ('serviceWorker' in navigator) {
	
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/cesar2003.github.io/sw.js').then(function(
      registration) {

      // Si es exitoso
      console.log('SW registrado correctamente');
    }, function(err) {
      
      // Si falla
      console.log('SW fallo', err);
    });
  });
}
