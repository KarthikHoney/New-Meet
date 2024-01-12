import {Link} from 'react-router-dom'
import RegisterContext from '../../Context/RegisterContext'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickRegisterButton = () => {
    const {history} = props
    history.replace('/register')
  }

  const renderHomeView = () => (
    <>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
      <div>
        <h1>Welcome to Meetup</h1>
        <p>Please register for the topic</p>
        <Link to="/register">
          <button type="button" onClick={onClickRegisterButton}>
            Register
          </button>
        </Link>
      </div>
    </>
  )

  const renderHomeViewRegistered = (name, topic) => (
    <>
      <h1>{`Hello ${name}`}</h1>
      <p>{`Welcome to ${topic}`}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    </>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegister, name, topic} = value
        return (
          <>
            <Header />
            <div>
              {isRegister
                ? renderHomeViewRegistered(name, topic)
                : renderHomeView()}
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
