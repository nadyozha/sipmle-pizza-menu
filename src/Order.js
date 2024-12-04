export default function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>We are open from {openHour}:00 to {closeHour}:00. Come visit us ot order online</p>
            <button className="btn">Order</button>
        </div>
    )
}