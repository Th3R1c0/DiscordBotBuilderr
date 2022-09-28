import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    nodeThemes: {
        nodeWrapper: "w-max flex flex-col h-max p-4 border-sky-400 border-4 border-solid bg-[#40444B] rounded-xl text-white ",
        nodeHeading: "font-bold text-4xl",
        nodeSubHeading: "font-bold text-2xl",
        nodeInput: "input input-bordered bg-gray-600 input-info w-full h-max max-w-xs"
    },
    modalstate: true,

}

export const Theme = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        updateNodeThemes: (state, action) => {
            return 'nothing here eyt'
        },
        toggleModal: (state, action) => {
            state.modalstate = !state.modalstate
        }

    }
})

export const {toggleModal} = Theme.actions;

export const selectNodeThemes = (state) => state.Theme.nodeThemes
export const selectModalstate = (state) => state.Theme.modalstate
export default Theme.reducer