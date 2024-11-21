
const imagedata=[{url:'public\panther (2).jpeg', name:'panther'},{url:'public\lion.jpeg', name:'lion'}];
const searchbar=document.getElementById('site-search');
const searchbutton=document.getElementById('search-button')
const resultsContainer=document.getElementById('results');

searchbutton.addEventListener('click',()=>{
    const searchTerm=searchbar.value.toLowerCase();
    const filterimages=imagedata.filter(image=>{
        return image.name.toLowerCase().includes(searchTerm);
    });

    resultsContainer.innerHTML='';

    if(filterimages.length===0){
        resultsContainer.innerHTML='<p>No results found.</p>';
        return;
    }

    filterimages.forEach(image=> {
        const imgElement=document.createElement('img');
        imgElement.scr=image.url;
        imgElement.alt=image.name;
        resultsContainer.appendChild(imgElement);
    });

});