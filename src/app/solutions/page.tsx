import HeaderCard from "../components/header-card";
import Blogs from "../components/blogs";

interface Solution{
  id:number;
  name:string;
  description:string;
  url:string;
  category_name:string;
  intro:string
}

const solutions = async() => {

  const response = await fetch("https://www.efricamw.com/api/v1/articles/getblogs");
  const blogs: Solution[] = await response.json();
  
  return (
    <div className="relative bg-gainsboro w-full h-[2796px] overflow-hidden flex flex-col items-center justify-start gap-[7px] text-left text-13xl text-black font-inter">
        <HeaderCard/>
        <div className="h-[200px] w-full bg-blue-300 flex items-center justify-center">
            <h1 className="text-center text-6xl">All Solutions</h1>
        </div>
      

        <div className="grid grid-cols-12 gap-4">
           {blogs.map(blog=>
            <div key={blog.id} className="col-span-4">
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

      <Blogs/>
    </div>
  );
};

export default solutions;