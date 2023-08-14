import React,{useState} from "react";
import useAuth from 


function CreateNewPost() {
   // const { token} = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

return(
    <div>
        <form
            onSubmit={async (event) =>{
                event.preventDefault();
                const result= await createPost(token, title, description, price);
                nav("/");
                setTitle("");
                setDescription("");
                setPrice("");
                console.log(result);
                console.log(token);
            }}
        >
        <h3>Create Post</h3>
        <label>title</label>
        <input
        variant="standard"
        value={title}
        type="text"
        placeholder="title"
        onChange={(event) =>{
            setTitle(event.target.value);
        }}
        />
        <label>description</label>
        <input
        variant="standard"
        value={description}
        type="text"
        placeholder="description"
        onChange={(event) =>{
            setTitle(event.target.value);
        }}
        />
        <label>price</label>
        <input
        variant="standard"
        value={price}
        type="text"
        placeholder="price"
        onChange={(event) =>{
            setTitle(event.target.value);
        }}
        />
        <button type="submit">Submit</button>
        </form>
    </div>
);

}