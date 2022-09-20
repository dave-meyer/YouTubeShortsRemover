document.body.style.border = "5px solid red";

const ytShortsSectionElemTagName = "ytd-rich-section-renderer";

const findSectionParentElem = (elem) => {
    switch(elem.tagName.toLowerCase()) {
        case "body":
            // iterated to top of body -> element wasn't found
            console.warn("Couldn't find Youtube Shorts Section");
            return undefined;
        case ytShortsSectionElemTagName:
            return elem;
        default:
            return findSectionParentElem(elem.parentElement);
    }
};

const potentialHeadlineElems = document.querySelectorAll("span#title.style-scope.ytd-rich-shelf-renderer");
for(const elem of potentialHeadlineElems) {
    // alert("innerHTML:" + elem.innerHTML);
    if(elem.innerHTML === "Shorts") {
        // alert("found");
        const parentElem = findSectionParentElem(elem.parentElement);
        // alert("parentElem:" + JSON.stringify(parentElem));
        parentElem.style.display = "none";
    }
}
