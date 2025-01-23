const Header = ({headerText}: {headerText: string}) => {
    return (
        <div className="flex w-screen text-2xl h-fit bg-black text-white font-bold justify-center">
            <h1 className="p-5">{headerText}</h1>
        </div>
    );
}

export default Header;