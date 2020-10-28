

// var star = document.querySelectorAll(".game-text .fa-star").forEach(item => {
//     item.addEventListener("mousemove",function(){
//         console.log('sadasd')
//         item.classList.add("checked")
// })

// })
t = false
function like(index,type , comment_id , slug){
    var vtn_up  = document.querySelectorAll('.fa-thumbs-up')[index-1]
    var vtn_down  = document.querySelectorAll('.fa-thumbs-down')[index-1]
    if(vtn_up.style.color != "blue" && vtn_down.style.color != "red"){
        if(type == "up"){
          

            $.ajax({
                type : 'GET',
                url :  "/id="+ slug +"/AddComment/"+ comment_id +"/reply=like",
                success:function(reponse){
    
                    document.querySelectorAll('.fa-thumbs-up')[index-1].style.color = "blue";
                    document.querySelectorAll('.like_counter')[index-1].innerText = parseInt(document.querySelectorAll('.like_counter')[index-1].innerText) + 1
                    console.log(reponse)
                }
                
                
            })

   
       }else{

        
       
            $.ajax({
                type : 'GET',
                url :  "/id="+ slug +"/AddComment/"+ comment_id +"/reply=dislike",
                
                success:function(){
    
                    document.querySelectorAll('.fa-thumbs-down')[index-1].style.color = "red";
                    document.querySelectorAll('.dislike_counter')[index-1].innerText = parseInt(document.querySelectorAll('.dislike_counter')[index-1].innerText) + 1
                }
                
                
            })

            
   
           
   
       }

    }
       
   
    }
    

var comments = document.querySelectorAll('.comment_1')

var comments_form = document.querySelectorAll('.comment_former')
var comment_vaue = 'asd'
function edit_comment(index){

    comments[index-1].classList.toggle("hide")
    comments_form[index-1].classList.toggle("hide")
}

function add_reply(index){
    var comments_form = document.querySelectorAll('.comment_reply')
    comments_form[index-1].classList.toggle("hide")

}
f = false
function view_replies(index){
    var replies = document.querySelectorAll('.replies')
    var btn = document.getElementById("reply_button")
    
    if(!f){
        btn.innerText = "Hide Replies"
        f= true
    }else{
        btn.innerText = "Show Replies"
        f =false
    }
    
    replies[index-1].classList.toggle("show_reply")
}
var vid = document.querySelector(".video")
function playvideo(){

    vid.pause()
    
}


function Delete_comment( index, id , slug){
    document.querySelectorAll(".comment-manager")[index-1].innerHTML = "<h1>LOADING....<h1>"
    $.ajax({
        type : 'GET',
        url :  "/id="+slug+"/DeleteComment/"+id+"/reply=false",
    
        success:function(data){
        

            $("body" ).html(data)
        }
        
        
    })
}
 $(".my-rating").starRating({
    starSize: 25,
    strokeColor: '#894A00',
    initialRating:  $(".my-rating")[0].attributes.role.nodeValue,
    callback: function(currentRating, $el){
        // make a server call here
        
   
        req = $.ajax({
            type : 'POST',
            url : '/id='+$el[0].id+"/Current_Rating="+currentRating,
            data : {
                'Current_Rating' : currentRating,
                csrfmiddlewaretoken : $('input[name = csrfmiddlewaretoken]').val()
            },
        })

        req.done(function(data){
            console.log(data)
            $("body").html(data)
            
        })
        
    }
    });

