import React, { useRef } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { thunk_action_creator } from "../../actions";
import GithubInfo from "./GithubInfo";
const Services = () => {
    const username = useRef('');
    const dispatch = useDispatch()
    const data = useSelector(state => state.githubData)
    const handleSubmit = e => {
        e.preventDefault();
        console.log(username.current.value);
        dispatch(thunk_action_creator(username.current.value))
    };
    return (
        <div style={{ width: "97%", margin: "0 auto" }}>
            <Alert variant="success">
                Get the GitHUB user detail using redux-thunk
            </Alert>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h2 className="title">Enter the Github Username</h2>
                    <input
                        type="text"
                        placeholder="Enter Github Username"
                        required
                        ref={username}
                    />
                    <button className="button">Submit</button>
                </form>

                {data.isFetching ? <Spinner animation="border" variant="danger" /> : null}
                {data.isError ? (
                    <h3 className="error">No such User exists.</h3>
                ) : null}
                {Object.keys(data.userData).length > 0 ? (
                    <GithubInfo user={data.userData} />
                ) : null}
            </div>
        </div>
    )
}

export default Services;