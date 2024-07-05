// Modal.js
import React, {Component} from 'react'
import './Modal.css'
class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terminalName: '',
      metadata: '',
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSave = () => {
    const {terminalName, metadata} = this.state

    this.props.onSave({terminalName, metadata})
    this.props.onClose()
  }

  render() {
    const {isOpen, onClose} = this.props
    if (!isOpen) return null

    return (
      <div className="modaloverlay">
        <div className="modal">
          <div className="modal-content">
            <h2>Terminal Title</h2>
            <input
              type="text"
              className="inputel"
              name="terminalName"
              value={this.state.terminalName}
              onChange={this.handleInputChange}
            />
            <hr />
            <label>Description</label>
            <input
              type="textarea"
              className="inputel"
              name="metadata"
              value={this.state.metadata}
              onChange={this.handleInputChange}
            />
            <div className="buttonscontainer">
              <button className="buttonel">Upload Image</button>
              <div>
                <button className="buttonel" onClick={onClose}>
                  Cancel
                </button>
                <button className="buttonel" onClick={this.handleSave}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Modal
