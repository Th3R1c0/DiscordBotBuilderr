import React from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { updateNodeProperties } from "../../redux-toolkit/slices/flowSlice";

interface slash_command_data {
  slashcommand: string;
}

const generateCode = (type: string, value) => {
  if (type === 'slash_command'){
      return `${value},    00  @bot.slash_command(name="first_slash", guild_ids=[...]) #Add the guild ids in which the slash command will appear. If it should be in all, remove the argument, but note that it will take some time (up to an hour) to register the command if it's for all guilds.
      async def first_slash(ctx): 
          await ctx.respond("You executed the slash command!")`
  }

}



const SlashCommandNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const [slashCommand, setSlashCommand] = useState("");
  const handleInputChange = useCallback((e) => {
    setSlashCommand(e.target.value);
  });
  const handleSetSlashCommand = () => {
    dispatch(updateNodeProperties({ id: id, slashCommand: slashCommand, }));
    setSlashCommand("");
  };
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          backgroundColor: "green",
          padding: "10px",
          width: "max",
          height: "max",
        }}
      >
        <h1> slash command node </h1>
        <p> slash command: /{data.slashCommand}</p>
        <input type="text" value={slashCommand} onChange={handleInputChange} />
        <button onClick={handleSetSlashCommand}>set slashcommand</button>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default SlashCommandNode;
