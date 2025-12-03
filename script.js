const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const nextBtn = document.getElementById('nextBtn');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const slideBox = document.getElementById('slideBox');

    nextBtn.addEventListener('click', () => {
        page1.style.display = 'none';
        page2.style.display = 'block';
    });

    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * 250;
        const y = Math.random() * 200;
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        spawnHearts(noBtn);
    });
    noBtn.addEventListener('click', () => {
        const x = Math.random() * 250;
        const y = Math.random() * 200;
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        spawnHearts(noBtn);
    });

    yesBtn.addEventListener('click', () => {
        slideBox.style.top = '20%'; slideBox.style.display = 'block';
        spawnHearts(yesBtn);
    });

    function spawnHearts(btn) {
        for (let i = 0; i < 4; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            const rect = btn.getBoundingClientRect();
            heart.style.left = rect.left + (Math.random()*40) + 'px';
            heart.style.top = rect.top + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1300);
        }

    }
