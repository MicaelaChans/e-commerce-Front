import Form from "react-bootstrap/Form";
import Footer from "./Footer";
function ContactUs() {
  return (
    <>
      <div className="background-contact">
        <div className="container pt-5">
          <h2 className="mb-3 fs-1">How to Contact US?</h2>
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
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        <div className="w-75 mb-5 lh-lg">
          <Form className="fs-3 ">
            <Form.Group className="mb-3" controlId="example">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                className="shadow border-0"
                type="email"
                placeholder="Mary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="example">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="shadow border-0"
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="example">
              <Form.Label>Leave us a comment...</Form.Label>
              <Form.Control
                className="shadow border-0"
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
