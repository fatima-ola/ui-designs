import React from "react";
import { NavBar, Button, CustomCard } from "../components";

const BankAccount = () => {
  return (
    <React.Fragment>
      {/* header */}
      <header className="container-fluid bg-dark">
        <NavBar />
        <div className="container py-5">
          <div className="title">
            <div className="h3 text-white">
              Welcome! <em>FrontEdge</em>
            </div>
          </div>
        </div>
      </header>
      {/* kpi section  */}
      <main className="container-fluid pt-3">
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
                            <p className="mb-0">Invoice Financed</p>
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
                            <p className="mb-0">Paid Out</p>
                            <p className="fs-3">
                              <span>₦</span>0.00
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
                            <p className="mb-0">Total Due</p>
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
                            <p className="mb-0">Overdue</p>
                            <p className="fs-5 text-danger">
                              <span>₦</span>0.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <p>
                    Last updated 2 days ago
                    <i
                      className="fa fa-refresh text-info ms-2"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="ms-5">
                    Download CSV
                    <i
                      className="fa fa-download text-info ms-2"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>
        </section>
        {/* error section */}
        <section className="container bg-light-x mt-5">
          <CustomCard className="card bg-dark section-card">
            <div
              className="card-body alert text-white d-flex align-items-center"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="#ffc90e"
                className="bi bi-exclamation-triangle-fill flex-shrink-0 me-4 mt-n4"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div>
                <h6>
                  Get <em>Financing</em> on your export
                </h6>
                <p clss="mb-0">
                  Set a business bank account to recieve fiance to support your
                  business.
                </p>
                <h6 className="text-info">
                  Get a Business bank account
                  <span className="point-arrow text-dark rounded-circle ms-2">
                    &gt;
                  </span>
                </h6>
              </div>
            </div>
          </CustomCard>
        </section>
        {/* invoice section */}
        <section className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <CustomCard className="card section-card">
                <div className="card-body d-flex justify-content-center">
                  <div className="inner-wrapper d-flex">
                    <div className="d-flex justify-content-center invoice-icon">
                      <i className="fa fa-list-alt" aria-hidden="true" />
                    </div>
                    <div className="ms-3">
                      <h5 className="card-title">
                        <em>Submit Invoices for Export Financing</em>
                      </h5>
                      <p>
                        Submit buyer invoices and export documentations to get
                        dollar based financing for your export business.
                      </p>
                      <Button className="btn btn-dark btn-lg rounded-pill">
                        <em>Request Financing</em>
                      </Button>
                    </div>
                  </div>
                </div>
              </CustomCard>
            </div>
            <div className="col-md-4">
              <p>Discover more From Front Edge</p>
              <div className="card left-card">
                <div className="card-body">
                  <h5 className="card-title">Open a Business Account.</h5>
                  <p className="card-text">
                    Make and receive payments, create invoices with Front Edge
                  </p>
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* no invoice section */}
        <section className="container mt-5 no-invoice">
          <div className="row">
            <div className="col-md-8">
              <CustomCard className="card section-card">
                <div className="card-body d-flex justify-content-center">
                  <div className="inner-wrapper d-flex">
                    <div className="d-flex justify-content-center invoice-icon">
                      <i className="fa fa-file-text" aria-hidden="true" />
                    </div>
                    <div className="ms-3">
                      <h5 className="card-title">
                        <em>No Invoice Found</em>
                      </h5>
                      <p>
                        Create and send invoice to clients and customers and get
                        your payment in your Front Edge bank account.
                      </p>
                      <Button className="btn btn-dark btn-lg rounded-pill">
                        <em>Create an Invoice</em>
                      </Button>
                    </div>
                  </div>
                </div>
              </CustomCard>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default BankAccount;
