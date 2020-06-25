window.styleAllCode = function () {
    window.document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
} 