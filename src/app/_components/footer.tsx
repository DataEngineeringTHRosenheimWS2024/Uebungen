import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold tracking-tighter leading-tight text-center mb-4">
            Docker & Kubernetes Blog
          </h3>
          <blockquote className="text-center text-sm italic">
            "Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development – desktop and cloud." – Docker Inc.
          </blockquote>

          <p className="text-center text-sm mb-4 leading-9">
            © 2024. All rights reserved.
          </p>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
