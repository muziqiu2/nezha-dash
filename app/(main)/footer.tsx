export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <p className="mt-3 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          Find the code on{" "}
        </p>
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2020-{new Date().getFullYear()}{" "}
          <a href={""}>@阿木要开心</a>
        </section>
      </section>
    </footer>
  );
}
