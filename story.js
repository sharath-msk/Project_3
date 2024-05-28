document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const storyDiv = document.getElementById('story');

    const animal1 = params.get('animal-1');
    const animal2 = params.get('animal-2');
    const animal3 = params.get('animal-3');
    const adj1 = params.get('adj-1');
    const verb1 = params.get('verb-1');
    const num1 = params.get('num-1');
    const answer = params.get('answer');
    const speed = params.get('speed');
    const quote = params.get('quote');
    const message = params.get('message');

    const story = `
        Once upon a time, there was a ${animal1} who ${adj1} ${verb1}. 
        This ${animal1} had two friends: a ${animal2} and a ${animal3}. 
        One day, they decided to have a race. The ${animal2} said, "I can go ${speed} than you!" 
        The ${animal1} replied, "No way! I can do it ${speed} than you can!" 
        So they raced, and after ${num1} minutes, they were exhausted. 
        The ${animal3} cheered, "You're all winners because ${quote}." 
        In the end, they all learned that the most important thing was: ${message}. 
        And they all lived happily ever after. ${answer === 'yes' ? "Yes, they did!" : "No, they didn't!"}
    `;

    storyDiv.innerHTML = `<p>${story}</p>`;
});
