const projectImages = document.querySelectorAll('.project-image');
const projectTitles = document.querySelectorAll('.project-title');

projectImages.forEach((image, index) => {
    image.addEventListener('mouseenter', () => {
        projectTitles[index].style.display = 'block';
    });

    image.addEventListener('mouseleave', () => {
        projectTitles[index].style.display = 'none';
    });
});