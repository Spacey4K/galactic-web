
function Footer() {
    return (
        <div className="bg-transparent flex gap-x-10 gap-y-1 flex-col md:flex-row w-[100%] text-center text-sm py-2 justify-center">
            <a className="underline" href="support.html" target="_blank" >Support</a>
            <a className="underline" href="terms-of-service.html" target="_blank" >Terms Of Service</a>
            <a className="underline" href="privacy-policy.html" target="_blank" >Privacy Policy</a>
            Galactic @2022
            <img src="https://top.gg/api/widget/status/580497645882048532.svg?noavatar=true" className="w-max m-auto md:m-0" alt="Bot status" />

        </div>
    );
}

export default Footer;
