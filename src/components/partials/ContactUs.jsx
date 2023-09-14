import Form from "react-bootstrap/Form";
import Footer from "./Footer";
function ContactUs() {
  return (
    <>
      <div className="background-contact">
        <div className="container pt-5">
          <h2 className="mb-3 fs-1">How to Contact Us?</h2>
          <div className="text-about fs-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              commodi eos? Hic molestiae, cum harum voluptatibus ab a vitae,
              suscipit qui beatae totam expedita quo nesciunt ipsa quis
              accusantium illo?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              numquam cupiditate dolorem non doloremque tempore incidunt, eos
              dignissimos. Provident ea dolorum modi ratione natus eveniet
              adipisicing elit. Laboriosam neque voluptatum nesciunt iusto harum
              inventore, consectetur iste quos earum distinctio vitae cumque
              optate mollitia sed aperiam nam veritatis?
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column form ">
        <div className="row">
          <div className="col-6">
            <Form className="fs-3 ">
              <Form.Group className="mb-3" controlId="example">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className=" border-0 formControl"
                  type="email"
                  placeholder="Mary"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="example">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  className=" border-0 formControl"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="example">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  className=" border-0 formControl"
                  type="phone"
                  placeholder="091 234 567"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="col-6">
            <Form className="fs-3 ">
              <Form.Group className="mb-3" controlId="example">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  className="border-0  formControl"
                  type="subject"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="example">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  className=" border-0 formControl"
                  as="textarea"
                  placeholder="Leave us a comment..."
                  rows={3}
                />
                <div className="form-check fs-6">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label "
                    htmlFor="flexCheckDefault"
                  >
                    I consent to the terms of the privacy politic
                  </label>
                </div>
              </Form.Group>
            </Form>
          </div>
          <Form.Group className="d-flex justify-content-end">
            <button className="btn btn-dark shadow btnSend" type="button">
              Send
            </button>
          </Form.Group>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
