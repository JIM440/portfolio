import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dave Gibson',
      content:
        'Jim has an exceptional eye for detail in UI/UX design. His work stands out for its clean and clear design, with impeccable spacing that enhances user experience and readability. His designs are not only visually appealing but also intuitive and user-friendly, setting a high standard for UI/UX excellence.',
      company: 'Happy Users Inc.',
    },
    {
      name: 'Hanson Steve',
      content:
        'When it comes to web development, Jim excels in building fast, visually appealing, and functionally robust websites. His dedication to following best practices and implementing optimized coding techniques ensures that the websites he builds are not only aesthetically pleasing but also deliver outstanding performance and user experience.',
      company: 'Tech Savvy Solutions',
    },
    {
      name: 'Kevin Stones',
      content:
        "Jim's expertise in mobile development is truly impressive. His mobile applications are crafted with precision and attention to detail, resulting in seamless user interactions and intuitive interfaces. Jim's commitment to creating efficient, user-centric mobile experiences is evident in every project he undertakes.",
      company: 'MobileTech Innovations',
    },
  ];

  console.log(testimonials);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="header">Testimonials 🌟</h2>
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
