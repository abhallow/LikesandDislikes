let likeList = document.querySelector('#likeList')

let dislikeList = document.querySelector('#dislikeList')

let itemLikeList = document.querySelector('#likeList')

let itemDislikeList = document.querySelector('#dislikeList')

function creatingItems(text, itemList, color) {
    let newListItem = document.createElement('li')
    newListItem.className = 'list-group-item ' + color
    let newListItemText = document.createTextNode(text)
    newListItem.appendChild(newListItemText)
    itemList.appendChild(newListItem)
   
}
let addLike = document.querySelector('#addLike')
addLike.addEventListener("click", e=> {
    e.preventDefault()
    let value = document.querySelector('#likes').value
    console.log(value)  
    creatingItems(value, itemLikeList, 'bg-success')

})

let addDislike = document.querySelector('#addDislike')
addDislike.addEventListener("click", e=> {
    e.preventDefault()
    let value = document.querySelector('#dislikes').value
    console.log(value)
    creatingItems(value, itemDislikeList, 'bg-danger')
})

