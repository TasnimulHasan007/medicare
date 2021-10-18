import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import blogImage from "../../images/blog.jpg"
import blogm1 from "../../images/blog-m1.jpg"
import blogm2 from "../../images/blog-m2.jpg"
import "./Blog.css"

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-banner">
        <Container>
          <h2>Blog</h2>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={8}>
            <img src={blogImage} alt="" />
            <div className="blog-body">
              <h3>Some health issues should not be evaluated in the office</h3>
              <p>
                I received a phone call from an elderly gentleman who was closer
                to ninety years of age than 80, was taking an aspirin, and had
                just suffered a fall and hit his head. He did not know why or
                how he fell. He asked for an appointment the same day to “check
                me out.”
              </p>
              <p>
                My staff asked all the pertinent questions and immediately
                brought the information to me. After reviewing it, I felt for
                his safety his best course of action was to immediately call 911
                (or have us do it) and go to our local emergency department for
                evaluation. The patient takes daily aspirins to prevent a second
                heart attack or stroke.
              </p>
              <Row className="g-3">
                <Col md={6}>
                  <img src={blogm1} alt="" />
                </Col>
                <Col md={6}>
                  <img src={blogm2} alt="" />
                </Col>
              </Row>
              <p>
                The antiplatelet action of the aspirin, plus his age and the
                head trauma necessitate an immediate and thorough evaluation
                with imaging. I do not have an X-ray unit, CT scan unit or MRI
                unit in my internal medicine office. If I bring this gentleman
                into my office, he must transport himself, wait until I have
                time later in the day, and probably will then have to wait to be
                scheduled by an imaging facility for a non-contrast CT scan of
                the brain to make sure doesn’t have a bleed between his brain
                and skull or a bleed in the brain. The delay in evaluation can
                threaten his survival and recovery.
              </p>
              <p>
                The patient was quite angry at the suggestion – quoting my
                concierge practice contract that says we will bring you in for a
                visit the same day for an acute condition. The non-stated
                content is that we will bring you on the same day for a
                condition that is appropriate for evaluation in an office
                setting. The same can be said for someone calling with acute
                substernal chest pain which could be a heart attack or sudden
                inability to breathe.
              </p>
              <hr />
              <div className="form">
                <h3>Leave a reply</h3>
                <input type="text" placeholder="Your Name" />
                <textarea rows="10" placeholder="Enter Comment"></textarea>
                <button className="btn-main">Post Comment</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <aside className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="search"
              />
              <span className="input-group-text " id="search">
                <i className="fas fa-search"></i>
              </span>
            </aside>
            <aside>
              <h4>Categories</h4>
              <hr />
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> Diabetes Care
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> First Aid
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> Incotinence
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> Respiratory
                </li>
              </ul>
            </aside>
            <aside>
              <h4>Tags</h4>
              <hr />
              <div>
                <span>Lab</span>
                <span>Kits</span>
                <span>Aids</span>
                <span>Diabetes</span>
                <span>Soaps</span>
                <span>Gloves</span>
                <span>Pain</span>
              </div>
            </aside>
            <aside className="newsletter">
              <h4 className="text-center">Subscribe to our newletter</h4>
              <div className="form">
                <input type="email" placeholder="Your Email" />
                <button className="btn-main">Subscribe</button>
              </div>
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
