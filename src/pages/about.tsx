import Layout from '../components/layout/Layout';
import Image from 'next/image';
import SocialIcons from '../components/elements/SocialIcons';
import { GetStaticProps } from 'next';

export interface IAbout {
  newsletterId: string;
  newsletterUser: string;
}

function About({newsletterId, newsletterUser}: IAbout) {
  return (
    <Layout parent='Home' sub='Pages' subChild='About' newsletterId={newsletterId} newsletterUser={newsletterUser}>
      <section className='section-padding'>
        <div className='container pt-25'>
          <div className='row'>
            <div className='col-lg-6 align-self-center mb-lg-0 mb-4'>
              <h6 className='mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated'>
                Our Company
              </h6>
              <h1 className='font-heading mb-40'>
                We are Building The Destination For Getting Things Done
              </h1>
              <p>
                Tempus ultricies augue luctus et ut
                suscipit. Morbi arcu, ultrices purus dolor
                erat bibendum sapien metus.
              </p>
              <p>
                Tempus ultricies augue luctus et ut
                suscipit. Morbi arcu, ultrices purus dolor
                erat bibendum sapien metus. Sit mi,
                pharetra, morbi arcu id. Pellentesque
                dapibus nibh augue senectus.
              </p>
            </div>
            <div className='col-lg-6'>
              <Image
                src='/assets/images/page/about-1.png'
                alt=''
                layout={'responsive'}
                width={1000}
                height={406}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='team' className='pt-25 wow fadeIn animated'>
        <div className='container'>
          <div className='row mb-50 align-items-center'>
            <div className='col-md-6'>
              <h6 className='mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated'>
                Our Team
              </h6>
              <h2 className='mb-15 wow fadeIn animated'>
                Top team of experts
              </h2>
              <p className='text-grey-3 wow fadeIn animated'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ratione optio perferendis
                sequi mollitia quis autem ea cupiditate
                possimus!
              </p>
            </div>
            <div className='col-md-6 text-md-end mt-30'>
              <a
                className='btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand text-hover-white border-radius-5 btn-shadow-brand hover-up'>
                All Members
              </a>
            </div>
          </div>
          <div className='position-relative'>
            <div className='row wow fadeIn animated'>
              <div className='col-lg-3 col-md-6'>
                <div className='blog-card border-radius-10 overflow-hidden text-center'>
                  <Image
                    src='/assets/images/page/avatar-1.jpg'
                    layout={'responsive'}
                    width={564}
                    height={702}
                    alt=''
                    className='border-radius-10 mb-30 hover-up'
                  />
                  <h4 className='fw-500 mb-0'>
                    Patric Adams
                  </h4>
                  <p className='fw-400 text-brand mb-10'>
                    CEO & Co-Founder
                  </p>
                  <SocialIcons />
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='blog-card border-radius-10 overflow-hidden text-center'>
                  <Image
                    src='/assets/images/page/avatar-2.jpg'
                    alt=''
                    layout={'responsive'}
                    width={564}
                    height={702}
                    className='border-radius-10 mb-30 hover-up'
                  />
                  <h4 className='fw-500 mb-0'>
                    Dilan Specter
                  </h4>
                  <p className='fw-400 text-brand mb-10'>
                    Head Engineer
                  </p>
                  <SocialIcons />
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='blog-card border-radius-10 overflow-hidden text-center'>
                  <Image
                    src='/assets/images/page/avatar-3.jpg'
                    alt=''
                    className='border-radius-10 mb-30 hover-up'
                    layout={'responsive'}
                    width={564}
                    height={702}
                  />
                  <h4 className='fw-500 mb-0'>Tomas Baker</h4>
                  <p className='fw-400 text-brand mb-10'>
                    Senior Planner
                  </p>
                  <SocialIcons />
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='blog-card border-radius-10 overflow-hidden text-center'>
                  <Image
                    src='/assets/images/page/avatar-4.jpg'
                    alt=''
                    className='border-radius-10 mb-30 hover-up'
                    layout={'responsive'}
                    width={564}
                    height={702}
                  />
                  <h4 className='fw-500 mb-0'>
                    Norton Mendos
                  </h4>
                  <p className='fw-400 text-brand mb-10'>
                    Project Manager
                  </p>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='work' className='mt-40 pt-50 pb-50 section-border'>
        <div className='container'>
          <div className='row mb-50'>
            <div className='col-lg-12 col-md-12 text-center'>
              <h6 className='mt-0 mb-5 text-uppercase  text-brand font-sm wow fadeIn animated'>
                Evara Coporation
              </h6>
              <h2 className='mb-15 text-grey-1 wow fadeIn animated'>
                Our main branches
                <br /> around the world
              </h2>
              <p className='w-50 m-auto text-grey-3 wow fadeIn animated'>
                At vero eos et accusamus et iusto odio
                dignissimos ducimus quiblanditiis
                praesentium. ebitis nesciunt voluptatum
                dicta reprehenderit accusamus
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 text-center mb-md-0 mb-4'>
              <Image
                className='btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated'
                src='/assets/images/page/company-1.jpg'
                alt=''
                layout={'responsive'}
                width={720}
                height={480}
              />
              <h4 className='mt-30 mb-15 wow fadeIn animated'>
                New York, USA
              </h4>
              <p className='text-grey-3 wow fadeIn animated'>
                27 Division St, New York
                <br />
                NY 10002, USA
              </p>
            </div>
            <div className='col-md-4 text-center mb-md-0 mb-4'>
              <Image
                className='btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated'
                src='/assets/images/page/company-2.jpg'
                alt=''
                layout={'responsive'}
                width={720}
                height={480}
              />
              <h4 className='mt-30 mb-15 wow fadeIn animated'>
                Paris, France
              </h4>
              <p className='text-grey-3 wow fadeIn animated'>
                22 Rue des Carmes
                <br /> 75005 Paris
              </p>
            </div>
            <div className='col-md-4 text-center'>
              <Image
                className='btn-shadow-brand hover-up border-radius-10 bg-brand-muted wow fadeIn animated'
                src='/assets/images/page/company-3.jpg'
                alt=''
                layout={'responsive'}
                width={720}
                height={480}
              />
              <h4 className='mt-30 mb-15 wow fadeIn animated'>
                Jakarta, Indonesia
              </h4>
              <p className='text-grey-3 wow fadeIn animated'>
                2476 Raya Yogyakarta,
                <br />
                89090 Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='testimonials' className='section-padding'>
        <div className='container pt-25'>
          <div className='row mb-50'>
            <div className='col-lg-12 col-md-12 text-center'>
              <h6 className='mt-0 mb-10 text-uppercase  text-brand font-sm wow fadeIn animated'>
                some facts
              </h6>
              <h2 className='mb-15 text-grey-1 wow fadeIn animated'>
                Take a look what
                <br /> our clients say about us
              </h2>
              <p className='w-50 m-auto text-grey-3 wow fadeIn animated'>
                At vero eos et accusamus et iusto odio
                dignissimos ducimus quiblanditiis
                praesentium. ebitis nesciunt voluptatum
                dicta reprehenderit accusamus
              </p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up '>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-1.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>J. Bezos</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up'>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-3.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>B.Gates</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up '>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-2.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>B. Meyers</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up '>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-4.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>J. Bezos</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up '>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-5.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>B.Gates</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='hero-card box-shadow-outer-6 wow fadeIn animated mb-30 hover-up d-flex'>
                <div className='hero-card-icon icon-left-2 hover-up '>
                  <div style={{ width: '100%' }}>
                    <Image
                      className='btn-shadow-brand hover-up border-radius-5 bg-brand-muted'
                      src='/assets/images/page/avatar-1.jpg'
                      layout={'responsive'}
                      width={564}
                      height={702}
                      alt=''
                    />
                  </div>
                </div>
                <div className='pl-30'>
                  <h5 className='mb-5 fw-500'>B. Meyers</h5>
                  <p className='font-sm text-grey-5'>
                    Adobe Jsc
                  </p>
                  <p className='text-grey-3'>
                    "Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Debitis nesciunt voluptatum dicta
                    reprehenderit accusamus voluptatibus
                    voluptas."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-30'>
            <div className='col-12 text-center'>
              <p className='wow fadeIn animated'>
                <a className='btn btn-brand text-white btn-shadow-brand hover-up btn-lg'>
                  View More
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: process.env.REACT_APP_MAILCHIMP_ID,
      newsletterUser: process.env.REACT_APP_MAILCHIMP_U
    },
  };
};
