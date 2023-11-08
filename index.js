const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');

// Create a route for the dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        title: 'Dashboard',
        TeachersCount: 67,
        StudentsCount: 88,
        ClassesCount: 99,
        Notifications: 78,
        Performers: [
            { Name: 'Emma Johnson', Percentage: '98%', Rank: 'Rank 1' },
            { Name: 'Sophia Wilson', Percentage: '95%', Rank: 'Rank 2' },
            // Add more project data here as needed
        ],
    });
});

// Create a route for the login page
app.get('/login', (req, res) => {
    const userType = req.query.type; // Get the userType from the query parameter
    req.session.userType = userType; // Set the userType in the session

    res.render('login', { userType: userType });
});

app.get('/sign_up', (req, res) => {
    res.render('sign up');
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
