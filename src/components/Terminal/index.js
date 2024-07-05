import {MdHome, MdDashboard} from 'react-icons/md'
import {MdMoreHoriz} from 'react-icons/md'

import Modal from '../Modal'
import React, {Component} from 'react'

import './index.css'
class Terminal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
    this.handleSaveTerminal = this.handleSaveTerminal.bind(this);
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  }

  handleSaveTerminal = terminalDetails => {
    const {terminals} = this.state
    const updatedTerminals = [...terminals, terminalDetails]
    this.setState({terminals: updatedTerminals})
  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  render() {
    return (
      <div className="container">
        <nav className="navcontainer">
          <h1 className="navheader">Hava Havoi</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__"
            alt="image"
            className="navimage"
          />
        </nav>
        <hr className="horizontalline" />
        <div className="lowerpart">
          <div className="sidebar">
            <div>
              <div className="individualside">
                <MdHome />
                <label>Home</label>
              </div>
              <div className="individualside">
                <MdDashboard />
                <label>Dashboard</label>
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
          <div className="verticalline"></div>
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
                  alt="image"
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
                  alt="image"
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
                  {this.props.children}
                  <button className="buttonel" onClick={this.openModal}>
                    + Add Terminal
                  </button>
                  <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={this.closeModal}
                    onSave={this.handleSaveTerminal}
                  />

                  {this.state.isModalOpen && (
                    <div className="blur-background" />
                  )}
                </div>
              </div>
            </div>

            <h2>Services</h2>
            <p>Lost & Found</p>
            <hr className="horizontalhighligh" />
            <form className="formel">
              <div className="individualservice">
                <label>Service Name</label>
                <input type="text" value="Lost & Found" />
              </div>
              <div className="individualservice">
                <label>Category</label>
                <select>
                  <option>Option1</option>
                </select>
              </div>
              <div className="individualservice">
                <label>Subcategory</label>

                <select>
                  <option>Option1</option>
                </select>
              </div>
              <div className="uploadimage">upload image</div>
              <button className="savebutton">Save</button>
            </form>
            <div className="individualservice">
              <label>Description</label>
              <input type="text" value="Type here" />
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
