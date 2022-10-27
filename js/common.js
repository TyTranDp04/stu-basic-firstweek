// video
var btn_videos = document.querySelector('.concerns__img-icon');
var play_videos = document.querySelector('.concerns__img-video');
var close_videos = document.querySelector('.close');
var pause_video = document.querySelectorAll('iframe');
btn_videos.addEventListener('click', () =>{
  play_videos.classList.add('hide');;
})
close_videos.addEventListener('click', () =>{
  play_videos.classList.remove('hide');
  for (let i = 0; i < pause_video.length; i++) {
    if (pause_video[i] !== null) {
       var temp = pause_video[i].src;
       pause_video[i].src = temp;
    }
 }
})

// end video 


// collapse

var coll = document.getElementsByClassName("c__btn");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      console.log(typeof content.style.maxHeight)
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// end collapse

// 