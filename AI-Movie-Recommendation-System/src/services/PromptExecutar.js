import axios from 'axios';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';
export async function getMovieMatches(prompt, movies) {
  const promptText = `User requirement: "${prompt}" Candidate list: ${JSON.stringify(movies)} Task: Select matching items from the candidate list. For each match, estimate an approximate match percentage (0-100) based on how well it satisfies the user's requirement. Order from highest to lowest match percentage.`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: promptText
          }
        ]
      }
    ],
    generationConfig: {
      response_mime_type: 'application/json',
      response_schema: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            id: { type: 'STRING' },
            matchPercentage: { type: 'INTEGER' }
          },
          required: ['id', 'matchPercentage']
        }
      }
    }
  };

  const response = await axios.post(GEMINI_URL, requestBody, {
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': API_KEY // Exactly matching -H 'X-goog-api-key: ...' from curl
    }
  });

  const rawJson = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
  return JSON.parse(rawJson || '[]');
}