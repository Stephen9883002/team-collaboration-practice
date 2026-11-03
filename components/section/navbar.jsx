const navbar = () => {
	return (
		<>
			<div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
				<nav className="navbar-pill">
					{/* 1. Left: Logo */}
					<Link to="/" className="nav-brand">
						{/* <span className="material-symbols-sharp">school</span>
						Schola<span>Ten</span> */}
						<img src="/images/schola3.PNG" alt="logo" />
					</Link>

					{/* 2. Center: Links & Search */}
					<div className="nav-center">
						<div className="nav-links">
							<Link to="/" className="nav-link"></Link>
							<Link to="/about" className="nav-link">
								About
							</Link>
							<Link to="/academics" className="nav-link">
								Academics
							</Link>
							<Link to="/admissions" className="nav-link">
								Admissions
							</Link>
							<Link to="/school" className="nav-link">
								School Life
							</Link>
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</div>

						<div className="nav-search">
							<span className="material-symbols-sharp">search</span>
							<input
								type="text"
								placeholder="Search..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
					</div>

					{/* 3. Right: Auth / CTA */}
					{/* <div className="nav-right">
						<Link to="/login" className="btn-login">
							<span className="material-symbols-sharp">account_circle</span>
							Portal Login
						</Link>
						<Link to="/apply" className="btn-apply">
							Apply Now
						</Link>
					</div> */}
					{/* 3. Right: Auth / CTA */}
					<div className="nav-right">
						{/* Auth Dropdown Container */}
						<div className="auth-dropdown-container">
							<button
								className="btn-login"
								onClick={() => setIsAuthOpen(!isAuthOpen)}
							>
								<span className="material-symbols-sharp">account_circle</span>
								Portal Login
								<span
									className="material-symbols-sharp"
									style={{ fontSize: '1rem' }}
								>
									expand_more
								</span>
							</button>

							{/* The Dropdown Menu */}
							{isAuthOpen && (
								<div className="auth-dropdown">
									<Link to="/portal/admin" onClick={() => setIsAuthOpen(false)}>
										<span className="material-symbols-sharp">
											admin_panel_settings
										</span>
										Admin Portal
									</Link>
									<Link
										to="/portal/teacher"
										onClick={() => setIsAuthOpen(false)}
									>
										<span className="material-symbols-sharp">history_edu</span>
										Teacher Portal
									</Link>
									<Link
										to="/portal/student"
										onClick={() => setIsAuthOpen(false)}
									>
										<span className="material-symbols-sharp">face</span>
										Student / Parent
									</Link>
								</div>
							)}
						</div>

						<Link to="/apply" className="btn-apply">
							Apply Now
						</Link>
					</div>

					{/* Mobile Toggle (Hidden on Desktop) */}
					<button
						className="mobile-toggle"
						onClick={() => setIsMobileOpen(true)}
					>
						<span className="material-symbols-sharp">menu</span>
					</button>
				</nav>
			</div>

			{/* Mobile Drawer & Overlay */}
			<div
				className={`mobile-drawer-overlay ${isMobileOpen ? 'open' : ''}`}
				onClick={() => setIsMobileOpen(false)}
			></div>

			{/* Mobile Drawer */}
			<div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}>
				<div className="drawer-header">
					<Link
						to="/"
						className="nav-brand"
						onClick={() => setIsMobileOpen(false)}
					>
						{/* <span className="material-symbols-sharp">school</span>
						Schola<span>Ten</span> */}
						<img src="/images/schola3.PNG" alt="LOGO" />
					</Link>
					<button
						className="mobile-toggle"
						onClick={() => setIsMobileOpen(false)}
					>
						<span className="material-symbols-sharp">close</span>
					</button>
				</div>

				<div className="drawer-links">
					{/* Mobile Search inside the drawer */}
					<div className="nav-search mobile-search">
						<span className="material-symbols-sharp">search</span>
						<input
							type="text"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>

					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/academics">Academics</Link>
					<Link to="/admissions">Admissions</Link>
					<Link to="/school">School Life</Link>
				</div>

				{/* Mobile Auth Section (Instead of dropdown) */}
				<div
					className="drawer-auth"
					style={{
						marginTop: '2rem',
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						borderTop: '1px solid #e5e7eb',
						paddingTop: '1.5rem',
					}}
				>
					<p
						style={{
							fontSize: '0.85rem',
							color: 'var(--text-muted)',
							fontWeight: 'bold',
							textTransform: 'uppercase',
							letterSpacing: '1px',
						}}
					>
						Portals
					</p>
					<Link
						to="/portal/admin"
						style={{
							textDecoration: 'none',
							color: 'var(--text-dark)',
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							fontWeight: '600',
						}}
					>
						<span className="material-symbols-sharp">admin_panel_settings</span>{' '}
						Admin Portal
					</Link>
					<Link
						to="/portal/teacher"
						style={{
							textDecoration: 'none',
							color: 'var(--text-dark)',
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							fontWeight: '600',
						}}
					>
						<span className="material-symbols-sharp">history_edu</span> Teacher
						Portal
					</Link>
					<Link
						to="/portal/student"
						style={{
							textDecoration: 'none',
							color: 'var(--text-dark)',
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							fontWeight: '600',
						}}
					>
						<span className="material-symbols-sharp">face</span> Student /
						Parent
					</Link>

					<Link
						to="/apply"
						className="btn-apply"
						style={{ textAlign: 'center', marginTop: '1rem' }}
					>
						Apply Now
					</Link>
				</div>
			</div>
		</>
	);
};
export default navbar;
