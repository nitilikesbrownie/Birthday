// scatter tiny ambient background stars behind the card
const layer = document.getElementById('bgDots');
const COUNT = 50;

for (let i = 0; i < COUNT; i++) {
  const dot = document.createElement('span');
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.animationDelay = (Math.random() * 3.5).toFixed(2) + 's';
  dot.style.animationDuration = (2.5 + Math.random() * 3).toFixed(2) + 's';
  layer.appendChild(dot);
}

// gentle confetti rising up over the card
const confettiLayer = document.getElementById('confettiLayer');
const CONFETTI_COLORS = ['#ff9ecf', '#ffd28a', '#b79bff', '#8fe3c7', '#ffe08a', '#ff8f8f'];
const CONFETTI_COUNT = 26;

for (let i = 0; i < CONFETTI_COUNT; i++) {
  const piece = document.createElement('span');
  piece.className = 'confetti';
  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  const size = 5 + Math.random() * 6;

  piece.style.left = Math.random() * 100 + '%';
  piece.style.background = color;
  piece.style.width = size + 'px';
  piece.style.height = (size * 1.7) + 'px';
  piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
  piece.style.animationDuration = (7 + Math.random() * 6).toFixed(2) + 's';
  piece.style.animationDelay = (Math.random() * 10).toFixed(2) + 's';

  confettiLayer.appendChild(piece);
}