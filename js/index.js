const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];

 function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    
    ramens.forEach(ramen => {
        const imgElement = document.createElement('img');
        imgElement.src = ramen.image;
        imgElement.alt = ramen.name;
        imgElement.title = `${ramen.name} from ${ramen.restaurant}`;
        
        
       
        ramenMenu.appendChild(imgElement);
    });
}


console.log(displayRamens())


function handleClick(event) {
    const ramenDetail = document.getElementById('ramen-detail');
    
   
    let ramenData;

    if (event.target.id === 'shoyu') {
        ramenData = { name: 'Shoyu Ramen', restaurant: 'Ichiran', rating: '5', comment: 'Delicious!' };
    } else if (event.target.id === 'miso') {
        ramenData = { name: 'Miso Ramen', restaurant: 'Menya', rating: '4', comment: 'Very flavorful!' };
    } else if (event.target.id === 'tonkotsu') {
        ramenData = { name: 'Tonkotsu Ramen', restaurant: 'Ramen-ya', rating: '5', comment: 'Rich and creamy!' };
    }

    ramenDetail.innerHTML = `
    <h2>${name}</h2>
    <p>Restaurant: ${restaurant}</p>
    <p>Rating: ${rating}</p>
    <p>Comment: ${comment}</p>
`;

}


var ramenMenu = document.getElementById('ramen-menu');
ramenMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') { 
        handleClick(event);
    }
});


const addSubmitListener = () => {

document.getElementById('ramen-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const restaurant = document.getElementById('restaurant').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const image = document.getElementById('image').value;

   
    const img = document.createElement('img');
    img.src = image;
    img.alt = name;  
    img.dataset.restaurant = restaurant;
    img.dataset.rating = rating;
    img.dataset.comment = comment;

    
    img.addEventListener('click', handleClick(newRamen));

    
    document.getElementById('ramen-menu').appendChild(img);

    
    event.target.reset();
});
};

function main(){
  displayRamens();
  addSubmitListener();
}

