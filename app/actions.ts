'use server';
import {
  mapStoredMessageToChatMessage,
  type StoredMessage,
} from '@langchain/core/messages';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { ChatOpenAI } from '@langchain/openai';

export async function message(messages: StoredMessage[]) {
  const deserializedMessages = mapStoredMessageToChatMessage(messages);

  const agent = createReactAgent({
    llm: new ChatOpenAI({
      model: 'gpt-4o-mini',
      apiKey: process.env.OPENAI_API_KEY,
    }),
    tools: [],
  });

  const response = await agent.invoke({
    messages: deserializedMessages,
  });
  return response.messages[response.messages.length - 1].content;
}
