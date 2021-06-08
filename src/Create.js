import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('dhoni');
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
            
        })
        .then(() => {
            console.log('new blog added')
            setIsPending(false);
        })

    }

    return (
        <div className="create">
            <h2>Create a New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Title:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="sabari">Sabari</option>
                    <option value="dhoni">Dhoni</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;