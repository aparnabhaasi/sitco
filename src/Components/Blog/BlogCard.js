import React from "react"

const BlogCard = ({ item: { id, cover, title, desc, para, catgeory, date } }) => {
  return (
    <>
      <div className='items '>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
          <span>{date}</span>
          <label>{catgeory}</label>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>

       
      </div>
    </>
  )
}

export default BlogCard
