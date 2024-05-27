import '../styles/components/header.css' 
import '../styles/components/about.css'
import '../styles/components/cards.css'
import '../styles/components/hero.css'
import '../styles/style.css'
import '../styles/util.css'


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('dialog');
    const tags = document.querySelector('.tag');

    if (tags && modal) {
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                modal.showModal();
            });
        });

        // Add close functionality if you want to close the modal with a click on the SVG
        modal.querySelector('svg').addEventListener('click', () => {
            modal.close();
        });
    }
});

