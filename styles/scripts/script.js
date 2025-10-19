// Signup flow steps
const signupSteps = [
    {
        title: "Welcome to the Cosmos",
        subtitle: "Join our universe of amazing features",
        fields: ['email'],
        button: 'Continue'
    },
    {
        title: "Secure Your Account",
        subtitle: "Create a strong password", 
        fields: ['password'],
        button: 'Continue'
    },
    {
        title: "Personalize Your Journey",
        subtitle: "What interests you?",
        fields: ['interests'],
        button: 'Complete Signup'
    },
    {
        title: "Welcome Aboard!",
        subtitle: "Your cosmic journey begins now",
        fields: [],
        button: 'Explore Now'
    }
];

let currentStep = 0;

// Initialize the app
function init() {
    renderStep(currentStep);
}

// Render current step
function renderStep(stepIndex) {
    const container = document.getElementById('signup-container');
    const step = signupSteps[stepIndex];
    
    container.innerHTML = `
        <div class="signup-card">
            <h2>${step.title}</h2>
            <p>${step.subtitle}</p>
            ${renderFields(step.fields)}
            <button class="submit-btn" onclick="nextStep()">${step.button}</button>
        </div>
    `;
}

function renderFields(fields) {
    // We'll build this next
    return '<input type="text" placeholder="Enter your email" class="form-input">';
}

function nextStep() {
    if (currentStep < signupSteps.length - 1) {
        currentStep++;
        renderStep(currentStep);
    }
}

// Start the app
init();