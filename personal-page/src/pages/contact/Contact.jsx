import React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = ({ pagesVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      id="contact"
      ref={ref}
      variants={pagesVariants}
      initial="hidden"
      animate={mainControls}
      className="page"
    >
      <h2 className="text-5xl text-my-yellow text-center py-4 border-b">
        Contact
      </h2>
      <motion.p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum,
        sequi animi excepturi nobis vitae cumque quis deleniti accusantium
        aliquam reprehenderit consequuntur nisi nostrum repellendus eos possimus
        saepe repudiandae corporis recusandae tempora illum. Laboriosam, quae
        rerum! Consectetur at beatae nostrum suscipit quas debitis, eos eaque
        consequatur, architecto fugiat doloribus molestias voluptatum autem
        provident ipsum eveniet iste aperiam tempore? Consectetur quos beatae
        possimus explicabo saepe, ea ad incidunt dolores velit, quia laboriosam
        repudiandae. Nam corporis explicabo possimus molestiae commodi iure quos
        animi eveniet aperiam accusantium sed sapiente nobis delectus illo
        beatae modi totam, id quia ratione natus, perferendis ducimus
        consequatur? Itaque unde tenetur, numquam eum ipsum fugit aut ea
        voluptatem soluta doloremque pariatur nesciunt doloribus quam, tempore
        omnis ab quasi facilis laborum porro obcaecati vel vitae. Est vitae
        eaque praesentium accusantium debitis a libero laudantium in provident!
        Deleniti, quo. Magni nisi, nihil cumque beatae nostrum consequuntur
        dolorum, quia dignissimos accusantium quod sunt eveniet quam aspernatur
        officia amet! Pariatur id minima, nam sequi tempore incidunt, numquam
        voluptate exercitationem alias quibusdam provident amet accusamus ipsum.
        Dignissimos at repellat ut ab inventore, reiciendis in sed, iusto
        possimus esse suscipit dolorem veritatis sapiente eaque labore nulla
        vero, optio nisi! Aperiam dolorum veritatis dolor repellat tempora
        delectus accusantium, aliquid, nemo, suscipit expedita deleniti. Fugit
        deleniti, alias natus aliquid inventore temporibus cum ad magnam optio
        dignissimos officia repellat, hic perferendis quo. Ad sequi sint
        possimus alias tempora repellendus natus dolorem facere eligendi ullam
        impedit voluptate, ratione tempore atque et blanditiis placeat! Corporis
        vel officiis atque iure rem! Illum eligendi dolorum consequuntur autem
        doloremque modi. Sapiente, voluptas suscipit ratione, minima, qui nihil
        dolore eum nesciunt illo consequatur optio beatae fuga. Voluptatibus
        soluta dignissimos eaque, necessitatibus voluptate accusamus ex minima
        rerum eos, quod distinctio, aperiam maiores adipisci nesciunt quasi quae
        iure! Optio animi cupiditate tempore vitae provident. Enim, numquam?
      </motion.p>
    </motion.div>
  );
};

export default Contact;
