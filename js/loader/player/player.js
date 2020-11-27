const getResultPlayerDetailJSON = (data) => {
    let tablePlayerDetailHtml = ''

    tablePlayerDetailHtml += `
        <table class="striped">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="font-weight: bold;">Name</td>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">First Name</td>
                    <td>${data.firstName}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Last Name</td>
                    <td>${data.lastName}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Country of Birth</td>
                    <td>${data.countryOfBirth}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Date of Birth</td>
                    <td>${convertDate(new Date(data.dateOfBirth).toLocaleDateString())}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Nationality</td>
                    <td>${data.nationality}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Position</td>
                    <td>${data.position}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Shirt Number</td>
                    <td>${data.shirtNumber}</td>
                </tr>
            </tbody>
        </table>

        <div class="right-align" style="font-size: 12px;">Last Updated: ${convertDate(new Date(data.lastUpdated).toLocaleDateString())}</div>
    `

    document.getElementById("preloader").innerHTML = ''
    document.getElementById("logo-container").innerHTML = data.name
    document.getElementById("playerDetail").innerHTML = tablePlayerDetailHtml
}