function validateForm() {
                    const form = document.getElementById('cppQuizForm');
                    const message = document.getElementById('message');
                    message.innerHTML = '';
        
                    const correctAnswers = {
                        q1: "C plus plus",
                        q2: "Bjarne Stroustrup",
                        q3: ".cpp"
                    };
        
                    const userAnswers = {
                        q1: form.q1.value.trim(),
                        q2: form.q2.value.trim(),
                        q3: form.q3.value.trim()
                    };
        
                    // Check all answers
                    let isCorrect = true;
                    for (const key in correctAnswers) {
                        if (userAnswers[key].toLowerCase() !== correctAnswers[key].toLowerCase()) {
                            isCorrect = false;
                            break;
                        }
                    }
        
                    if (isCorrect) {
                        message.innerHTML = '<p class="success">All answers are correct! Well done.</p>';
                    } else {
                        message.innerHTML = '<p class="error">Some answers are incorrect. Please try again.</p>';
                        form.reset();
                    }
                }