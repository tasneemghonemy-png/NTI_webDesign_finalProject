let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let count = document.getElementById("count")
let counter = 1

plusBtn.addEventListener("click", () => {
    counter++
    count.innerText = counter
})

minusBtn.addEventListener("click", () => {
    if (counter > 1) {
        counter--
        count.innerText = counter
    }
})



let mainImage = document.querySelector(".product-image")
let thumbnails = document.querySelectorAll(".thumbnail")

thumbnails.forEach((image) => {
    image.addEventListener("click", () => {
        mainImage.src = image.src
    })
})



let wishlist = document.getElementById("wishlist")

wishlist.addEventListener("click", () => {

    if (wishlist.innerText == "♡ Wishlist") {ض
        wishlist.innerText = "♥ Wishlist"
        wishlist.classList.add("text-danger")
    }
    else {
        wishlist.innerText = "♡ Wishlist"
        wishlist.classList.remove("text-danger")
    }
})




let reviewInput = document.getElementById("reviewInput")
let writeReviewBtn = document.getElementById("writeReview")
let reviewsContainer = document.querySelector(".reviews-container")

writeReviewBtn.addEventListener("click", () => {

    let reviewText = reviewInput.value
    let newReview = document.createElement("div")
    let reviewPhoto = document.createElement("div")
    let img = document.createElement("img")
    let reviewInfo = document.createElement("div")
    reviewPhoto.classList.add("review-photo")
    let name = document.createElement("h6")
    let stars = document.createElement("div")
    let comment = document.createElement("p")
    let date = document.createElement("small")

    img.src = "images/product.PROF.jpg"
    img.classList.add("rounded-circle")
    name.innerText = "Sofia Harris"
    stars.innerText = "☆☆☆☆☆"
    comment.innerText = reviewText
    date.innerText = "Just now · Reply"

    reviewPhoto.appendChild(img)
    reviewInfo.appendChild(name)
    reviewInfo.appendChild(stars)
    reviewInfo.appendChild(comment)
    reviewInfo.appendChild(date)

    newReview.appendChild(reviewPhoto)
    newReview.appendChild(reviewInfo)
    newReview.classList.add(
        "review",
        "d-flex",
        "gap-3",
        "py-3",
        "border-bottom"
    )

    reviewsContainer.appendChild(newReview)
    reviewInput.value = ""

})