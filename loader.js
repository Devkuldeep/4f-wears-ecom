// Session-based automatic redirect to loader/splash screen
if (!sessionStorage.getItem('visitedLoader') && !window.location.pathname.endsWith('loading.html')) {
    window.location.replace("loading.html");
}

// Admin-routing role-based access protection
if (window.location.pathname.endsWith('admin.html')) {
    const sessionStr = localStorage.getItem('userSession');
    let authenticated = false;
    if (sessionStr) {
        const session = JSON.parse(sessionStr);
        if (session.loggedIn && session.role === 'admin') {
            authenticated = true;
        }
    }
    if (!authenticated) {
        window.location.replace("login.html");
    }
}

// Dynamically inject the Admin Dashboard link into the profileDropdown for admin users
window.addEventListener('DOMContentLoaded', () => {
    const sessionStr = localStorage.getItem('userSession');
    if (sessionStr) {
        const session = JSON.parse(sessionStr);
        if (session.loggedIn && session.role === 'admin') {
            const dropdown = document.getElementById('profileDropdown');
            if (dropdown) {
                // Ensure we don't inject multiple times
                if (!document.getElementById('adminDashboardDropdownLink')) {
                    const adminLink = document.createElement('a');
                    adminLink.id = "adminDashboardDropdownLink";
                    adminLink.href = "admin.html";
                    // Visual styling aligned with premium fashion theme: bold, gold accent, with a divider
                    adminLink.className = "block px-4 py-2 hover:bg-neutral-50 hover:text-fashionGold text-fashionGold font-extrabold border-b border-neutral-100 mb-1 transition-colors";
                    adminLink.innerText = "Admin Dashboard";
                    
                    // Insert at the beginning of the dropdown menu
                    dropdown.insertBefore(adminLink, dropdown.firstChild);
                }
            }
        }
    }
});
