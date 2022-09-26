import { createSlice } from "@reduxjs/toolkit";
import initialEdges from "../../components/edges";
import initialNodes from "../../components/nodes";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "react-flow-renderer";
const initialState = {
  nodes: initialNodes,
  edges: initialEdges,
};
/*
from docs:
onNodesChange: (changes: NodeChange[]) => {
  set({
    nodes: applyNodeChanges(changes, get().nodes),
  });
},
onEdgesChange: (changes: EdgeChange[]) => {
  set({
    edges: applyEdgeChanges(changes, get().edges),
  });
},
onConnect: (connection: Connection) => {
  set({
    edges: addEdge(connection, get().edges),
  });



  updateNodeColor: (nodeId: string, color: string) => {
  set({
    nodes: get().nodes.map((node) => {
      if (node.id === nodeId) {
        // it's important to create a new object here, to inform React Flow about the changes
        node.data = { ...node.data, color };
      }

      return node;
    }),
  });
};
  */

export const flow = createSlice({
  name: "flow",
  initialState,
  reducers: {
    addNode: (state, action) => {
      /*const newNode = {
        id: `${state.nodes.length + 1}`,
        data: { label: action.payload.button_type },
        position: { x: 100, y: 200 },
        type: action.payload.nodeType,
      };*/
      state.nodes = [...state.nodes, action.payload.newNode];

  
    },
    updateNodeProperties: (state, action) => {  //idk about this one boi, this one is to update slashcommands
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          node.data = {
            ...node.data,
            //add rest of payload to to node data, through map? or ..action.payload.updatedProperties
            slashCommand: action.payload.slashCommand,
          };
        }
        return node;
      });
    },


    updateRandomResponsesNode: (state, action) => {
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          if (node.data.randomResponses) {
            node.data = {
              ...node.data,
              //add rest of payload to to node data, through map? or ..action.payload.updatedProperties
              randomResponses: [...node.data.randomResponses, action.payload.randomResponse]
            };
          } else {
            node.data = {
              ...node.data,
              //add rest of payload to to node data, through map? or ..action.payload.updatedProperties
              randomResponses: [action.payload.randomResponse]
            };
          }

        }
        return node;
      });
    },

    //for practise:
    updateNodeText: (state, action) => {
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          node.data = { ...node.data, label: action.payload.text };
          console.log(action.payload);
        }
        return node;
      });
    },
    updateNodeColor: (state, action) => {
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          let a = action.payload.color;
          node.data = { ...node.data, color: action.payload.color };
        }
        return node;
      });
    },

    onNodesChange: (state, action) => {
      const a = applyNodeChanges(action.payload, state.nodes);
      state.nodes = a;
    },
    onEdgesChange: (state, action) => {
      state.edges = applyEdgeChanges(action.payload, state.edges);
    },
    onConnect: (state, action) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

export const {
  onNodesChange,
  onEdgesChange,
  onConnect,
  updateNodeColor,
  updateNodeText,
  addNode,
  updateNodeProperties,
  updateRandomResponsesNode
} = flow.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: { flow: { value: any; }; }) => state.flow.value;

export const selectNodes = (state: { flow: { nodes: any; }; }) => state.flow.nodes;
export const selectEdges = (state: { flow: { edges: any; }; }) => state.flow.edges;

export default flow.reducer;
