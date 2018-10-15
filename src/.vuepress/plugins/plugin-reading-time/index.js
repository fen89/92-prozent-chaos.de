module.exports = (options, context) => ({
    name: 'my-reading-time',
    extendPageData ({ content }) {
        return {
            size: content ? ((content.length / 1024).toFixed(2) + 'kb') : 0
        }
        // const { transformer } = options;
        // const averageWordsPerMinute = 248;

        // const text = _content;
        // if (!text) return;

        // const textLength = text.replace(/\s/g, '').length;
        // const numberOfWords = textLength / averageWordsPerMinute;

        // const time = Number(numberOfWords / averageWordsPerMinute);
        // const readingTime = typeof transformer === 'function' ? transformer(time) : time;
        
        // return { readingTime };
    }
});
