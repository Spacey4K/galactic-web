import Button from './Button';
import logo from '../images/galactic.png';

function Header() {
    return (
        <div className="h-screen flex items-center">
            <div className=" max-w-lg text-center bg-transparent rounded-xl p-10">
                <div className="grid gap-5">
                    <img className="rounded-full shadow-lg shadow-indigo-500/30 mx-auto h-auto w-[128px] sm:w-[256px]" src={logo} alt="logo" />
                    <h1 className="font-bold text-5xl">GΛLΛCTIC</h1>
                    <img src="https://top.gg/api/widget/status/580497645882048532.svg?noavatar=true" className="mx-auto" alt="bot status" />
                    <p className="text-xl">A multipurpose bot for any community with many useful features & commands</p>
                    <div className="grid sm:grid-cols-2 gap-5 w-full">
                        <Button label="Invite" url="invite.html?utm_source=galactic-bot.com&utm_medium=header" type="primary" />
                        <Button label="Learn more" url="#features" type="secondary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
