import Button from './Button.jsx';

function App() {
    return (
        <div class="flex h-screen">
            <div class="m-auto max-w-lg text-center bg-transparent rounded py-5 px-8">
                <h1 class="text-primary font-bold text-5xl ">Galactic</h1>
                <p class="text-xl my-4">A multipurpose bot for any community with many useful features & commands</p>
                <div className="grid grid-cols-2 gap-5">
                    <Button label="Invite" url="invite.html" />
                    <Button label="Dashboard" url="dashboard.html" />
                </div>
            </div>
        </div >
    );
}

export default App;
