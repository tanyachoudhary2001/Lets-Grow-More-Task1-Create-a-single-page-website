
      //  life in zippy starts
       let thumbnail = document.getElementsByClassName("thumbnail");

       let activeImages = document.getElementsByClassName("active");
 
       for(var i=0; i<thumbnail.length ;i++){
         thumbnail[i].addEventListener("mouseover",function(){
           console.log("activeImages")
           if(activeImages.length>0){
             activeImages[0].classList.remove("active")
           }
           this.classList.add("active")
           document.getElementById("featured").src=this.src
 
         })
       }
 
       
       let buttonRight=document.getElementById("slideRight");
 
        
       buttonRight=addEventListener("click",function(){
         document.getElementById("slider").scrollLeft +=520
       } ) 
 
       let buttonLeft=document.getElementById("slideLeft");
 
       buttonLeft=addEventListener("click",function(){
         document.getElementById("slider").scrollLeft -=180
       } ) 


      //  life in zippy ends

      document.getElementById("demo").addEventListener("mouseover", mouseOver);
      document.getElementById("demo").addEventListener("mouseout", mouseOut);

      function mouseOver() {
        document.getElementById("demo").style.backgroundColor = "indigo",
        document.getElementById("demo").style.borderColor="indigo",
        document.getElementById("demo").style.color = "white"
      }
      function mouseOut() {
        document.getElementById("demo").style.backgroundColor = "#FFBF00",
        document.getElementById("demo").style.borderColor= "#FFBF00",
        document.getElementById("demo").style.color= "black"
      }

      document.getElementById("demo1").addEventListener("mouseover", mouseOver1);
      document.getElementById("demo1").addEventListener("mouseout", mouseOut1);

      function mouseOver1() {
        document.getElementById("demo1").style.backgroundColor = "indigo",
        document.getElementById("demo1").style.borderColor = "indigo",
        document.getElementById("demo1").style.color = "white"
      }
      function mouseOut1() {
        document.getElementById("demo1").style.backgroundColor = "#FFBF00",
        document.getElementById("demo1").style.borderColor = "#FFBF00",
        document.getElementById("demo1").style.color = "black"
      }

      document.getElementById("demo2").addEventListener("mouseover", mouseOver2);
      document.getElementById("demo2").addEventListener("mouseout", mouseOut2);

      function mouseOver2() {
        document.getElementById("demo2").style.backgroundColor = "indigo",
        document.getElementById("demo2").style.borderColor = "indigo",
        document.getElementById("demo2").style.color = "white"
      }
      function mouseOut2() {
        document.getElementById("demo2").style.backgroundColor = "#FFBF00",
        document.getElementById("demo2").style.borderColor = "#FFBF00",
        document.getElementById("demo2").style.color = "black"
      }

      {/* project button color */}

      document.getElementById("project").addEventListener("mouseover", mouseOver3);
      document.getElementById("project").addEventListener("mouseout", mouseOut3);
      function mouseOver3() {
        document.getElementById("project").style.backgroundColor = "indigo",
        document.getElementById("project").style.borderColor = "indigo",
        document.getElementById("project").style.color = "white"
      }
      function mouseOut3() {
        document.getElementById("project").style.backgroundColor = "white",
        document.getElementById("project").style.borderColor = "white",
        document.getElementById("project").style.color = "black"
      }

      document.getElementById("project1").addEventListener("mouseover", mouseOver4);
      document.getElementById("project1").addEventListener("mouseout", mouseOut4);
      function mouseOver4() {
        document.getElementById("project1").style.backgroundColor = "indigo",
        document.getElementById("project1").style.borderColor = "indigo",
        document.getElementById("project1").style.color = "white"
      }
      function mouseOut4() {
        document.getElementById("project1").style.backgroundColor = "white",
        document.getElementById("project1").style.borderColor = "white",
        document.getElementById("project1").style.color = "black"
      }

      document.getElementById("project2").addEventListener("mouseover", mouseOver5);
      document.getElementById("project2").addEventListener("mouseout", mouseOut5);
      function mouseOver5() {
        document.getElementById("project2").style.backgroundColor = "indigo",
        document.getElementById("project2").style.borderColor = "indigo",
        document.getElementById("project2").style.color = "white"
      }
      function mouseOut5() {
        document.getElementById("project2").style.backgroundColor = "white",
        document.getElementById("project2").style.borderColor = "white",
        document.getElementById("project2").style.color = "black"
      }

      document.getElementById("card-content").addEventListener("mouseover",mouseOver7);
      document.getElementById("card-content").addEventListener("mouseout",mouseOut7);

      function mouseOver7(){
        document.getElementById("card-content",).style.opacity = "1",
        document.getElementById("card-content").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team").style.opacity = "0.5"
      }

      function mouseOut7(){
        document.getElementById("card-content").style.opacity ="0",
        document.getElementById("team").style.opacity ="1"
      }

      document.getElementById("card-content1").addEventListener("mouseover",mouseOver8);
      document.getElementById("card-content1").addEventListener("mouseout",mouseOut8);

      function mouseOver8(){
        document.getElementById("card-content1").style.opacity = "1",
        document.getElementById("card-content1").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team1").style.opacity = "0.5"
      }

      function mouseOut8(){
        document.getElementById("card-content1").style.opacity ="0",
        document.getElementById("team1").style.opacity ="1"
      }

      document.getElementById("card-content2").addEventListener("mouseover",mouseOver9);
      document.getElementById("card-content2").addEventListener("mouseout",mouseOut9);

      function mouseOver9(){
        document.getElementById("card-content2").style.opacity = "1",
        document.getElementById("card-content2").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team2").style.opacity = "0.5"
      }

      function mouseOut9(){
        document.getElementById("card-content2").style.opacity ="0",
        document.getElementById("team2").style.opacity ="1"
      }

      document.getElementById("card-content3").addEventListener("mouseover",mouseOver10);
      document.getElementById("card-content3").addEventListener("mouseout",mouseOut10);

      function mouseOver10(){
        document.getElementById("card-content3").style.opacity = "1",
        document.getElementById("card-content3").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team3").style.opacity = "0.5"
      }

      function mouseOut10(){
        document.getElementById("card-content3").style.opacity ="0",
        document.getElementById("team3").style.opacity ="1"
      }

      document.getElementById("card-content4").addEventListener("mouseover",mouseOver11);
      document.getElementById("card-content4").addEventListener("mouseout",mouseOut11);

      function mouseOver11(){
        document.getElementById("card-content4").style.opacity = "1",
        document.getElementById("card-content4").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team4").style.opacity = "0.5"
      }

      function mouseOut11(){
        document.getElementById("card-content4").style.opacity ="0",
        document.getElementById("team4").style.opacity ="1"
      }

      document.getElementById("card-content5").addEventListener("mouseover",mouseOver12);
      document.getElementById("card-content5").addEventListener("mouseout",mouseOut12);

      function mouseOver12(){
        document.getElementById("card-content5").style.opacity = "1",
        document.getElementById("card-content5").style.backgroundColor="rgba(75,0,130, 0.5)",
        document.getElementById("team5").style.opacity = "0.5"
      }

      function mouseOut12(){
        document.getElementById("card-content5").style.opacity ="0",
        document.getElementById("team5").style.opacity ="1"
      }

      
    