const typeTeams = 'teams'
const typeMatches = 'matches'
const typePlayers = 'players'
const favTeam = 'fav_team'
const favMatch = 'fav_match'
const favPlayer = 'fav_player'

const tabFavorite = (type) => {
    if (type === typeTeams) {
        getAllFavorites(favTeam).then((data) => {
            getResultTeamFavoritesJSON(data)
        })
    }
    else if(type === typeMatches) {
        getAllFavorites(favMatch).then((data) => {
            getResultMatchFavoritesJSON(data)
        })
    }
    else if(type === typePlayers) {
        getAllFavorites(favPlayer).then((data) => {
            getResultPlayerFavoritesJSON(data) 
        })
    }
}

const getFavoriteById = (ID, type) => {
    if (type === typeTeams) {
        getById(ID, favTeam).then((data) => {
            getResultTeamInfoJSON(data)
        })
    }
    else if (type === typeMatches) {
        getById(ID, favMatch).then((data) => {
            getResultMatchDetailJSON(data)
        })
    }
    else if (type === typePlayers) {
        getById(ID, favPlayer).then((data) => {
            getResultPlayerDetailJSON(data)
        })
    }
}

const addToFavorite = (data, storeName) => {
    let dataPrimaryKey
    if (storeName === favTeam) {
        dataPrimaryKey = data.id        
    }
    else if (storeName === favMatch) {
        dataPrimaryKey = data.match.id
    }
    else if (storeName === favPlayer) {
        dataPrimaryKey = data.id
    }

    cekDB(idb)
        .then((db) => {
            let tx = db.transaction(storeName, "readwrite")
            let store = tx.objectStore(storeName)
            
            store.put(data, dataPrimaryKey)

            return tx.complete
        })
        .then(() => {
            M.toast({
                html: "Berhasil ditambahkan ke favorite",
            })
        })
        .catch(() => {
            M.toast({
                html: "Gagal ditambahkan ke favorite",
            })
        })
}

const removeFavorites = (ID, storeName) => {
    cekDB(idb)
        .then((db) => {
            let tx = db.transaction(storeName, "readwrite")
            let store = tx.objectStore(storeName)

            store.delete(ID)

            return tx.complete
        })
        .then(() => {
            M.toast({
                html: "Berhasil dihapus dari favorite",
            })
        })
        .catch(() => {
            M.toast({
                html: "Gagal dihapus ke favorite",
            })
        })

    location.reload()
}

const getAllFavorites = (storeName) => {
    return new Promise((resolve, reject) => {
        cekDB(idb)
            .then((db) => {
                let tx = db.transaction(storeName, "readonly")
                let store = tx.objectStore(storeName)
                
                return store.getAll()
            })
            .then((data) => {
                resolve(data)
            })
    })
}

const getById = (ID, storeName) => {
    return new Promise((resolve, reject) => {
        cekDB(idb)
            .then((db) => {
                let tx = db.transaction(storeName, "readonly")
                let store = tx.objectStore(storeName)

                return store.get(ID)
            })
            .then((data) => {
                resolve(data)
            })
    })
}