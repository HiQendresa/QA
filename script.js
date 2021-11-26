const questions = [
    {
        id: 1,
        title: 'Do you accept all major credit cards?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci recusandae inventore quaerat aliquid enim sunt, autem porro repellat corrupti?',      
    },
    {
        id: 2,
        title: 'Have you ever met someone famous?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci recusandae inventore quaerat aliquid enim sunt, autem porro repellat corrupti?',      
    },
    {
        id: 3,
        title: 'Do you still have your childhood teddybear?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci recusandae inventore quaerat aliquid enim sunt, autem porro repellat corrupti?',      
    },
];

const questionShow = document.querySelector('.section-center');


window.addEventListener('DOMContentLoaded', function () {
    displayQuestions(questions);
    
    const boxes = document.querySelectorAll('.question');
    
    boxes.forEach(function (item) {
        const btn = item.querySelector('.question-btn');
        btn.addEventListener('click', function () {

            boxes.forEach(function (answer) {
                if (item != answer) {
                    answer.classList.remove('show-text');
                }
            });
            item.classList.toggle('show-text');
        });
    });

});


// display all the questions

function displayQuestions(question) {
    let questionitem = question.map(function (item) {
       
        return `<article class="question">
          <div class="question-title">
            <p>${item.title}</p>
            <button type="button" class="question-btn">
              <span class="pluse-icon">
                <i class="far fa-plus-square"></i>
              </span>

              <span class="minus-icon">
                <i class="far fa-minus-square"></i>
              </span>
            </button>
          </div>

          <div class="question-text">
            <hr />
            <p>
              ${item.answer}
            </p>
          </div>
        </article>`;
    });
    questionitem = questionitem.join('');
    questionShow.innerHTML = questionitem;
}