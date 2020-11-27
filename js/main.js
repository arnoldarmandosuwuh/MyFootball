if ("serviceWorker" in navigator) {
    registerServiceWorker()
    requestPermission()
} else {
    console.log('Service Worker belum didukung browser ini.')
}

function registerServiceWorker() {
    return navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log('Registrasi Service Worker berhasil.')
            return registration
        })
        .catch((err) => {
            console.error('Registrasi Service Worker gagal.', err)
        })
}

function requestPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then((result) => {
            if (result === 'denied') {
                console.log('Fitur notifikasi tidak diizinkan.')
                return
            }
            else if (result === 'default') {
                console.error('Pengguna menutup kotak dialog permintaan izin.')
                return
            }
    
            navigator.serviceWorker.ready.then(() => {
                if (("PushManager") in window) {
                    navigator.serviceWorker.getRegistration().then(function(registration) {
                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlBase64ToUint8Array('BP1QMU2wdbNXi3XYm51p6Fzo6djeVMbNHwxLMSv8CU7spP8Y5TyRqFF_VQ9mmGgD_Vaio7_NgOoe3K92foOgXEQ')
                        }).then((subscribe) => {
                            console.log('Berhasil subscribe')
                            console.log(`Endpoint : ${subscribe.endpoint}`)
                            console.log(`p256dh : ${btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh'))))}`)
                            console.log(`Auth key : ${btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('auth'))))}`)
                        }).catch((e) => {
                            console.error('Tidak dapat melakukan subscribe', e.message)
                        })
                    })
                }
            })
        })
    }
}