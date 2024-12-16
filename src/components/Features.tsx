import { MessageSquare, Video, Shield, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "HD Video Chat",
      description: "Crystal clear video calls with minimal latency",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Text Chat",
      description: "Instant messaging with emoji support",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure",
      description: "End-to-end encryption for all communications",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global",
      description: "Connect with people from around the world",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:gap-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why Choose Our Platform?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Experience the next generation of online communication with our cutting-edge features
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {feature.icon}
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};