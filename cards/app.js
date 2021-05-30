let data = [
    {
        Title: 'Tropic Thunder',
        rating: '#1'
    },
    {
        Title: 'Wolf of Wall Street',
        rating: '#2'
    },
    {
        Title: 'The Dark Knight',
        rating: '#3'
    },
    {
        Title: 'Parasite',
        rating: '#4'
    },
    {
        Title: 'Interstellar',
        rating: '#5'
    },
    {
        Title: ' The Sandlot',
        rating: '#6'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return ( '<div>' + item.Title + ' is ' + item.rating +  '</div>' 
    )
})

info.innerHTML = details.join('\n');