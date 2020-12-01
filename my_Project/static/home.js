

var links = document.querySelectorAll(".btn-dark")

var items = document.querySelectorAll(".page-item")

function added(index){
    document.querySelectorAll('.adder_of_cart')[index-1].classList.toggle("not_added")
    document.querySelectorAll('.adder_of_cart')[index-1].classList.toggle("added")
    document.querySelectorAll('.fa-plus')[index-1].classList.toggle("hiderr")
}


function add_to_cart(slug,index){
    console.log("the index is " + index)
    flag = document.querySelectorAll('.ooo')[ index  - 1].classList.contains('added')
    if(flag){

        $.ajax({
            type:"GET",
            url : "/cart/id="+slug+"/delete",
            success:function(){
                console.log('deleted')
                added(index)
            }
        })

    }else{

        $.ajax({
            type: "GET" , 
            url : "/cart/id="+slug,
            success : function(reponse){
                console.log("added to the cart")
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
        console.log(rows[rows.length-1])
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


function try_me(index){
  console.log(  document.querySelectorAll(".fideo")[index-1].style.height)
}
function play_me(index,value){

    var nodes = Array.prototype.slice.call( document.getElementsByClassName('image_of_card'));
  
    index = nodes.indexOf( value )
    
    document.querySelectorAll(".fideo")[index].style.display = "block"
    setTimeout(function(){
        document.querySelectorAll(".fideo")[index].style.opacity = "1"
        document.querySelectorAll(".fideo")[index].play()
    },.00001)
     
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

