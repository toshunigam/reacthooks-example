import React from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addDOWN, addUP } from "../../actions";
import logo from '../../logo.svg'

const ThunkExample = () => {
    const count = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div style={{ width: "97%", margin: "0 auto" }}>
            <Alert variant="warning">
                Redux thunk example
            </Alert>

            <div style={{ width: "50%", margin: "0 auto" }}>
                {count.counter} {count.loading === true ? <img className="App-logo" src={logo} width="50" height="50" alt="logo" /> : ''}
                <hr />
                <button onClick={() => dispatch(addUP())}>Add UP</button>
                <button onClick={() => dispatch(addDOWN())}>Add Down</button>
            </div>
        </div>

    )
}
export default ThunkExample;