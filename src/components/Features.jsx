import Command from './Command';
import Card from './Card';

import Activities from '../images/activities.png';
import GalactiCoin from '../images/gcs.png';
import Ansi from '../images/ansi.png';
import Minigames from '../images/minigames.png';
import CustomCommands from '../images/custom_commands.png';

function Header() {
    return (
        <div className="grid sm:grid-cols-3 py-10 sm:gap-y-20 gap-y-10 gap-x-5 w-[90%] place-items-center items-stretch" id="features">
            <Card
                title="Activities"
                description={
                    <span>
                        They are fun minigames that you can play with your friends in voice channels. Currently you can play chess, checkers, YouTube Together, Poker Night and other fun games. To start one you must first join a voice channel then use the <Command cmd="=activity yt" /> command.  (Please note that they are still in beta & only work on PC
                    </span>
                }
                img={Activities}
            />

            <Card
                title="Leveling"
                description={
                    <span>
                        Make your community more active with levels & rewarding users when they reach a certain level (<Command cmd="=rank-roles" />).
                        Enable levelling by setting a level up notification with <Command cmd="=lvlup-message" />. If you used MEE6 before you can sync levels: <Command cmd="=transfer-mee6" />
                    </span>
                }
                img={"https://media.discordapp.net/attachments/786627080757575720/945479627705552906/rank-card.png"}
            />

            <Card
                title="Economy"
                description={
                    <span>
                        Galactic has it's own currency: GalactiCoins. With them you can buy a custom rank card background and other cool things.
                        Get started by checking out the available items: <Command cmd="=shop" />
                        <br />Pssst! Claim some free GalactiCoins with <Command cmd="=daily" />
                    </span>
                }
                img={GalactiCoin}
            />

            <Card
                title="Minigames"
                description={
                    <span>
                        Play fun games such as hangman, rock paper scissors, type racer & earn GalactiCoins!
                    </span>
                }
                img={Minigames}
            />

            <Card
                title="Custom commands"
                description={
                    <span>
                        Create unlimited custom commands with multiple random responses.
                        For example a coin flip command: <Command cmd="=custom-command add coin-flip heads | tails" />
                    </span>
                }
                img={CustomCommands}
            />

            <Card
                title="... And much more!"
                description={
                    <span>
                        With Galactic you can: log deleted images, set a welcome message with invite tracking, moderation, Member count channel, suggestion system, useful utilities, text & image generators, memes ...
                    </span>
                }
                img={Ansi}
            />
        </div>
    );
}

export default Header;
