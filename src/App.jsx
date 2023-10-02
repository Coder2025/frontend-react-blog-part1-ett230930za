import './App.css'
import axios from 'axios';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import NewPost from './pages/newPostPage/NewPost.jsx';
import Overview from './pages/overviewPage/Overview.jsx';
import PostDetail from './pages/postDetailPage/PostDetail.jsx';
import NotFound from './pages/notFoundPage/NotFound.jsx';
import logoMedium from './assets/logo-medium.png'

function App() {
    const navigate = useNavigate();

// testData =======================================================================
    async function testData(){
        try{
            const result = await axios.get("http://localhost:3000/posts");
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    }
    // testDataId =======================================================================
    async function testDataId(){
        try{
            const result = await axios.get("http://localhost:3000/posts/");
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    }
    // testDataNw =======================================================================
    async function testDataNw(){
        try{
            const result = await axios.post(
                "http://localhost:3000/posts/",
                {
                    "title": "Nieuwe Post",
                    "subtitle": "Gewoon wat geklets.. !!!",
                    "content": "Bella Italia. Niets daar van .. Pfff... Dit mag je voor nu doen met hardcoded-tekst. Zorg ervoor dat er succesmelding in de console wordt gelogd bij succes en een foutmelding bij een mislukte poging.",
                    "created": "2023-09-21T09:30:00Z",
                    "author": "Ett Doorson",
                    "readTime": 60,
                    "comments": 0,
                    "shares": 10000000
                }
            );
            console.log(result);
        }
        catch (e) {
            console.error(e);
        }
    }
    // testDataDelete =======================================================================
    async function testDataDelete(){
        try{
            const result = await axios.delete("http://localhost:3000/posts/19");
            console.log("Deleted Last Entry = " , result.statusText);
        }
        catch (e) {
            //console.error(e);
            console.log("response.statusText =", e.response.statusText); // response.statusText = "OK"
        }
    }
    // testDataWijzig =======================================================================
    async function testDataWijzig(){
        try{
            const result = await axios.put(
            "http://localhost:3000/posts/18",
                {
                    "title": "Vervangende Post",
                    "subtitle": "Vervangend geklets.. !!!",
                    "content": "Bella Italia. Niets daar van .. Vervangend... Dit mag je voor nu doen met hardcoded-tekst. Zorg ervoor dat er succesmelding in de console wordt gelogd bij succes en een foutmelding bij een mislukte poging.",
                    "created": "2023-09-21T09:30:00Z",
                    "author": "Vervanger Ett Doorson",
                    "readTime": 60,
                    "comments": 0,
                    "shares": 10000000
                }
            );
            console.log(result);
        }
        catch (e) {
            //console.error(e);
            console.log("response.statusText =", e.response.statusText); // response.statusText = "OK"
        }
    }
    // =======================================================================
    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <button type="button" className="main-navigation-logo-button" onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="Logo that links to home page"/>
                    </button>

                    {/*<button onClick={testData}>Klik!</button>*/}
                    {/*<button onClick={testDataId}>KlikId</button>*/}
                    {/*<button onClick={testDataNw}>KlikNw</button>*/}
                    {/*<button onClick={testDataDelete}>KlikDelete</button>*/}
                    {/*<button onClick={testDataWijzig}>KlikWijzig</button>*/}

                    <ul className="main-navigation-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Alle posts</Link></li>
                        <li><Link to="/new">Nieuwe post maken</Link></li>
                    </ul>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/posts" element={<Overview />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>
        </>
    )
}

export default App
