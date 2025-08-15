import donationImg from '../assets/images/paypal-donate-button.png';

export default function Donation() {
    return (
        <section className='donate'>
            <p>If you enjoy <a href="https://www.instagram.com/dad_has_jokes/" target="_blank">@dad_has_jokes </a> or the DadBoard consider buying me a coffee? </p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="Y43KNUR65ASXQ" />
                <input id="donate-image" type="image" src={donationImg} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="Paypal donation logo" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </section>
    )
}