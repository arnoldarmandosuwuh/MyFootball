const getResultTeamFavoritesJSON = (data) => {
    let teamFavoriteHtml = ''
    let dataTeamFavorite = ''
    let dataTeamCompetition = ''
    let emptyData = ''

    data.map((item, index) => {

        item.activeCompetitions.map((competition) => {
            dataTeamCompetition += `
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

        dataTeamFavorite += `
            <div class="row">
                <div class="card">
                    <div class="card-content">
                        <div class="row valign-wrapper">
                            <div class="col s1 m1 l1">
                                ${index+1}
                            </div>
                            <div class="col s1 m1 l1 center-align">
                                <img class="materialboxed" style="float:left; margin-right:20px" width="50" height="50" src="${item.crestUrl}" alt="crestCLub">
                            </div>
                            <div class="col s3 m3 l3 left-align">
                                ${item.name}
                            </div>
                            <div class="col s3 m3 l3">
                                ${item.venue}
                            </div>
                            <div class="col s4 m4 l4">
                                ${dataTeamCompetition}
                            </div>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn-small blue" href="./../../pages/detailteam.html?id=${item.id}&saved=true"><i class="material-icons">info_outline</i></a>
                            <a class="waves-effect waves-light btn-small red" onclick="removeFavorites(${item.id}, 'fav_team')"><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    emptyData += `<p><strong>Empty Data</strong></p>`

    teamFavoriteHtml += `
        <div class="card">
            <div class="card-content">
                <div class="row>
                    <div class="col s12 m12 l12">
                    ${data.length > 0 ? dataTeamFavorite : emptyData}
                    </div>
                </div>                    
            </div>
        </div>
    `;

    document.getElementById("favorite-item").innerHTML = teamFavoriteHtml
}