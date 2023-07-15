
var userNames = 
[
    {
        'quote':'So many books, so little time.',
        'auther':'Frank Zappa'
    },
    {
        'quote':'A room without books is like a body without a soul.',
        'auther':'Marcus Tullius Cicero'
    },
    {
        'quote':'You only live once, but if you do it right, once is enough.',
        'auther':'Mae West'
    },
    {
        "quote":"In three words I can sum up everything I've learned about life: it goes on.",
        "auther":"Robert Frost"
    },
    {
        "quote":" If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        "auther":"J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        "quote":"If you tell the truth, you don't have to remember anything.",
        "auther":"Mark Twain"
    },
    {
        "quote":"A friend is someone who knows all about you and still loves you.",
        "auther":"Elbert Hubbard"
    },
    {
        "quote":"To live is the rarest thing in the world. Most people exist, that is all.",
        "auther":"Oscar Wilde"
    },

]

function randomText(){
var num = parseInt(Math.random() *userNames.length)
document.getElementById("text").innerHTML=(`${userNames[num].quote}`);
document.getElementById("text1").innerHTML=(`${userNames[num].auther}`);
}


// parseInt