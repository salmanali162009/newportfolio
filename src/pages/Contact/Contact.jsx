import { useState } from "react";
import { Form, Input } from "antd";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Reveal from "../../components/Reveal/Reveal";
import { developer } from "../../utils/constants";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/salmanali162009@gmail.com";

const { TextArea } = Input;

const channels = [
  {
    label: "Email",
    value: developer.email,
    icon: FaEnvelope,
    href: `mailto:${developer.email}`
  },
  {
    label: "GitHub",
    value: `@${developer.githubHandle}`,
    icon: FaGithub,
    href: developer.github,
    external: true
  },
  {
    label: "LinkedIn",
    value: developer.linkedinHandle,
    icon: FaLinkedin,
    href: developer.linkedin,
    external: true
  }
];

export default function Contact() {
  const [form] = Form.useForm();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onFinish = async (values) => {
    if (status === "sending") return;
    setStatus("sending");
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      formData.append("_replyto", values.email);
      formData.append("_subject", `Portfolio Contact: ${values.subject}`);
      formData.append("_captcha", "false");
      formData.append("_template", "table");

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error(`FormSubmit request failed: ${response.status}`);
      form.resetFields();
      setStatus("success");
    } catch {
      // Keep the user's entered values — only reset after a successful send.
      setStatus("error");
    }
  };

  return (
    <section className="container-portfolio py-16 md:py-24" aria-label="Contact">
      <Reveal>
        <SectionHeader
          index="03"
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project, an opportunity or just a question? My inbox is always open — I'll get back to you."
        />
      </Reveal>

      <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left — channels */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Prefer a quick message? Reach out through any of these channels
              and I'll get back to you as soon as I can.
            </p>
          </Reveal>

          <Reveal targets=".contact-channel" stagger={0.08} className="flex flex-col">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="contact-channel group flex items-center justify-between gap-4 border-b border-[var(--hairline)] py-5 first:border-t transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center w-10 h-10 border border-[var(--border-color)] text-[var(--text-secondary)] transition-colors group-hover:border-[var(--accent-border)] group-hover:text-[var(--accent)]">
                      <Icon aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        {channel.label}
                      </span>
                      <span className="text-sm font-medium">{channel.value}</span>
                    </div>
                  </div>
                  <FaArrowRight className="text-[var(--text-muted)] text-xs transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]" aria-hidden="true" />
                </a>
              );
            })}
          </Reveal>
        </div>

        {/* Right — form / status */}
        <div className="lg:col-span-7">
          {status === "success" ? (
            <Reveal className="border border-[var(--accent-border)] bg-[var(--accent-bg)] px-8 md:px-12 py-16 flex flex-col items-center text-center gap-5">
              <span className="grid place-items-center w-14 h-14 border border-[var(--accent-border)] bg-[var(--accent)] text-[var(--accent-ink)]">
                <FaCheck aria-hidden="true" />
              </span>
              <h3 className="font-display font-semibold text-2xl tracking-tight">
                Message sent successfully!
              </h3>
              <p className="text-[var(--text-secondary)] max-w-sm">
                I'll get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]"
              >
                Send another message
              </button>
            </Reveal>
          ) : (
            <Reveal className="flex flex-col gap-6">
              {status === "error" && (
                <div
                  role="alert"
                  className="border border-[var(--accent-border)] bg-[var(--accent-bg)] px-6 py-5 flex flex-col gap-1"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                    Something went wrong.
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">
                    Please try again or contact me directly by email at{" "}
                    <a
                      href={`mailto:${developer.email}`}
                      className="text-[var(--accent)] underline underline-offset-2"
                    >
                      {developer.email}
                    </a>.
                  </span>
                </div>
              )}

              <Form
                form={form}
                name="contact"
                layout="vertical"
                onFinish={onFinish}
                requiredMark="optional"
                className="contact-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input placeholder="Your name" size="large" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" }
                    ]}
                  >
                    <Input placeholder="you@example.com" size="large" />
                  </Form.Item>
                </div>
                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: "Please enter a subject" }]}
                >
                  <Input placeholder="What's this about?" size="large" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <TextArea rows={6} placeholder="Tell me about your project..." />
                </Form.Item>
                <Form.Item className="mb-0">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    {status !== "sending" && (
                      <FaArrowRight className="btn-arrow" aria-hidden="true" />
                    )}
                  </button>
                </Form.Item>
              </Form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}