function loadBody(page) {
  let body = document.querySelector(".body");
  switch (page) {
    case "dino-facts":
      body.innerHTML = `<div class='dino-facts'>
        <h3>Dino Facts:</h3>
            <ul >
                <li>The Parasaurolophus is my favorite dinosaur</li>
                <li>Triceratops horns are made of toenail</li>
                <li>Pleasiosaur skin was actually found to be a lot like sea turtles' which are their closest relative</li>
                <li> My <strong style="font-size:150%">favorite </strong>fact!! Not all dinosaurs are birds, but all birds are dinosaurs
            </ul>
    </div>`;
  }
}
var babyoil=new Audio("audio/babyoil.webm");
babyoil.volume=.1;
babyoil.loop=true;
document.onmousemove=()=>{babyoil.play();}

console.log("completed");
