import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div>
          <h2 className="header">Contact Me 📞</h2>
          <div class="contact-boxes">
            <div class="contact-box">
              <i class="bx bx-envelope"></i>
              <h2 class="header">Email</h2>
              <p>takemjim43@gmail.com</p>
              <a
                href="mailto:takemjim43@gmail.com"
                target="_blank"
                class="link"
              >
                Send a message
              </a>
            </div>
            <div class="contact-box">
              <i class="bx bxl-messenger"></i>
              <h2 class="header">Messenger</h2>
              <p>takemjim</p>
              <a
                href="https://www.messenger.com/t/takemjim"
                class="link"
                target="_blank"
              >
                Send a message
              </a>
            </div>
            <div class="contact-box">
              <i class="bx bxl-whatsapp"></i>
              <h2 class="header">Whatsapp</h2>
              <p>654812052</p>
              <a href="https://wa.me/237654812052" target="_blank" class="link">
                Send a message
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>OR</h2>
          <p className="bold">Leave us a message</p>
          <form action="https://formspree.io/f/xvojwyga" method="post">
            <input type="text" name="Name" placeholder="Name" required />
            <input type="text" name="email" placeholder="email" required />
            <input
              type="text"
              name="Phone Number"
              placeholder="Phone Number (optional)"
              id="numberInput"
            />
            <input type="text" name="subject" placeholder="subject" required />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              aria-label="submit contact form"
              className="btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
