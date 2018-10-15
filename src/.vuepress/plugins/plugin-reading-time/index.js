module.exports = {
    name: 'my-reading-time',
    extendPageData ($page) {
       
        const averageWordsPerMinute = 200;
        const imageRegex = /\!\[.*?\]\((.*?)\)/g;

        if (!$page._content) return;

        const text = $page._content;

        let words = 0;
        let start = 0;
        let end = text.length - 1;
        let wordBound = ansiWordBound;

        while (wordBound(text[start])) {
            start++;
        }
        while (wordBound(text[end])) {
            end--;
        }

        // count words
        for (let i = start; i <= end; ) {
            for (; i <= end && !wordBound(text[i]); i++) ;
            words++;
            for (; i <= end && wordBound(text[i]); i++) ;
        }

        // count images
        const images = text.match(imageRegex);
        const imageCount = images ? images.length : 0;

        const minutes = (words / averageWordsPerMinute) + (imageDuration(imageCount) / 60);
        const displayed = Math.ceil(minutes.toFixed(2));

        $page.readingTime = {
            display: displayed,
            minutes: minutes,
            words: words,
            images: imageCount
        };
    }
}

function ansiWordBound(c) {
    return (
      (' ' === c) ||
      ('\n' === c) ||
      ('\r' === c) ||
      ('\t' === c)
    )
  }

function imageDuration(count) {
    if (count === 0) return 0;
    else if(count  === 1) return 12;
    else if(count === 2) return 12 + 11;
    else if(count === 3) return 12 + 11 + 10;
    else {
        return (12 + 11 + 10) + (count - 3 ) * 3;
    }
}

// module.exports = {
//     extendPageData ($page) {
//         if ($page._content) {
//             $page.size = ($page._content.length / 1024).toFixed(2) + 'kb';
//         }        
//     }
//   }