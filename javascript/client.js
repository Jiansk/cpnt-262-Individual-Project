////// fteching the api data //////
function fetchData() {
    // console.log("GOT"); ///////TEST///////
    fetch('https://thronesapi.com/api/v2/Characters').then(Response => {
        
        if (!Response.ok){
            throw error('error');
        }
        return Response.json();
    })
/////// printing the api //////    
    .then(data => {
        console.log(data);
        const html = data.map(user => {
            return `<div class='user'>
            <p><img src="${user.imageUrl}" alt="${user.name}" /></p>
            <p>Name: ${user.fullName}</p>
            <p>Family: ${user.family}</p>
            <p>Title: ${user.title}</p>
            </div>`;
        })
        .join('');
        console.log(html);

        document
        .querySelector('#app')
        .insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error)
    });
}

fetchData();