// console.log('file connect');

// convert time string
function getTimeString(time){
    // get hour and reset seconds
    const hour = parseInt(time / 3600);
    const remainingSecond = time % 3600;
    const remainingMinute = parseInt(remainingSecond / 60);
    const second = remainingSecond % 60;
    return `${hour} hour ${remainingMinute} minite ${second} second ago`;
}


const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('category-btn');
    // console.log(buttons);
    for(let btn of buttons){
        btn.classList.remove('active');
    }
};

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
        const buttonContainer = document.createElement('div');
        // button.classList = 'btn px-10 py-2 border-none bg-black text-white';
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadCategoriesVideos(${item.category_id})" class="btn px-10 py-2 border-none bg-black text-white category-btn">${item.category}</button>
        `;

        // add button to category content
        categoryContainer.append(buttonContainer);
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



// 
const loadCategoriesVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            // sobaike active claas remove koro
            removeActiveClass();

            // ei id er button e active class add koro
            const activeBtn = document.getElementById(`btn-${id}`);
            // console.log(activeBtn);
            activeBtn.classList.add("active");
            DisplayVideos(data?.category);
        })
        .catch(err => console.log(err))
};

// load video details
const loadDetails = async (videoId) => {
    // console.log(videoId);
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(uri);
    const data = await res.json();
    // console.log(data?.video);
    displayDetails(data?.video);
};


// display details
const displayDetails = (video) => {
    // console.log(video);
    const deatilsContainer = document.getElementById('modal-content');

    // way-1
    // document.getElementById('showModalData').click();

    // way-2
    document.getElementById('customModal').showModal();
};


// create DisplayVideos
const DisplayVideos = (videos) => {
    // console.log(videos);
    // add data in html
    // console.log(videos); // see, data recevied or not

    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = '';

    if(videos.length === 0){
        videosContainer.classList.remove('grid');
        videosContainer.innerHTML = `
            <div class="min-h-[300px] flex flex-col gap-5 justify-center w-full">
                <img src="asset/Frame-3.png" />
            </div>
        `;
        return;
    }else{
        videosContainer.classList.add('grid');
    }

    videos?.forEach(video => {
        // console.log(video.authors[0]?.verified);
        // create a div element for video card
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[200px] relative">
            <img
            class="h-full w-full object-cover"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
            ${video?.others?.posted_date ? `<span class="absolute bottom-2 right-2 px-5 py-1 text-sm rounded-md bg-black text-white bg-opacity-75">${getTimeString(video?.others?.posted_date)}</span>` : ''} 
            
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
                <div>
                    <p><button onclick="loadDetails('${video?.video_id}')" class="btn btn-sm bg-red-500 mt-2">details</button></p>
                </div>
            </div>
        </div>
        `;
        videosContainer.append(card);
    });
};

loadVideos();