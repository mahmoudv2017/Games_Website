

var links = document.querySelectorAll(".btn-dark")

var items = document.querySelectorAll(".page-item")

function added(index){
    document.querySelectorAll('.adder_of_cart')[index-1].classList.toggle("not_added")
    document.querySelectorAll('.adder_of_cart')[index-1].classList.toggle("added")
  
}
function take_me_details(type , slug , index ){
   
    game_name = ""

    if(type == "home"){
        game_name = document.querySelectorAll(".titlerr_of_card")[index-1].innerText
    }else{
        game_name = document.querySelectorAll(".column_2 .title")[index-1].innerText
    }
    if(game_name.includes("/")  ){
    
        window.location.href = "/game="+slug
    }else{
       
        window.location.href = "/game="+game_name
    }

}

function add_to_cart(slug,index){
    flag = document.querySelectorAll('.ooo')[ index  - 1].classList.contains('added')
    if(flag){

        $.ajax({
            type:"GET",
            url : "/cart/id="+slug+"/delete",
            success:function(){
             
                added(index)
            }
        })

    }else{

        $.ajax({
            type: "GET" , 
            url : "/cart/id="+slug,
            success : function(reponse){
             
                added(index)
            }
        })

    }
    
    
}
t = false
function give_me_more(key){
    req = $.ajax({
        type : 'GET',
        url : "/type="+key+"/page=more",
        success : function(data){
           
            rows = document.querySelectorAll('.row2')
            if(!t){
                $('.row2').html(data)
                t = true
            }else{
                rows[rows.length-1].innerHTML = data
            }
            
           
            
           
        }
    })

    req.done(function(data){
        rows = document.querySelectorAll('.row2')

    })
}

lastScrollTop = 0
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    
    document.querySelector('.second').classList.remove("seconderr_fixed")
   } else {
        if(st == 0){
            
            document.querySelector('.second').classList.remove("seconderr_fixed")
        
        }else{
            document.querySelector('.second').classList.add("seconderr_fixed")
        }
      
      
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

function order_me(){
    var selector = document.querySelector('select').value


    if(selector != 'ee'){
       
       window.location.href = "order="+selector

      
    }
}

var index_of_video = null


function play_me(value , vid_url , image_url ){
    
    console.log(value)
    var nodes = Array.prototype.slice.call( document.getElementsByClassName('image_of_card'));
  
    index = value -1
    index_of_video = index
    //paused = document.querySelectorAll(".fideo")[index].paused
  
    document.querySelectorAll(".loading_layer")[index].style.display = "flex"
    document.querySelectorAll(".fideo")[index].style.display = "block"
    document.querySelectorAll(".fideo")[index].attributes.src.value = vid_url != "" ? vid_url : image_url
    

    setTimeout(function(){
        
        document.querySelectorAll(".fideo")[index].style.opacity = "1"
        if(vid_url == ""){
            return
        }else{
          //  document.querySelectorAll(".loading_layer")[index].style.display = "none"
           document.querySelectorAll(".fideo")[index].play()
            
      
        //    var intervalid =  setInterval(function(){
        //         if(document.querySelectorAll(".fideo")[index].currentTime > 0.1){
        //             document.querySelectorAll(".loading_layer")[index].style.display = "none"
        //             clearInterval(intervalid)
        //         }
        //     } , 50)
           
            
            
           
        }

        
    },.0001)


    

   
   
     
}


function on_player(index){
    console.log('on player gere')
    var cur = index -1 
    document.querySelectorAll('.loading_layer')[cur].style.display = "none"
}

// if(index_of_video != null){
//     if(!document.querySelectorAll(".fideo")[index_of_video].paused){
//         document.querySelectorAll(".loading_layer")[index_of_video].style.display = "none"
//     }
// }


function pause_me(index , vid_url){
    index = index -1

     document.querySelectorAll(".fideo")[index].style.opacity = "0"
     document.querySelectorAll(".fideo")[index].attributes.src.value = null
     document.querySelectorAll(".loading_layer")[index].style.display = "none"
     
     if(vid_url == ""){
        return
    }else{
        document.querySelectorAll(".fideo")[index].pause()
        document.querySelectorAll(".fideo")[index].currentTime = 0;
    }

    
     
}


function go_details(slug){
    if(window.location.href.slice(-1,) == "/"){
        window.location.href = "/id="+slug+"/page="+ '1'
    }
    else if( window.location.href.slice(-1,) == "?"){
        window.location.href = "/id="+slug+"/page="+ '1s'
    }
    else{
        window.location.href = "/id="+slug+"/page="+ window.location.href.slice(-1,)
    }
    

}



// while (true){
//     if(index_of_video != null){
//         if(!document.querySelectorAll(".fideo")[index_of_video].paused){
//             document.querySelectorAll(".loading_layer")[index_of_video].style.display = "none"
//             break
//         }
//     }
// }
// links.forEach(function(x,i){
//     x.addEventListener("click",function(){
        
//         console.log(i)
//         items[i+1].classList.add("active")
        
//       if(window.location.href.slice(27,32) == "games" || window.location.href.slice(27,32) == ""){
//             window.location.href = "/type=games/page="+x.innerText

//       }else{
//         var y =  window.location.href.slice(0,-2)
        
//         window.location.href = y + x.innerText + "?"
        
//       }
      
       
           
//     })

   
// })

