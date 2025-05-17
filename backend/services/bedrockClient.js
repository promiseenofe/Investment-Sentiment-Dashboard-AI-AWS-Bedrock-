const AWS = require('aws-sdk');
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

const client = new BedrockRuntimeClient({ region: process.env.AWS_REGION });

async function analyzeSentiment(text) {
    const prompt = `Analyze the sentiment of this financial headline and return Positive, Neutral, or Negative: "${text}"`;
    const input = {
        modelId: process.env.BEDROCK_MODEL_ID,
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({ prompt }),
    };
    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    const body = await response.body.transformToString();
    return JSON.parse(body).completion;
}

module.exports = { analyzeSentiment };
