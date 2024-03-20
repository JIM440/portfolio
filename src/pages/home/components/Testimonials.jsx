import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Menge Precious',
      image:
        'https://media.gettyimages.com/id/681887813/photo/close-up-portrait-of-boy-standing-in-classroom.jpg?s=612x612&w=gi&k=20&c=np7t5eZndwuf2WtU8Kl4SFerjdtEuGqmw_Pt0_eFLVs=',
      content:
        'As a student aiming to enter the medical field, choosing ASEND for my exam preparation was a game-changer. The intensive study plans, expert guidance from mentors, and focus on exam strategies provided me with the tools I needed to excel in the medical entrance exams. I am grateful to ASEND for helping me secure a spot in medical school and kickstart my journey toward becoming a healthcare professional.',
      level: '2nd Year Medicine Student FHS',
    },
    {
      name: 'Njidda Salifu',
      image:
        'https://media.gettyimages.com/id/1257207393/de/foto/single-male-college-student-blick-auf-kamera-f%C3%BCr-close-up-portrait.jpg?s=612x612&w=gi&k=20&c=X8mLl7x6uXmcs6fE5ayNcUVHKjwfz4CTbSr1z0KFezE=',
      content:
        "Before coming to ASEND, I was uncertain about my career path and lacked clarity on what I needed to venture into engineering. However, the staff at ASEND provided me with guidance based on my interests and helped me choose the right path. With their prep class, which covered everything from scratch, I successfully passed the entrance exam and now I'm in the Faculty of Engineering and Technology, studying computer engineering. ASEND truly paved the way for my academic journey.",
      level: 'Final Year Computer Engineering FET',
    },
    {
      name: 'Ako Mengot',
      image:
        'https://media.gettyimages.com/id/1438427420/de/foto/close-up-portrait-of-cheerful-young-black-hispanic-latin-teenager-man-smiling-at-camera-over.jpg?s=612x612&w=gi&k=20&c=DojZ5b8vxqyxaKpMkvsybvaj_luzibF1yXy_aCryQRk=',
      content:
        "I enrolled in ASEND's prep class with aspirations of pursuing a career in agriculture and veterinary medicine. The personalized attention and specialized guidance I received were invaluable in strengthening my knowledge and enhancing my understanding of the field. Thanks to ASEND, I successfully passed the entrance exam and gained admission into the Faculty of Agriculture and veterinary medicine Buea.",
      level: '2nd Year Veterinary Student FAVM',
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
              <p className="level">
                <span>{testimonial.level}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
