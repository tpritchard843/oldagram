const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")

for (let i = 0; i < posts.length; i++) {
    const sectionEl = document.createElement("section")
    sectionEl.innerHTML = `
        <section class="bottom-margin-zero">
                <div class="container profile padding">
                    <img class="avatar" src="${posts[i].avatar}">
                    <div class="profile-text">
                        <h2 class="name bold">${posts[i].name}</h2>
                        <h3 class="location">${posts[i].location}</h3>
                    </div>
                </div>
            </section>
            
            <section class="bottom-margin-zero">   
                <div class="container">
                    <img class="post-img" src="${posts[i].post}">
                </div>
            </section>
        
            <section class="interactive-section"> 
                <div class="container padding">
                    
                    <div class="icons-container">
                        <img class="icons like-btn" src="images/icon-heart.png">
                        <img class="icons" src="images/icon-comment.png">
                        <img class="icons" src="images/icon-dm.png">
                    </div>
                    
                    <p class="likes-el bold">${posts[i].likes}</p>
                    <p>
                        <span class="bold">${posts[i].username}</span>
                        <span class="comment-p">${posts[i].comment}</span>
                    </p>
                </div>
            </section>
    `
    
    mainEl.append(sectionEl)
    
const likeBtn = document.getElementsByClassName("like-btn")
const likesEl = document.getElementsByClassName("likes-el")

likeBtn.addEventListener("click", function() {
    
})

}


