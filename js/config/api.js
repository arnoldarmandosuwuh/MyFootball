const baseUrl = 'https://api.football-data.org/v2'
const apiToken = 'ddd5d2bbc9434bfbb4b69ea7216392b2'
const idLiga = 2021
const idTeam = 66

const endpointStandings = `${baseUrl}/competitions/${idLiga}/standings?standingType=TOTAL`
const endpointNextMatches = `${baseUrl}/competitions/${idLiga}/matches?status=SCHEDULED`
const endpointLastMatches = `${baseUrl}/competitions/${idLiga}/matches?status=FINISHED`
const endpointLastTeamMatches = `${baseUrl}/teams/${idTeam}/matches?status=FINISHED&limit=10`
const endpointDetailTeam = `${baseUrl}/teams/`
const endpointDetailMatch = `${baseUrl}/matches/`
const endpointDetailPlayer = `${baseUrl}/players/`

const typeMatchesNext = 'next'
const typeMatchesLast = 'last'

const status = (response) => {
    if (response.status !== 200) {
        console.log(`Error :  ${response.status}`)
        return Promise.reject(new Error(response.statusText))
    } else {
        return Promise.resolve(response)
    }
}

const json = (response) => {
    return response.json()
}

const error = (error) => {
    console.log(`Error :  ${error}`)
}

const fetchAPI = (endpoint) => {
    return fetch(endpoint, {
        headers: {
            "X-Auth-Token": apiToken
        }
    })
}

const getStandings = () => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointStandings).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultStandingsJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointStandings)
            .then(status)
            .then(json)
            .then((data) => {
                getResultStandingsJSON(data)
                resolve(data)
            })
    
        .catch(error)
    })
}

const getHomeMatches = () => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointLastTeamMatches).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultHomeMatchesJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointLastTeamMatches)
            .then(status)
            .then(json)
            .then((data) => {
                getResultHomeMatchesJSON(data);
                resolve(data);
            })
        .catch(error)
    })
}

const getNextMatches = () => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointNextMatches).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultMatchesJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointNextMatches)
            .then(status)
            .then(json)
            .then((data) => {
                getResultMatchesJSON(data);
                resolve(data);
            })
        .catch(error)
    })
}

const getLastMatches = () => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointLastMatches).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultMatchesJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointLastMatches)
            .then(status)
            .then(json)
            .then((data) => {
                getResultMatchesJSON(data);
                resolve(data);
            })
        .catch(error)
    })
}

const getTeamDetail = (teamID) => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointDetailTeam + teamID).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultTeamInfoJSON(data)
                        resolve(data)
                    })
                }
            })
        }

        fetchAPI(endpointDetailTeam + teamID)
            .then(status)
            .then(json)
            .then((data) => {
                getResultTeamInfoJSON(data)
                resolve(data)
            })
        .catch(error)
    })
}

const getMatchDetail = (matchID) => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointDetailMatch + matchID).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultMatchDetailJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointDetailMatch + matchID)
            .then(status)
            .then(json)
            .then((data) => {
                getResultMatchDetailJSON(data)
                resolve(data)
            })
        .catch(error)
    })
}

const getPlayerDetail = (playerID) => {
    return new Promise((resolve, reject) => {
        if ("caches" in window) {
            caches.match(endpointDetailPlayer + playerID).then((response) => {
                if (response) {
                    response.json().then((data) => {
                        getResultPlayerDetailJSON(data)
                        resolve(data)
                    })
                }
            })
        }
    
        fetchAPI(endpointDetailPlayer + playerID)
            .then(status)
            .then(json)
            .then((data) => {
                getResultPlayerDetailJSON(data)
                resolve(data)
            })
        .catch(error)
    })
}

const tabMatches = (type) => {
    if (type === typeMatchesNext) {
        getNextMatches()
    }
    else if(type === typeMatchesLast) {
        getLastMatches()
    }
}