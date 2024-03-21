import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content:
        'Working with Jim on our website was a game-changer. Their expertise in web development helped us create a fast, user-friendly, and visually appealing site that exceeded our expectations.',
      company: 'ABC Company',
      name: 'John Doe',
    },
    {
      content:
        'The UI/UX designs provided by Jim transformed our product into a sleek and intuitive experience for our users. Their attention to detail and creativity truly set them apart.',
      company: 'XYZ Design Studio',
      name: 'Jane Smith',
    },
    {
      content:
        "Thanks to Jim's mobile development skills, our app now runs smoothly on both iOS and Android devices. Their dedication to delivering high-quality code and innovative solutions is commendable.",
      company: '123 App Development',
      name: 'Michael Johnson',
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="header">Testimonials</h2>
        <p className="header-description">What My Clients Say About Me</p>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-box" key={index}>
              <p className="content">{testimonial.content}</p>
              <h3 className="name">{testimonial.name}</h3>
              <p>
                <small style={{ fontStyle: 'italic' }}>
                  "{testimonial.company}"
                </small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
