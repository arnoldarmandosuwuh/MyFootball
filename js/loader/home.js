const getResultHomeMatchesJSON = (data) => {
    let dataMatches = ''
    let matchesHtml = ''

    let dataMatch = data.matches
    
    dataMatch.map((data) => {
        dataMatches +=`
            <div class="row">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">${data.competition.name} - Matchday ${data.season.currentMatchday}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red" href="./../../pages/detailmatch.html?id=${data.id}"><i class="material-icons">info_outline</i></a>
                        <div class="row valign-wrapper">
                            <div class="col s4 m4 l4 center-align">
                                <div class="row">
                                    <div class="col s12 m12 l12">
                                        <div class="col s10 m10 l10">
                                            ${data.homeTeam.name}
                                        </div>
                                        <div class="col s2 m2 l2">
                                            ${data.score.fullTime.homeTeam}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s4 m4 l4 center-align">
                                <p>VS</p>
                                <p>${convertDate(new Date(data.utcDate).toLocaleDateString())}</p>
                                <p>${new Date(data.utcDate).toLocaleTimeString()}</p>
                            </div>
                            <div class="col s4 m4 l4 center-align">
                                <div class="row">
                                    <div class="col s12 m12 l12">
                                        <div class="col s2 m2 l2">
                                            ${data.score.fullTime.awayTeam}
                                        </div>
                                        <div class="col s10 m10 l10">
                                            ${data.awayTeam.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    })
    matchesHtml += `
        <div class="card">
            <div class="card-content">
                <div class="row>
                    <div class="col s12 m12 l12">
                        ${dataMatches}
                    </div>
                </div>                    
            </div>
        </div>
    `;

    document.getElementById("club-name").innerHTML = `Last Match - Manchester United FC`
    document.getElementById("home-matches").innerHTML = matchesHtml
}