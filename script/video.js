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


// const categoryDemo = {
//     "category_id": "1001",
//     "category": "Music"
// };

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



// only help for codes
// const videoDemo = {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// };


// create DisplayVideos
const DisplayVideos = (videos) => {
    // add data in html
    // console.log(videos); // see, data recevied or not

    const videosContainer = document.getElementById('videos');
    videos?.forEach(video => {
        // console.log(video.authors[0]?.verified);
        // create a div element for video card
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[200px]">
            <img
            class="h-full w-full object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div class="px-0 py-5 flex gap-2">
            <div>
                <div class="w-10 h-10 rounded-full bg-black object-cover"></div>
            </div>
            <div>
                <h2 class="font-bold">${video?.title}</h2>
                <div class="flex gap-2 items-center">
                    <p class="text-sm">${video?.authors[0]?.profile_name}</p>
                    ${video?.authors[0]?.verified === true ? '<img class="w-5 h-5 rounded-full object-cover" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" />' : ''}
                    
                </div>
                <p></p>
            </div>
        </div>
        `;
        videosContainer.append(card);
    });
};

loadVideos();