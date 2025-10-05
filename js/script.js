// Animate circular progress rings
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-ring-circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    });
});
