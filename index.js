const firstA = new Date(2021,10,28);
const secondA = new Date(2021,11,5);
const thirdA = new Date(2021,11,12);
const fourthA = new Date(2021,11,19);
const today = new Date();

const dates = [firstA, secondA, thirdA, fourthA];

for(let i = 0; i < dates.length; i++){
    if(today.getTime() <= dates[i].getTime()){
        document.getElementById(`label${i + 1}`).classList.add('candle-disabled');
    } else {
        document.getElementById(`candle${i + 1}`).addEventListener("click", () => {
            const v = i;
            const video = document.getElementsByClassName("vid")[0];
            video.classList.add('vid-visible');
            const sou = document.getElementById("source");
            sou.setAttribute('src','./vids/'+v+'.mp4');
            video.load();
            video.play();
        });
    }
}

const candleClicked = [0,0,0,0];

for(let i = 1; i <= 4; i++){
    document.getElementById(`candle${i}`).addEventListener("click", () => {
        candleClicked[i -1]++;
        if(candleClicked[i - 1] === 10){
            document.getElementById(`candle${i}`).classList.add('angry_candle');
        }
        if(candleClicked[i - 1] === 20) {
            window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, "_self")
        }
    });
}

clickedCount = 0;

function textClicked(){
    clickedCount++;
    if(clickedCount === 5){
        document.getElementById("emoticon").style.display = "block";
    }
}