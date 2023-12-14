var button =document.getElementById('btn')
var quote =document.getElementById('quote')
var author =document.getElementById('author')
var dome =document.getElementById('dome')


var quoteRandom =[
    {
        quote:'You only live once, but if you do it right, once is enough.',
        author:'Mae West'
    },
    {
        quote:'In three words I can sum up everything I have learned about life: it goes on.',
        author:'Robert Frost'
    },
    {
        quote:'When someone loves you, the way they talk about you is different. You feel safe and comfortable',
        author:'Jess C. Scott, The Intern'
    },
    {
        quote:'To live is the rarest thing in the world. Most people exist, that is all.',
        author:'Oscar Wilde'
    },
    {
        quote:'The fool doth think he is wise, but the wise man knows himself to be a fool.',
        author:'William Shakespeare'
    },
    {
        quote:'Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect)',
        author:'Mark Twain'
    },
    {
        quote:'The only true wisdom is in knowing you know nothing.',
        author:'Socrates'
    },
    {
        quote:'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.',
        author:'Albert Camus'
    },
    {
        quote:'Happiness is when what you think, what you say, and what you do are in harmony',
        author:'Mahatma Gandhi'
    },
    {
        quote:'Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.',
        author:'Henry Wadsworth Longfellow'
    },
    {
        quote:'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present',
        author:'Bill Keane'
    },
    {
        quote:'You cannot swim for new horizons until you have courage to lose sight of the shore.',
        author:'William Faulkner'
    }
]



   button.onclick=function display(){
    var random='';
    var  x= (Math.floor(Math.random()*quoteRandom.length))
        random=`
        <div class="contant">
        <p class="quote fs-3 text-primary" id="quote">
        <i class="fa-solid fa-quote-left"></i>
        ${quoteRandom[x].quote} 
        <i class="fa-solid fa-quote-left"></i>
        </p>
        <h3 class="author fw-bolder" id="author">--${quoteRandom[x].author}</h3>
    </div>
        `
 
    dome.innerHTML=random
    return random
}

   
   
   



        