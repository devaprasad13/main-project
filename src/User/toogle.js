import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file here

function Sidebar() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);
  const [isSearchFormShown, setIsSearchFormShown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
      if (window.innerWidth > 576) {
        setIsSearchFormShown(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuBarClick = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 576) {
      setIsSearchFormShown(!isSearchFormShown);
    }
  };

  const handleSwitchModeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
      <a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">AdminHub</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
      </section>

      <section id="content">
        <nav>
          <i className="bx bx-menu" onClick={handleMenuBarClick}></i>
          {/* Other nav elements */}
          <form action="#" className={isSearchFormShown ? 'show' : ''}>
            {/* Search form content */}
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn" onClick={handleSearchButtonClick}>
                <i className={isSearchFormShown ? 'bx bx-x' : 'bx bx-search'}></i>
              </button>
            </div>
          </form>
          {/* Other nav elements */}
          <input type="checkbox" id="switch-mode" hidden onChange={handleSwitchModeChange} />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          {/* Other nav elements */}
        </nav>
        {/* Other content */}
      </section>
    </>
  );
}

export default Sidebar;