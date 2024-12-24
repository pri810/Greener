
function BestSellingCard ({cards}) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={cards.img} alt="" />
            </div>
            <div class="info">
                <h3>{cards.desc}</h3>
                <p>{cards.price}</p>
                <span class="price">$20,00</span>
                <a href="" class="button">Buy now</a>
            </div>
        </div>
    )
}

export default BestSellingCard