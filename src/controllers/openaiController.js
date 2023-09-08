import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateImage = async (req, res) => {
  try {
    const response = await openai.images.generate({
      prompt: 'Smiling rottweiler',
      n: 1,
      size: '512x512',
    });
    const imageUrl = response.data.data[0].url;
    res.status(200).json({data: imageUrl});
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'The image could not be generated'});
  }
};
