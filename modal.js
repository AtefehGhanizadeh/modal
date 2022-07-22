

const showModalBtn=document.querySelector(".show-modal")

const modal=document.querySelector(".modal")

const backDrop=document.querySelector(".backdrop")

const closeModal=document.querySelector(".close-modal")

const confirmModal=document.querySelector(".confirm-modal")

// const body=document.querySelector("body")



showModalBtn.addEventListener("click",()=>{

    modal.style.opacity="1"
    backDrop.style.display="block"

    modal.style.transform="translateY(20vh)"
    
})

function closeModalFunc(){

    modal.style.opacity="0"
    backDrop.style.display="none"

    modal.style.transform="translateY(-100vh)"
}


closeModal.addEventListener("click",closeModalFunc)
backDrop.addEventListener("click",closeModalFunc)

confirmModal.addEventListener("click",()=>{

    alert("You confirmed")
    closeModalFunc()


})