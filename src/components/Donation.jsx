export default function Donation() {
    return (
        <section class="donate">
            <p>If you enjoy <a href="https://www.instagram.com/dad_has_jokes/" target="_blank">@dad_has_jokes </a> or the DadBoard consider buying me a coffe? </p>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="Y43KNUR65ASXQ" />
                <input id="donate-image" type="image" src="https://dadboard.netlify.app/images/paypal-donate-button.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </section>
    )
}