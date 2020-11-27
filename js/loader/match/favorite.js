const getResultMatchFavoritesJSON = (data) => {
    let matchFavoriteHtml = ''
    let dataMatchFavorite = ''
    let emptyData = ''

    data.map((item, index) => {
        dataMatchFavorite +=`
            <div class="row">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">${item.match.competition.name} - Matchday ${item.match.season.currentMatchday}</span>
                        <div class="row valign-wrapper">
                            <div class="col s1 m1 l1">
                                ${index+1}
                            </div>
                            <div class="col s4 m4 l4 center-align">
                                <div class="row">
                                    <div class="col s12 m12 l12">
                                        <div class="col s10 m10 l10">
                                            ${item.match.homeTeam.name}
                                        </div>
                                        <div class="col s2 m2 l2">
                                            ${item.match.score.fullTime.homeTeam !== null ? item.match.score.fullTime.homeTeam : '-'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s3 m3 l3 center-align">
                                <p>VS</p>
                                <p>${convertDate(new Date(item.match.utcDate).toLocaleDateString())}</p>
                                <p>${new Date(item.match.utcDate).toLocaleTimeString()}</p>
                            </div>
                            <div class="col s4 m4 l4 center-align">
                                <div class="row">
                                    <div class="col s12 m12 l12">
                                        <div class="col s2 m2 l2">
                                            ${item.match.score.fullTime.awayTeam !== null ? item.match.score.fullTime.awayTeam : '-'}
                                        </div>
                                        <div class="col s10 m10 l10">
                                            ${item.match.awayTeam.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn-small blue" href="./../../pages/detailmatch.html?id=${item.match.id}&saved=true"><i class="material-icons">info_outline</i></a>
                            <a class="waves-effect waves-light btn-small red" onclick="removeFavorites(${item.match.id}, 'fav_match')"><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    
    emptyData += `<p><strong>Empty Data</strong></p>`

    matchFavoriteHtml += `
        <div class="card">
            <div class="card-content">
                <div class="row>
                    <div class="col s12 m12 l12">
                        ${data.length > 0 ? dataMatchFavorite : emptyData}
                    </div>
                </div>                    
            </div>
        </div>
    `;


    document.getElementById("favorite-item").innerHTML = matchFavoriteHtml
}