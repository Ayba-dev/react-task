self.addEventListener('install', (event) => {
    console.log('service worker has been installed')
})

//new
//new..
self.addEventListener('activate', (event) => {
    console.log('service worker has been activated')
})