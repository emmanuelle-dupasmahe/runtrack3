const footer = document.getElementById('scroll-progress');
function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progressPercentage = 0;

   
    if (scrollHeight > 0) {
        progressPercentage = (scrollTop / scrollHeight) * 100;
    }

    
    progressPercentage = Math.min(100, Math.max(0, progressPercentage));
    const hue = (progressPercentage / 100) * 120; // 0% -> 0 (Rouge); 100% -> 120 (Vert)
    
    
    footer.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
    footer.textContent = `${Math.round(progressPercentage)}%`;
}

window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();