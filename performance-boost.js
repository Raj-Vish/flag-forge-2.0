// performance-boost.js - Add this new file only
(function() {
    // Optimize matrix animation
    let matrixRunning = true;
    
    document.addEventListener('visibilitychange', function() {
        matrixRunning = !document.hidden;
    });
    
    // Override requestAnimationFrame to throttle when tab is hidden
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback) {
        if (!matrixRunning) return;
        return originalRAF.call(window, callback);
    };
    
    // Reduce animation intensity on mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        document.documentElement.style.setProperty('--animation-speed', '0.5');
    }
})();