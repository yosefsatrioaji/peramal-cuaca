import "./LandingPage.css";
import { Button } from "react-bootstrap";

export default function About() {
   return (
    <main>
        <h1>About Peramal Cuaca</h1>
        <p>Current Version : 1.0.0</p>
        <p>Author : Yosef Satrio Aji</p>
        <Button variant="dark" href="https://github.com/yosefsatrioaji/" target="_blank">Github</Button>
    </main>
   );
}