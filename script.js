var cards = [
    {value: '2',image: './images/clubs_2.svg',matched: false},
    {value: '3',image: './images/clubs_3.svg',matched: false},
    {value: '4',image: './images/clubs_4.svg',matched: false},
    {value: '5',image: './images/clubs_5.svg',matched: false},
    {value: '6',image: './images/clubs_6.svg',matched: false},
    {value: '7',image: './images/clubs_7.svg',matched: false},

    {value: '2',image: './images/clubs_2.svg',matched: false},
    {value: '3',image: './images/clubs_3.svg',matched: false},
    {value: '4',image: './images/clubs_4.svg',matched: false},
    {value: '5',image: './images/clubs_5.svg',matched: false},
    {value: '6',image: './images/clubs_6.svg',matched: false},
    {value: '7',image: './images/clubs_7.svg',matched: false},
    
]

let st = []
let winners = []

var canGuess = true
var flippedCards = 0
var guess_no = 0

function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

shuffle(cards)

var cardsElm = document.querySelectorAll('.card')

cardsElm.forEach(function(el, index){
    el.addEventListener('click', function(){

        if(index === st[0] || cards[index].matched === true || !canGuess){
            return
        }

        var clickedCard = cards[index]
        el.setAttribute('src',clickedCard.image)

        if(st.length==0){
            st.push(index)
        }
        else{
            guess_no += 1
            document.getElementById('guess_no').innerHTML = guess_no
            if(cards[st[0]].value === cards[index].value){
                cards[st[0]].matched = true
                cards[index].matched = true
                st.pop()
                flippedCards += 2
                if(flippedCards == cards.length){
                    winners.push({player : winners.length+1,score: guess_no})
                    setTimeout(reset,1500)
                }

            }
            else{
                canGuess = false

                setTimeout(function(){
                    cardsElm[st[0]].setAttribute('src','./images/blue2.svg')
                    cardsElm[index].setAttribute('src','./images/blue2.svg')
                    st.pop()
                    canGuess = true
                },1200) 
            }
        }
    })
})

document.getElementById('reset_button').addEventListener('click',function(){
    reset()
})

function updateLeaderbord(){

    for (var i = 0; i < winners.length; i++) {

        for (var j = 0; j < (winners.length - i - 1); j++) {

            if (winners[j].score > winners[j + 1].score) {
                var temp = winners[j]
                winners[j] = winners[j + 1]
                winners[j + 1] = temp
            }
        }
    }

    let rank = document.getElementById('rank')
    let score = document.getElementById('score')
    rank.innerHTML = ''
    score.innerHTML = ""
    for(var i = 0; i<winners.length; i++){
        let winner = document.createElement('h4')
        let winnerscore = document.createElement('h4')
        winner.innerHTML = (i+1) + "." + " Player " + winners[i].player 
        winnerscore.innerHTML = winners[i].score
        rank.append(winner)
        score.append(winnerscore)
    }
   
}

function reset(){
    canGuess = true
    flippedCards = 0
    guess_no = 0
    document.getElementById('guess_no').innerHTML = guess_no

    updateLeaderbord()

    cardsElm.forEach(function(el, index){
        el.setAttribute('src', './images/blue2.svg')
    })
    cards.forEach(function(card, index){
        card.matched = false
    })
    
    shuffle(cards)
}