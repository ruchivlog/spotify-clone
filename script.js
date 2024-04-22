    
    console.log("welcome to spotify");

    let songIndex=0;
   
 let audioElement=new Audio('songsru/1.mp3');
   let masterPlay=document.getElementById('masterPlay');
   let myprogressbar=document.getElementById('myprogressbar');
   let gif=document.getElementById('gif');
     let masterSongName = document.getElementById("masterSongName");
    let songItem= Array.from(document.getElementsByClassName('songItem'));


      let songs=[
        {
            songName:"sita ram" ,filepath: "songsru/1.mp3",coverPath: "covers/1.jpg"},
        
        {
            songName:"ishq wala love" ,filepath: "songsru/2.mp3",coverPath:"covers/2.jpg"},
        
        {
            songName:"ye dil kya keh raha hai" ,filepath: "songsru/3.mp3",coverPath: "covers/3.jpg"},
         {
            songName:"kehte hai khuda ne" ,filepath: "songsru/4.mp3",coverPath: "covers/4.jpg"},
        {
            songName:"perfect" ,filepath: "songsru/5.mp3",coverPath: "covers/5.jpg"},
            {
                songName:"ram siya ram" ,filepath: "songsru/6.mp3",coverPath: "covers/6.jpg"},
                
                {
                    songName:"tere liye" ,filepath: "songsru/7.mp3",coverPath: "covers/7.jpg"},
                    {
                        songName:"kehsarishya" ,filepath: "songsru/8.mp3",coverPath: "covers/8.jpg"},
                        {
                            songName:"deva deva" ,filepath: "songsru/9.mp3",coverPath: "covers/9.jpg"},
                            {
                                songName:"shiv ka das" ,filepath: "songsru/10.mp3",coverPath: "covers/10.jpg"},
                                                        
     

      ]
       songItem.forEach((element,i)=>{
        

        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[i].songName;


       })
      //handle play/pause click
        masterPlay.addEventListener('click',()=>{
            if(audioElement.paused||audioElement.currentTime<=0){
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                gif.style.opacity=1;
            }
              else{
                audioElement.pause();
                    masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                gif.style.opacity=0;
              }
        })
      audioElement.addEventListener('timeupdate',()=>{
       // console.log('timeupdate');
          //update seekbar
          progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        
            myprogressbar.value=progress;
      })
      //listen to events
        
  myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
  })


    const makeAllPlays=()=>{
    
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');  
     element.classList.add('fa-circle-play');
        })
    }
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            
            index = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`songsru/${index+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');

        })
     })
      document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9){
            songIndex=0

        }
        else{
            songIndex+=1;
        }
           audioElement.src=`songsru/${songIndex+1}.mp3`;
           masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
           audioElement.play();
           masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');

        
       })
       document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0

        }
        else{
            songIndex-=1;
        }
           audioElement.src=`songsru/${songIndex+1}.mp3`;
           masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
           audioElement.play();
           masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');

        
       })

       