let show =document.getElementById("show");

let arr1 =`<h2 ">“Be yourself; everyone else is already taken.”</h2>
<h3 class="mt-4">― Oscar Wilde</h3>
`
let arr2 =`<h2 ">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</h2>
<h3 class="mt-4">― Marilyn Monroe</h3>
`
let arr3 =`<h2 ">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</h2>
<h3 class="mt-4">― Albert Einstein</h3>
`
let arr4 =`<h2 ">“So many books, so little time.”</h2>
<h3 class="mt-4">― Frank Zappa</h3>
`
let arr5 =`<h2 ">“A room without books is like a body without a soul.”</h2>
<h3 class="mt-4">― Marcus Tullius Cicero/h3>
`
let arr6 =`<h2 ">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</h2>
<h3 class="mt-4">― Bernard M. Baruch</h3>
`
let arr7 =`<h2 ">“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”</h2>
<h3 class="mt-4">― William W. Purkey</h3>
`
let arr8 =`<h2 ">“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</h2>
<h3 class="mt-4">― Dr. Seuss</h3>
`
let arr9 =`<h2 ">“You only live once, but if you do it right, once is enough.”</h2>
<h3 class="mt-4">― Mae West</h3>
`
let arr10 =`<h2 >“Be the change that you wish to see in the world.”</h2>
<h3 class="mt-4">― Mahatma Gandhi</h3>
`
let arr11 =`<h2 ">“In three words I can sum up everything I've learned about life: it goes on.”</h2>
<h3 class="mt-4">― Robert Frost</h3>
`
let arr12 =`<h2 ">“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</h2>
<h3 class="mt-4">― J.K. Rowling, Harry Potter and the Goblet of Fire</h3>
`
let arr13 =`<h2 ">“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”</h2>
<h3 class="mt-4">― Albert Camus</h3>
`
let arr14 =`<h2 ">“If you tell the truth, you don't have to remember anything.”</h2>
<h3 class="mt-4"> ― Mark Twain</h3>
`
let arr15 =`<h2 ">“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”</h2>
<h3 class="mt-4">― C.S. Lewis, The Four Loves </h3>
`
let arr16 =`<h2 ">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</h2>
<h3 class="mt-4">― Maya Angelou </h3>
`
let arr17 =`<h2 ">“A friend is someone who knows all about you and still loves you.”</h2>
<h3 class="mt-4"> ― Elbert Hubbard</h3>
`
let arr18 =`<h2 ">“To live is the rarest thing in the world. Most people exist, that is all.”</h2>
<h3 class="mt-4"> ― Oscar Wilde</h3>
`
let arr19 =`<h2 ">“Always forgive your enemies; nothing annoys them so much.”</h2>
<h3 class="mt-4"> ― Oscar Wilde</h3>
`
let arr20 =`<h2 ">“Live as if you were to die tomorrow. Learn as if you were to live forever.”</h2>
<h3 class="mt-4">― Mahatma Gandhi </h3>
`
let arr21 =`<h2 ">“We accept the love we think we deserve.”</h2>
<h3 class="mt-4"> ― Stephen Chbosky, The Perks of Being a Wallflower</h3>
`
let arr22 =`<h2 "> “Without music, life would be a mistake.”</h2>
<h3 class="mt-4">― Friedrich Nietzsche, Twilight of the Idols </h3>
`
let arr23 =`<h2 ">“I am so clever that sometimes I don't understand a single word of what I am saying.”</h2>
<h3 class="mt-4">― Oscar Wilde, The Happy Prince and Other Stories
</h3>
`
let arr24 =`<h2 ">“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</h2>
<h3 class="mt-4">― Ralph Waldo Emerson </h3>
`
let arr25 =`<h2 ">“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”</h2>
<h3 class="mt-4"> ― Steve Jobs</h3>
`
let arr26 =`<h2 ">“Insanity is doing the same thing, over and over again, but expecting different results.”</h2>
<h3 class="mt-4"> ― Narcotics Anonymous</h3>
`
let arr27 =`<h2 ">“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”</h2>
<h3 class="mt-4">― Marilyn Monroe </h3>
`
let arr28 =`<h2 ">“It is better to be hated for what you are than to be loved for what you are not.”</h2>
<h3 class="mt-4"> ― Andre Gide, Autumn Leaves</h3>
`

let array =[arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11,arr12,arr13,arr14,arr15,arr16,arr17,arr18,arr19,arr20,arr21,arr22,arr23,arr24,arr25,arr26,arr27,arr28]



 function showQuote(){
 show.innerHTML = array[ Math.trunc(Math.random()*array.length)]
 }
