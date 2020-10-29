

var links = document.querySelectorAll(".btn-dark")

var items = document.querySelectorAll(".page-item")


function give_me_more(key){
    $.ajax({
        type : 'GET',
        url : "/type="+key+"/page=more",
        success : function(data){
            console.log(data)
            $("body").html(data)
        }
    })
}


function order_me(){
    var selector = document.querySelector('select').value

    console.log(selector)
    if(selector != 'ee'){
        window.location.href = "order="+selector
    }
}


function try_me(index){
  console.log(  document.querySelectorAll(".fideo")[index-1].style.height)
}
function play_me(index,value){

    var nodes = Array.prototype.slice.call( document.getElementsByClassName('image_of_card'));
    console.log(nodes.indexOf( value ))
    index = nodes.indexOf( value )
    
    document.querySelectorAll(".fideo")[index].style.display = "block"
    setTimeout(function(){
        document.querySelectorAll(".fideo")[index].style.opacity = "1"
        document.querySelectorAll(".fideo")[index].play()
    },.01)
     
}

function pause_me(index){
    index = index -1

     document.querySelectorAll(".fideo")[index].style.opacity = "0"
     document.querySelectorAll(".fideo")[index].pause()
     document.querySelectorAll(".fideo")[index].currentTime = 0;
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