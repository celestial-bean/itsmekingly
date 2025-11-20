function loadBody(page) {
  let body = document.querySelector(".body");
body.classList.remove("show");
  setTimeout(() => {
  switch (page) {
    case "dino-facts":
      body.innerHTML = `<div class='dino-facts'>
        <h3 style="font-size:150%" >Dino Facts:</h3>
            <ul >
                <li>The Parasaurolophus is my favorite dinosaur</li>
                <li>Triceratops horns are made of toenail</li>
                <li>Pleasiosaur skin was actually found to be a lot like sea turtles' which are their closest relative</li>
                <li> My <strong style="font-size:150%">favorite </strong>fact!! Not all dinosaurs are birds, but all birds are dinosaurs
            </ul>
    </div>`;
    break;
    case "hats":
      body.innerHTML="<img src='images/hats.jpg' width=90%>";
      break;
      case "singer":
        singVideo.volume=0.2
        singVideo.onload=singVideo.play()
        body.innerHTML="";
        body.appendChild(singVideo)
        break;
    case "discord":
     body.innerHTML = '<div style="overflow:hidden; width:100% height:100% display:inline-block; justify-content:center; align-items:center;"><iframe src="https://discord.com/widget?id=624821823414075392&theme=dark" width="100%" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>';
	break 
    case "pookie":
	    body.innerHTML="<img src='images/pookie.jpg' width='90%'  height='auto'>";
	break
	}
	body.classList.add("show");
},200)
}

var babyoil=new Audio("audio/babyoil.webm");
babyoil.volume=.1;
babyoil.loop=true;
document.onmousemove=()=>{babyoil.play();document.onmousemove=""}

var singVideo=document.createElement("video");
singVideo.src="videos/sing.mov";
singVideo.style.width="90%";
singVideo.loop=true;
singVideo.controls=true;
singVideo.onplay=()=>{babyoil.pause()};
singVideo.onended=()=>{babyoil.play()};
singVideo.onpause=()=>{babyoil.play()};
console.log("completed");
