import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addNode} from "../../redux-toolkit/slices/flowSlice";




const Flowsidebar = () => {
    const BotActions = ['RandomResponse', 'Embed response', 'plain text response'];
    const Conditions = ['User condition', 'Channel condition', 'Variable condition']
    const dispatch = useDispatch()

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };


    return (
        <div className="w-1/3 h-full flex flex-col p-4 bg-gray-200">
        <div className="divider"> Create a new slash command </div>
        <button onDragStart={(event) => onDragStart(event, "slashCommandNode")} draggable
        className="btn btn-primary"
        >
          {" "}
          new slash command{" "}
        </button>
        <div className="divider"> Events </div>
        {BotActions.map((action, index) => (
          <button className="btn btn-primary " key={index} onDragStart={(event) => onDragStart(event, action)} draggable>
            {action}
          </button>
        ))}
        <div className="divider">conditions</div> 
        {Conditions.map((condition, index) => (
          <button className="btn btn-primary " key={index} onClick={() => dispatch(addNode({ button_type: condition }))} onDragStart={(event) => onDragStart(event, action)} draggable>
            {condition}
          </button>
        ))}
      </div>
    )
}

export default Flowsidebar;