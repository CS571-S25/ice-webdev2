import { useEffect, useState } from "react";
import Recipe from "./Recipe";

import Stopwatch from "../utils/Stopwatch";


Stopwatch.start();

export default function AllRecipes(props) {

    // Is there a better way to do this? We'll explore this today!
    const [pizza, setPizza] = useState();
    const [pasta, setPasta] = useState();
    const [chili, setChili] = useState();

    useEffect(() => {

        // Which fetch will complete first? No one knows!

        fetch("https://cs571api.cs.wisc.edu/rest/s25/ice/pizza", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            setPizza(data);
            console.log(Stopwatch.get(), "Received pizza; remember, it may not be committed quite yet!", pizza);
        })

        fetch("https://cs571api.cs.wisc.edu/rest/s25/ice/pasta", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            setPasta(data);
            console.log(Stopwatch.get(), "Received pasta; remember, it may not be committed quite yet!", pasta);
        })

        fetch("https://cs571api.cs.wisc.edu/rest/s25/ice/chili", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            setChili(data);
            console.log(Stopwatch.get(), "Received chili; remember, it may not be committed quite yet!", chili);
        })

        console.log(Stopwatch.get(), "The AllRecipes component has mounted.")
    }, []);

    useEffect(() => {
        if (pizza) { // remember this gets ran on mount and dependency change, check just for dependency change!
            console.log(Stopwatch.get(), "Now, pizza has been committed.", pizza)
        }
    }, [pizza]);

    useEffect(() => {
        if (pasta) { // remember this gets ran on mount and dependency change, check just for dependency change!
            console.log(Stopwatch.get(), "Now, pasta has been committed.", pasta)
        }
    }, [pasta]);

    useEffect(() => {
        if (pasta) { // remember this gets ran on mount and dependency change, check just for dependency change!
            console.log(Stopwatch.get(), "Now, chili has been committed.", chili)
        }
    }, [chili]);

    // useEffect(() => {
    //     if (chili || pizza || pasta) {
    //         console.log(Stopwatch.get(), "Now, something has been committed in AllRecipes!")
    //     }
    // }, [chili, pizza, pasta]);

    // useEffect(() => {
    //     if (chili && pizza && pasta) {
    //         console.log(Stopwatch.get(), "Now, everything has been committed in AllRecipes!")
    //     }
    // }, [chili, pizza, pasta]);

    console.log(Stopwatch.get(), "AllRecipes is re-rendering!")

    return <div>
        <h1>Welcome to Badger Recipes!</h1>
        <Recipe {...pizza}/>
        <Recipe {...pasta}/>
        <Recipe {...chili}/>
    </div>
}