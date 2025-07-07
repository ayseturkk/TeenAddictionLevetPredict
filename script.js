// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission and prediction simulation
const predictionForm = document.getElementById('predictionForm');
const predictionResult = document.getElementById('predictionResult');

predictionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate prediction calculation
    const prediction = calculatePrediction(data);
    
    // Display result
    displayPrediction(prediction, data);
});

function calculatePrediction(data) {
    // This is a simplified prediction simulation
    // In a real application, this would call your ML model API
    
    let score = 0;
    
    // Age factor (younger teens tend to have higher addiction)
    const age = parseInt(data.age);
    if (age <= 14) score += 0.3;
    else if (age <= 16) score += 0.2;
    else score += 0.1;
    
    // Daily usage factor
    const dailyUsage = parseFloat(data.dailyUsage);
    if (dailyUsage >= 6) score += 0.4;
    else if (dailyUsage >= 4) score += 0.3;
    else if (dailyUsage >= 2) score += 0.2;
    else score += 0.1;
    
    // Sleep factor (less sleep = higher addiction)
    const sleepHours = parseFloat(data.sleepHours);
    if (sleepHours <= 5) score += 0.3;
    else if (sleepHours <= 7) score += 0.2;
    else score += 0.1;
    
    // Academic performance factor
    const academicPerformance = parseInt(data.academicPerformance);
    if (academicPerformance <= 60) score += 0.2;
    else if (academicPerformance <= 80) score += 0.1;
    else score += 0.05;
    
    // Social interactions factor
    const socialInteractions = parseInt(data.socialInteractions);
    if (socialInteractions <= 3) score += 0.2;
    else if (socialInteractions <= 6) score += 0.1;
    else score += 0.05;
    
    // Anxiety level factor
    const anxietyLevel = parseInt(data.anxietyLevel);
    if (anxietyLevel >= 7) score += 0.2;
    else if (anxietyLevel >= 5) score += 0.1;
    else score += 0.05;
    
    // Phone checks factor
    const phoneChecks = parseInt(data.phoneChecks);
    if (phoneChecks >= 100) score += 0.3;
    else if (phoneChecks >= 70) score += 0.2;
    else if (phoneChecks >= 50) score += 0.1;
    else score += 0.05;
    
    // Normalize score to 0-10 range
    const normalizedScore = Math.min(10, Math.max(0, score * 10));
    
    return {
        score: normalizedScore,
        level: getAddictionLevel(normalizedScore),
        risk: getRiskLevel(normalizedScore)
    };
}

function getAddictionLevel(score) {
    if (score >= 8) return 'High';
    else if (score >= 6) return 'Moderate';
    else if (score >= 4) return 'Low';
    else return 'Very Low';
}

function getRiskLevel(score) {
    if (score >= 8) return 'High Risk';
    else if (score >= 6) return 'Moderate Risk';
    else if (score >= 4) return 'Low Risk';
    else return 'Minimal Risk';
}

function displayPrediction(prediction, data) {
    const resultHTML = `
        <div class="prediction-content">
            <div class="prediction-header">
                <i class="fas fa-chart-line"></i>
                <h3>Prediction Results</h3>
            </div>
            
            <div class="prediction-score">
                <div class="score-circle">
                    <span class="score-number">${prediction.score.toFixed(1)}</span>
                    <span class="score-label">/ 10</span>
                </div>
                <div class="score-details">
                    <div class="level-badge ${prediction.level.toLowerCase().replace(' ', '-')}">
                        ${prediction.level} Addiction
                    </div>
                    <div class="risk-badge ${prediction.risk.toLowerCase().replace(' ', '-')}">
                        ${prediction.risk}
                    </div>
                </div>
            </div>
            
            <div class="prediction-insights">
                <h4>Key Insights:</h4>
                <ul>
                    <li>Daily Usage: ${data.dailyUsage} hours</li>
                    <li>Sleep Pattern: ${data.sleepHours} hours</li>
                    <li>Phone Checks: ${data.phoneChecks} times/day</li>
                    <li>Social Interactions: ${data.socialInteractions}/10</li>
                </ul>
            </div>
            
            <div class="recommendations">
                <h4>Recommendations:</h4>
                <p>${getRecommendations(prediction.score)}</p>
            </div>
        </div>
    `;
    
    predictionResult.innerHTML = resultHTML;
    
    // Add animation
    predictionResult.style.animation = 'fadeInUp 0.6s ease-out';
}

function getRecommendations(score) {
    if (score >= 8) {
        return "Consider professional help and implement strict phone usage limits. Focus on alternative activities and social interactions.";
    } else if (score >= 6) {
        return "Set daily phone usage limits and prioritize sleep. Engage in more offline activities and social interactions.";
    } else if (score >= 4) {
        return "Monitor usage patterns and maintain healthy habits. Consider setting specific time limits for social media.";
    } else {
        return "Maintain current healthy phone usage patterns. Continue balancing digital and offline activities.";
    }
}

// Add CSS for prediction results
const style = document.createElement('style');
style.textContent = `
    .prediction-content {
        text-align: center;
        width: 100%;
    }
    
    .prediction-header {
        margin-bottom: 2rem;
    }
    
    .prediction-header i {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        display: block;
        opacity: 0.9;
    }
    
    .prediction-header h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .prediction-score {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .score-circle {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        backdrop-filter: blur(10px);
    }
    
    .score-number {
        font-size: 2rem;
        font-weight: 700;
        display: block;
    }
    
    .score-label {
        font-size: 0.9rem;
        opacity: 0.8;
    }
    
    .score-details {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .level-badge, .risk-badge {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 600;
    }
    
    .level-badge.high, .risk-badge.high-risk {
        background: rgba(239, 68, 68, 0.2);
        color: #fecaca;
    }
    
    .level-badge.moderate, .risk-badge.moderate-risk {
        background: rgba(245, 158, 11, 0.2);
        color: #fed7aa;
    }
    
    .level-badge.low, .risk-badge.low-risk {
        background: rgba(34, 197, 94, 0.2);
        color: #bbf7d0;
    }
    
    .level-badge.very-low, .risk-badge.minimal-risk {
        background: rgba(59, 130, 246, 0.2);
        color: #bfdbfe;
    }
    
    .prediction-insights {
        margin-bottom: 1.5rem;
        text-align: left;
    }
    
    .prediction-insights h4 {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .prediction-insights ul {
        list-style: none;
        padding: 0;
    }
    
    .prediction-insights li {
        padding: 0.25rem 0;
        opacity: 0.9;
        font-size: 0.9rem;
    }
    
    .recommendations {
        text-align: left;
    }
    
    .recommendations h4 {
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .recommendations p {
        opacity: 0.9;
        line-height: 1.5;
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        .score-details {
            flex-direction: column;
            align-items: center;
        }
        
        .prediction-insights,
        .recommendations {
            text-align: center;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.analysis-card, .predictor-form, .tech-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Add loading animation for form submission
predictionForm.addEventListener('submit', () => {
    const submitBtn = predictionForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Analyzing...';
    submitBtn.disabled = true;
    
    // Simulate processing time
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.analysis-card, .tech-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add focus effects to form inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
}); 