// ------------------------
// VIDEO IMAGE HANDLING
// ------------------------

const videoIDs = [
    `lfmg-EJ8gm4`,
    `voLJ3CmaM1s`,
    `TioxU0wdMQg`,
    `ZzaPdXTrSb8`,
    `ix9cRaBkVe0`,
    `o06MyVhYte4`,
]

const recentUpdates = [
    `AI native tools are starting to populate mainstream IDE's and workspaces.`,
    `Rapid AI code advancements lead to uncertainty, breakage and quality risks. AI written code still needs supervision and is never completely correct.`,
    `The language Rust has increased in popularity, as more performace and security based projects are being started`,
    `AWS revealed new hardware and AI-focused infrastructure: the new CPU generation AWS Graviton5 — designed for high-performance workloads (databases, analytics, app servers) — signaling faster & more efficient cloud compute.`,
    `According to the 2025 Octoverse report, TypeScript surpassed both JavaScript and Python in August 2025, becoming the most used language on GitHub by monthly contributors.`
]

const articles = [
    MDN = {name: "MDN Web Docs", link:"https://developer.mozilla.org"},
    JSinfo = {name: "Javascript Info", link:"https://javascript.info"},
]

const gallery = document.getElementById("video-gallery");
const updateGallery = document.getElementById("update-gallery");
const articleGallery = document.getElementById("article-gallery");



videoIDs.forEach(id => {
    const link = document.createElement("a");
    link.href = `https://www.youtube.com/watch?v=${id}}`;
    link.target = "_blank";

    const txt = document.createElement("p");
    txt.textContent

    const img = document.createElement("img");
    img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    img.alt = "Youtube Thumbnail";
    img.style.width = "200px";
    img.style.margin = "10px";

    link.appendChild(img);
    gallery.appendChild(link)
})


recentUpdates.forEach(update => {
    const txt = document.createElement("p");
    txt.textContent = `${update}`;

    updateGallery.appendChild(txt);
    
})

// articles.forEach(article =>{
//     const artice
// })