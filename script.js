const arrows = document.querySelector('.hero-arrows');
const aboutPage = document.querySelector('.about-section');
const aboutHeader = document.querySelector('.about');
const mainPage = document.querySelector('.title-section');

arrows.addEventListener('click', () => {
    aboutPage.scrollIntoView({behavior: 'smooth', block: 'start'});
});
aboutHeader.addEventListener('click', () => {
    aboutPage.scrollIntoView({behavior: 'smooth', block: 'start'});
});

function handleScrollDown() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
        aboutPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.removeEventListener('scroll', handleScrollDown);
        DelayNode(1);
        //window.addEventListener('scroll', handleScrollUp);
    }
}
window.addEventListener('scroll', handleScrollDown);

/*
window.addEventListener('scroll', handleScrollUp);

function handleScrollUp() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
        mainPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.removeEventListener('scroll', handleScrollUp);
        DelayNode(1)
        window.addEventListener('scroll', handleScrollDown);
    }
}
*/