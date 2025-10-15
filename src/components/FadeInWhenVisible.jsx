import { motion } from "framer-motion";

export default function FadeInWhenVisible({
    children,
    delay = 0,
    duration = 0.8,
    direction = "up", // can be 'up', 'down', 'left', 'right', or 'fade'
}) {
    // determine animation offset based on direction
    const variants = {
        hidden: {
            opacity: 0,
            x:
                direction === "left"
                    ? -80
                    : direction === "right"
                        ? 80
                        : 0,
            y:
                direction === "up"
                    ? 80
                    : direction === "down"
                        ? -80
                        : 0,
        },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // 👈 this allows animation on scroll for each section
        >
            {children}
        </motion.div>
    );
}
