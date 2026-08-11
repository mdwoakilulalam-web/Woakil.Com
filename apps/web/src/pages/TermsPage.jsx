import React from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-sm font-medium tracking-[0.2em] text-primary mb-6">
            WOAKIL WORLD
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            TERMS
          </h1>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Terms & Conditions
              </h2>

              <p>
                Welcome to WOAKIL WORLD. By accessing and using this website,
                you agree to use its content and services responsibly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Website Content
              </h2>

              <p>
                All website content, including designs, images, graphics, text,
                and branding, belongs to WOAKIL WORLD unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Use of Content
              </h2>

              <p>
                Content from this website may not be copied, reproduced,
                modified, or redistributed without prior permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Updates
              </h2>

              <p>
                We reserve the right to update these terms when necessary.
                Continued use of the website means you accept any updated
                terms.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;