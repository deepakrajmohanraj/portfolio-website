import { useRef } from 'react';



const Home = () => {
    const form = useRef();

    



    return (
        <div className="dashboard">

            <form ref={form}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button >Sign out</button>
            </form>
        </div>
    )
}

export default Home;