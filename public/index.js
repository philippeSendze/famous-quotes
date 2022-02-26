const quote = document.getElementById('quote')
const author = document.getElementById('author')

document.addEventListener('DOMContentLoaded', function()
{
    axios.get('/citation')
        .then(response => {
            quote.innerHTML="\""+response.data.quote+"\""
            author.innerHTML="- "+response.data.author
        })
        .catch(function (error) {
            console.error(error);
        })
}
)

