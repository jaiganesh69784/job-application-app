require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});