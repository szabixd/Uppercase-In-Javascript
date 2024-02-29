function secondCharToUpper(text) {
    let secondaryCharFinalWord = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 1) {
            secondaryCharFinalWord += text[i].toUpperCase();
        } else {
            secondaryCharFinalWord += text[i];
        }
    }
    console.log(secondaryCharFinalWord);
}