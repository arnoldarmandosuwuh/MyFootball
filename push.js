var webPush = require("web-push");

const vapidKeys = {
    "publicKey": "BP1QMU2wdbNXi3XYm51p6Fzo6djeVMbNHwxLMSv8CU7spP8Y5TyRqFF_VQ9mmGgD_Vaio7_NgOoe3K92foOgXEQ",
    "privateKey": "wS0BQhMzpf-z-NTtZDuX3njeQYG-O2sK_QhLjYs6Uk4"
};

webPush.setVapidDetails(
    'mailto:arnoldarmando07@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/f_J1WQUBfQA:APA91bE4BdSmurS_JLJFFrN8JvVjhQKziT-f97YXHekeoWJWv6TaEQeY8HzrnnzIBA3On392-z4ieK3kF6uTKWbuCysvPEBLg1x8ZEsuzWUJUOxAVUkb-8XbKofvPV0ucQw16i2XIGsD",
    "keys": {
        "p256dh": "BCXcFqRla0KEwJkPo25+tEewW2es+ELwEqe/KtS4MXlhu01GnlhgbogZu9wQXRHp1pfBLhkqb0digPsMBYk8Jks=",
        "auth": "zzCL6gqHtFVzQJ3Z3GW4Fw=="
    }
};

var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
    gcmAPIKey: "489603865116",
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);