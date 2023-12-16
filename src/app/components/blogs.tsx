import Image from 'next/image';
import React from 'react'

interface Blog{
    id:number;
    name:string;
    slug:string;
    intro:string;
    content:string;
    published_at:Date;
    featured_image:string,
    category_name:string,
}

const blogs = async() => {

    const response = await fetch("https://www.efricamw.com/api/v1/articles/getblogs");
    const blogs: Blog[] = await response.json();
  return (
    <div>
    <h2 className="text-left indent-2 via-violet-400">From The Blog</h2>
      <div className="carousel carousel-end rounded-box">
        {blogs.map(blog=>
          <div key={blog.id} className="carousel-item m-2">
            <div  className="card bg-white w-96 shadow-xl">
                {/* <figure>
                    <Image src="#" width={100} height={90} alt="Shoes" />
                </figure> */}
                <div className="card-body">
                    <h2 className="card-title">
                    {blog.name}!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{blog.intro}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{blog.category_name}</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
    </div>

  )
}

export default blogs