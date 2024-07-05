import {MdHome, MdDashboard, MdMoreHoriz} from 'react-icons/md'
import React, {Component} from 'react'
import Modal from '../Modal'

import './index.css'

class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  render() {
    const {isModalOpen} = this.state
    return (
      <div className="container">
        <nav className="navcontainer">
          <h1 className="navheader">Hava Havoi</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__"
            alt="navimage"
            className="navimage"
          />
        </nav>
        <hr className="horizontalline" />
        <div className="lowerpart">
          <div className="sidebar">
            <div>
              <div className="individualside">
                <MdHome id="home" />
                <label htmlFor="home">Home</label>
              </div>
              <div className="individualside">
                <MdDashboard id="dashboard" />
                <label htmlFor="dashboard">Dashboard</label>
              </div>
            </div>
            <ul className="list">
              <li className="listpadding">Services</li>
              <li className="listel">Airports</li>
              <li className="listpadding">Videos</li>
            </ul>
            <ul className="list1">
              <li className="listpadding">Others</li>
              <li className="listpadding">List1</li>
              <li className="listpadding">List2</li>
              <li className="listpadding">List3</li>
            </ul>
          </div>
          <div className="verticalline">.</div>
          <div className="rightside">
            <p className="paragraph">
              Airports &gt; Indira Gandhi International Airport
            </p>
            <h1 className="header">Indira Gandhi International Airport</h1>
            <ul className="unorder">
              <li className="individuallist">Terminals</li>
              <li className="transportdetails">Transport</li>
              <li className="contactdetails">Contact Details</li>
            </ul>
            <hr className="horizontalhighligh" />
            <div className="terminals">
              <div className="cards">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                  alt="cardimage"
                  className="image"
                />
                <div className="carddivision">
                  <div className="innerdivision">
                    <p className="terminal1">Terminal 1</p>
                    <MdMoreHoriz />
                  </div>
                  <p className="desc">Optional metadata to be two lines</p>
                </div>
              </div>
              <div className="cards">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                  alt="cardimage"
                  className="image"
                />
                <div className="carddivision">
                  <div className="innerdivision">
                    <p className="terminal1">Terminal 2</p>
                    <MdMoreHoriz />
                  </div>
                  <p className="desc">Optional metadata to be two lines</p>
                </div>
                <div className="terminal-container">
                  <button className="buttonel" onClick={this.openModal}>
                    + Add Terminal
                  </button>
                  <Modal isOpen={isModalOpen} onClose={this.closeModal} />

                  {isModalOpen && <div className="blur-background" />}
                </div>
              </div>
            </div>

            <h2>Services</h2>
            <p>Lost & Found</p>
            <hr className="horizontalhighligh" />
            <form className="formel">
              <div className="individualservice">
                <label htmlFor="lost">Service Name</label>
                <input type="text" value="Lost & Found" id="lost" />
              </div>
              <div className="individualservice">
                <label htmlFor="cat">Category</label>
                <select id="cat">
                  <option>Option1</option>
                </select>
              </div>
              <div className="individualservice">
                <label htmlFor="sub">Subcategory</label>

                <select id="sub">
                  <option>Option1</option>
                </select>
              </div>
              <div className="uploadimage">upload image</div>
              <button className="savebutton">Save</button>
            </form>
            <div className="individualservice">
              <label htmlFor="descr">Description</label>
              <input type="text" value="Type here" id="descr" />
            </div>
            <h3>Lounge</h3>
            <hr className="horizontalhighligh" />
            <p>Money Exchange</p>
            <hr className="horizontalhighligh" />
          </div>
        </div>
      </div>
    )
  }
}
export default Terminal
