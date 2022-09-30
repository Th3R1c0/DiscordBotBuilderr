import React from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { updateNodeProperties, selectBlocks, updateCodeGenerator } from "../../../redux-toolkit/slices/flowSlice";

interface slash_command_data {
  slashcommand: string;
}


import { selectNodeThemes } from "../../../redux-toolkit/slices/themeSlice";

const SlashCommandNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const [slashCommand, setSlashCommand] = useState("");
  const handleInputChange = useCallback((e) => {
    setSlashCommand(e.target.value);
  }, []);
  const handleSetSlashCommand = () => {
    dispatch(updateNodeProperties({ id: id, slashCommand: slashCommand, }));
    setSlashCommand("");
  };
  const blocks = useSelector(selectBlocks)
  const handleEdgeConnections = (connection) => {
    if (connection.target.split('_')[0] == 'slashCommandNode') {
      return false
    } else {

      return true
    }
    

  }

  const Theme = useSelector(selectNodeThemes)



  return (
    <>
      <div className={Theme.nodeWrapper}>
   
        <h1 className={Theme.nodeHeading}> - slash command node - </h1>
        <p className={Theme.nodeSubHeading}> slash command: /  {data.slashCommand}</p>
        <div className="form-control ">
          <button className="label" onClick={handleSetSlashCommand}>set slashcommand</button>
          <input className={Theme.nodeInput} type="text" value={slashCommand} onChange={handleInputChange} />
        </div>
        
      </div>
      <Handle type="source" position={Position.Bottom} isValidConnection={(connection) => handleEdgeConnections(connection)} />
    </>
  );
};

export default SlashCommandNode;
