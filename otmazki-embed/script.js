<script>

var phraseManager = {
  1:["I was getting prepared for the zombie apocalypse. British scientists told that soon there's going to be one. Why are you so calm? They are coming, and nobody will survive!"],
  2:["The existential crisis hit me like a meteorite. There was a suspicion; it could seep into our project! Nobody wants that, right?"],
  3:["Do you know there is a Cookie Monster in our town? It stuffs people with pastry and lets them die. Quite rude, never offers a cup of tea. So I was saving lives by eating as many cookies as I could. No time for the work, humanity was at risk!"],
  4:["Well you know, I've been was smoking weed and got taken away by conversations with Jimmy Hendricks, and his 27 club buddies. They have shared a lot of ideas regarding our project, so now it's going to be a whole new turn. Watch out!"],
  5:["How dare are you to be the best company on the market? I couldn't be happy enough working with you. For the last week, I was hit by a depression caused by your awesomeness."],
  6:["What? I thought it was a day off! Anniversary of Kurt Cobain being sober for 49 years already."],
  7:["Last week was Children Protection Week. I was helping children, the more alcohol I drank, the less they were going to have. You hired me for my great personality, how could I let you down?"],
  8:["I almost finished my task. But then I took a peek at it and realized that the ceiling of Kurt Cobain's apartment had more brain activity than our project."],
  9:["If I did this task, It would be so great, precisely described as: “To die for.” What kind of person would I have been to let that happen?!"],
  10:["I was dealing with a common to all humanity question. If there is a heaven, which religion guarantees that you gonna get there? Because they all are mutually exclusive, and if you choose the wrong one, you will go to hell. Don't you care about the future of my soul?"],
  11:["Jehovah's witnesses were gathering around my house all week; It was impossible to concentrate."],
  12:["This saleswoman was so persuasive, she invited herself to my house, and chatted with me all day. By the way, do you want an amazing toilet brush with 50% discount? "],
  13:["Doctor told me that hard work is harmful to my health and watching TV could help. So was only able to do the task for one minute a day. You can't blame me for that! Do you want me to be a non-working unit?"],
  14:["A ghost of your mother came to my house and told me what you did! How can you even call yourself a human? I can't perceive you as a boss anymore!"],
  15:["You know that according to the conspiracy theory the Freemasons want to rule the humanity. Not so fast my friend! I would not let you tell me when the deadline is!"],
  16:["Sorry, I’m late. I just didn’t want to come."],
  17:["I’m sorry, but my aquarium crashed, so I was saving my fishes lives."],
  18:["My uncle died. (And no matter that its the second time this month)"],
  19:["It feels like I’m pregnant, the whole morning I was thinking, who might be the father, sorry for being late."],
  20:["My cat pooped all over my flat. I was too busy beating the shit out of him, that I forgot about time. ( While saying it, check your shoes)"],
  21:["My girlfriend spooked me when I was putting my clothes on, I got knocked out after hitting the table with my head."],
  22:["Sorry, I was suffering from meteorism. (A suffering face and a couple of powerful farts will help you to make it real) "],
  23:["I was almost done, but my friend called me and asked for help. UFO  kidnapped him, so the whole week I was looking for the way to save him!"],
  24:["My wife got angry because I was working a lot, and I didn't sleep with her for a month,  that’s why the last three days I just was too busy having sex."],
  25:["My religion allows me not working when I don't want it. "],
  26:["I was too drunk to understand what date was yesterday, sorry for that. "],
  27:["I was too depressed this month. That's why I'm naked right now."],
  28:["I did everything in time. But burglars broke into my house and deleted all my work. I tried to stop them, but they were too strong."]
};

var phraseDesigner = {
  1:["I couldn’t finish this project on time cause I was too busy making money on my full-time job."],
  2:["I couldn’t end this project on time cause my Samsung Note 7 exploded and I couldn’t get in touch with you."],
  3:["I couldn’t finish this project on time cause I was too angry with the new Star Wars movie reboot, so I had to post a negative feedback on the internet ASAP."],
  4:["I couldn’t finish this project on time cause I am too high right now and to be honest with you, not even sure who you are."],
  5:["I couldn’t finish this project on time cause when I woke up this morning, America was still a free country, goddamnit!"],
  6:["I couldn’t finish this project on time cause I am still getting used to this new MacBook Pro. "],
  7:["Daaamn, have you seen this touchscreen? You can display emojis right on this thing!"],
  8:["I couldn’t finish this project on time cause I was watching motivational videos on YouTube, now I'm ready to start."],
  9:["I couldn’t finish this project on time cause Comic-Con is coming and my Han Solo costume is still not ready yet."],
  10:["I couldn’t finish this project on time cause this city needs a hero. So I’m gonna fight criminals wearing my spandex suit and we’ll just pretend that this conversation never happened. "],
  11:["I couldn’t finish this project on time cause I’m too old for this shit."]
};

var phraseWriter = {
  1:["I was looking for inspiration, but they don't sell alcohol after 10 pm."],
  2:["I'm a perfectionist, so if I know that work will be done bad, I'd rather not start it at all."],
  3:["Talented copywriters say, that you have to write something and to leave it aside for a few days. Why are you looking at me that way? Time hasn't come yet!"],
  4:["I didn't have time to finish an article because my kid was ill. I don't have kids? Well, my neighbors are my family!"],
  5:["My mom sad I spend too much time in front of a computer, sorry that was just about when I wanted to start my workflow."],
  6:["They say the purchasing power has lowered recently, so there is no point in sales text that you asked me to write."],
  7:["I have tried to write that article, but Yoda said: “Do. Or do not. There is no try”. Who would argue with this wise quote? "],
  8:["Last week was an Earth week, and Greenpeace turned off all the electricity in our city. I have no guts to go against those fanatics."],
  9:["Sorry, boss, my muse ran away from me, I don’t want to write shoddy articles without her, just give me some time to take over."],
  10:["Do you remember that my birthday was four days ago? This is the first day of my soberness; I need some time to understand what is going on.  "],
  11:["I’m suffering from an alcohol addiction for years; the problem is that I was run out of alcohol yesterday. I will buy a bottle today, and my talent will come back to finish my work."],
  12:["I lost my glasses. I was looking for them the whole week, and I discovered that I forgot them at work. "],
  13:["My mom called me that her car stuck on the off-road. I was helping her to get it out."],
  14:["Sorry, boss, but my husband is too sick today. I hope he will be in the same case tomorrow and on Friday."],
  15:["Sorry, I missed the deadline, because of a massive injury. It was impossible to work with a broken toe. "],
  16:["Sorry, boss, I’m on my period right now, I have no idea how to concentrate on my work."],
  17:["We had no Internet at work last week, hadn’t we? The deal is that all last week I was without the Internet at home too; I was so angry that I couldn't write, I had so many thoughts, I needed to share them, I was suffering, boss."],
  18:["The food you treated us on your anniversary with was awful. I’ve got food poisoning, and it was torturing me for two weeks! "],
  19:["The weather was too bad these days. I’m very sensitive to the weather, sir. Sorry, I was feeling too weak to do everything in time."]
};

// TABS FUNCTIONAL
(function($){       
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(9);        
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });       
        };    
        return this.each(createTabs);
    };  
})(jQuery);
$(document).ready(function(){
    $(".proff__tabs").lightTabs();
});


// objectLength gets the current length of an object
function objectLength(obj) {
  var count = 0;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        count++;
    }
  }
  return count;
}

// generates a random whole number between 1 and the length of the quote object
function randomNumber(objLen) {
  return Math.floor(Math.random() * (objLen - 1 + 1)) + 1;
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

// Generate Manager Phrases
document.getElementById('button-manager').onclick = function() {
  var proff = 'manager';
  var visibleText = document.getElementById('quote-manager');
  var visibleButton = document.getElementById('button-manager');
  addClass(visibleText, 'show');
  addClass(visibleButton, 'show');
  var tempNum = phraseManager[randomNumber(objectLength(phraseManager))];
  document.getElementById('quote-manager').innerHTML = tempNum[0];
  var tweetThis1 = '<a class="twitter-button" href="https://twitter.com/intent/tweet?text=';
  var tweetThis2 = '" data-size="small">Share on Tweeter</a>';
  var phraseArray = tempNum[0].split(" ").join("%20");
  tweetPharse(tweetThis1, phraseArray, tweetThis2, proff);
}

// Generate Designer Phrases
document.getElementById('button-designer').onclick = function() {
  var proff = 'designer';
  var visible = document.getElementById('quote-designer');
  var visibleButton = document.getElementById('button-designer');
  addClass(visible, 'show');
  addClass(visibleButton, 'show');
  var tempNum = phraseDesigner[randomNumber(objectLength(phraseDesigner))];
  document.getElementById('quote-designer').innerHTML = tempNum[0];
  var tweetThis1 = '<a class="twitter-button" href="https://twitter.com/intent/tweet?text=';
  var tweetThis2 = '" data-size="small">Share on Tweeter</a>';
  var phraseArray = tempNum[0].split(" ").join("%20");
  tweetPharse(tweetThis1, phraseArray, tweetThis2, proff);
}

// Generate Writer Phrases
document.getElementById('button-writer').onclick = function() {
  var proff = 'writer';
  var visible = document.getElementById('quote-writer');
  var visibleButton = document.getElementById('button-writer');
  addClass(visible, 'show');
  addClass(visibleButton, 'show');
  var tempNum = phraseWriter[randomNumber(objectLength(phraseWriter))];
  document.getElementById('quote-writer').innerHTML = tempNum[0];
  var tweetThis1 = '<a class="twitter-button" href="https://twitter.com/intent/tweet?text=';
  var tweetThis2 = '" data-size="small">Share on Tweeter</a>';
  var phraseArray = tempNum[0].split(" ").join("%20");
  tweetPharse(tweetThis1, phraseArray, tweetThis2, proff);
}

function tweetPharse(tweetThis1, phraseArray, tweetThis2, proff) {
  var tweetSubmit = tweetThis1 + phraseArray + tweetThis2;
  document.getElementById("tweet-"+ proff).innerHTML = tweetSubmit;
}

</script>

<script>
  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
</script>