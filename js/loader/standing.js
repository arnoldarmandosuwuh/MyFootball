const getResultStandingsJSON = (data) => {
    let tableStandingsHtml = ''
    let tableStandings = ''
    
    let dataStanding = data.standings

    dataStanding.map((dataItem) => {
        dataItem.table.map((item) => {
            tableStandings += `
                <tr>
                    <td class="center-align">${item.position}</td>
                    <td>
                        <a href="./pages/detailteam.html?id=${item.team.id}">
                            <p style="display: flex; align-items: center;">
                                <img class="materialboxed" style="float:left; margin-right:20px" width="50" height="50" src="${item.team.crestUrl}" alt="crestCLub">
                                ${item.team.name}
                            </p>
                        </a>
                    </td>
                    <td class="center-align">${item.playedGames}</td>
                    <td class="center-align">${item.won}</td>
                    <td class="center-align">${item.draw}</td>
                    <td class="center-align">${item.lost}</td>
                    <td class="center-align">${item.goalsFor}</td>
                    <td class="center-align">${item.goalsAgainst}</td>
                    <td class="center-align">${item.goalDifference}</td>
                    <td class="center-align">${item.points}</td>
                </tr>
            `
        })
    })

    tableStandingsHtml += `
        <div class="card-content">
            <span class="card-title">${data.competition.name}</span>
            <table class="responsive-table striped centered">
                <thead>
                    <tr>
                        <th class="center-align">Position</th>
                        <th class="center-align">Team</th>
                        <th class="center-align">P</th>
                        <th class="center-align">W</th>
                        <th class="center-align">D</th>
                        <th class="center-align">L</th>
                        <th class="center-align">GF</th>
                        <th class="center-align">GA</th>
                        <th class="center-align">GD</th>
                        <th class="center-align">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableStandings}
                </tbody>
            </table>
        </div>
    `



    document.getElementById("standings").innerHTML = tableStandingsHtml
}
