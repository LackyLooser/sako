import {useState, useEffect} from 'react'
import axios from 'axios'

export default url => {
  const baseUrl = 'http://localhost:8000/api/v1/'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = (options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }

    axios(baseUrl + url, options)
      .then(res => {
        setResponse(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.response.data)
        setIsLoading(false)
      })
  }, [isLoading])

  return [{isLoading, response, error}, doFetch]
}