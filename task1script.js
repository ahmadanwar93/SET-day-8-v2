const titleArr = ["This is video one","This is video two","This is video three","This is video four"];
const aboutArr = ["This is the description of video one. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem aliquam cumque et illo vitae pariatur perspiciatis amet eius ipsa vel nisi, distinctio error voluptas voluptatibus dolores voluptatem assumenda tempora sit fugiat placeat impedit magnam. Voluptatibus eaque ipsam itaque voluptatum dolorum dolore sapiente ullam tenetur voluptate perspiciatis architecto iste quasi, sed cum earum sunt distinctio? "
,"This is the description of video two. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem aliquam cumque et illo vitae pariatur perspiciatis amet eius ipsa vel nisi, distinctio error voluptas voluptatibus dolores voluptatem assumenda tempora sit fugiat placeat impedit magnam. Voluptatibus eaque ipsam itaque voluptatum dolorum dolore sapiente ullam tenetur voluptate perspiciatis architecto iste quasi, sed cum earum sunt distinctio? "
,"This is the description of video three. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem aliquam cumque et illo vitae pariatur perspiciatis amet eius ipsa vel nisi, distinctio error voluptas voluptatibus dolores voluptatem assumenda tempora sit fugiat placeat impedit magnam. Voluptatibus eaque ipsam itaque voluptatum dolorum dolore sapiente ullam tenetur voluptate perspiciatis architecto iste quasi, sed cum earum sunt distinctio? "
,"This is the description of video four. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem aliquam cumque et illo vitae pariatur perspiciatis amet eius ipsa vel nisi, distinctio error voluptas voluptatibus dolores voluptatem assumenda tempora sit fugiat placeat impedit magnam. Voluptatibus eaque ipsam itaque voluptatum dolorum dolore sapiente ullam tenetur voluptate perspiciatis architecto iste quasi, sed cum earum sunt distinctio? "];

var volume = 0; // initially the video is muted
var currentIndex = 0;




function switchVideo(arrayNum,pathVid){
    document.getElementById("vid").src = pathVid;
    document.getElementById("title").innerHTML = titleArr[arrayNum];
    document.getElementById("paragraph").innerHTML = aboutArr[arrayNum];
}

// function switchVid(pathVid){
//     document.getElementById("vid").src = pathVid;
// }

function playVideo(){
    if (document.getElementById("vid").paused){
        document.getElementById("vid").play();
        document.getElementById("play-pause-btn").innerHTML = '<i class="fas fa-pause"></i>' ;  
    }else{
        document.getElementById("vid").pause();
        document.getElementById("play-pause-btn").innerHTML = 
        '<i class="fas fa-play"></i>';
    }
    
}

// var volume_2 = volume;

function adjustVolume(incrementVolume){
    volume += incrementVolume;
    // console.log(volume);
    if (volume >= 1){
        volume = 1;
    }else if (volume <= 0){
        volume = 0;
    }else{
        document.getElementById("vid").volume = volume;
        console.log(document.getElementById("vid").volume);
        document.getElementById("volume-level-indicator").innerHTML = (volume*100).toFixed(0);
        
        document.getElementById("inner-bar").style.height = (volume*100) + '%';
        console.log((volume*100));
        // volume_2 = volume;
    }
}

// function muteVolume(){
//     volume = 0;
//     document.getElementById("vid").volume = volume;
//     document.getElementById("inner-bar").style.height = (volume*100) + '%';
//     console.log(document.getElementById("vid").volume);
//     document.getElementById("volume-level-indicator").innerHTML = (volume*100).toFixed(0);
// }


function muteVolume(){

    if (volume > 0){
        volume = 0;
    document.getElementById("vid").volume = volume;
    document.getElementById("inner-bar").style.height = (volume*100) + '%';
    console.log(document.getElementById("vid").volume);
    document.getElementById("volume-level-indicator").innerHTML = (volume*100).toFixed(0);
    } else if(volume == 0){
        // volume = volume_2;
        document.getElementById("vid").volume = volume;
    document.getElementById("inner-bar").style.height = (volume*100) + '%';
    console.log(document.getElementById("vid").volume);
    document.getElementById("volume-level-indicator").innerHTML = (volume*100).toFixed(0);
    }
    
}

