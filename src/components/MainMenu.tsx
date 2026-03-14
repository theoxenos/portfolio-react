import MainMenuItem from './MainMenuItem.tsx';

const MainMenu = () => {
    const menuItems = [
        {title: 'Home', url: '/', icon: 'bi-house-fill'},
        {title: 'Projects', url: 'projects', icon: 'bi-code-slash'},
        {title: 'About', url: 'about', icon: 'bi-info-circle-fill'},
    ];
    
    return (
        <div
            className="rounded-pill bg-nord-1 text-nord-6 py-3"
            style={{margin: '0 auto', width: '400px'}}
            aria-label="Main navigation">
            <ul className="d-flex justify-content-center align-items-center gap-5 h-100 mb-0 list-unstyled">
                {menuItems.map((item, index) => (
                    <MainMenuItem key={index} title={item.title} url={item.url} icon={item.icon} />
                ))}
            </ul>
        </div>
    );
};

export default MainMenu;