

import { CodeBlock, dracula } from "react-code-blocks";

import {selectCodeGenerated, selectNodes, updateCodeGenerator} from '../redux-toolkit/slices/flowSlice'
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

const codeSnippets = [{
  type: 'slashCommand',
  code: (data) => `const data = new SlashCommandBuilder()
	.setName('${data}')`
}]

const generateCodeSnippet = (data) => {
  return codeSnippets[0].code(data)
}



const GeneratedCodeSidebar = () => {
    const nodes = useSelector(selectNodes)  
    //when a node is added, get the node.data.slashCommand: to return code `(slashcommand boilerplate), ${node.data.slashcommand} (more slashcommand boilerplate)`
    //possible memoize to not run every time nodes from redux store update
    //console.log(nodes)
    const nodeCode = useSelector(selectCodeGenerated)
    console.log(nodeCode)
    return (
        <div className="w-1/4 h-full flex flex-col p-4 bg-gray-200">
            <div className="divider text-2xl font-bold"> Generated code</div>
            <div className="mockup-code p-2">
              {/* fake code for prototype
            <MyCoolCodeBlock code={code} language={'javascript'} showLineNumbers={true} /> */}
            <MyCoolCodeBlock code={nodeCode.length > 0 ? generateCodeSnippet(nodeCode) : 'start dragging blocks'} language={'javascript'} showLineNumbers={true} />
             
            </div>
        </div>
    )
}
export default GeneratedCodeSidebar