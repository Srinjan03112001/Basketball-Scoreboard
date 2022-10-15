let homeScoreText = document.getElementById("home-score")
let guestScoreText = document.getElementById("guest-score")

let home = document.getElementById("home")
let guest = document.getElementById("guest")

let resultEl = document.getElementById("result")

let homeScoreTotal =0, guestScoreTotal=0

function homeScore(currScore){
    homeScoreTotal += currScore
    homeScoreText.textContent = homeScoreTotal 
    winningTeam()
}

function guestScore(currScore){
    guestScoreTotal += currScore
    guestScoreText.textContent = guestScoreTotal
    winningTeam()
}

function winningTeam(){
    if(homeScoreTotal > guestScoreTotal){
        home.style.color = "#F7AB3A"
        guest.style.color = "white"
        
    }
    else if(guestScoreTotal > homeScoreTotal){
        guest.style.color = "#F7AB3A"
        home.style.color = "white"
    }
    else{
        home.style.color = "white"
        guest.style.color = "white"
    }
}

function result(){
    
    if(homeScoreTotal > guestScoreTotal){
        resultEl.textContent = "HOME team is the winner !!!!!"
    }
    else if(guestScoreTotal > homeScoreTotal){
        resultEl.textContent = "GUEST team is the winner !!!!!"
    }
    else{
        resultEl.textContent = "It's a DRAW match !!!!!"
    }
}

function reset(){
    homeScoreTotal =0, guestScoreTotal =0
    homeScore(0)
    guestScore(0)
    resultEl.textContent =""
}