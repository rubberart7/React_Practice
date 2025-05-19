import { use, useContext } from "react";
import { UserContext } from "./CompnentA";

function CompnentD() {
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default CompnentD;

