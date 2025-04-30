import './Tea.css'

function Tea({ tea }) {
    return (
        <article className="tea">
            <p>{tea.title}</p>
            <p>{tea.description}</p>
            <p>Brew at {tea.temperature} degrees for {tea.brew_time}</p>
            <p>Costs ${tea.price}</p>
        </article>
    )
}

export default Tea