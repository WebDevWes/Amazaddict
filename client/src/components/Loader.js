import { Spinner } from 'react-bootstrap'

export default function Loader() {
  return (
    <Spinner
      animation='grow'
      role='status'
      style={{
        margin: '10rem auto',
        display: 'block',
        width: '100px',
        height: '100px',
      }}>
      <span className='sr-only'>In Progress...</span>
    </Spinner>
  )
}
