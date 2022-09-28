import React from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { updateNodeProperties } from "../../../redux-toolkit/slices/flowSlice";  //i tried with this...will implement later mabey

import { updateChannelnode} from "../../../redux-toolkit/slices/flowSlice"

import { selectBlocks} from "../../../redux-toolkit/slices/flowSlice"

import { selectNodeThemes } from "../../../redux-toolkit/slices/themeSlice";


const ChannelNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  });
  const handleSetResponses = () => {
    //tried to avoid having a reducer for every node type...might have to do that
    dispatch(updateChannelnode({id: id, channels: text}))
    setText("");
  };

  const blocks = useSelector(selectBlocks)

  const Theme = useSelector(selectNodeThemes)

  const handleEdgeConnections = (connection) => {
    
    if(connection.target.split('_')[0] == 'slashCommandNode' || connection.target.split('_')[0] == 'ChannelNode'){
      return false
    } else {
      return true
    }

}


  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className={Theme.nodeWrapper}>
        <h1 className={Theme.nodeHeading}> Channel condition node </h1>
        <p className={Theme.nodeSubHeading}> runs if slash command used in  </p>

        <div>{data?.channels?.map((response, index) => (
            <p key={index}>{response}</p>
        ))}</div>
        
        <div className="form-control ">
        <button  className="label" onClick={handleSetResponses}>add channel id</button>
        <input className={Theme.nodeInput} type="text" value={text} onChange={handleInputChange} />
        </div>

      </div>
      <Handle type="source" position={Position.Bottom} isValidConnection={(connection) => handleEdgeConnections(connection)}  />
    </>
  );
};

export default ChannelNode;
