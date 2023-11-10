
let tv={
 
  on: true,
  valume:0,

  liga:function(){

    if(this.on == false){
      document.getElementById("myFrame").src="https://www.youtube.com/embed/8bvY-YpAeQs?autoplay=1";
      this.on = true;

    }else if(this.on == true){
      document.getElementById("myFrame").src=" ";
      this.on = false;
    }
  },

  aumentar:function(){ 

  }, 
  diminuir:function(){

  },

   
}

function proximo(){
  document.getElementById("myFrame").src = "https://www.youtube.com/embed/Be-27Nwe4_o";
}

function anterior(){
  document.getElementById("myFrame").src = "https://www.youtube.com/embed/8bvY-YpAeQs";
}
