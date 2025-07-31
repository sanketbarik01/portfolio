import { cn } from "../lib/utils"
import { Send } from "lucide-react";
import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
export const ContactSection = () => {
    return (
    <section
    id="Contact"
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w 2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae assumenda optio nisi officia eum aliquam ad eos nostrum ullam, excepturi rerum facilis culpa doloremque nesciunt placeat molestiae nihil corrupti.
                Quam aliquid ex rerum ea? Ipsa voluptate officiis explicabo cumque iusto doloribus aliquam, fugit provident cum incidunt assumenda ducimus quo veniam suscipit fuga tempora? Laborum error ipsum quisquam rerum iusto.
            </p>
            <div className="grid grid-cols-1 md;grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 ronded-full bg-primary/10">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:sanketbarik24@gmail.com" className="text-muted-foreground hover-text-primary transition-colors">sanketbarik24@gmail.com</a>
                            </div>

                        </div>


                        <div className="flex items-start space-x-4">
                            <div className="p-3 ronded-full bg-primary/10">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+918339808144" className="text-muted-foreground hover-text-primary transition-colors">+91 8339808144</a>
                            </div>

                        </div>


                        <div className="flex items-start space-x-4">
                            <div className="p-3 ronded-full bg-primary/10">
                                <MapPin />                           
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a  className="text-muted-foreground hover-text-primary transition-colors">ROURKELA</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connet with me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/sanket-barik/">
                                <Linkedin/>
                            </a>
                            <a href="#">
                                <Instagram/>
                            </a>
                            <a href="#">
                                <Twitter/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-caed p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name"
                            name = "name"
                            required 
                            className="w-full px-4 pu-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2
                            "
                            placeholder="SANKET BARIK" />
                        </div>


                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="email" id="email"
                            name = "email"
                            required 
                            className="w-full px-4 pu-3 rounded-md  border-input bg-background focus:outline-hidden focus:ring-2
                            "
                            placeholder="hello@gmail.com" />
                        </div>


                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Name</label>
                            <textarea id="message"
                            name = "message"
                            required 
                            className="w-full px-4 pu-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 resize-none
                            "
                            placeholder="Hello  , I would like to talk about" />
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                         )}> Send Message
                         <Send size={16}/>
                         </button>

                    </form>
                </div>

            </div>
        </div>
    </section>)
}