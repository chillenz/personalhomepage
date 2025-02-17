const calculator = document.getElementById('calculator');
const calculatoroutput = document.getElementById('calculatoroutput');
const round = document.getElementById('round')
const clear = document.getElementById('clear')
const games = document.getElementById('games')
const education = document.getElementById('education')
const tools = document.getElementById('tools')
const media = document.getElementById('media')
const youtube = document.getElementById("youtube");
const roblox = document.getElementById("roblox");
const chess = document.getElementById("chess");
const pyplayground = document.getElementById("pyplayground");
const gmail = document.getElementById("gmail");
const reddit = document.getElementById("reddit");
const outlook = document.getElementById("outlook");
const translate = document.getElementById("translate");
const claude = document.getElementById("claude");
const osu = document.getElementById("osu");
const desmos = document.getElementById("desmos");
const chatgpt = document.getElementById("chatgpt");
const github = document.getElementById("github");
const colorpicker = document.getElementById("colorpicker");
const website = document.getElementById('website')
const mywebsite = document.getElementById('mywebsite');
let gamesTag = false;
let educationTag = false;
let toolsTag = false;
let mediaTag = false;
let currentPage = 'website';
const last = document.getElementById('last')
const next = document.getElementById('next')
let equation = '';
let solvedEquation = '';
const maintitle = document.getElementById('maintitle');


calculator.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('clicked enter')
        equation = calculator.value;
        equation = equation.replace('^', '**');
        equation = equation.replace('%', '/100 *')
        equation = equation.replace(/sqrt\(/g, 'Math.sqrt(');
        equation = equation.replace(/(\d)\(/g, '$1*(');
        solvedEquation = eval(equation);
        calculatoroutput.value = solvedEquation;
    }
});

function calcbutton(theClickedButton){
    if (theClickedButton==='clear'){
        console.log('clear clicked')
        equation = '';
        solvedEquation = '';
        calculator.value = '';
        calculatoroutput.value = '';
    } else{
        console.log('round clicked')
        equation = calculator.value;
        equation = equation.replace('^', '**');
        equation = equation.replace('%', '/100 *')
        equation = equation.replace(/sqrt\(/g, 'Math.sqrt(');
        equation = equation.replace(/(\d)\(/g, '$1*(');
        solvedEquation = eval(equation);
        calculatoroutput.value = solvedEquation;
        calculatoroutput.value = parseFloat(calculatoroutput.value).toFixed(2);
    }
}

clear.addEventListener('click', () => calcbutton('clear'))
round.addEventListener('click', () => calcbutton('round'))

function toggleWebsites(onoff){
    youtube.style.display = onoff;
    roblox.style.display = onoff;
    chess.style.display = onoff;
    pyplayground.style.display = onoff;
    gmail.style.display = onoff;
    reddit.style.display = onoff;
    outlook.style.display = onoff;
    translate.style.display = onoff;
    claude.style.display = onoff;
    osu.style.display = onoff;
    desmos.style.display = onoff;
    chatgpt.style.display = onoff;
    github.style.display = onoff;
    colorpicker.style.display = onoff;
}



function tagsclick(clickedTag){
    if (clickedTag==='games'){
        if (gamesTag === false){
            media.style.border = '#242424 2px solid';
            media.style.backgroundColor = '#3f3f3f';
            tools.style.border = '#242424 2px solid';
            tools.style.backgroundColor = '#3f3f3f';
            education.style.border = '#242424 2px solid';
            education.style.backgroundColor = '#3f3f3f';
            games.style.border = '#2247ec 2px solid';
            games.style.backgroundColor = '#3658ec';
            toggleWebsites('none');
            roblox.style.display = 'block';
            chess.style.display = 'block';
            osu.style.display = 'block';
            gamesTag = true;
            educationTag = false;
            toolsTag = false;
            mediaTag = false;
        } else{
            gamesTag = false;
            games.style.border = '#242424 2px solid';
            games.style.backgroundColor = '#3f3f3f';
            toggleWebsites('block')
        }
    } else if (clickedTag==='education'){
        if (educationTag === false){
            tools.style.border = '#242424 2px solid';
            tools.style.backgroundColor = '#3f3f3f';
            media.style.border = '#242424 2px solid';
            media.style.backgroundColor = '#3f3f3f';
            games.style.border = '#242424 2px solid';
            games.style.backgroundColor = '#3f3f3f';
            education.style.border = '#2247ec 2px solid';
            education.style.backgroundColor = '#3658ec';
            toggleWebsites('none');
            chess.style.display = 'block';
            pyplayground.style.display = 'block';
            translate.style.display = 'block';
            claude.style.display = 'block';
            desmos.style.display = 'block';
            chatgpt.style.display = 'block';
            github.style.display = 'block';
            gamesTag = false;
            educationTag = true;
            toolsTag = false;
            mediaTag = false;
        } else{
            educationTag = false;
            education.style.border = '#242424 2px solid';
            education.style.backgroundColor = '#3f3f3f';
            toggleWebsites('block')
        }
    } else if (clickedTag==='tools'){
        if (toolsTag === false){
            media.style.border = '#242424 2px solid';
            media.style.backgroundColor = '#3f3f3f';
            games.style.border = '#242424 2px solid';
            games.style.backgroundColor = '#3f3f3f';
            education.style.border = '#242424 2px solid';
            education.style.backgroundColor = '#3f3f3f';
            tools.style.border = '#2247ec 2px solid';
            tools.style.backgroundColor = '#3658ec';
            toggleWebsites('none');
            pyplayground.style.display = 'block';
            translate.style.display = 'block';
            claude.style.display = 'block';
            desmos.style.display = 'block';
            chatgpt.style.display = 'block';
            github.style.display = 'block';
            colorpicker.style.display = 'block';
            gamesTag = false;
            educationTag = false;
            toolsTag = true;
            mediaTag = false;
        } else{
            toolsTag = false;
            tools.style.border = '#242424 2px solid';
            tools.style.backgroundColor = '#3f3f3f';
            toggleWebsites('block')
        }
    } else if (clickedTag==='media'){
        if (mediaTag === false){
            media.style.border = '#242424 2px solid';
            media.style.backgroundColor = '#3f3f3f';
            education.style.border = '#242424 2px solid';
            education.style.backgroundColor = '#3f3f3f';
            games.style.border = '#242424 2px solid';
            games.style.backgroundColor = '#3f3f3f';
            tools.style.border = '#242424 2px solid';
            tools.style.backgroundColor = '#3f3f3f';
            education.style.border = '#242424 2px solid';
            education.style.backgroundColor = '#3f3f3f';
            games.style.border = '#242424 2px solid';
            games.style.backgroundColor = '#3f3f3f';
            media.style.border = '#2247ec 2px solid';
            media.style.backgroundColor = '#3658ec';
            toggleWebsites('none');
            youtube.style.display = 'block';
            gmail.style.display = 'block';
            reddit.style.display = 'block';
            outlook.style.display = 'block';
            github.style.display = 'block';
            gamesTag = false;
            educationTag = false;
            toolsTag = false;
            mediaTag = true;
        } else{
            mediaTag = false;
            media.style.border = '#242424 2px solid';
            media.style.backgroundColor = '#3f3f3f';
            toggleWebsites('block')
        }
    }
}

games.addEventListener('click', () => tagsclick('games'))
education.addEventListener('click', () => tagsclick('education'))
tools.addEventListener('click', () => tagsclick('tools'))
media.addEventListener('click', () => tagsclick('media'))

function changepage(){
    if (currentPage==='website'){
        currentPage = 'mywebsite';
        mywebsite.style.display = 'flex'
        website.style.display = 'none'
        document.getElementById('titleText').textContent = 'My Websites'
        last.style.margin = '0px 26px';
        next.style.margin = '0px 26px';
    } else{
        currentPage = 'website';
        website.style.display = 'flex'
        mywebsite.style.display = 'none'
        document.getElementById('titleText').textContent = 'Websites'
        last.style.margin = '0px 50px';
        next.style.margin = '0px 50px';
    }
}

next.addEventListener('click', changepage)
last.addEventListener('click', changepage)