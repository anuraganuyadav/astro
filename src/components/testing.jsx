import React from 'react'

const AdminSidebar = () => {
	return (
		<>
			<body>
				<div className="wrapper">
					{/* <!-- Sidebar --> */}
					<div className="sidebar" data-background-color="dark">
						<div className="sidebar-logo">
							{/* <!-- Logo Header --> */}
							<div className="logo-header" data-background-color="dark">
								<a href="index.html" className="logo">
									<img
										src="Admin/img/kaiadmin/logo_light.svg"
										alt="navbar brand"
										className="navbar-brand"
										height="20"
									/>
								</a>
								<div className="nav-toggle">
									<button className="btn btn-toggle toggle-sidebar">
										<i className="gg-menu-right"></i>
									</button>
									<button className="btn btn-toggle sidenav-toggler">
										<i className="gg-menu-left"></i>
									</button>
								</div>
								<button className="topbar-toggler more">
									<i className="gg-more-vertical-alt"></i>
								</button>
							</div>
							{/* <!-- End Logo Header --> */}
						</div>
						<div className="sidebar-wrapper scrollbar scrollbar-inner">
							<div className="sidebar-content">
								<ul className="nav nav-secondary">
									<li className="nav-item active">
										<a
											data-bs-toggle="collapse"
											href="#dashboard"
											className="collapsed"
											aria-expanded="false"
										>
											<i className="fas fa-home"></i>
											<p>Dashboard</p>
											<span className="caret"></span>
										</a>
										<div className="collapse" id="dashboard">
											<ul className="nav nav-collapse">
												<li>
													<a href="../demo1/index.html">
														<span className="sub-item">Dashboard 1</span>
													</a>
												</li>
											</ul>
										</div>
									</li>
									<li className="nav-section">
										<span className="sidebar-mini-icon">
											<i className="fa fa-ellipsis-h"></i>
										</span>
										<h4 className="text-section">Components</h4>
									</li>

									<li className="nav-item">
										<a data-bs-toggle="collapse" href="#forms">
											<i className="fas fa-pen-square"></i>
											<p>Forms</p>
											<span className="caret"></span>
										</a>
										<div className="collapse" id="forms">
											<ul className="nav nav-collapse">
												<li>
													<a href="forms/forms.html">
														<span className="sub-item">Basic Form</span>
													</a>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- End Sidebar --> */}

					<div className="main-panel">
						<div className="main-header">
							<div className="main-header-logo">
								{/* <!-- Logo Header --> */}
								<div className="logo-header" data-background-color="dark">
									<a href="index.html" className="logo">
										<img
											src="assets/img/kaiadmin/logo_light.svg"
											alt="navbar brand"
											className="navbar-brand"
											height="20"
										/>
									</a>
									<div className="nav-toggle">
										<button className="btn btn-toggle toggle-sidebar">
											<i className="gg-menu-right"></i>
										</button>
										<button className="btn btn-toggle sidenav-toggler">
											<i className="gg-menu-left"></i>
										</button>
									</div>
									<button className="topbar-toggler more">
										<i className="gg-more-vertical-alt"></i>
									</button>
								</div>
								{/* <!-- End Logo Header --> */}
							</div>
							{/* <!-- Navbar Header --> */}
							<nav
								className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
							>
								<div className="container-fluid">
									<nav
										className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex"
									>
										<div className="input-group">
											<div className="input-group-prepend">
												<button type="submit" className="btn btn-search pe-1">
													<i className="fa fa-search search-icon"></i>
												</button>
											</div>
											<input
												type="text"
												placeholder="Search ..."
												className="form-control"
											/>
										</div>
									</nav>

									<ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
										<li
											className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none"
										>
											<a
												className="nav-link dropdown-toggle"
												data-bs-toggle="dropdown"
												href="#"
												role="button"
												aria-expanded="false"
												aria-haspopup="true"
											>
												<i className="fa fa-search"></i>
											</a>
											<ul className="dropdown-menu dropdown-search animated fadeIn">
												<form className="navbar-left navbar-form nav-search">
													<div className="input-group">
														<input
															type="text"
															placeholder="Search ..."
															className="form-control"
														/>
													</div>
												</form>
											</ul>
										</li>

										<li className="nav-item topbar-user dropdown hidden-caret">
											<a
												className="dropdown-toggle profile-pic"
												data-bs-toggle="dropdown"
												href="#"
												aria-expanded="false"
											>
												<div className="avatar-sm">
													<img
														src="/Admin/img/profile.jpg"
														alt="..."
														className="avatar-img rounded-circle"
													/>
												</div>

											</a>
											<ul className="dropdown-menu dropdown-user animated fadeIn">
												<div className="dropdown-user-scroll scrollbar-outer">
													<li>
														<div className="user-box">
															<div className="avatar-lg">
																<img
																	src="assets/img/profile.jpg"
																	alt="image profile"
																	className="avatar-img rounded"
																/>
															</div>

														</div>
													</li>
													<li>
														<div className="dropdown-divider"></div>
														<a className="dropdown-item" href="#">My Profile</a>
														<a className="dropdown-item" href="#">Logout</a>
													</li>
												</div>
											</ul>
										</li>
									</ul>
								</div>
							</nav>
							{/* <!-- End Navbar --> */}
						</div>

						<div className="container">
							<div className="page-inner">
								<div
									className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
								>
									<div>
										<h3 className="fw-bold mb-3">Dashboard</h3>

									</div>

								</div>
								<div className="row">
									<div className="col-sm-6 col-md-3">
										<div className="card card-stats card-round">
											<div className="card-body">
												<div className="row align-items-center">
													<div className="col-icon">
														<div
															className="icon-big text-center icon-primary bubble-shadow-small"
														>
															<i className="fas fa-users"></i>
														</div>
													</div>
													<div className="col col-stats ms-3 ms-sm-0">
														<div className="numbers">
															<p className="card-category">Visitors</p>
															<h4 className="card-title">1,294</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="card card-stats card-round">
											<div className="card-body">
												<div className="row align-items-center">
													<div className="col-icon">
														<div
															className="icon-big text-center icon-info bubble-shadow-small"
														>
															<i className="fas fa-user-check"></i>
														</div>
													</div>
													<div className="col col-stats ms-3 ms-sm-0">
														<div className="numbers">
															<p className="card-category">Subscribers</p>
															<h4 className="card-title">1303</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="card card-stats card-round">
											<div className="card-body">
												<div className="row align-items-center">
													<div className="col-icon">
														<div
															className="icon-big text-center icon-success bubble-shadow-small"
														>
															<i className="fas fa-luggage-cart"></i>
														</div>
													</div>
													<div className="col col-stats ms-3 ms-sm-0">
														<div className="numbers">
															<p className="card-category">Sales</p>
															<h4 className="card-title">$ 1,345</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="card card-stats card-round">
											<div className="card-body">
												<div className="row align-items-center">
													<div className="col-icon">
														<div
															className="icon-big text-center icon-secondary bubble-shadow-small"
														>
															<i className="far fa-check-circle"></i>
														</div>
													</div>
													<div className="col col-stats ms-3 ms-sm-0">
														<div className="numbers">
															<p className="card-category">Order</p>
															<h4 className="card-title">576</h4>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<footer className="footer">
							<div className="container-fluid d-flex justify-content-between">
								<nav className="pull-left">
									<ul className="nav">
										<li className="nav-item">
											<a className="nav-link" href="http://www.themekita.com">
												ThemeKita
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#"> Help </a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="#"> Licenses </a>
										</li>
									</ul>
								</nav>
								<div className="copyright">
									2024, made with <i className="fa fa-heart heart text-danger"></i> by
									<a href="http://www.themekita.com">ThemeKita</a>
								</div>
								<div>
									Distributed by
									<a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
								</div>
							</div>
						</footer>
					</div>


				</div>

			</body>
		</>
	)
}

export default AdminSidebar