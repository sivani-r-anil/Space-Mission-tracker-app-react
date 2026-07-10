import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewMission = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/mission.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h2 style={{ fontFamily: "math", color: "#ffdf40", textAlign: "center" }}>
                            🚀 VIEW ALL MISSIONS</h2>

                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card h-100">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item border-0">
                                                        <img src={value.image} class="card-img-top" alt="..." height="300px" /></li>
                                                    <li class="list-group-item"><h5 class="card-title">Name:{value.missionName}</h5></li>
                                                    <li class="list-group-item border-0">Agency:{value.agency}</li>
                                                    <li class="list-group-item border-0">Destination:{value.destination}</li>
                                                    <li class="list-group-item border-0">Launch Year:{value.launchYear}</li>
                                                    <li class="list-group-item border-0">Budget:{value.budegetCrores}</li>
                                                    <li className="list-group-item border-0">Status: <span className={`badge ms-2 ${value.status === "Active" ? "bg-success" : value.status === "Upcoming" ? "bg-primary" : "bg-secondary"}`}>
                                                        {value.status}</span></li>
                                                </ul>
                                            </div>

                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewMission