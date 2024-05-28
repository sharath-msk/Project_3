document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('story-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const queryString = new URLSearchParams(new FormData(form)).toString();
        const storyUrl = `story.html?${queryString}`;

        window.location.href = storyUrl;
    });
});
