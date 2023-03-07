const Notification = props => {
  const {className, text, src} = props;
  return {
      <div>
      <img src = {`${src}`} className = {`${className}`}/>
      <p>{text}</p>
      </div>
  }
}

const element = (
  <div className = "bg-container">
  <h1 className = "head">Notifications</h1>
  <Notification src = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className = "img1" text = "information message"/>;
  <Notification src = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" className = "img2" text = "success message"/>;
  <Notification src = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" className = "img3" text = "warning message"/>;
  <Notification src = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" className = "img4" text = "danger message"/>;
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
