/**
 * 4F WEARS - Global Premium Page Loader
 * Injected automatically to provide a smooth, editorial transitions between pages.
 */
(function() {
    // 1. Inject loader styles into head instantly
    const style = document.createElement('style');
    style.innerHTML = `
        #globalPageLoader {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            opacity: 1;
            visibility: visible;
        }
        #globalPageLoader.fade-out {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        @keyframes pulseLogo {
            0%, 100% { opacity: 0.6; transform: scale(0.97); }
            50% { opacity: 1; transform: scale(1); }
        }
        .pulse-logo {
            animation: pulseLogo 1.8s ease-in-out infinite;
        }
        @keyframes spinnerSpin {
            to { transform: rotate(360deg); }
        }
        .spinner-rotate {
            animation: spinnerSpin 0.7s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
        }
    `;
    document.head.appendChild(style);

    // 2. Poll for document.body availability and insert the loader overlay element immediately
    const loaderHtml = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem; text-align: center;">
            <!-- Pulsing Editorial Logo -->
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.25rem; user-select: none;" class="pulse-logo">
                <span style="font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; font-weight: 800; font-size: 2.25rem; font-style: italic; color: #0e0f11; letter-spacing: -0.05em;">4F</span>
                <span style="font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; font-weight: 700; font-size: 1.5rem; color: rgba(14, 15, 17, 0.85); letter-spacing: 0.08em;">WEARS</span>
            </div>
            <!-- Minimal Gold Ring Spinner -->
            <div style="width: 2.25rem; height: 2.25rem; border: 3px solid #f3f4f6; border-top: 3px solid #f18a00; border-radius: 9999px; margin-left: auto; margin-right: auto;" class="spinner-rotate"></div>
        </div>
    `;

    const checkBody = setInterval(() => {
        if (document.body) {
            clearInterval(checkBody);
            
            // Create loader wrapper div
            const loaderDiv = document.createElement('div');
            loaderDiv.id = 'globalPageLoader';
            loaderDiv.innerHTML = loaderHtml;
            
            // Insert at the absolute top of the body
            document.body.insertBefore(loaderDiv, document.body.firstChild);
        }
    }, 5);

    // 3. Fade out and remove the loader when window is fully loaded
    window.addEventListener('load', () => {
        const loader = document.getElementById('globalPageLoader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
            }, 450);
        }
    });

    // Fallback: Safety timeout to hide loader if load event takes too long (e.g. image failure)
    setTimeout(() => {
        const loader = document.getElementById('globalPageLoader');
        if (loader && !loader.classList.contains('fade-out')) {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 450);
        }
    }, 3000);
})();
