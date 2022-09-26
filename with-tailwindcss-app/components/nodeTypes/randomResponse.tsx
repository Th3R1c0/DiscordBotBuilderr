import React from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { updateNodeProperties } from "../../redux-toolkit/slices/flowSlice";  //i tried with this...will implement later mabey

import { updateRandomResponsesNode} from "../../redux-toolkit/slices/flowSlice"

const RandomResponseNode = ({ id, data }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const handleInputChange = useCallback((e) => {
    setText(e.target.value);
  });
  const handleSetResponses = () => {
    //tried to avoid having a reducer for every node type...might have to do that
    dispatch(updateRandomResponsesNode({id: id, randomResponse: text}))
    setText("");
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
        <h1> random response node </h1>
        <p> responses: </p>

        <div>{data?.randomResponses?.map((response, index) => (
            <p key={index}>{response}</p>
        ))}</div>

        <input type="text" value={text} onChange={handleInputChange} />
        <button className="btn btn-primary" onClick={handleSetResponses}>add response</button>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default RandomResponseNode;
