import axios from 'axios';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig.OPENAI_API_KEY;

export const getAIResponse = async (userMessage) => {
  // Fetch API key from react-native-dotenv

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.'
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(`Error calling OpenAI API: ${JSON.stringify(error)}`);
    return 'An error occurred while communicating with the AI.';
  }
};
