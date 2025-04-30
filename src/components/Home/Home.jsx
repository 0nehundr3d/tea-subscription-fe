import { useEffect, useState } from "react"
import Subscription from "../Subscription/Subscription"
import './home.css'

function Home() {
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/api/v1/subscriptions')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            return response.json()
        })
        .then((data) => {setSubscriptions(data["data"])})
        .catch((err) => {
            console.error("Fetch failed: ", err)
        })
    }, [])

    return (
        <section className="home">
            <h2>Subscriptions</h2>
            <section className="subscriptions">
                {subscriptions.map((subscription) => {
                    console.log(subscription)
                    return (
                        <Subscription
                            id={subscription.id}
                            key={subscription.id}
                            customer_name={subscription.attributes.customer_name}
                            frequency={subscription.attributes.frequency}
                            price={subscription.attributes.price}
                            status={subscription.attributes.status}
                            title={subscription.attributes.title}
                        />
                    )
                })}
            </section>
        </section>
    )
}

export default Home