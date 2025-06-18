import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-[160px] object-contain" />
          <p className="my-5">
            At FitFusion, we believe fitness is more than just a workout — it’s
            a lifestyle. Our mission is to empower individuals to transform
            their health and mindset through innovative training programs,
            expert support, and a welcoming community. Whether you're just
            starting out or pushing for peak performance, we're here to fuel
            your journey.
          </p>
          <p>© FitFusion All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Programs & Pricing</p>
          <p>Member Success Stories</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Have questions or need support? We’re just a call away.
          </p>
          <p>+1 (732) 309-9817</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
