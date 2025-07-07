# Teen Phone Addiction Analysis

A comprehensive machine learning project that analyzes teen phone addiction patterns using advanced data science techniques and presents findings through an interactive web interface.

## 📊 Project Overview

This project combines **machine learning analysis** with **interactive web visualization** to understand the relationship between smartphone usage patterns and addiction levels among teenagers. The analysis includes:

- **Data Science**: Comprehensive analysis of 3000 teenagers with 25 behavioral and demographic features
- **Machine Learning**: Random Forest regression model with 84.9% accuracy
- **Interactive Frontend**: Modern web interface with real-time prediction tool
- **Educational Insights**: Visual representation of findings and recommendations

## 📁 Project Structure

```
teen lifestyle/
├── ml.ipynb                           # Jupyter notebook with ML analysis
├── teen_phone_addiction_dataset.csv   # Dataset (3000 teen records)
├── requirements.txt                   # Python dependencies
├── README.md                         # This file
├── index.html                        # Main web interface
├── styles.css                        # Modern CSS styling
└── script.js                         # Interactive JavaScript functionality
```

## 🗂️ Dataset Description

The dataset contains **25 features** for **3000 teenagers**:

### Demographic Features
- `ID` - Unique identifier
- `Name` - Teen's name
- `Age` - Age in years (10-20)
- `Gender` - Gender (Male/Female/Other)
- `Location` - Geographic location
- `School_Grade` - Current school grade

### Phone Usage Features
- `Daily_Usage_Hours` - Hours spent on phone daily
- `Weekend_Usage_Hours` - Hours spent on phone during weekends
- `Phone_Checks_Per_Day` - Number of times phone is checked daily
- `Apps_Used_Daily` - Number of apps used daily
- `Screen_Time_Before_Bed` - Hours of screen time before sleeping

### Behavioral Features
- `Sleep_Hours` - Hours of sleep per night
- `Exercise_Hours` - Hours of exercise per week
- `Social_Interactions` - Number of social interactions (0-10)
- `Academic_Performance` - Academic performance score (0-100)
- `Family_Communication` - Family communication score

### Mental Health Features
- `Anxiety_Level` - Anxiety level score (0-10)
- `Depression_Level` - Depression level score (0-10)
- `Self_Esteem` - Self-esteem score (0-10)

### Usage Patterns
- `Time_on_Social_Media` - Hours on social media
- `Time_on_Gaming` - Hours spent gaming
- `Time_on_Education` - Hours spent on educational apps
- `Phone_Usage_Purpose` - Primary purpose of phone usage
- `Parental_Control` - Level of parental control

### Target Variable
- `Addiction_Level` - Phone addiction level (prediction target)

## 🚀 Installation & Setup

### Backend (Machine Learning)

1. **Clone or download the project files**

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Launch Jupyter Notebook**:
   ```bash
   jupyter notebook
   ```

4. **Open `ml.ipynb`** and run all cells for the complete analysis

### Frontend (Web Interface)

1. **Open `index.html`** in your web browser
2. **Navigate through sections** using the top menu
3. **Try the interactive predictor** by filling out the form
4. **View on mobile** to experience responsive design

## 📈 Machine Learning Methodology

### Data Preprocessing
1. **Data Cleaning**: Removed unnecessary columns (ID, Name, Location)
2. **Feature Engineering**: 
   - Identified categorical and numerical columns
   - Applied One-Hot Encoding to categorical variables
   - Standardized numerical features using StandardScaler

### Model Architecture
1. **Preprocessing Pipeline**: ColumnTransformer with OneHotEncoder
2. **Scaling**: StandardScaler for numerical features
3. **Model**: RandomForestRegressor with 100 estimators
4. **Evaluation**: Train-test split (70-30) with random state 42

### Model Performance
- **RMSE**: 0.61
- **R² Score**: 0.849 (84.9% variance explained)
- **Accuracy**: High predictive performance for addiction levels

## 🎨 Frontend Features

### Modern Design
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Gradient Backgrounds**: Beautiful purple/blue theme
- **Glassmorphism Effects**: Modern backdrop blur effects
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Professional Typography**: Inter font family

### Interactive Sections

#### 🏠 Hero Section
- Eye-catching gradient background
- Key statistics display
- Phone mockup visualization
- Call-to-action buttons

#### 📊 Analysis Section
- Three informative cards with icons
- Dataset overview with feature tags
- Key insights with visual indicators
- Model performance metrics

#### 🎯 Predictor Section
- Interactive form with 7 key input fields
- Real-time prediction simulation
- Beautiful result display with:
  - Circular score indicator
  - Addiction level badges
  - Risk assessment
  - Personalized recommendations

#### ℹ️ About Section
- Project methodology explanation
- Technology stack display
- Key features list

### Advanced Functionality
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience
- **Form Validation**: Real-time input validation
- **Dynamic Predictions**: Simulated ML model predictions
- **Loading Animations**: Professional user feedback
- **Hover Effects**: Interactive element responses

## 🛠️ Technology Stack

### Backend
- **Python** - Core programming language
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computations
- **Scikit-learn** - Machine learning algorithms
- **Matplotlib** - Data visualization
- **Jupyter** - Interactive development environment

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Inter)

### Dependencies
```
# Core data science libraries
numpy>=1.21.0
pandas>=1.3.0

# Visualization
matplotlib>=3.5.0

# Machine learning
scikit-learn>=1.0.0

# Jupyter notebook support
jupyter>=1.0.0
ipykernel>=6.0.0

# Optional: Additional useful libraries
seaborn>=0.11.0
plotly>=5.0.0
pickle-mixin>=0.7.0
```

## 📝 Usage Guide

### Running the Analysis
1. **Install dependencies**: `pip install -r requirements.txt`
2. **Open Jupyter**: `jupyter notebook`
3. **Run notebook**: Execute all cells in `ml.ipynb`
4. **Review results**: Check model performance and insights

### Using the Web Interface
1. **Open `index.html`** in any modern web browser
2. **Navigate sections** using the top menu
3. **Try the predictor**:
   - Fill in behavioral data
   - Submit the form
   - View personalized predictions and recommendations
4. **Explore insights** in the analysis section

## 🔍 Key Findings

### Model Performance
- **High Accuracy**: 84.9% R² score indicates strong predictive power
- **Low Error**: RMSE of 0.61 shows precise predictions
- **Robust Model**: Random Forest captures complex non-linear relationships

### Behavioral Insights
- **Sleep Correlation**: High phone usage correlates with sleep disruption
- **Social Impact**: Increased addiction levels reduce social interactions
- **Academic Effects**: Phone addiction negatively impacts academic performance
- **Mental Health**: Anxiety and depression levels correlate with usage patterns

### Predictive Factors
- **Daily Usage Hours**: Primary predictor of addiction levels
- **Sleep Patterns**: Critical factor in addiction assessment
- **Phone Check Frequency**: Strong indicator of dependency
- **Social Interactions**: Inverse relationship with addiction
- **Academic Performance**: Affected by phone usage patterns

## 🤝 Contributing

We welcome contributions to improve this project:

### Backend Improvements
- **Model Enhancement**: Try different ML algorithms
- **Feature Engineering**: Add new derived features
- **Hyperparameter Tuning**: Optimize model performance
- **Additional Analysis**: Explore new insights

### Frontend Enhancements
- **UI/UX Improvements**: Better user experience
- **New Visualizations**: Add charts and graphs
- **Additional Features**: More interactive elements
- **Performance Optimization**: Faster loading times

### General Contributions
- **Documentation**: Improve code comments and docs
- **Testing**: Add unit tests and validation
- **Bug Fixes**: Report and fix issues
- **Feature Requests**: Suggest new functionality

## 📄 License

This project is open source and available under the MIT License.

## ⚠️ Important Notes

### Educational Purpose
This is a **research project for educational purposes**. The dataset is synthetic and should not be used for:
- Clinical diagnosis
- Medical treatment decisions
- Professional counseling
- Legal proceedings

### Data Privacy
- All data is synthetic and anonymized
- No real personal information is used
- Results are for educational demonstration only

### Model Limitations
- Simplified prediction algorithm in frontend
- Real-world applications would require more sophisticated models
- Results should be interpreted as educational insights only

---

**🎓 Research Project**: Teen Phone Addiction Analysis  
**📊 Dataset**: 3000 synthetic teen records  
**🤖 Model**: Random Forest Regression (84.9% accuracy)  
**🌐 Interface**: Modern responsive web application  
**📱 Responsive**: Works on all devices
