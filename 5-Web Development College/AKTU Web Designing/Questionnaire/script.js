const correctAnswers = {
    q1: "a",  // 1963
    q2: "b",  // Vikram Sarabhai
    q3: "a",  // Aryabhata
    q4: "b",  // Mangalyaan
    q5: "b",  // Bengaluru
    q6: "b",  // PSLV
    q7: "a",  // 2008
    q8: "b",  // Water molecules
    q9: "c",  // GSLV Mk III
    q10: "b"  // Gaganyaan
};

function checkAnswers() {
    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
        let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    const percentage = (score / total) * 100;
    
    resultDiv.innerHTML = `
        <h2>Your Score: ${score}/${total}</h2>
        <p>Percentage: ${percentage}%</p>
        <p>${getResultMessage(percentage)}</p>
    `;
}

function getResultMessage(percentage) {
    if (percentage === 100) return "Outstanding! You're a true space expert! 🚀";
    if (percentage >= 80) return "Excellent knowledge of ISRO and space! 🌟";
    if (percentage >= 60) return "Good understanding! Keep exploring! 🌍";
    if (percentage >= 40) return "Not bad! Room for improvement! ⭐";
    return "Keep learning about space and ISRO! Try again! 🌠";
}