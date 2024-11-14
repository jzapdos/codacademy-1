// Initialize clickCount from sessionStorage or default to 0 if it's the first time
let clickCount = sessionStorage.getItem('clickCount') ? parseInt(sessionStorage.getItem('clickCount')) : 0;

document.getElementById('askButton').addEventListener('click', function() {
    // Increment click count with each click
    clickCount++;
    
    // Save the updated click count in sessionStorage
    sessionStorage.setItem('clickCount', clickCount);

    // Handle the first click: Ask for name and question
    if (clickCount === 1) {
        var userName = prompt('What is your name?');
        var userNameDisplay = document.getElementById('userNameDisplay');
        var output = document.getElementById('output');
        var ball = document.querySelector('.ball');

        if (userName) {
            console.log(`Name: ${userName}`);
            userNameDisplay.innerText = `Name: ${userName}`;
        } else {
            userNameDisplay.innerText = '';
        }

        var userQuestion = prompt("What is your question for the Magic 8-Ball?");
        var userQuestionDisplay = document.getElementById('userQuestionDisplay');

        if (userQuestion) {
            console.log(`User's question: ${userQuestion}`);

            var eightBall = Math.floor(Math.random() * 8);
            var response = '';

            switch (eightBall) {
                case 7: response = 'It is certain'; break;
                case 6: response = 'It is decidedly so'; break;
                case 5: response = 'Reply hazy, try again'; break;
                case 4: response = 'Cannot predict now'; break;
                case 3: response = 'Do not count on it'; break;
                case 2: response = 'My sources say no'; break;
                case 1: response = 'Outlook not so good'; break;
                case 0: response = 'Signs point to yes'; break;
                default: response = 'Invalid number';
            }

            userQuestionDisplay.innerText = `Question: ${userQuestion}`;
            output.innerText = response;

            ball.classList.add('slow-bouncing');
        } else {
            userQuestionDisplay.innerText = '';
            output.innerText = 'You didn\'t ask a question. Please try again!';
        }
    }

    // After the second click (clickCount === 2), refresh the page
    if (clickCount === 2) {
        // Reset click count in sessionStorage
        sessionStorage.setItem('clickCount', 0);
        
        // Reload the page after the second click
        location.reload();
    }
});