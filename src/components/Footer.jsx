
function Footer() {
    return (
        <div className="bg-transparent flex gap-x-10 gap-y-1 flex-col md:flex-row w-[100%] text-center text-sm py-2 justify-center">
            <a className="underline" href="support.html?utm_source=galactic-bot.com&utm_medium=footer" target="_blank" >Support</a>
            <a className="underline" href="terms-of-service.html" target="_blank" >Terms Of Service</a>
            <a className="underline" href="privacy-policy.html" target="_blank" >Privacy Policy</a>
            Galactic @2022
        </div>
    );
}

export default Footer;
