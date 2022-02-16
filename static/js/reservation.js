const TRAVEL_TICKET = {
        'Пожарная служба':[
            ['asd'],
            ['asd'],
            ['asd']
        ],
        'Пожарная служба':[
            ['asd'],
            ['asd'],
        ],
        'Пожарная служба':[
            ['asd']
        ]
}

window.onload = function(){
document.querySelector('.connect').innerHTML = <table class = "rezNr"></table>
    for(key in TRAVEL_TICKET) {
        let row = document.createElement('tr')
        row.innerHTML = '<td colspan="2">${key}<td>'
        document.querySelector('.phone').appendChild(row)
        for(let i=0; i<TRAVEL_TICKET[key].length; i++) {
            let row = document.createElement('tr')
            row.innerHTML = `
                <td>${TRAVEL_TICKET[key][i][0]}</td>
            `
            document.querySelector('rezNr').appendChild(row)
        }
    }
}