import React from "react";
import Head from "next/head";

const Contact = () => {

    const bgImage = "/public/images/profile/bg.png";

    return (
        <>
            <Head>
                <title>Saber | About Page</title>
                <meta name="viewport" content="any"></meta>
            </Head>
            <section className="bg-center bg-no-repeat  bg-blend-multiply">
                <h2>Got a Project ?</h2>
                <p>
                    We help brands and platforms turn big ideas into beautiful digital
                    products and exprineces.
                </p>
            </section>

        </>
    );
};

export default Contact;
