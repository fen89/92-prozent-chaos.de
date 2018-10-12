export default ({ Vue }) => {
    Vue.mixin({
        computed: {
            $readTime () {
                const article = this.$page;
                const averageWordsPerMinute = 248;
                const averageImageViewingTimeInMinutes = 1 / 6; // I couldn't find a study regarding images, so I apply an arbitrary number
                const averageWordLengthInCharacters = 4.79;
            
                var el = window.document.createElement('template');
                el.innerHTML = article;
                const root = el.content;
                const children = el.content.querySelectorAll('*');
            
                const text = root.textContent;
                const textLength = text.replace(/\s/g, '').length;
            
                const numWords = textLength / averageWordLengthInCharacters; // Words are variable length. Remove that factor.
                let numImages = 0;
            
                for (let child of children) {
                    if (child.tagName.toLowerCase() === 'img' || child.style.backgroundImage !== '') {
                        numImages++;
                    }
                }
            
                const readingTime = Number(numWords / averageWordsPerMinute + numImages * averageImageViewingTimeInMinutes).toFixed(2);
                return readingTime;
            },
            
            $readTimeInMinutes () {
                let readingTime = this.$readTime;
                return readingTime;
            }
        }
    })
}