const myEmojis = ["👨‍👩‍👧‍👧", "🎼", "🎨"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmoji(){
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmoji()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmoji()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmoji()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmoji()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmoji()
})