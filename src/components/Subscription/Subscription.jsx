import './subscription.css'
import { useNavigate } from 'react-router-dom'

function Subscription({ id, customer_name, frequency, price, status, title }) {
    const navigate = useNavigate()

    const subDetails = () => {
        navigate(`/subscriptions/${id}`)
    }

    return (
        <article onClick={subDetails} className="subscription" id={`subscription-${id}`}>
            <h3>{title}</h3>
            <p>{customer_name}</p>
            <p>every {frequency}</p>
            <p>${price}</p>
            <p>{status}</p>
        </article>
    )
}

export default Subscription