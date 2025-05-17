const express = require('express');
const bodyParser = require('body-parser');
const { analyzeSentiment } = require('./services/bedrockClient');

const app = express();
app.use(bodyParser.json());

app.post('/analyze-sentiment', async (req, res) => {
    const { text } = req.body;
    try {
        const response = await analyzeSentiment(text);
        res.json({ sentiment: response });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error analyzing sentiment');
    }
});

app.listen(3001, () => console.log('Backend running on port 3001'));
