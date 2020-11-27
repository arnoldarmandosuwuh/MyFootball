importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

workbox.precaching.precacheAndRoute([
    { url: "/", revision: "1" },
    { url: "/manifest.json", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/index.html", revision: "1" },
    { url: "/pages/detailmatch.html", revision: "1" },
    { url: "/pages/detailplayer.html", revision: "1" },
    { url: "/pages/detailteam.html", revision: "1" },
    { url: "/pages/favorites.html", revision: "1" },
    { url: "/pages/home.html", revision: "1" },
    { url: "/pages/matches.html", revision: "1" },
    { url: "/pages/standings.html", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/css/fontawesome/fontawesome.min.css", revision: "1" },
    { url: "/css/fontawesome/all.min.css", revision: "1" },
    { url: "/js/config/api.js", revision: "1" },
    { url: "/js/config/db.js", revision: "1" },
    { url: "/js/config/favorite.js", revision: "1" },
    { url: "/js/loader/home.js", revision: "1" },
    { url: "/js/loader/nav.js", revision: "1" },
    { url: "/js/loader/standing.js", revision: "1" },
    { url: "/js/loader/match/detail.js", revision: "1" },
    { url: "/js/loader/match/favorite.js", revision: "1" },
    { url: "/js/loader/match/match.js", revision: "1" },
    { url: "/js/loader/player/favorite.js", revision: "1" },
    { url: "/js/loader/player/player.js", revision: "1" },
    { url: "/js/loader/team/favorite.js", revision: "1" },
    { url: "/js/loader/team/team.js", revision: "1" },
    { url: "/js/utils/helpers.js", revision: "1" },
    { url: "/js/idb.js", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/js/jquery-2.1.1.min.js", revision: "1" },
    { url: "/js/main.js", revision: "1" },
], {
    ignoreUrlParametersMatching : [/.*/]
})

workbox.routing.registerRoute(
    new RegExp("/assets/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "icons"
    })
)

workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
               url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate(),
  );

workbox.routing.registerRoute(
    new RegExp("/pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages"
    })
)

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)

self.addEventListener("push", (event) => {
    let body
    
    if (event.data) {
        body = event.data.text()
    } else {
        body = "Push message no payload"
    }

    let options = {
        body: body,
        icon: "/assets/icons/icon-512x512.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    }

    event.waitUntil(
        self.registration.showNotification("Push Notification", options)
    )
})