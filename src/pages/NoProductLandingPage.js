import React from "react";
import { NavBar, Button, CustomCard } from "../components";

const NoProductLandingPage = () => {
  return (
    <React.Fragment>
      <div>
        <div className="container-fluid bg-dark">
          <header>
            <NavBar />
          </header>
          <div className="container py-5">
            <div className="title">
              <div className="h3 text-white">
                Welcome! <em>FrontEdge</em>
              </div>
            </div>
          </div>
        </div>
        <main className="container-fluid">
          <section className="container bg-light-x">
            <CustomCard className="card invoice-card">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="user-profile d-flex">
                            <span className="font-icon">
                              <i
                                className="fa fa-file-text-o"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="text ms-3">
                              <p className="mb-0">TOTAL RECEIVED</p>
                              <p className="fs-3">
                                <span>₦</span>0.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="user-profile d-flex">
                            <span className="font-icon">
                              <i
                                className="fa fa-file-text-o"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="text ms-3">
                              <p className="mb-0">AVG. TIME TO PAY</p>
                              <p className="fs-3">
                                <span>₦</span>0
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-start total-due">
                        <div>
                          <div className="user-profile d-flex">
                            <span className="font-icon">
                              <i
                                className="fa fa-file-text-o"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="text ms-3">
                              <p className="mb-0">TOTAL DUE</p>
                              <p className="fs-5 text-info">
                                <span>₦</span>0.00
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="user-profile d-flex ms-5">
                            <span className="font-icon">
                              <i
                                className="fa fa-file-text-o"
                                aria-hidden="true"
                              />
                            </span>
                            <div className="text ms-3">
                              <p className="mb-0">OVERDUE</p>
                              <p className="fs-5 text-danger">
                                <span>₦</span>0.00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCard>
          </section>
          <section className="container mt-5">
            <div class="row">
              <div class="col-md-4">
                <CustomCard className="card left-card section-card">
                  <div className="card-body mt-3">
                    <h5 className="card-title">
                      <em>Open a Business Account.</em>
                    </h5>
                    <p className="card-text">
                      Make and receive payments, create invoices with Front Edge
                    </p>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </div>
                </CustomCard>
              </div>
              <div class="col-md-4">
                <CustomCard className="card middle-card section-card">
                  <div className="card-body mt-3">
                    <h5 className="card-title">
                      <em>Finance your Business.</em>
                    </h5>
                    <p className="card-text">
                      Access just in time capital to achieve your business
                      potential. Sign up now.
                    </p>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </div>
                </CustomCard>
              </div>
              <div class="col-md-4">
                <CustomCard className="card right-card section-card">
                  <div className="card-body mt-3">
                    <h5 className="card-title">
                      <em>Create Invoice.</em>
                    </h5>
                    <p className="card-text">
                      Get paid for your services. Create and share invoices with
                      your customers.
                    </p>
                    <Button className="btn btn-dark btn-sm rounded-pill">
                      <em>New Invoice</em>
                    </Button>
                  </div>
                </CustomCard>
              </div>
            </div>
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default NoProductLandingPage;
