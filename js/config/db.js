const cekDB = (idb) => {
    let promisedDb = idb.open("football-apps", 1, (db) => {    
        if (!db.objectStoreNames.contains(favMatch)) {
            let matchObjectStore = db.createObjectStore(favMatch, {
                keypath: "id"
            })

            matchObjectStore.createIndex("homeTeamName", "match.homeTeam.name", {
                unique: false
            })

            matchObjectStore.createIndex("awayTeamName", "match.awayTeam.name", {
                unique: false
            })
        }

        if (!db.objectStoreNames.contains(favTeam)) {
            let teamsObjectStore = db.createObjectStore(favTeam, {
                keypath: "id"
            })
            
            teamsObjectStore.createIndex("teamName", "name", {
                unique: false
            })
        }

        if (!db.objectStoreNames.contains(favPlayer)) {
            let playerObjectStore = db.createObjectStore(favPlayer, {
                keypath: "id"
            })

            playerObjectStore.createIndex("playerName", "name", {
                unique: false
            })
        }
    })

    return promisedDb
}