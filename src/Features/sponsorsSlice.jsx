// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"

// const initialState = {
//   sponsors: [],
// }

// export getAllSponsors = createAsyncThunk("sponsors/getAllSponsors",async()=> {
//     return axios.get("").then(res=>res.data)
// })

// const sponsorsSlice = createSlice({
//   name: "sponsors",
//   initialState,
//   extraReducers: ({ addCase }) => {
//     addCase(getAllSponsors.fulfilled,(state,{payload})=>{
//         state.sponsors = payload
//     })
//   },
// })
