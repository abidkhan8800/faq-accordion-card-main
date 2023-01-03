const ques = document.getElementsByClassName('question');

for(let i = 0; i <ques.length;i++){
    ques[i].addEventListener("click", function(e) {
        let qid = e.target.getAttribute('question')
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.classList.remove("bold");
            this.children[1].classList.remove("rotate-180");
        } else {
            const answers = document.getElementsByClassName('answer');
            for(let ans of answers){
                ans.style.display = "none";
            }
            answer.style.display = "block";
            this.classList.add("bold");
            this.children[1].classList.add("rotate-180");
        }
      });

}