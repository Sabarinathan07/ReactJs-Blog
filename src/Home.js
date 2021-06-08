
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    // const [name, setName] = useState('divya');
    // const handleClick = () => {
    //     setName('deepi');
    // }

   

    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }
    
    

     return (
         <div className="home">
             {error && <div>{error}</div>}
             {isPending && <div>Loading...</div>}
             {blogs && <BlogList blogs={blogs} title="All Blogs" />}
             {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>} */}
            {/*   <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
            
         </div>
      );
 }
  
 export default Home;