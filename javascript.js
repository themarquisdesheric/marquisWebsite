'use strict';

var button = document.getElementById('quote-button');

var quotes = [
  '<span class="first">“It’s with this final haughty thought</span> that you leave the mainland of sanity and safety behind and dive headfirst into a sea of blissful intangibility, into the alluring depths of pure, unadulterated insanity. And it’s here that you find yourself pleasantly surprised to discover that insane wasn’t <em>insane</em>, wasn’t all strait jackets and white walls. It was deeper than that: beautiful, and full of color, not darkness; effervescent and luminous, and shimmering with the kind of color that paints the world when the sun sets in August: pastel hues with a mother-of-pearl sheen, that same explosion of color you find yourself in when looking at Petker’s paintings. It is this same kind of color that reminds you of your dreams; where the blues spill into the reds and the yellows burst into the greens, where the edges melt and slip into each other to the point where they’re edges no longer but rather abstractions, convergence points, whirlpools and eddies like the kind that form between the shallows and the depths – and not just bright colors, but rich, dark colors as well: the dark earth tones of a Bavarian forest, the rooftop cross of a Portugese church outlined against the black of the mountains and the pallid moon. The light which falls in such delicate moonbeams through a canopy of mist, painting the city as the land of the dead; it is this, these words, fragments, associations, hallucinations – these are how the waters of insanity look.<span class="first endquote">”</span><br><cite>-from <a href="fragment.html">A Fragment of a Hallucination</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',
  '<span class="first">“Gurl, this is fucking unreal,"</span> he said. "You\'re telling me that there\'s no way through this?<span class="first endquote">”</span><br><cite>-from <a href="hedonism.html">The Hedonism Manifesto</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',
  '<span class="first">“This time I knew</span> for certain that I would follow him, that every shred of my being needed that pocket-watch in my possession, and somewhere below the surface of my skin, a new void opened up. I knew I would not rest until I filled that empty space with the pocket-watch, I knew sleep would not come easily and my mind would not be my own again until I sated its desires. I set off after the man, stalking my prey and never letting him out of my sight.<span class="first endquote">”</span><br><cite>-from <a href="gold-watch.html">The Man with the Gold Pocket-watch</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',
  '<span class="first">“It’s disconcerting,</span> that’s for sure. It pains me to understand that as a human, as a person, I’m extremely well cut-out and adapted to just about anything that might come across my path, with the exception of some things – creatures, afflictions, cruel twists of fate. Disease, war, you name it. It doesn’t seem <em>purposeful</em> that I exist only to be struck down, however eventual that may be. I like to think that I’m here for a reason, that somewhere down the line I’m instrumental to some grander scheme that I alone am not fully capable of understanding.<span class="first endquote">”</span><br><cite>-from <a href="inkblots.html">Inkblots</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',
  '<span class="first">“It takes a certain kind of courage</span> to take those first few steps out onto the plank. To stand over the dark and churning waters of the unknown and to brace yourself for the icy-cold rush of the abyss, like a giant black hole trying to swallow you whole. To really believe that in every end there’s a new beginning, beautiful and novel and virgin-white.<span class="first endquote">”</span><br><cite>-from <a href="illusory.html">The Illusory Depths</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',
  '<span class="first">“There’s an old saying</span> that states that your answers are only as good as the assumptions underlying your questions, and I really believe in that. And I think that people aren’t ambitious enough in their thinking. I think that people don’t understand that they can and do change the world. I think people let their subconscious dictate their life, and then blame it on fate or god or a host of other stupid cop-outs instead of standing up and taking responsibility. I think that habit and convention are two of the biggest vestigial defects in humans, and that the majority of us are sleepwalking through our lives. I think time doesn’t quite exist as we think it does and mind-reading is, in fact, possible. I think it’s absolutely ridiculous and silly that people are scared of death for the simple reason that they falsely defined it. I believe in a duality of things, in blacks and whites with infinite shades of gray in between, and I think that the world is a big Rorschach inkblot: that everything, every object, every piece of art, every human being, every patch of blue sky, is a mirror held up to ourselves. I believe in the entropy of all things.<span class="first endquote">”</span><br><cite>-from <a href="manifesto.html">The Manifesto of the Marquis de Sheric</a></cite><br><button id="quote-button" onclick="newQuote()">Show me more!</button>',

];

function newQuote() {

  var randomNumber = Math.floor(Math.random() * (quotes.length));

  var previousQuote = document.getElementById('quote-area');
  previousQuote.innerHTML = '';
  previousQuote.innerHTML = quotes[randomNumber];
};

button.addEventListener('click', newQuote);