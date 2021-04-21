function showAnswer(x,y) {
    let ans = document.getElementById(x);
    if(ans.style.display == "none"){
        ans.style.display = "block";
        y.innerText = "Hide Answer";
    }else{
        ans.style.display = "none";
        y.innerText = "Show Answer";
    }

}
function checkAnswer(q, ans, e) {
    let rans = "", op;
    rans = document.getElementById(q).value;
    op = document.getElementById(e);
    if (rans === ans) {
        op.style.color = "#ffeb3b";
        op.innerText = "Correct Answer"
    } else {
        op.style.color = "#ffeb3b";
        op.innerText = "Wrong Answer!";
    }

}