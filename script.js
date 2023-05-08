'use strict'

const btn = document.querySelector('#btn');
const par = document.querySelector('#par');

const foresightBank = [
  `You will discover and cultivate your unique talents, allowing you to express yourself fully and make a positive impact in the world.`,
  `You will attract abundance and prosperity into your life, allowing you to live comfortably and pursue your dreams with ease.`,
  `You will develop deep and meaningful relationships with others, fostering love, trust, and mutual support.`,
  `You will experience profound personal growth and transformation, unlocking new levels of self-awareness and self-actualization.`,
  `You will find a sense of purpose and meaning in your life, knowing that your actions and contributions have a positive impact on the world.`,
  `You will enjoy good health and vitality, feeling strong, energetic, and full of life.`,
  `You will find inner peace and contentment, experiencing a sense of harmony and balance within yourself and in your relationships with others.`,
  `You will develop a deep and abiding sense of self-love and self-acceptance, freeing yourself from negative self-talk and self-judgment.`,
  `You will become a role model and inspiration to others, showing them what is possible when one lives with courage, passion, and purpose.`,
  `You will experience a life filled with joy, wonder, and beauty, appreciating the magic and mystery of the world around you.`
]

btn.addEventListener('click', () => {
  let randomForesight = foresightBank[Math.floor(Math.random() * foresightBank.length)];
  par.style.display = 'block';
  par.textContent = randomForesight;

})