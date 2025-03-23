// console.log('file connect');


// 1. Fetch, Load and Show Categories on html

// create loadCategories
const loadCategories = () => {
    // fetch the data
    const data = fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => DisplayCategories(data?.categories))
        .catch(err => console.log(err))
};


// {
//     "category_id": "1001",
//     "category": "Music"
// }

// create DisplayCategories
const DisplayCategories = (categories) => {
    // add data in html
    // console.log(categories); // see, data recevied or not

    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {
        // console.log(item);
        // create a button element
        const button = document.createElement('button');
        button.classList = 'btn px-10 py-2 border-none bg-black text-white';
        button.innerText = item?.category;

        // add button to category content
        categoryContainer.append(button);
    });
};

// load categories call
loadCategories();


// create loadVideos
const loadVideos = () => {
    // fetch the data
    const data = fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => DisplayVideos(data?.videos))
        .catch(err => console.log(err))
};


// create DisplayVideos
const DisplayVideos = (videos) => {
    // add data in html
    // console.log(videos); // see, data recevied or not

    const videosContainer = document.getElementById('videos');
    videos?.forEach(video => {
        console.log(video);
    });
};

loadVideos();