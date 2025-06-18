import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and muscle with our guided weight training sessions. Designed for all levels, these classes help you develop proper form, improve endurance, and achieve noticeable results.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Enhance your flexibility, balance, and inner calm through our yoga classes. Perfect for beginners and experienced yogis alike, each session promotes relaxation and mindfulness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and improve stability with our targeted ab and core workouts. These sessions focus on essential movements that support your posture and overall performance.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience fitness like never before with high-energy adventure workouts. These classes combine outdoor-style challenges with functional training to push your limits and boost confidence.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join our dynamic fitness classes that mix cardio, strength, and endurance training. Great for burning calories and building stamina, each class keeps you energized and motivated.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unlock your full potential with customized training sessions led by expert instructors. Whether you're aiming for fat loss, muscle gain, or athletic performance, these classes have you covered.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Discover a variety of fun, challenging, and transformative classes
              designed for every fitness level. Whether you're building
              strength, improving flexibility, or boosting endurance—our
              expert-led sessions help you stay motivated and on track.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
