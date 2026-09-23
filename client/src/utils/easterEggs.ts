// Easter eggs for the portfolio

// Konami Code → Matrix Rain
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

function triggerMatrixRain() {
  const overlay = document.createElement('div');
  overlay.id = 'matrix-rain';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 999999; background: rgba(0,0,0,0.95);
    display: flex; align-items: center; justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    overflow: hidden; cursor: pointer;
  `;

  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText = 'position: absolute; inset: 0;';
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ Exit Matrix';
  closeBtn.style.cssText = `
    position: absolute; top: 24px; right: 24px; z-index: 10;
    background: rgba(124,58,237,0.8); color: white; border: none;
    padding: 10px 20px; border-radius: 8px; cursor: pointer;
    font-family: 'JetBrains Mono', monospace; font-size: 14px;
  `;
  
  overlay.appendChild(canvas);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  const ctx = canvas.getContext('2d')!;
  const chars = 'SOJIBAHMEDFULLSTACKDEVELOPER01アイウエオカキクケコ';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops: number[] = Array(columns).fill(1);

  const draw = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#7C3AED';
    ctx.font = `${fontSize}px JetBrains Mono`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = i % 3 === 0 ? '#10B981' : '#7C3AED';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  };

  const interval = setInterval(draw, 33);
  
  const close = () => {
    clearInterval(interval);
    overlay.remove();
  };
  
  closeBtn.onclick = close;
  setTimeout(close, 8000);
}

// Console ASCII art
function printConsoleArt() {
  const styles = [
    'color: #7C3AED; font-size: 14px; font-weight: bold; font-family: JetBrains Mono',
    'color: #06B6D4; font-size: 12px; font-family: JetBrains Mono',
    'color: #10B981; font-size: 11px; font-family: JetBrains Mono',
  ];
  
  console.log(
    `%c
╔═══════════════════════════════════════════╗
║                                           ║
║   ██████╗ ██████╗      ██╗██╗██╗██╗     ║
║  ██╔════╝██╔══██╗    ████████████████╗   ║
║  ╚█████╗ ██████╔╝    ╚═══████╔══════╝   ║
║   ╚═══██╗██╔══██╗        ████║          ║
║  ██████╔╝██║  ██║        ████║          ║
║  ╚═════╝ ╚═╝  ╚═╝        ╚═╝╚═╝         ║
║                                           ║
║         SOJIB AHMED                       ║
║         Full Stack Developer              ║
║                                           ║
╚═══════════════════════════════════════════╝`,
    styles[0]
  );
  
  console.log('%c👋 Hey there, fellow developer!', styles[1]);
  console.log('%c🔍 Inspecting code? I respect that.', styles[2]);
  console.log('%c💼 Want to work together? → sojibahmedshorif998@gmail.com', styles[1]);
  console.log('%c⚡ Built with React + TypeScript + Passion', styles[2]);
  console.log('%c🚀 Open to Full-time | Freelance | Remote opportunities', styles[1]);
}

// Logo click confetti
let logoClickCount = 0;
function handleLogoClick() {
  logoClickCount++;
  if (logoClickCount >= 5) {
    triggerConfetti();
    logoClickCount = 0;
  }
}

function triggerConfetti() {
  const colors = ['#7C3AED', '#06B6D4', '#10B981', '#F59E0B', '#EC4899'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.cssText = `
      position: fixed;
      top: -10px;
      left: ${Math.random() * 100}vw;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      z-index: 999999;
      pointer-events: none;
      animation: confettiFall ${Math.random() * 2 + 1.5}s ease-in forwards;
    `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3500);
  }
  
  // Add confetti animation if not exists
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confettiFall {
        to { transform: translateY(100vh) rotate(${Math.random() * 720}deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

export function initEasterEggs() {
  // Console art
  printConsoleArt();
  
  // Konami code listener
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerMatrixRain();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  // Logo click listener (attach after mount)
  setTimeout(() => {
    const logo = document.getElementById('nav-logo');
    if (logo) logo.addEventListener('click', handleLogoClick);
  }, 3000);
}

export { triggerConfetti, triggerMatrixRain };
