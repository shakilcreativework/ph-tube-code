const isVerified = true;

// if(isVerified == true){
//     console.log('user is verified');
// }else{
//     console.log('user is not verified');
// }

console.log(`${isVerified === true ? 'user is verified' : 'user is not verified'}`);


function getTimeString(time){
    // get hour and reset seconds
    const hour = parseInt(time / 3600);
    const remainingSecond = time % 3600;
    const remainingMinute = parseInt(remainingSecond / 60);
    const second = remainingSecond % 60;
    return `${hour} hour ${remainingMinute} minite ${second} second ago`;
}

console.log(getTimeString(786536));