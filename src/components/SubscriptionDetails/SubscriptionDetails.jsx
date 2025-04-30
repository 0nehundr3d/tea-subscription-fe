import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Tea from "../Tea/Tea"

function SubscriptionDetails() {
    const id = useParams().id
    const [subscriptionDetails, setSubscriptionDetails] = useState({teas:[]})

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/api/v1/subscriptions/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            return response.json()
        })
        .then((data) => {setSubscriptionDetails(data["data"])})
        .catch((err) => {
            console.error("Fetch failed: ", err)
        })
    }, [])

    return (
        <section className="SubscriptionDetails">
            <h2>{subscriptionDetails["title"]}</h2>
            <p>Customer: {subscriptionDetails["customer_name"]}</p>
            <p>Status: {subscriptionDetails["status"]}</p>
            <p>Frequency: every {subscriptionDetails["frequency"]}</p>
            <p>Price: {subscriptionDetails["price"]}</p>
            <b>Teas</b>
            <ul>
                {subscriptionDetails["teas"].map((tea) => {
                    return(
                        <li><Tea tea={tea}/></li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SubscriptionDetails