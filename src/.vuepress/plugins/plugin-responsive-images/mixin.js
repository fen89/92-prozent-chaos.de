import './style.css';

const maxWidth = 800;

export default {
    mounted() {
        setTimeout(() => {
            const images = document
                .querySelector('.content')
                .getElementsByTagName('img');

            Array.from(images).forEach(image => {
                const width = image.clientWidth;

                if (width > maxWidth) {
                    image.classList.add('responsive-image');
                } else if (width <= maxWidth) {
                    image.classList.add('align-image-center');
                }

            });

        }, 1000)
    }
}