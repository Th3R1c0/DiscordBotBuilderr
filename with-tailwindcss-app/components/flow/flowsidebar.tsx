import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addNode, selectBlocks} from "../../redux-toolkit/slices/flowSlice";




const Flowsidebar = () => {
    const dispatch = useDispatch()

    const blocks = useSelector(selectBlocks)

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };


    return (
        <div className="w-1/3 h-full flex flex-col p-4 bg-gray-200">
        <div className="divider text-2xl font-bold"> Create a new slash command </div>
        <button onDragStart={(event) => onDragStart(event, "slashCommandNode")} draggable
        className="btn btn-primary"
        >
          {" "}
          new slash command{" "}
        </button>




        <div className="divider text-md font-semibold"> Events </div>

        <div className="w-full flex flex-col space-y-2">
        {blocks.BotActions.map((action, index) => (
          <button className="btn btn-primary " key={index} onDragStart={(event) => onDragStart(event, action)}  draggable>{/*sends action(name of button) to store to be read by onDrop*/}
            {action}
          </button>
        ))}
        </div>





        <div className="divider text-md font-semibold">conditions</div> 

        <div className="w-full flex flex-col space-y-2">
        {blocks.Conditions.map((condition, index) => (
          <button className="btn btn-primary " key={index} onDragStart={(event) => onDragStart(event, condition)} draggable>
            {condition}
          </button>
        ))}
        </div>



                <div className="divider text-md font-semibold">Inputs/variables</div> 
                
                <div className="w-full flex flex-col space-y-2">
        {blocks.Inputs.map((input, index) => (
          <button className="btn btn-primary " key={index} onDragStart={(event) => onDragStart(event, input)} draggable>
            {input}
          </button>
        ))}
        </div>

      </div>
    )
}

export default Flowsidebar;