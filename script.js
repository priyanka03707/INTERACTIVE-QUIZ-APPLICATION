const courses = [
    { id: 1, title: "React Basics", progress: 70, videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
    { id: 2, title: "Advanced JavaScript", progress: 50, videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { id: 3, title: "Web Design Essentials", progress: 90, videoUrl: "https://www.youtube.com/embed/3JluqTojuME" },
];

document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.getElementById("course-list");
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";
        courseCard.innerHTML = `
            <h2>📚 ${course.title}</h2>
            <div class="progress-bar"><span style="width: ${course.progress}%;"></span></div>
            <button class="button" onclick="openCourse('${course.videoUrl}')">🎥 Watch Course</button>
        `;
        courseList.appendChild(courseCard);
    });
});

function openCourse(url) {
    window.open(url, "_blank");
}
