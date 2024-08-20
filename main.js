if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker', reg))
        .catch((error) => console.log('service not register', error))
}