const { ChatOpenAI } = require("@langchain/openai");
const { config } = require("dotenv");
const { SystemMessage, HumanMessage } = require("langchain");
config();
const model = new ChatOpenAI({
    model: "xiaomi/mimo-v2-flash:free", // Specify a model available on OpenRouter
    configuration: {
        apiKey: process.env.OPENROUTER_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
    },
    maxTokens: 10
});

const main = async () => {
    const response = await model.invoke([
        new SystemMessage('You are a helpful assistant.'),
        new HumanMessage('Hello, how are you?')
    ])
    console.log(response.content);
}

main();
