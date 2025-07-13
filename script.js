/**
 * Vegan Places Finder - JavaScript functionality
 * Handles widget loading, error states, and responsive behavior
 */

// Global variables (simplified for non-iframe version)
let initComplete = false;

/**
 * Initialize the application
 */
function init() {
    setupEventListeners();
    setupResponsiveHandling();
    
    // Mark initialization as complete
    initComplete = true;
    
    // Log application start for debugging
    console.log('Vegan Places Finder initialized');
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
    // Window resize handler for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
    
    // Handle visibility change (when user switches tabs)
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Handle online/offline status
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
}



/**
 * Handle window resize for responsive adjustments
 */
function handleResize() {
    // Responsive adjustments for container
    const widgetContainer = document.querySelector('.widget-container');
    if (widgetContainer) {
        const viewportHeight = window.innerHeight;
        const minHeight = Math.max(400, Math.min(700, viewportHeight - 200));
        widgetContainer.style.minHeight = `${minHeight}px`;
    }
}

/**
 * Handle responsive behavior setup
 */
function setupResponsiveHandling() {
    // Initial responsive adjustment
    handleResize();
    
    // Handle device orientation change
    if (screen.orientation) {
        screen.orientation.addEventListener('change', () => {
            setTimeout(handleResize, 300); // Delay to allow orientation change to complete
        });
    } else {
        // Fallback for older browsers
        window.addEventListener('orientationchange', () => {
            setTimeout(handleResize, 300);
        });
    }
}

/**
 * Handle visibility change (tab switching)
 */
function handleVisibilityChange() {
    if (document.hidden) {
        console.log('Page hidden - pausing any background tasks');
    } else {
        console.log('Page visible - resuming normal operation');
    }
}

/**
 * Handle online status
 */
function handleOnline() {
    console.log('Connection restored');
}

/**
 * Handle offline status
 */
function handleOffline() {
    console.log('Connection lost');
}

/**
 * Utility function to detect if device is mobile
 */
function isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Utility function to detect connection speed
 */
function getConnectionSpeed() {
    if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return connection.effectiveType || 'unknown';
    }
    return 'unknown';
}

/**
 * Performance monitoring
 */
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
                
                // Log connection info if available
                const connectionSpeed = getConnectionSpeed();
                console.log(`Connection speed: ${connectionSpeed}`);
            }, 0);
        });
    }
}

/**
 * Error reporting (basic console logging)
 */
function reportError(error, context) {
    console.error(`Error in ${context}:`, error);
    
    // In a production environment, you might want to send this to an analytics service
    // Example: analytics.track('error', { context, error: error.message });
}

/**
 * Initialize application when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Start performance monitoring
monitorPerformance();

// Global error handler
window.addEventListener('error', (event) => {
    reportError(event.error, 'global');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
    reportError(event.reason, 'promise');
});

// No global functions needed for this version
