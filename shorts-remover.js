const ytShortsSectionElemTagName = "ytd-rich-section-renderer";
const ytShortsGuideEntryTagName = "ytd-guide-entry-renderer";

const findAncestorElemWithTagName = (elem) => {
    if(elem.tagName.toLowerCase() === "body") {
        // iterated to top of body -> element wasn't found
        console.warn("Couldn't find Youtube Shorts Section");
        return undefined;
    }
    if((elem.tagName.toLowerCase() === "ytd-rich-section-renderer") || (elem.tagName.toLowerCase() === "ytd-guide-entry-renderer")) {
        return elem;
    }
    return findAncestorElemWithTagName(elem.parentElement);
};

const potentialShortsSectionHeadlineElems = document.querySelectorAll("span#title.style-scope.ytd-rich-shelf-renderer");
for(const elem of potentialShortsSectionHeadlineElems) {
    if(elem.innerHTML === "Shorts") {
        const parentElem = findAncestorElemWithTagName(elem.parentElement);
        parentElem.style.display = "none";
    }
}

const potentialShortsGuideEntryHeadlineElems = document.querySelectorAll("yt-formatted-string.title.style-scope.ytd-guide-entry-renderer");
for(const elem of potentialShortsGuideEntryHeadlineElems) {
    if(elem.innerHTML === "Shorts") {
        const parentElem = findAncestorElemWithTagName(elem.parentElement);
        parentElem.style.display = "none";
    }
}
