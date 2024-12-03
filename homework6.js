const text = "Wonderful Joyful Happiness Time Task Apple gggggshhshshsaa AAAAAAAAAA aaaaaaaaa"
const pattern = /\b[^aA\s]{6,}\b/g;
const matches = text.match(pattern);

console.log(matches);