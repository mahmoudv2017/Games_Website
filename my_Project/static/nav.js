 // var browser = document.querySelector(".dropdown-toggle")

    var container = document.querySelector(".navey")
    var headers = document.querySelectorAll('.coley')
    var login_butt = document.querySelector('.loginner')

    var text = document.querySelector(".search_text")
    var tar = document.querySelector(".target")

    function login(){
        login_butt.classList.toggle("droppies3")
    }


  function styyler(index){

    document.querySelectorAll('svg')[index].style.backgroundColor = "white"
    document.querySelectorAll('svg')[index].style.color = "black"


  }

  function styyler_off(index){

    document.querySelectorAll('svg')[index].style.backgroundColor = "#353131"
    document.querySelectorAll('svg')[index].style.color = "#e4e3e3"


  }

  $(".search_of_form").on("submit" , function(e){
    e.preventDefault()
    console.log(text.value)
    window.location.href = '/search='+text.value+"/page=1"
    // $.ajax({

        

    //     type : "GET",
    //     url : '/search='+text.value+"/page=1",
    //     success:function(reponse){
    //         console.log(reponse)
    //         $("body").html(reponse)
    //     }
        
    // })
  })
    // function search_me(){


        
    //     $.ajax({

    //         type : "GET",
    //         url : '/search='+text.value+"/page=1",
    //         success:function(reponse){
    //             console.log(reponse)
    //         }
            
    //     })

    //     if(text.value != ""){

    //         tar.action =  tar.action+"search=" + text.value + "/page=1"

    //     }
    // }


    function myFunction() {
  return "Write something clever here...";
    }



function openNav() {
    document.querySelector(".spin_me").style.opacity = 0
    document.getElementById("mySidenav").style.width = " 176px";
    document.querySelectorAll('path').forEach(item => {
        item.style.display = 'none'
    })

    setTimeout(function(){
        console.log('asdasd')
        document.querySelectorAll('path').forEach(item => {
            item.style.display = 'block'
        })
    },140)

}

function show_side(option){
    if (option == "show"){
        document.querySelector('.side_menuu').style.display = 'block'
    }
    
}

function closeNav() {

document.querySelector(".spin_me").style.opacity = 1

document.getElementById("mySidenav").style.width = "0";

document.querySelectorAll('path').forEach(item => {
    item.style.display = 'none'
})




}

function openlister(lister) {
    if(lister == ".lister2"){
        document.querySelector(lister).classList.toggle("hhh")
    }else{
        document.querySelector(lister).classList.toggle("heigh")
    }

}

