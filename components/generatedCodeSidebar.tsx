

import { CodeBlock, dracula } from "react-code-blocks";

import {selectNodes} from '../redux-toolkit/slices/flowSlice'
import { useSelector, useDispatch } from "react-redux";


function MyCoolCodeBlock({ code, language, showLineNumbers}) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}

const code = `const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(Logged in as user!);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('token');`





const GeneratedCodeSidebar = () => {
    const nodes = useSelector(selectNodes)  
    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`
    //possible memoize to not run every time nodes from redux store update
    //console.log(nodes)
    return (
        <div className="w-1/4 h-full flex flex-col p-4 bg-gray-200">
            <div className="divider text-2xl font-bold"> Generated code</div>
            <div className="mockup-code p-2">
            <MyCoolCodeBlock code={code} language={'javascript'} showLineNumbers={true} />
            <MyCoolCodeBlock code={code} language={'javascript'} showLineNumbers={true} />
            </div>
        </div>
    )
}
export default GeneratedCodeSidebar