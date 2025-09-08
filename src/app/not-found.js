import React from "react";

function NotFound() {
    return (
        <section className="w-[95%] sm:w-[90%] bg-background m-auto mt-6 px-2">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
                        404
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-primary/80 md:text-4xl">
                        Something&#x27;s missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-primary">
                        Sorry, we can&#x27;t find that page. You&#x27;ll find
                        lots to explore on the home page.{" "}
                    </p>
                    <a
                        href="#"
                        className="inline-flex text-primary bg-secondary hover:bg-primary hover:text-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                    >
                        Back to Homepage
                    </a>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
