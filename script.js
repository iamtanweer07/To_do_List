const input_item = document.querySelector("#input_item")
const to_do_box  = document.querySelector("#to_do_box")

input_item.addEventListener(

  "keyup",function(event){
    if(event.key == "Enter")
    {
      addTodo(this.value)
      this.value = ""
    }
  }
)
     const addTodo = (input_item) => {
     const listItem = document.createElement("li");
     listItem.innerHTML = `${input_item}<i class="fa-solid fa-trash"> </i>`;

     listItem .querySelector("i").addEventListener(
      "click",function(){
        listItem.remove()
      }
     )
     to_do_box.appendChild(listItem)
}