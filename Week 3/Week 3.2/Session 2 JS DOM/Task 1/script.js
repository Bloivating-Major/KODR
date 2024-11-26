var cursor = document.querySelector('#cursorPointer')

document.addEventListener("mousemove", (e)=>{
    console.log(e.clientX);
    console.log(e.clientY);
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})