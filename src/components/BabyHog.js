import React, {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorMapping = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
}

function BabyHog(props) {
    const [weight, setWeight] = useState(10)

    function handleChangeWeight(e) {
        // how can we reuse this for both buttons?
        // perhaps something with e.target.name === "+"

        const operation = e.target.name;

        // operation === "+" ? setWeight(weight + 1)
        //     : setWeight(weight - 1)

        if (operation === "+") {
            setWeight(weight + 1);
        } else if (operation === "-" && weight > 0) {
            setWeight(weight - 1);
        }
    }

    const {name, hobby, eyeColor} = props;
    const eyeColorImage = eyeColorMapping[eyeColor] || normalBaby;

    return (
        <li className="hog-babies">
            <h1>Name: {name}</h1>
            <h3>Weight: {weight}</h3>
            <h3>Hobby: {hobby}</h3>
            <h4>Eye Color: {eyeColorImage}</h4>

            <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
            <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

            <div className="hb-wrap">
                <img
                    src={eyeColorImage}
                    style={{height: "200px"}}
                    alt="MasterBlasterJrJr"
                />
            </div>
        </li>
    );
}

export default BabyHog;