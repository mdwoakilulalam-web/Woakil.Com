import React from "react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-sm font-medium tracking-[0.2em] text-primary mb-6">
            WOAKIL WORLD
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            PRIVACY
          </h1>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Privacy Policy
              </h2>

              <p>
                At WOAKIL WORLD, we respect your privacy. Any information
                shared through this website is handled responsibly and used
                only when necessary to communicate with you or provide our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Information We Collect
              </h2>

              <p>
                We may collect information that you voluntarily provide when
                you contact us, submit a form, or communicate with our studio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                How We Use Your Information
              </h2>

              <p>
                Information may be used to respond to inquiries, provide
                requested services, improve our website, and communicate with
                you when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Your Privacy Matters
              </h2>

              <p>
                We do not sell, rent, or unnecessarily share your personal
                information with third parties.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;