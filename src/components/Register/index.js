import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = event => {
        updateTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form onSubmit={submitForm}>
              <h1>Let us Join</h1>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                onChange={onChangeName}
                placeholder="Your name"
                value={name}
              />
              <label htmlFor="topic">TOPICS</label>
              <select id="topic" value={topic} onChange={onChangeTopic}>
                {topicsList.map(each => (
                  <option value={each.id} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Register Now</button>
              {registerError ? <p>Please enter your name</p> : null}
            </form>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
