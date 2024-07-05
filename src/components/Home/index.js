import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import {MdHome, MdDashboard, MdEdit, MdDelete} from 'react-icons/md'
import './index.css'
class Home extends Component {
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
          <div className="tablecontainer">
            <div className="airportcontainer">
              <h1>Airports</h1>
              <button className="addnewbutton">+ Add new</button>
            </div>
            <table>
              <tr>
                <th className="tablerowsfirst">All Airports</th>
                <th className="tablerows">Country</th>
                <th className="tablerows">Code</th>
                <th align="end" className="tablerows">
                  Terminals
                </th>
              </tr>
              <hr className="horizontalline" />

              <tr>
                <input type="checkbox" className="checkboxcon" />
                <Link to="/terminal" className="Linkel">
                  <td className="tablerowsfirst">
                    Indira Gandhi International Airport
                  </td>
                </Link>
                <td className="tablerows">India</td>
                <td className="tablerows">Del</td>
                <td className="tablerows">3</td>
                <MdEdit size="25" className="editicon" />
                <MdDelete size="25" className="editicon" />
              </tr>
              <hr className="horizontalline" />
              <tr>
                <input type="checkbox" className="checkboxcon" />
                <Link to="/terminal" className="Linkel">
                  <td className="tablerowsfirst">
                    Dubai International Airport
                  </td>
                </Link>
                <td className="tablerows">UAE</td>
                <td className="tablerows">DXB</td>
                <td className="tablerows">5</td>
                <MdEdit size="25" className="editicon" />
                <MdDelete size="25" className="editicon" />
              </tr>
              <hr className="horizontalline" />
              <tr>
                <input type="checkbox" className="checkboxcon" />
                <Link to="/terminal" className="Linkel">
                  <td className="tablerowsfirst">Heathrow Airport</td>
                </Link>
                <td className="tablerows">England</td>
                <td className="tablerows">LHR</td>
                <td className="tablerows">6</td>
                <MdEdit size="25" className="editicon" />
                <MdDelete size="25" className="editicon" />
              </tr>
              <hr className="horizontalline" />
              <tr>
                <input type="checkbox" className="checkboxcon" />
                <Link to="/terminal" className="Linkel">
                  <td className="tablerowsfirst">Istanbul Airport</td>
                </Link>
                <td className="tablerows">Turkey</td>
                <td className="tablerows">IST</td>
                <td className="tablerows">3</td>
                <MdEdit size="25" className="editicon" />
                <MdDelete size="25" className="editicon" />
              </tr>
              <hr className="horizontalline" />
              <tr>
                <input type="checkbox" className="checkboxcon" />
                <Link to="/terminal" className="Linkel">
                  <td className="tablerowsfirst">
                    Rajiv Gandhi International Airport
                  </td>
                </Link>
                <td className="tablerows">Texas</td>
                <td className="tablerows">Dfw</td>
                <td className="tablerows">14</td>
                <MdEdit size="25" className="editicon" />
                <MdDelete size="25" className="editicon" />
              </tr>
              <hr className="horizontalline" />
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
