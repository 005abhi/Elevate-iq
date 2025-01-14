import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyA4ZQG1CcTcTDahJHKuEjtgHFMpyFpb5kg");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const createPrompt = async (title: string) => {
  try {
    const prompt = `Generate only one prompt, not a question, for creating a quiz question. The topic is ${title}, and the question should be based on the engineering field. Start the prompt just after [[ and end the prompt with ]]`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedPrompt = response.text();
    return {
      status: true,
      generatedPrompt,
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};

export const generateQuestion = async (generatedPrompt: string) => {
  try {
    const prompt = `I want only one question. ${generatedPrompt}. Start the question just after [[ and end the question with ]]. Also, provide 4 options and the answer in the following format:

        Option 1: $$ Your first option text here $$
        Option 2: @@ Your second option text here @@
        Option 3: ## Your third option text here ##
        Option 4: && Your fourth option text here &&
        
        The correct answer should be one of the options and should be formatted as: ~~~ Correct option text here ~~~`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const question = response.text();
    return {
      status: true,
      question,
    };
  } catch (error: any) {
    return {
      status: false,
      message: error.message,
    };
  }
};
