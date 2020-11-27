const getResultTeamInfoJSON = (data) => {
    let overviewHtml = ''
    let squadHtml = ''
    let competitionsHtml = ''

    data.activeCompetitions.map((competition) => {
        competitionsHtml += `
            <div class="row">
                <div class="col s12 m12 l12">
                    <div class="row">
                        <div class="col s3 m3 l3">
                            ${competition.area.name}
                        </div>
                        <div class="col s9 m9 l9">
                            ${competition.name}
                        </div>
                    </div>
                </div>
            </div>
        `        
    })

    console.log(data)
    overviewHtml += `
        <tr>
            <td style="font-weight: bold;">Name</td>
            <td>${data.name}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Founded</td>
            <td>${data.founded}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Three Letter Abbreviation</td>
            <td>${data.tla}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Address</td>
            <td>${data.address}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Phone</td>
            <td>${data.phone}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Email</td>
            <td><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Website</td>
            <td><a href="${data.website}" target="_blank">${data.website}</a></td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Club Colors</td>
            <td>${data.clubColors}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Venue</td>
            <td>${data.venue}</td>
        </tr>
        <tr>
            <td style="font-weight: bold;">Active Competitions</td>
            <td>${competitionsHtml}</td>
        </tr>
    `

    let dataSquad = data.squad
    dataSquad.map((squad, index) => {
        squadHtml += `
            <tr>
                <td class="center-align">${index+1}</td>
                <td>${squad.name}</td>
                <td class="center-align">${squad.position !== null ? squad.position : '-'}</td>
                <td class="center-align"><a class="waves-effect waves-light btn-small blue" href="../../../pages/detailplayer.html?id=${squad.id}"><i class="material-icons">info_outline</i></a></td>
            </tr>
        `
    })

    document.getElementById("crestTeam").src = data.crestUrl
    document.getElementById("logo-container").innerHTML = data.name
    document.getElementById("nameTeam").innerHTML = data.name
    document.getElementById("preloader").innerHTML = ''
    document.getElementById("overviewTeam").innerHTML = overviewHtml
    document.getElementById("playerTeam").innerHTML = squadHtml
}