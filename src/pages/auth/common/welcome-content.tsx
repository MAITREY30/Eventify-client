

function welcomeContent() {
    return (
        <div className="h-screen flex items-center justify-center bg-primary w-full">
            <div className="flex flex-col gap-2">
                <img src="./event.svg" alt="logo" className="w-64 h-56" />
                <h1 className="text-orange-500 text-6xl font-semibold">
                    RAJ-EVENTS
                </h1>
                <p className="text-gray-400 text-sm"> Welcome to Raj Events, the best platform to create annd manage your events.</p>
            </div>
        </div>
    )
}

export default welcomeContent;