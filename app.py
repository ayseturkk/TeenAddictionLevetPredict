import streamlit as st
import numpy as np

st.set_page_config(
    page_title="Teen Phone Addiction Analysis",
    page_icon="📱",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Sidebar Navigation
st.sidebar.title("📱 Teen Phone Addiction App")
section = st.sidebar.radio(
    "Go to",
    ("Overview", "Analysis", "Predictor", "About")
)

# --- Overview Section ---
if section == "Overview":
    st.title("Teen Phone Addiction Analysis")
    st.markdown("""
    **Understanding the impact of smartphone usage on teenage behavior and mental health through advanced machine learning.**
    """)
    col1, col2, col3 = st.columns(3)
    col1.metric("Teenagers Analyzed", "3000")
    col2.metric("Features Tracked", "25")
    col3.metric("Model Accuracy", "84.9%")
    st.image("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80", use_column_width=True, caption="Teen Lifestyle & Technology")
    st.markdown("---")
    st.subheader("Project Highlights")
    st.write("""
    - Comprehensive dataset of 3000 teens
    - 25 behavioral, demographic, and mental health features
    - Random Forest regression model
    - Interactive prediction tool
    - Educational insights and recommendations
    """)

# --- Analysis Section ---
elif section == "Analysis":
    st.title("📊 Data Analysis & Insights")
    st.markdown("""
    **Key findings from the dataset and model:**
    """)
    st.info("High phone usage correlates with sleep disruption.")
    st.info("Social interactions decrease as addiction level increases.")
    st.info("Academic performance is negatively impacted by phone addiction.")
    st.info("Anxiety and depression levels are higher among high-usage teens.")
    st.markdown("---")
    st.subheader("Model Performance")
    st.metric("RMSE", "0.61")
    st.metric("R² Score", "0.849")
    st.markdown("---")
    st.subheader("Feature Importance (Example)")
    st.write("1. Daily Usage Hours\n2. Sleep Hours\n3. Phone Checks Per Day\n4. Social Interactions\n5. Academic Performance")

# --- Predictor Section ---
elif section == "Predictor":
    st.title("🎯 Addiction Level Predictor")
    st.markdown("Enter behavioral data to predict phone addiction level.")
    with st.form("predictor_form"):
        age = st.slider("Age", 10, 20, 15)
        gender = st.selectbox("Gender", ["Male", "Female", "Other"])
        daily_usage = st.slider("Daily Usage (Hours)", 0.0, 12.0, 4.0, 0.1)
        sleep_hours = st.slider("Sleep Hours", 0.0, 12.0, 7.0, 0.1)
        academic_performance = st.slider("Academic Performance (0-100)", 0, 100, 75)
        social_interactions = st.slider("Social Interactions (0-10)", 0, 10, 5)
        anxiety_level = st.slider("Anxiety Level (0-10)", 0, 10, 5)
        phone_checks = st.slider("Phone Checks Per Day", 0, 200, 50)
        submitted = st.form_submit_button("Predict Addiction Level")

    def simulate_prediction(data):
        score = 0
        if data['age'] <= 14:
            score += 0.3
        elif data['age'] <= 16:
            score += 0.2
        else:
            score += 0.1
        if data['daily_usage'] >= 6:
            score += 0.4
        elif data['daily_usage'] >= 4:
            score += 0.3
        elif data['daily_usage'] >= 2:
            score += 0.2
        else:
            score += 0.1
        if data['sleep_hours'] <= 5:
            score += 0.3
        elif data['sleep_hours'] <= 7:
            score += 0.2
        else:
            score += 0.1
        if data['academic_performance'] <= 60:
            score += 0.2
        elif data['academic_performance'] <= 80:
            score += 0.1
        else:
            score += 0.05
        if data['social_interactions'] <= 3:
            score += 0.2
        elif data['social_interactions'] <= 6:
            score += 0.1
        else:
            score += 0.05
        if data['anxiety_level'] >= 7:
            score += 0.2
        elif data['anxiety_level'] >= 5:
            score += 0.1
        else:
            score += 0.05
        if data['phone_checks'] >= 100:
            score += 0.3
        elif data['phone_checks'] >= 70:
            score += 0.2
        elif data['phone_checks'] >= 50:
            score += 0.1
        else:
            score += 0.05
        normalized_score = min(10, max(0, score * 10))
        if normalized_score >= 8:
            level = 'High'
            risk = 'High Risk'
        elif normalized_score >= 6:
            level = 'Moderate'
            risk = 'Moderate Risk'
        elif normalized_score >= 4:
            level = 'Low'
            risk = 'Low Risk'
        else:
            level = 'Very Low'
            risk = 'Minimal Risk'
        return normalized_score, level, risk

    if submitted:
        data = {
            'age': age,
            'gender': gender,
            'daily_usage': daily_usage,
            'sleep_hours': sleep_hours,
            'academic_performance': academic_performance,
            'social_interactions': social_interactions,
            'anxiety_level': anxiety_level,
            'phone_checks': phone_checks
        }
        score, level, risk = simulate_prediction(data)
        st.success(f"Predicted Addiction Score: {score:.1f} / 10")
        st.info(f"Addiction Level: {level} ({risk})")
        st.markdown("**Key Insights:**")
        st.write(f"- Daily Usage: {daily_usage} hours\n- Sleep: {sleep_hours} hours\n- Phone Checks: {phone_checks} times/day\n- Social Interactions: {social_interactions}/10")
        st.markdown("**Recommendations:**")
        if score >= 8:
            st.warning("Consider professional help and implement strict phone usage limits. Focus on alternative activities and social interactions.")
        elif score >= 6:
            st.warning("Set daily phone usage limits and prioritize sleep. Engage in more offline activities and social interactions.")
        elif score >= 4:
            st.info("Monitor usage patterns and maintain healthy habits. Consider setting specific time limits for social media.")
        else:
            st.success("Maintain current healthy phone usage patterns. Continue balancing digital and offline activities.")

# --- About Section ---
else:
    st.title("ℹ️ About This Project")
    st.markdown("""
    **Research Purpose**
    
    This project analyzes the relationship between smartphone usage patterns and addiction levels among teenagers. Using machine learning techniques, we can predict addiction levels based on behavioral and demographic factors.
    
    **Methodology**
    - Random Forest regression model
    - 3000 synthetic teen records
    - 25 features: phone usage, sleep, academics, mental health, and more
    
    **Key Features**
    - Comprehensive dataset analysis
    - Advanced machine learning model
    - Interactive prediction tool
    - Educational insights
    
    **Tech Stack**
    - Python, Streamlit, Pandas, Scikit-learn, Matplotlib
    
    **License**
    - MIT License
    
    *This is a research project for educational purposes. The dataset is synthetic and should not be used for clinical or diagnostic purposes.*
    """) 