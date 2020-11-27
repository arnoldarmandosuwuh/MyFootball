const getResultPlayerFavoritesJSON = (data) => {
    let playerFavoriteHtml = ''
    let dataPlayerFavorite = ''
    let emptyData = ''

    data.map((item, index) => {
        dataPlayerFavorite += `
            <div class="row">
                <div class="card">
                    <div class="card-content">
                        <div class="row valign-wrapper">  
                            <div class="col s1 m1 l1">
                                ${index+1}
                            </div>
                            <div class="col s3 m3 l3 left-align">
                                ${item.name}
                            </div>
                            <div class="col s4 m4 l4">
                                ${item.countryOfBirth}, ${convertDate(new Date(item.dateOfBirth).toLocaleDateString())}
                            </div>
                            <div class="col s2 m2 l2">
                                ${item.nationality}
                            </div>
                            <div class="col s2 m2 l2">
                                ${item.position}
                            </div>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn-small blue" href="./../../pages/detailplayer.html?id=${item.id}&saved=true"><i class="material-icons">info_outline</i></a>
                            <a class="waves-effect waves-light btn-small red" onclick="removeFavorites(${item.id}, 'fav_player')"><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    emptyData += `<p><strong>Empty Data</strong></p>`

    playerFavoriteHtml += `
        <div class="card">
            <div class="card-content">
                <div class="row>
                    <div class="col s12 m12 l12">
                    ${data.length > 0 ? dataPlayerFavorite : emptyData}
                    </div>
                </div>                    
            </div>
        </div>
    `;

    document.getElementById("favorite-item").innerHTML = playerFavoriteHtml
}