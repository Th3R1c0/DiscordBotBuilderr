import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectEdges,
  selectNodes,
  onNodesChange,
  onEdgesChange,
  onConnect,
  addNode,
} from "../../redux-toolkit/slices/flowSlice";

import GeneratedCodeSidebar from '../generatedCodeSidebar'

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import { Controls, MiniMap } from 'react-flow-renderer';

import Flowsidebar from './flowsidebar'

import SlashCommandNode from "../nodeTypes/inputs/slashCommandNode";
import RandomResponseNode from "../nodeTypes/events/randomResponse";
import ChannelNode from "../nodeTypes/conditions/channelNode"

const nodeTypes = {
  slashCommandNode: SlashCommandNode,
  RandomResponse: RandomResponseNode,
  ChannelNode: ChannelNode,

};



let id = 0;
const getId = () => `_${id++}`;

export function Flow() {
  const dispatch = useDispatch();
  //client has properties, methods and events, https://discord.js.org/#/docs/discord.js/main/class/Client
  

  const edges = useSelector(selectEdges);
  const nodes = useSelector(selectNodes);

  //slashcommandnode is a nodetype
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);


  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: `${type}${getId()}`,
        type,
        position,
        data: { label: `${type} node` },
      };
      console.log(newNode.id)
      dispatch(addNode({newNode}))
    },
    [reactFlowInstance]
  )

  return (
    <div className="w-screen h-screen  flex">
      
      <ReactFlowProvider>
      <Flowsidebar />
      <div className="w-full h-full bg-gradient-to-tl bg-[#36393F]" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(e) => dispatch(onNodesChange(e))}
          onEdgesChange={(e) => dispatch(onEdgesChange(e))}
          onConnect={(e) => dispatch(onConnect(e))}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
         </ReactFlow>
        </div>
      </ReactFlowProvider>
      <GeneratedCodeSidebar />
    </div>
  );
}
