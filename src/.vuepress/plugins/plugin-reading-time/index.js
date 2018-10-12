const path = require('path');

module.exports = (pluginOptions = {}, context) => ({
    name: 'my-reading-time',
    extendPageData: ({ filePath, path, content, frontmatter }) {
        return {
            testitest: 'derp'
        }
    }
});