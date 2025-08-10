function calculateGrade(score) {
    let letterGrade;

    switch (true) {
        case score >= 90:
            letterGrade = 'A';
            break;
        case score >= 80:
            letterGrade = 'B';
            break;
        case score >= 70:
            letterGrade = 'C';
            break;
        case score >= 60:
            letterGrade = 'D';
            break;
        case score >= 0: // Handles scores from 0 to 59
            letterGrade = 'F';
            break;
        default:
            letterGrade = 'Invalid Score'; // Handles negative or non-numeric inputs
    }

    return letterGrade;
}

console.log(calculateGrade(95));  // Output: A
console.log(calculateGrade(72));  // Output: C
console.log(calculateGrade(55));  // Output: F
console.log(calculateGrade(-10)); // Output: Invalid Score
