import React from 'react'
import NavigationBar from './NavigationBar'

const SearchMission = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 style={{ fontFamily: "math", color: "#ffdf40", textAlign: "center" }}>
                            🚀 SEARCH MISSION</h2>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="from-label">Enter Mission ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary">SEARCH</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SearchMission