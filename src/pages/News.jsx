import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../features/NewsSlice'

const News = () => {
    const {newsData} = useSelector((state) => state.news)
    const dispatch = useDispatch()
    console.log(newsData)

    useEffect(() =>{
        dispatch(getNews())
    }, [])
  return (
    <div>
      NEWSPAPER
    </div>
  )
}

export default News
