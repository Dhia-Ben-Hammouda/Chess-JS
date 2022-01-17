var choice;

const move = (element) => {
   const elements = Array.from(document.getElementsByTagName("img"));

   elements.forEach((element) => {
      element.addEventListener("mousedown", () => {
         element.style.position = "absolute";
         choice = element;

         document.onmousemove = (e) => {
            var x = e.pageX;
            var y = e.pageY;

            choice.style.left = x - 50 + "px";
            choice.style.top = y - 50 + "px";

         }
      })
   })

   document.onmouseup = (e) => {
      choice = null;

      rotate_board();
   }
}




let images = Array.from(document.getElementsByTagName("img"));
let board = document.getElementsByClassName("container");

let divs = Array.from(document.getElementsByTagName("div"));




rotate_board = () => {
   board.style.transform = "rotate(180deg);";

   images.forEach((img, index, arr) => {
      img.style.transform = "rotate(180deg);";
      console.log("fuck");
   })

}


