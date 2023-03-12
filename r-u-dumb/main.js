var noBtn = document.getElementById('no-btn');
var mainTxt = document.getElementById('main-txt');

function onBtnClick(id) {
    console.log(id);
    if(id == 'yes-btn')
    {
        mainTxt.innerHTML = "I knew it.., Idiot ;)";
    }
    else{
        var sign1 = Math.random() > 0.5 ? '-' : '';
        var sign2 = Math.random() > 0.5 ? '-' : '';
        var pos = [parseInt(sign1+Math.random()*35), parseInt(sign2+Math.random()*50)];
        console.log(sign1, sign2, pos);
        console.log("translate(" + pos[0] + "px, " + pos[1] + "px)");
        noBtn.style.transform = "translate(" + pos[0] + "px, " + pos[1] + "px)";
    }
}