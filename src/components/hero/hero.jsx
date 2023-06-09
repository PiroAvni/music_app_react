import './hero.css'

const Hero = () => {

  return (
    <section id="hero" className="hero-container"  >
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className=" title text-5xl font-bold ">Michael Jackson</h1>
      <p className=" description py-6">Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, dancer, and philanthropist. Dubbed the King of Pop, he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot.</p>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;