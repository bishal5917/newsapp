import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Newsbox.css"

export class NewsComp extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                <div className="card-body">
                    <img src="https://source.unsplash.com/user/c_v_r" className="card-img-top" alt="" />
                    <h5 className="card-title">AOT on early december</h5>
                    <p className="card-text">Attack on titan will be released on early of january
                        on the funimations and toonworldIt is one of the best animes released so far.
                        Levi is coming.</p>
                    <a href="/" className="btn btn-primary">Read more</a>
                </div></>
        )
    }
}

export default NewsComp
