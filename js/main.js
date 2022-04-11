


   function control(){
       let w = document.getElementById('width').value
       let h = document.getElementById('height').value
       let r = document.getElementById('radius').value
       let color = document.getElementById('color').value


       document.getElementById('figure').style.width = w +"px"
        document.getElementById('figure').style.height = h +"px"
        document.getElementById('figure').style.borderRadius = r +"%"
        document.getElementById('figure').style.backgroundColor = color;

   }