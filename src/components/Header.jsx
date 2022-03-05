import Button from './Button';
import logo from '../images/galactic.png';

function Header() {
    return (
        <div className="h-screen flex items-center">
            <div className=" max-w-lg text-center sm:bg-transparent rounded-xl my-10 p-5">
                <div className="grid gap-5">
                    <h1 className="font-bold text-5xl">GΛLΛCTIC</h1>
                    <img className="rounded-full shadow-lg shadow-indigo-500/30 mx-auto h-auto w-[128px] sm:w-[200px] aspect-square" src={logo} alt="logo" />
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
