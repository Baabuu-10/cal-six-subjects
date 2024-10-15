function calculateGrade() {
    // Get input values
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);
    const subject6 = parseFloat(document.getElementById('subject6').value);

    // Check if all values are entered and are valid
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5) || isNaN(subject6)) {
        document.getElementById('result').innerHTML = "Please enter valid marks for all subjects.";
        return;
    }

    // Calculate total and average
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    const average = totalMarks / 6;

    // Grade calculation using if statements
    let grade = '';

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display result
    document.getElementById('result').innerHTML = `Average Marks: ${average.toFixed(2)} <br> Grade: ${grade}`;
}
