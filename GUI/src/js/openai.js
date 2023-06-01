import { Configuration, OpenAIApi }  from 'openai'
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const template = "What is a good name for a company that makes {product}?";
const promptA = new PromptTemplate({ template, inputVariables: ["product"] });

// We can use the `format` method to format the template with the given input values.
const responseA = await promptA.format({ product: "colorful socks" });
console.log({ responseA });

// const model = new OpenAI({ openAIApiKey: "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" });

// const CYPHER_GENERATION_TEMPLATE = `Task:Generate Cypher statement to query a graph database.\nInstructions:\nUse only the provided relationship types and properties in the schema.\nDo not use any other relationship types or properties that are not provided.\nSchema:\n${schema}\nNote: Do not include any explanations or apologies in your responses.\nDo not respond to any questions that might ask anything else than for you to construct a Cypher statement.\nDo not include any text except the generated Cypher statement.\n\nThe question is:\n${question}`
// const CYPHER_GENERATION_PROMPT = new PromptTemplate({ CYPHER_GENERATION_TEMPLATE, inputVariables: ["schema", "question"] });


// export async function openaiPromptCypher(schema, question){
//     const cypher_generation_chain = LLMChain(llm=model, prompt=CYPHER_GENERATION_PROMPT)
//     const resA = await chainA.call({ "question": question, "schema": schema });
//     console.log(resA)
// }



// export function openaiInit(){
//     // const configuration = new Configuration({
//     //     apiKey: "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",
//     // });
//     // delete configuration.baseOptions.headers['User-Agent'];
//     // const openai = new OpenAIApi(configuration);

//     // return openai
// }
// export async function openaiQuery(openai, model, prompt){
//     const response = await openai.createCompletion({
//         model: model,
//         prompt: prompt,
//       });
//     return response
// }





