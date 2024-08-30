const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("random-button");


// Convert hex color to RGB
const hexToRgb = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(1, 3), 16);
    let b = parseInt(hex.slice(1, 3), 16);
    return `rgb(${r}, ${g}, ${b})`;
};

setGradient = () => {
    const gradientText = _linearGradient();
    body.style.background = gradientText;
    css.textContent = `${gradientText};`;
    document.getElementById('gradient-text').value = gradientText;
    
    const rgb1 = hexToRgb(color1.value);
    const rgb2 = hexToRgb(color2.value);
    document.getElementById('rgb-value').textContent = `${rgb1} to ${rgb2}`;
};

// setGradient = () => {
//     body.style.background = _linearGradient();
//     css.textContent = `${body.style.background};`;
//     const gradientText = _linearGradient();
//     document.getElementById('gradient-text').value = gradientText;
// }

// Function to generate the linear gradient text
_linearGradient = () => {
    return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

// Function to generate a random color when clicking Random button
getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Function to set the random color
setRandomColors = () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}


// Event listener for the copy button
document.getElementById('copy-button').addEventListener('click', () => {
    const gradientTextElement = document.getElementById('gradient-text');
    gradientTextElement.select();
    document.execCommand('copy');
    alert('Copied to clipboard: ' + gradientTextElement.value);
});

window.addEventListener("load", function() {
    setGradient();
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColors);
