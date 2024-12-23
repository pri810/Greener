import interior from '../img/interior-home-plant-in-pot-png.webp'
function BestSellingCard() {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={interior} alt="" />
            </div>
            <div class="info">
                <h3>Plant 1</h3>
                <p>Lorem Ipsum Dolor<br /> Sit Amet.</p>
                <span class="price">$20,00</span>
                <a href="" class="button">Buy now</a>
            </div>
        </div>
    )
}

export default BestSellingCard