const firstA = new Date(2021,11,28);
const secondA = new Date(2021,12,5);
const thirdA = new Date(2021,12,12);
const fourthA = new Date(2021,12,19);
const today = new Date(2021,12,24);

const dates = [firstA, secondA, thirdA, fourthA];

for(let i = 0; i < dates.length; i++){
    if(today.getTime() <= dates[i].getTime()){
        document.getElementById(`candle${i + 1}`).classList.add('candle-disabled');
    }
}