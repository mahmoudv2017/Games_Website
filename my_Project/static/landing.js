
// const items2 = document.querySelector(".itemss")
// const header_image = document.querySelectorAll(".header_image")
// const header = document.querySelectorAll(".headdd")
// let startx = 0
// let isdown = false


    // header_image.forEach(e => {
    //     e.addEventListener("mousemove" , function(itemer,index) {
    //         setTimeout(function(){
    //             e.classList.add("show")
    //             console.log({itemer,index})
    //             header[0].classList.add("show_head")
    //         },200)
            
    //     })
    //     e.addEventListener("mouseleave" , itemer => {
    //         setTimeout(function(){
    //             e.classList.remove("show")
    //             header[0].classList.remove("show_head")
    //         },200)
        
    //     })
    // })


//    function not_my_function(index){
//        index = index-1
//        setTimeout(function(){
//         header_image[index].classList.add("show")
//         header[index].classList.add("show_head")
//     },500)
//    }
   
//    function not_my(index){
//     index = index-1
//     setTimeout(function(){
//         header_image[index].classList.remove("show")
//         header[index].classList.remove("show_head")
//     },500)
//    }


// items2.addEventListener('mouseup',e => {
//     isdown = false
// })

// items2.addEventListener('mousedown',e => {
//     isdown = true
//     //so we dont count the margin

//     startx = e.pageX - items2.offsetLeft
//     scrollLeft = items2.scrollLeft
// })

// items2.addEventListener('mouseleave',e => {
//     isdown = false
    
// })

// items2.addEventListener('mousemove',e => {
//     if(!isdown) return;
//     e.preventDefault()
//     const x = e.pageX - items2.offsetLeft

  

//     const walk2 = (x - startx)
//     items2.scrollLeft = scrollLeft - walk2
// })

