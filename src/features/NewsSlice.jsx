import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    newsData: [],
    loading : false,
    error: false,
}

export const getNews = createAsyncThunk(
    "getNews", //* action.type
    async () => {
        const API_KEY = "c4e7f9397dde4d95ab9f77a573758d80"
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
        const res = await axios(url)
        console.log(res.data.articles)
        return res.data.articles
    }
)
const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
        state.loading = true
    })
    .addCase(getNews.fulfilled, (state, {payload}) => {
        state.loading= false
        state.newsData= payload
    })
    .addCase(getNews.rejected, (state) => {
        state.loading = false
        state.error = true
    })
  },

});

export const {} = NewsSlice.actions

export default NewsSlice.reducer