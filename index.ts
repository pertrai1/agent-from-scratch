import 'dotenv/config'
import { runAgent } from './src/agent'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const weatherTool = {
  name: 'weather',
  description: 'Weather Tool that is user-location',
  parameters: z.object({
    reasoning: z.string().describe('Why did you choose this tool?'),
  }),
}

const response = await runAgent({ userMessage, tools: [weatherTool] })

console.log(response)
