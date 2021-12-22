import logo from './logo.jpg';
import './style.css';


function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / index.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "login.html"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        /a> < /
        header > <
        /div>
    );
}

export default App;