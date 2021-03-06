const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    /* 
    * switch .. case 
    switch(choice)
    {
        case 'sunny':
            para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an icecream";
            break;
        case 'rainy':
            para.textContent = "Rain is falling outside; take a rain coat and umbrella, and don\'t stay out for too long";
            break;
        case 'snowing':
            para.textContent = "The snow is comming down - it is freezing! Best to stay in with a cup of hot coffee, or go buile a snowman";
            break;
        case 'overcast':
            para.textContent = "It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case";
            break;
        default:
            para.textContent = "";
    }
    */
   
    /* if .. else if .. else */
    if (choice == 'sunny') {
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an icecream";
    }
    else if (choice == 'rainy') {
        para.textContent = "Rain is falling outside; take a rain coat and umbrella, and don\'t stay out for too long";
    }
    else if (choice == 'snowing') {
        para.textContent = "The snow is comming down - it is freezing! Best to stay in with a cup of hot coffee, or go buile a snowman";
    }
    else if (choice == 'overcast') {
        para.textContent = "It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case";
    }
    else {
        para.textContent = "";
    }
}