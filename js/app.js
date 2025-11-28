document.addEventListener('DOMContentLoaded', () => {
    console.log('SimplicIT App Initialized');

    // DOM Elements
    const dashboardView = document.getElementById('dashboard-view');
    const projectView = document.getElementById('project-view');
    const backButton = document.getElementById('back-to-dashboard');
    const projectTitleElement = document.getElementById('project-title');
    const projectLinks = document.querySelectorAll('.project-link');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Views Collection
    const views = {
        'dashboard-view': dashboardView,
        'project-view': projectView,
        'toepasbare-regels-view': document.getElementById('toepasbare-regels-view'),
        'community-view': document.getElementById('community-view')
    };

    // Navigation Handling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Switch View
            const targetViewId = link.dataset.view;
            if (targetViewId && views[targetViewId]) {
                hideAllViews();
                views[targetViewId].classList.remove('hidden');
                console.log(`Navigated to: ${targetViewId}`);
            }
        });
    });

    // Open Project
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectName = link.dataset.project;
            openProject(projectName);
        });
    });

    // Close Project (Back to Dashboard)
    if (backButton) {
        backButton.addEventListener('click', () => {
            closeProject();
        });
    }

    // Tab Switching
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            switchTab(tabId);
        });
    });

    // Functions
    function hideAllViews() {
        Object.values(views).forEach(view => {
            if (view) view.classList.add('hidden');
        });
    }

    function openProject(name) {
        // Update Project Title
        projectTitleElement.textContent = name;

        // Show Project View, Hide others
        hideAllViews();
        projectView.classList.remove('hidden');

        // Reset to first tab
        switchTab('projectvoortgang');

        console.log(`Opened project: ${name}`);
    }

    function closeProject() {
        // Show Dashboard, Hide Project View
        hideAllViews();
        dashboardView.classList.remove('hidden');

        console.log('Closed project, returned to dashboard');
    }

    function switchTab(tabId) {
        // Update Tab Buttons
        tabButtons.forEach(btn => {
            if (btn.dataset.tab === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Tab Content
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.remove('hidden');
                content.classList.add('active');
            } else {
                content.classList.add('hidden');
                content.classList.remove('active');
            }
        });

        console.log(`Switched to tab: ${tabId}`);
    }
});
