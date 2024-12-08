import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen py-24 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-cyan-600">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          <Card className="p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p>House No: 123, College Mor, 12 Shorif Darbar, Kushtia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>+880 (152) 141-4531</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>contact@amindiagnostics.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}