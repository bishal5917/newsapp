import React from 'react'
import './ADB.css'

function ADB() {
    return (
        <>
            <div>
                <div className="sidebar">
                    <div className="logo-details">
                        <i className="bx bxl-c-plus-plus" />
                        <span className="logo_name">CodingLab</span>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href="#" className="active">
                                <i className="bx bx-grid-alt" />
                                <span className="links_name">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-box" />
                                <span className="links_name">Product</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-list-ul" />
                                <span className="links_name">Order list</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-pie-chart-alt-2" />
                                <span className="links_name">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-coin-stack" />
                                <span className="links_name">Stock</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-book-alt" />
                                <span className="links_name">Total order</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-user" />
                                <span className="links_name">Team</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-message" />
                                <span className="links_name">Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-heart" />
                                <span className="links_name">Favrorites</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bx bx-cog" />
                                <span className="links_name">Setting</span>
                            </a>
                        </li>
                        <li className="log_out">
                            <a href="#">
                                <i className="bx bx-log-out" />
                                <span className="links_name">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <section className="home-section">
                    <nav>
                        <div className="sidebar-button">
                            <i className="bx bx-menu sidebarBtn" />
                            <span className="dashboard">Dashboard</span>
                        </div>
                        <div className="search-box">
                            <input type="text" placeholder="Search..." />
                            <i className="bx bx-search" />
                        </div>
                        <div className="profile-details">
                            {/*<img src="images/profile.jpg" alt="">*/}
                            <span className="admin_name">Prem Shahi</span>
                            <i className="bx bx-chevron-down" />
                        </div>
                    </nav>
                </section>
            </div>
        </>
    )
}

export default ADB