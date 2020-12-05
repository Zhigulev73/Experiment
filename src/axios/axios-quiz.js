import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-e35ba-default-rtdb.europe-west1.firebasedatabase.app/'
})