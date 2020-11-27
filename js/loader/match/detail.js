const getResultMatchDetailJSON = (data) => {
    let matchDetailHtml = ''

    let dataMatch = data.match
    let dataH2h = data.head2head

    matchDetailHtml += `
        <div class="left-align">${dataMatch.competition.name} Matchday: ${dataMatch.matchday}</div>
        <div class="left-align">
            Kick Off: ${convertDate(new Date(dataMatch.utcDate).toLocaleDateString())} 
            - 
            ${new Date(dataMatch.utcDate).toLocaleTimeString()}
        </div>

        <div class="row">
            <div class="col s5 m5 l5 center-align"> <h5> <a href="../../../pages/detailteam.html?id=${dataMatch.homeTeam.id}">${dataMatch.homeTeam.name}</a> </h5> </div>
            <div class="col s2 m2 l2 center-align"> <h5> ${dataMatch.score.fullTime.homeTeam !== null ? dataMatch.score.fullTime.homeTeam : '-'}  VS  ${dataMatch.score.fullTime.awayTeam !== null ? dataMatch.score.fullTime.awayTeam : '-'} </h5> </div>
            <div class="col s5 m5 l5 center-align"> <h5> <a href="../../../pages/detailteam.html?id=${dataMatch.awayTeam.id}">${dataMatch.awayTeam.name}</a> </h5> </div>
        </div>

        <h6 class="center-align">${dataMatch.venue}</h6>
        <hr>
        <div class="center-align">Matches: ${dataH2h.numberOfMatches}</div>
        <div class="center-align">Total Goals: ${dataH2h.totalGoals}</div>

        <table class="striped centered" style="margin-top: 30px; margin-bottom: 30px;">
            <thead></thead>
            <tbody>
                <tr>
                    <td>${dataH2h.homeTeam.wins}</td>
                    <td style="font-weight: bold;">Wins</td>
                    <td>${dataH2h.awayTeam.wins}</td>
                </tr>
                <tr>
                    <td>${dataH2h.homeTeam.draws}</td>
                    <td style="font-weight: bold;">Draws</td>
                    <td>${dataH2h.awayTeam.draws}</td>
                </tr>
                <tr>
                    <td>${dataH2h.homeTeam.losses}</td>
                    <td style="font-weight: bold;">Loses</td>
                    <td>${dataH2h.awayTeam.losses}</td>
                </tr>
            </tbody>
        </table>

        <div class="right-align" style="font-size: 12px;">Last Updated: ${convertDate(new Date(dataMatch.lastUpdated).toLocaleDateString())}</div>
    `

    document.getElementById("preloader").innerHTML = ''
    document.getElementById("matchDetail").innerHTML = matchDetailHtml
}