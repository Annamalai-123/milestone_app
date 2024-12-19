import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    goals:[],
    isError: false,
    isSuccess:false,
    isLoading:false,
    message:'',

}

// create a new goal
export const createGoal = createAsyncThunk('goals/create',
    async(goalData,thunkAPI) =>{
        try {
         
    } catch (error) {
        const message =(error.response &&
             error.response.data && 
            error.response.data.message)
         || error.message || error.toString()
       
        }
    }
)



//create slice

export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state)=> initialState
    },
})


export const {reset} =goalSlice.actions
export default goalSlice.reducer 